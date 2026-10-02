import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import { ThemeProvider } from '@/components/ThemeProvider';
import WhatsAppButton from '@/components/WhatsAppButton';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: "%s | Ô’TOP Formations",
    default: "Ô’TOP Formations | IA, Réseaux Sociaux & Conduite du changement",
  },
  description:
    "Formations 100 % en ligne pour indépendants et dirigeants : 21 h dont 2 h d’accompagnement avec un expert. Préparation à 3 certifications RS. Financement OPCO / FAF possible.",
  keywords: [
    'formation TOP', 'Techniques Optimisation Potentiel', 'formation IA', 'ChatGPT',
    'Claude', 'n8n', 'automatisation', 'réseaux sociaux', 'RS6776', 'RS7351', 'RS7344',
    'conduite du changement', 'financement OPCO', 'FAFCEA', 'FIFPL',
    'Ollioules', 'Toulon', 'Var', 'PACA'
  ],
  metadataBase: new URL('https://otopformations.com'),
  alternates: {
    canonical: 'https://otopformations.com',
  },
  openGraph: {
    title: "Ô’TOP Formations — Formations IA, réseaux sociaux et conduite du changement",
    description: "Formations IA et réseaux sociaux 100 % en ligne, 2 h d’accompagnement avec un expert incluses. Financement possible avec notre partenaire Eloq-One, certifié Qualiopi.",
    url: 'https://otopformations.com',
    siteName: "Ô’TOP Formations",
    locale: 'fr_FR',
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "Ô'TOP Formations",
  alternateName: "Ô'TOP Formations",
  url: 'https://otopformations.com',
  logo: 'https://otopformations.com/logo.png',
  description:
    "Organisme de formation professionnelle en IA, Réseaux Sociaux et Conduite du changement (Méthode TOP®) à Ollioules (Var, PACA). Financement OPCO, FAF, France Travail.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Espace Gamma 1, 139 Chemin des 2 Frères',
    addressLocality: 'Ollioules',
    postalCode: '83190',
    addressRegion: 'Var',
    addressCountry: 'FR',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33767246825',
      email: 'contact@otopformations.com',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+33674797509',
      email: 'contact@otopformations.com',
      contactType: 'technical support',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/m%C3%A9lissa-formatrice-top%C2%AE-aa5714380/',
    'https://www.instagram.com/otop.formations/',
    'https://www.facebook.com/835767209621029',
  ],
};

const coursesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: 'Formation IA Générative (RS6776)',
      description: 'Formation de 21 h préparant à la certification RS6776 en intelligence artificielle générative avec 2 h d’accompagnement individuel par un expert.',
      provider: {
        '@type': 'EducationalOrganization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
      },
      offers: {
        '@type': 'Offer',
        price: '600.00',
        priceCurrency: 'EUR',
        category: 'Formation professionnelle continue',
        availability: 'https://schema.org/InStock',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['Online'],
        duration: 'PT21H',
        inLanguage: 'fr',
      },
    },
    {
      '@type': 'Course',
      position: 2,
      name: 'Développer son Activité avec l’IA (RS7344)',
      description: '21 h de formation préparant à la certification RS7344 pour structurer et piloter l’intégration de l’IA en entreprise avec 2 h d’accompagnement.',
      provider: {
        '@type': 'EducationalOrganization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
      },
      offers: {
        '@type': 'Offer',
        price: '1490.00',
        priceCurrency: 'EUR',
        category: 'Formation professionnelle continue',
        availability: 'https://schema.org/InStock',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['Online', 'Blended'],
        duration: 'PT21H',
        inLanguage: 'fr',
      },
    },
    {
      '@type': 'Course',
      position: 3,
      name: 'Conduite du changement — Méthode TOP®',
      description: '21 h de formation aux Techniques d’Optimisation du Potentiel pour réguler la pression, dynamiser son énergie et préserver sa lucidité décisionnelle.',
      provider: {
        '@type': 'EducationalOrganization',
        name: "Ô'TOP Formations",
        sameAs: 'https://otopformations.com',
      },
      offers: {
        '@type': 'Offer',
        price: '890.00',
        priceCurrency: 'EUR',
        category: 'Formation professionnelle continue',
        availability: 'https://schema.org/InStock',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: ['Online', 'Onsite'],
        duration: 'PT21H',
        inLanguage: 'fr',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} data-theme="sombre">
      <head>
        {/* Organization Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Courses List Schema.org for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
        />
        {/* Inline Theme Detection Script to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('otop-theme');
                if (savedTheme) {
                  document.documentElement.setAttribute('data-theme', savedTheme);
                }
              } catch(e) {}
            `,
          }}
        />
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-0LR0JWFSRG" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0LR0JWFSRG');
          `}
        </Script>
        
        {/* Meta Pixel Placeholder */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXXXXXXXXXXXXXXX'); // REMPLACER PAR TON ID META PIXEL
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <Nav />
          <ScrollReveal />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
