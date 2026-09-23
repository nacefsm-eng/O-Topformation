import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        # Don't draw header/footer on cover page (page 1)
        if self._pageNumber > 1:
            self.saveState()
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(colors.HexColor("#0284c7"))
            self.drawString(1.5 * cm, A4[1] - 1.0 * cm, "Ô'TOP FORMATION")
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawString(4.5 * cm, A4[1] - 1.0 * cm, "•   Plaquette Officielle & Catalogue Formations 2026")
            
            # Header line
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.8)
            self.line(1.5 * cm, A4[1] - 1.2 * cm, A4[0] - 1.5 * cm, A4[1] - 1.2 * cm)

            # Footer line
            self.line(1.5 * cm, 1.2 * cm, A4[0] - 1.5 * cm, 1.2 * cm)
            
            # Footer text
            self.setFont("Helvetica", 7.5)
            self.setFillColor(colors.HexColor("#64748b"))
            self.drawString(1.5 * cm, 0.8 * cm, "Ô'TOP Formation — SIREN : 935 241 247 • Contact : 07 67 24 68 25 • formation.rmcf@gmail.com")
            
            # Page number
            page_text = f"Page {self._pageNumber} sur {page_count}"
            self.drawRightString(A4[0] - 1.5 * cm, 0.8 * cm, page_text)
            self.restoreState()

