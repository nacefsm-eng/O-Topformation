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
    template: "%s | Ô'TOP Formation",
    default: "Ô'TOP Formation | IA Générative, Réseaux Sociaux & Méthode TOP®",
  },
  description:
    "Organisme de formation professionnelle à Ollioules (Var) spécialisé en IA Générative (RS6776), Réseaux Sociaux (RS7351) et Méthode TOP®. Formations certifiantes avec financement possible (OPCO, FAF, CPF) et 5h de coaching inclus.",
  keywords: [
    'formation TOP', 'Techniques Optimisation Potentiel', 'formation IA', 'ChatGPT',
    'Claude', 'n8n', 'automatisation', 'réseaux sociaux', 'RS6776', 'RS7351', 'RS7344',
    'gestion du stress', 'préparation mentale', 'financement OPCO', 'FAFCEA', 'FIFPL',
    'Ollioules', 'Toulon', 'Var', 'PACA'
  ],
  metadataBase: new URL('https://o-topformation.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ô'TOP Formation — Formations Certifiantes IA, Digital & Méthode TOP®",
    description: "Développez votre entreprise avec l'IA et préservez votre énergie grâce aux TOP®. Financement OPCO/FAF étudié selon votre profil avec 5h de coaching inclus.",
    url: 'https://o-topformation.vercel.app',
    siteName: "Ô'TOP Formation",
    locale: 'fr_FR',
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: "Ô'TOP Formation",
  alternateName: "O'TOP Formation",
  url: 'https://o-topformation.vercel.app',
  logo: 'https://o-topformation.vercel.app/logo.png',
  description:
    "Organisme de formation certifiante en IA Générative, Réseaux Sociaux et Techniques d'Optimisation du Potentiel (TOP®) à Ollioules (Var, PACA). Financements OPCO, FAF, FIF-PL et CPF.",
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
      email: 'formation.rmcf@gmail.com',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: 'French',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+33674797509',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} data-theme="sombre">
      <head>
        {/* Organization Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
          <div style={{ height: '60px' }} />
          <ScrollReveal />
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
