export interface Lead {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  societe?: string;
  fonction?: string;
  besoin: string;
  message?: string;
  date: string;
  type: 'info' | 'devis' | 'partenariat';
}

export interface Announcement {
  id: string;
  active: boolean;
  type: 'info' | 'promo' | 'news';
  text: string;
  ctaLabel?: string;
  ctaUrl?: string;
  expiresAt?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  emoji: string;
  readTime: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  { id: '1', title: 'Comprendre le stress professionnel et ses effets sur le corps', slug: 'comprendre-stress-professionnel', category: 'Stress', excerpt: 'Le stress professionnel affecte plus de 7 salariés sur 10 en France. Découvrez les mécanismes du stress et comment les TOP® vous aident à le maîtriser.', emoji: '🧠', readTime: '5 min', date: '2026-05-20' },
  { id: '2', title: 'Les techniques de respiration TOP® au quotidien', slug: 'techniques-respiration-top', category: 'TOP®', excerpt: 'La respiration est le premier outil des TOP®. Apprenez les 3 techniques fondamentales pour réguler votre système nerveux en toutes situations.', emoji: '🌬️', readTime: '4 min', date: '2026-05-15' },
  { id: '3', title: 'Prévenir le burn-out : les signaux à ne pas ignorer', slug: 'prevenir-burn-out', category: 'Bien-être', excerpt: 'Le burn-out ne survient jamais sans signes précurseurs. Identifiez les 8 signaux d\'alarme et apprenez à préserver votre énergie sur le long terme.', emoji: '🔋', readTime: '6 min', date: '2026-05-10' },
  { id: '4', title: 'Améliorer son sommeil grâce aux TOP®', slug: 'ameliorer-sommeil-top', category: 'Récupération', excerpt: 'Un tiers des Français souffrent de troubles du sommeil. Les techniques de relaxation TOP® permettent de retrouver un sommeil réparateur en quelques semaines.', emoji: '😴', readTime: '5 min', date: '2026-05-05' },
  { id: '5', title: 'Motivation et performance : les leviers méconnus', slug: 'motivation-performance-leviers', category: 'Performance', excerpt: 'La motivation n\'est pas un trait de caractère, c\'est une compétence qui se développe. Découvrez les outils TOP® pour renforcer durablement votre dynamisme.', emoji: '🚀', readTime: '4 min', date: '2026-04-28' },
  { id: '6', title: 'TOP® et managers : gérer la pression opérationnelle', slug: 'top-managers-pression', category: 'Management', excerpt: 'Les managers sont particulièrement exposés au stress. Les TOP® leur offrent un arsenal de techniques pour maintenir leur efficacité et protéger leur équipe.', emoji: '👔', readTime: '6 min', date: '2026-04-20' },
  { id: '7', title: 'Préparation mentale : la clé de la réussite professionnelle', slug: 'preparation-mentale-reussite', category: 'Performance', excerpt: 'Issue du sport de haut niveau et de l\'armée, la préparation mentale s\'applique à tous les défis professionnels. Découvrez la méthode TOP®.', emoji: '🏆', readTime: '5 min', date: '2026-04-15' },
  { id: '8', title: 'Concentration au travail : 5 exercices TOP® efficaces', slug: 'concentration-travail-exercices', category: 'TOP®', excerpt: 'La concentration est une ressource limitée qui se gère. Cinq exercices courts issus des TOP® pour retrouver le focus en moins de 3 minutes.', emoji: '🎯', readTime: '3 min', date: '2026-04-10' },
  { id: '9', title: 'Qualité de vie au travail : le rôle des compétences psychosociales', slug: 'qvt-competences-psychosociales', category: 'QVT', excerpt: 'La QVT ne se limite pas aux conditions matérielles. Les compétences psychosociales sont le facteur clé de l\'épanouissement et de la performance au travail.', emoji: '🌱', readTime: '5 min', date: '2026-04-05' },
  { id: '10', title: 'Prévention des RPS : obligations et meilleures pratiques', slug: 'prevention-rps-pratiques', category: 'RPS', excerpt: 'Les risques psychosociaux sont une obligation légale pour les employeurs. Découvrez les meilleures pratiques et comment les TOP® s\'intègrent dans votre stratégie.', emoji: '⚖️', readTime: '7 min', date: '2026-03-28' },
  { id: '11', title: 'La relaxation musculaire : un outil puissant contre le stress', slug: 'relaxation-musculaire-stress', category: 'TOP®', excerpt: 'La Relaxation Musculaire Directe (RMD) est l\'une des techniques phares des TOP®. Découvrez son fonctionnement et ses applications pratiques.', emoji: '💪', readTime: '4 min', date: '2026-03-20' },
  { id: '12', title: 'Imagerie mentale : visualiser pour mieux agir', slug: 'imagerie-mentale-visualiser', category: 'Performance', excerpt: 'Les sportifs de haut niveau l\'utilisent depuis des décennies. L\'imagerie mentale, pilier des TOP®, booste votre préparation et votre confiance avant toute épreuve.', emoji: '🌟', readTime: '5 min', date: '2026-03-15' },
  { id: '13', title: 'Gérer la fatigue professionnelle au quotidien', slug: 'gerer-fatigue-professionnelle', category: 'Récupération', excerpt: 'Fatigue chronique, coup de pompe de l\'après-midi, manque d\'énergie le matin... Les TOP® offrent des solutions concrètes pour optimiser votre récupération.', emoji: '⚡', readTime: '5 min', date: '2026-03-08' },
  { id: '14', title: 'Formation intra-entreprise : pourquoi former vos équipes aux TOP®', slug: 'formation-intra-entreprise-top', category: 'Entreprises', excerpt: 'Investir dans les compétences psychosociales de vos collaborateurs génère un ROI mesurable. Chiffres, études de cas et retours d\'expérience.', emoji: '🏢', readTime: '6 min', date: '2026-03-01' },
  { id: '15', title: 'Le dialogue interne : reprogrammer sa pensée pour performer', slug: 'dialogue-interne-performance', category: 'TOP®', excerpt: 'Notre dialogue interne influence 70% de nos décisions. Les TOP® enseignent à transformer cette voix intérieure en alliée puissante.', emoji: '💬', readTime: '4 min', date: '2026-02-20' },
];