def build_pdf(output_filename):
    doc = SimpleDocTemplate(
        output_filename,
        pagesize=A4,
        leftMargin=1.5 * cm,
        rightMargin=1.5 * cm,
        topMargin=1.5 * cm,
        bottomMargin=1.5 * cm,
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_cover_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor('#031b46'),
        alignment=1, # Center
        spaceAfter=8,
    )

    subtitle_cover_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#0284c7'),
        alignment=1,
        spaceAfter=15,
    )

    h1_style = ParagraphStyle(
        'Heading1_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=16,
        leading=20,
        textColor=colors.HexColor('#031b46'),
        spaceBefore=10,
        spaceAfter=8,
    )

    h2_style = ParagraphStyle(
        'Heading2_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=colors.HexColor('#1d4ed8'),
        spaceBefore=8,
        spaceAfter=4,
    )

    body_style = ParagraphStyle(
        'Body_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#334155'),
        spaceAfter=6,
    )

    body_bold = ParagraphStyle(
        'Body_Bold_Custom',
        parent=body_style,
        fontName='Helvetica-Bold',
        textColor=colors.HexColor('#0f172a'),
    )

    callout_style = ParagraphStyle(
        'Callout_Custom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor('#031b46'),
    )

    badge_style = ParagraphStyle(
        'Badge_Custom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10,
        textColor=colors.HexColor('#ffffff'),
        alignment=1,
    )

    story = []

    # ================= PAGE 1 : COUVERTURE =================
    story.append(Spacer(1, 0.5 * cm))
    
    # Logo
    logo_path = os.path.join(os.getcwd(), 'public', 'logo.png')
    if os.path.exists(logo_path):
        story.append(Image(logo_path, width=4.5 * cm, height=2.25 * cm))
        story.append(Spacer(1, 0.4 * cm))

    # Decorative header banner table
    banner_data = [[
        Paragraph("<font color='#d97706'><b>★ CATALOGUE &amp; PLAQUETTE OFFICIELLE DES FORMATIONS 2026</b></font>", ParagraphStyle('Banner', parent=body_style, alignment=1, fontSize=9, textColor=colors.HexColor('#b45309')))
    ]]
    banner_table = Table(banner_data, colWidths=[18 * cm])
    banner_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#fef3c7')),
        ('BORDER', (0,0), (-1,-1), 1, colors.HexColor('#fcd34d')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 0.6 * cm))

    story.append(Paragraph("DÉVELOPPEZ VOS COMPÉTENCES,<br/>LIBÉREZ VOTRE POTENTIEL", title_cover_style))
    story.append(Paragraph("Techniques d'Optimisation du Potentiel (TOP®) • Intelligence Artificielle • Web &amp; Réseaux Sociaux", subtitle_cover_style))

    # Hero visual if exists
    hero_path = os.path.join(os.getcwd(), 'public', 'hero-top.png')
    if os.path.exists(hero_path):
        story.append(Image(hero_path, width=17.5 * cm, height=6.5 * cm))
        story.append(Spacer(1, 0.5 * cm))

    # 3 Key Value Propositions Box
    prop_data = [
        [
            Paragraph("<b>🎯 100% OPÉRATIONNEL</b><br/><font color='#64748b' size='7.5'>Mises en situation réelles, cas pratiques immédiats et fiches réflexes prêtes à l'emploi.</font>", callout_style),
            Paragraph("<b>🤝 COACHING 5H INCLUS</b><br/><font color='#64748b' size='7.5'>Accompagnement individuel post-formation offert pour garantir l'ancrage des compétences.</font>", callout_style),
            Paragraph("<b>💶 100% FINANÇABLE</b><br/><font color='#64748b' size='7.5'>Éligible OPCO, FAF (FIF-PL, AGEFICE) et facilités de règlement sans frais.</font>", callout_style),
        ]
    ]
    prop_table = Table(prop_data, colWidths=[6.0 * cm, 6.0 * cm, 6.0 * cm])
    prop_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#e2e8f0')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(prop_table)
    story.append(Spacer(1, 0.6 * cm))

    # Qualiopi / Eloqone Portage notice
    qualiopi_data = [[
        Paragraph(
            "<b>INFORMATIONS LÉGALES &amp; QUALITÉ :</b><br/>"
            "Ô'TOP Formation est une marque de conseil et formation professionnelle. "
            "Les actions de formation éligibles aux financements publics et mutualisés sont dispensées sous portage administratif "
            "et pédagogique certifié <b>Qualiopi par ELOQONE</b>. SIREN : 935 241 247 • Déclaration d'activité en cours auprès de la DREETS PACA.",
            ParagraphStyle('Qualiopi', parent=body_style, fontSize=7.5, leading=10, textColor=colors.HexColor('#475569'), alignment=1)
        )
    ]]
    qualiopi_table = Table(qualiopi_data, colWidths=[18 * cm])
    qualiopi_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f1f5f9')),
        ('BOX', (0,0), (-1,-1), 0.8, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(qualiopi_table)

    story.append(PageBreak())

    # ================= PAGE 2 : ÉDITO, ÉQUIPE & MÉTHODE TOP =================
    story.append(Paragraph("1. QUI SOMMES-NOUS &amp; NOTRE EXPERTISE", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=10))

    story.append(Paragraph(
        "<b>Ô'TOP Formation</b> accompagne les entrepreneurs, dirigeants de TPE/PME, indépendants et équipes salariées "
        "vers une haute performance sereine et durable. Nous combinons des méthodologies d'excellence éprouvées sur le terrain "
        "– issues de la préparation mentale opérationnelle (Méthode TOP®) – avec les leviers technologiques les plus avancés "
        "(Intelligence Artificielle générative, stratégie digitale, no-code).",
        body_style
    ))
    story.append(Spacer(1, 0.2 * cm))

    # Equipe Grid
    team_data = [
        [
            Paragraph("<b>Mélissa — Fondatrice &amp; Formatrice TOP®</b><br/>"
                      "<font size='7.5' color='#0284c7'>Praticienne certifiée TOP® • Experte Gestion du Stress &amp; Récupération</font><br/>"
                      "<font size='7.5'>Spécialiste de l'accompagnement individuel et d'équipe. Mélissa transmet la rigueur des protocoles TOP® pour préserver la santé cognitive des décideurs et booster la résilience émotionnelle.</font>", body_style),
            Paragraph("<b>Renaud — Directeur Pédagogique &amp; IA</b><br/>"
                      "<font size='7.5' color='#0284c7'>Expert Systèmes d'Information • Automatisation &amp; IA Générative</font><br/>"
                      "<font size='7.5'>Plus de 15 ans d'expérience dans l'ingénierie logicielle et la transformation digitale. Renaud conçoit les cursus IA et business pour délivrer un gain de productivité immédiat et mesurable.</font>", body_style),
        ]
    ]
    team_table = Table(team_data, colWidths=[9 * cm, 9 * cm])
    team_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,0), colors.HexColor('#f8fafc')),
        ('BACKGROUND', (1,0), (1,0), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (0,0), 1, colors.HexColor('#e2e8f0')),
        ('BOX', (1,0), (1,0), 1, colors.HexColor('#e2e8f0')),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(team_table)
    story.append(Spacer(1, 0.4 * cm))

    story.append(Paragraph("2. LA MÉTHODE TOP® : LES TECHNIQUES D'OPTIMISATION DU POTENTIEL", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))

    story.append(Paragraph(
        "Créée par le <b>Dr Édith PERREAUT-PIERRE</b> dans les années 1990 pour les pilotes de chasse, forces spéciales et athlètes olympiques, "
        "la Méthode TOP® est un ensemble structuré de stratégies cognitives, respiratoires et sensorielles permettant à chacun de "
        "<b>mobiliser au mieux ses ressources physiques et psychologiques</b> selon les exigences de la situation.",
        body_style
    ))

    # Les 9 Piliers TOP
    piliers_data = [
        [
            Paragraph("<b>🌬️ RESPIRATION</b><br/><font size='7'>• Respiration relaxante<br/>• Respiration dynamisante<br/>• Régulation vagale</font>", callout_style),
            Paragraph("<b>🧠 COGNITION</b><br/><font size='7'>• Imagerie mentale<br/>• Dialogue interne positif<br/>• Répétition mentale (RMA)</font>", callout_style),
            Paragraph("<b>⚡ ÉNERGIE</b><br/><font size='7'>• Préactivation mentale<br/>• Récupération flash (SRF)<br/>• Sommeil &amp; sieste éclair</font>", callout_style),
        ]
    ]
    piliers_table = Table(piliers_data, colWidths=[6.0 * cm, 6.0 * cm, 6.0 * cm])
    piliers_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#eff6ff')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#bfdbfe')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#dbeafe')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(piliers_table)
    story.append(Spacer(1, 0.4 * cm))

    # Accompagnement VIP 5h
    vip_data = [[
        Paragraph(
            "<b>🎁 LE FACTEUR DIFFÉRENCIANT Ô'TOP : 5 HEURES DE COACHING INDIVIDUEL INCLUSES</b><br/>"
            "Chaque formation donne droit à un accompagnement individualisé en 1-to-1 post-formation. "
            "Pendant ces sessions de suivi, nous auditons votre mise en pratique réelle, ajustons les protocoles à vos contraintes "
            "métiers et validons ensemble la pérennité de vos résultats.",
            ParagraphStyle('VIP', parent=body_style, fontSize=8, leading=11, textColor=colors.HexColor('#065f46'))
        )
    ]]
    vip_table = Table(vip_data, colWidths=[18 * cm])
    vip_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#ecfdf5')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#a7f3d0')),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(vip_table)

    story.append(PageBreak())

    # ================= PAGE 3 : LE CATALOGUE DES 6 FORMATIONS =================
    story.append(Paragraph("3. CATALOGUE OFFICIEL DES FORMATIONS", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=10))

    story.append(Paragraph(
        "Découvrez l'ensemble de notre offre de formation continue disponible en <b>présentiel</b> (Var / PACA ou intra-entreprise) "
        "ou en <b>distanciel synchrone</b> (classe interactive en visio).",
        body_style
    ))
    story.append(Spacer(1, 0.2 * cm))

    # Formations Table
    headers = [
        Paragraph("<b>INTITULÉ FORMATION</b>", ParagraphStyle('Th', parent=badge_style, alignment=0)),
        Paragraph("<b>DURÉE / FORMAT</b>", badge_style),
        Paragraph("<b>OBJECTIFS CLÉS</b>", ParagraphStyle('Th', parent=badge_style, alignment=0)),
        Paragraph("<b>TARIF NET</b>", badge_style),
    ]

    row_fitop = [
        Paragraph("<b>FI TOP® — Formation Initiale TOP®</b><br/><font size='7' color='#0284c7'>Prérequis Praticien TOP • Bien-être &amp; Performance</font>", body_style),
        Paragraph("<b>21h</b> (3 jours)<br/><font size='7' color='#475569'>Présentiel / Distanciel</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
        Paragraph("Maîtriser la boîte à outils TOP complète (respiration, imagerie, relaxation flash). Auto-réguler son stress et ses émotions en temps réel.", body_style),
        Paragraph("<b>890 €</b><br/><font size='7' color='#16a34a'>Prise en charge OPCO / FAF</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
    ]

    row_fbtop = [
        Paragraph("<b>FB-TOP — Fondamentaux &amp; Flash TOP</b><br/><font size='7' color='#0284c7'>Gestion de crise &amp; Clarté Mentale</font>", body_style),
        Paragraph("<b>7h</b> (1 jour)<br/><font size='7' color='#475569'>Intra ou Inter</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
        Paragraph("S'approprier les techniques express pour désamorcer l'anxiété avant un enjeu majeur (prise de parole, négociation, urgence opérationnelle).", body_style),
        Paragraph("<b>390 €</b><br/><font size='7' color='#16a34a'>Prise en charge OPCO</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
    ]

    row_massage = [
        Paragraph("<b>Massage Bien-Être &amp; Magnétisme Aimants</b><br/><font size='7' color='#0284c7'>Récupération Somatique &amp; Détente Profonde</font>", body_style),
        Paragraph("<b>14h</b> (2 jours)<br/><font size='7' color='#475569'>Présentiel (Ollioules)</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
        Paragraph("Techniques manuelles et biomagnétiques de libération des tensions musculo-squelettiques et rééquilibrage énergétique global.", body_style),
        Paragraph("<b>650 €</b><br/><font size='7' color='#475569'>Facilités 3x sans frais</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
    ]

    row_ia = [
        Paragraph("<b>RS6776 — IA Générative &amp; Automatisation</b><br/><font size='7' color='#d97706'>Cursus Certifiant France Compétences</font>", body_style),
        Paragraph("<b>21h</b> (3 jours)<br/><font size='7' color='#475569'>Distanciel / Visio</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
        Paragraph("Prompt engineering avancé, automatisation de flux (Make / n8n), création de GPTs spécialisés métiers, gain de 5 à 10h par semaine garanti.", body_style),
        Paragraph("<b>1 250 €</b><br/><font size='7' color='#16a34a'>Éligible Financements</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
    ]

    row_web = [
        Paragraph("<b>RS7344 — Création Web Moderne &amp; SEO</b><br/><font size='7' color='#d97706'>Cursus Certifiant France Compétences</font>", body_style),
        Paragraph("<b>28h</b> (4 jours)<br/><font size='7' color='#475569'>Présentiel / Distanciel</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
        Paragraph("Concevoir et publier un site web responsive ultra-performant, maîtriser le référencement naturel local et la conversion de visiteurs en clients.", body_style),
        Paragraph("<b>1 450 €</b><br/><font size='7' color='#16a34a'>Éligible Financements</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
    ]

    row_social = [
        Paragraph("<b>RS7351 — Stratégie Réseaux Sociaux &amp; Social Selling</b><br/><font size='7' color='#d97706'>Cursus Certifiant France Compétences</font>", body_style),
        Paragraph("<b>21h</b> (3 jours)<br/><font size='7' color='#475569'>Distanciel / Présentiel</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
        Paragraph("Bâtir un calendrier éditorial irrésistible sur LinkedIn &amp; Instagram, générer des prospects qualifiés en continu sans budget publicitaire.", body_style),
        Paragraph("<b>1 150 €</b><br/><font size='7' color='#16a34a'>Éligible Financements</font>", ParagraphStyle('Tc', parent=body_style, alignment=1)),
    ]

    table_data = [headers, row_fitop, row_fbtop, row_massage, row_ia, row_web, row_social]
    courses_table = Table(table_data, colWidths=[5.5 * cm, 3.2 * cm, 6.3 * cm, 3.0 * cm])
    courses_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#031b46')),
        ('ALIGN', (0,0), (-1,0), 'CENTER'),
        ('BOTTOMPADDING', (0,0), (-1,0), 6),
        ('TOPPADDING', (0,0), (-1,0), 6),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('BACKGROUND', (0,1), (-1,1), colors.HexColor('#ffffff')),
        ('BACKGROUND', (0,2), (-1,2), colors.HexColor('#f8fafc')),
        ('BACKGROUND', (0,3), (-1,3), colors.HexColor('#ffffff')),
        ('BACKGROUND', (0,4), (-1,4), colors.HexColor('#fffbeb')), # Highlight IA
        ('BACKGROUND', (0,5), (-1,5), colors.HexColor('#ffffff')),
        ('BACKGROUND', (0,6), (-1,6), colors.HexColor('#f8fafc')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,1), (-1,-1), 5),
        ('BOTTOMPADDING', (0,1), (-1,-1), 5),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(courses_table)

    story.append(PageBreak())

    # ================= PAGE 4 : FINANCEMENTS, MODALITÉS & CONTACT =================
    story.append(Paragraph("4. MODALITÉS DE FINANCEMENT &amp; PRISE EN CHARGE", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))

    story.append(Paragraph(
        "Grâce à notre partenariat de portage avec <b>ELOQONE (Organisme Certifié Qualiopi au titre des actions de formation)</b>, "
        "nos formations ouvrent droit aux dispositifs légaux de prise en charge financière :",
        body_style
    ))

    fin_data = [
        [
            Paragraph("<b>DIRIGEANTS &amp; INDÉPENDANTS</b><br/><font size='7.5'>• <b>FIF-PL</b> : Professions libérales<br/>• <b>AGEFICE</b> : Commerçants, dirigeants non salariés<br/>• <b>FAFCEA</b> : Artisans &amp; métiers d'art</font>", callout_style),
            Paragraph("<b>ENTREPRISES &amp; SALARIÉS</b><br/><font size='7.5'>• <b>OPCO</b> (Atlas, Akto, Opco EP, etc.) via le plan de développement des compétences.<br/>• Prise en charge jusqu'à 100% des frais pédagogiques.</font>", callout_style),
            Paragraph("<b>RÈGLEMENT DIRECT</b><br/><font size='7.5'>• Paiement sécurisé par carte bancaire.<br/>• Échelonnement possible en <b>3x ou 4x sans frais</b> sur simple demande pour les indépendants.</font>", callout_style),
        ]
    ]
    fin_table = Table(fin_data, colWidths=[6.0 * cm, 6.0 * cm, 6.0 * cm])
    fin_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#f8fafc')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#e2e8f0')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#cbd5e1')),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(fin_table)
    story.append(Spacer(1, 0.4 * cm))

    # Processus d'inscription
    story.append(Paragraph("5. COMMENT S'INSCRIRE ? LES 4 ÉTAPES", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#0284c7'), spaceAfter=8))

    etapes_data = [
        [
            Paragraph("<b>1. DIAGNOSTIC GRATUIT</b><br/><font size='7.5' color='#64748b'>Échange de 15 minutes avec notre équipe pour cibler le parcours optimal.</font>", body_style),
            Paragraph("<b>2. CONVENTION &amp; DEVIS</b><br/><font size='7.5' color='#64748b'>Envoi sous 24h de votre programme personnalisé et du dossier de prise en charge.</font>", body_style),
            Paragraph("<b>3. ENTRÉE EN FORMATION</b><br/><font size='7.5' color='#64748b'>Accès aux supports, convocation et sessions interactives en présentiel ou visio.</font>", body_style),
            Paragraph("<b>4. COACHING 5H &amp; SUIVI</b><br/><font size='7.5' color='#64748b'>Accompagnement 1-to-1 post-formation pour concrétiser vos résultats terrain.</font>", body_style),
        ]
    ]
    etapes_table = Table(etapes_data, colWidths=[4.5 * cm, 4.5 * cm, 4.5 * cm, 4.5 * cm])
    etapes_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#eff6ff')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#bfdbfe')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#dbeafe')),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 5),
        ('RIGHTPADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(etapes_table)
    story.append(Spacer(1, 0.5 * cm))

    # Contact Box
    contact_data = [
        [
            Paragraph(
                "<b>📞 CONTACTEZ VOTRE CONSEILLER FORMATION DÈS AUJOURD'HUI</b><br/><br/>"
                "• <b>Téléphone &amp; WhatsApp direct :</b> 07 67 24 68 25<br/>"
                "• <b>E-mail :</b> formation.rmcf@gmail.com<br/>"
                "• <b>Plateforme web :</b> https://o-topformation.vercel.app<br/>"
                "• <b>Adresse siège :</b> 158 chemin des Terrasses, 83190 Ollioules (Var) — Région PACA<br/>"
                "• <b>Horaires d'accueil :</b> Du Lundi au Vendredi, 09h00 – 18h30",
                callout_style
            ),
            Paragraph(
                "<b>RÉSERVEZ VOTRE PLACE</b><br/><br/>"
                "Les promotions sont limitées à <b>8 à 10 participants</b> afin de garantir la qualité de l'apprentissage "
                "et le temps d'échange personnalisé.<br/><br/>"
                "<i>Devis gratuit sous 24h &amp; accompagnement au montage financier inclus.</i>",
                callout_style
            )
        ]
    ]
    contact_table = Table(contact_data, colWidths=[11 * cm, 7 * cm])
    contact_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#031b46')),
        ('TEXTCOLOR', (0,0), (-1,-1), colors.white),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#0284c7')),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(contact_table)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Brochure generated successfully at: {output_filename}")

if __name__ == '__main__':
    public_dir = os.path.join(os.getcwd(), 'public')
    out_catalogue = os.path.join(public_dir, 'catalogue-otop.pdf')
    out_brochure = os.path.join(public_dir, 'brochure-otop.pdf')
    out_programme = os.path.join(public_dir, 'programme-top.pdf')
    
    build_pdf(out_catalogue)
    
    # Also copy or generate for brochure-otop.pdf and programme-top.pdf
    import shutil
    shutil.copyfile(out_catalogue, out_brochure)
    shutil.copyfile(out_catalogue, out_programme)
    print("All PDF files updated in public directory!")