const defaultLeads: Lead[] = [];
const defaultAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    active: true,
    type: 'info',
    text: '🌟 Formation Initiale TOP® — Prochaine session à Ollioules. Places limitées !',
    ctaLabel: 'Réserver ma place',
    ctaUrl: '/contact',
  }
];

export function getDbLeads(): Lead[] {
  if (typeof window === 'undefined') return defaultLeads;
  const stored = localStorage.getItem('otop_leads');
  if (stored) { try { return JSON.parse(stored); } catch { /* fall through */ } }
  localStorage.setItem('otop_leads', JSON.stringify(defaultLeads));
  return defaultLeads;
}

export function saveDbLeads(leads: Lead[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('otop_leads', JSON.stringify(leads));
  }
}

export function addLead(lead: Omit<Lead, 'id' | 'date'>): void {
  const leads = getDbLeads();
  const newLead: Lead = {
    ...lead,
    id: `lead-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
  };
  saveDbLeads([newLead, ...leads]);
}

export function getDbAnnouncements(): Announcement[] {
  if (typeof window === 'undefined') return defaultAnnouncements;
  const stored = localStorage.getItem('otop_announcements');
  if (stored) { try { return JSON.parse(stored); } catch { /* fall through */ } }
  localStorage.setItem('otop_announcements', JSON.stringify(defaultAnnouncements));
  return defaultAnnouncements;
}

export function getActiveAnnouncement(): Announcement | null {
  const all = getDbAnnouncements();
  const now = new Date();
  return all.find(a => {
    if (!a.active) return false;
    if (a.expiresAt && new Date(a.expiresAt) < now) return false;
    return true;
  }) ?? null;
}
