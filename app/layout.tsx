import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ScrollReveal from '@/components/ScrollReveal';
import FloatingButtons from '@/components/FloatingButtons';
import FloatingChatbot from '@/components/FloatingChatbot';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: "%s | Ô'TOP Formation",
    default: "Ô'TOP Formation | Techniques d'Optimisation du Potentiel (TOP®)",
  },
  description:
    "Ô'TOP Formation accompagne les professionnels, entreprises et collectivités dans la gestion du stress, la préparation mentale et le développement des compétences psychosociales grâce aux Techniques d'Optimisation du Potentiel (TOP®).",
  keywords: [
    'formation TOP', 'Techniques Optimisation Potentiel', 'gestion du stress', 'préparation mentale',
    'formation QVT', 'prévention RPS', 'burn-out', 'performance professionnelle', 'motivation travail',
    'bien-être entreprise', 'formation santé mentale', 'TOP®', 'Ollioules', 'Provence', 'PACA'
  ],
  openGraph: {
    title: "Ô'TOP Formation — Techniques d'Optimisation du Potentiel",
    description: "Gérez votre stress, développez votre concentration et préservez votre énergie grâce aux TOP®. Organisme de formation certifié, présentiel ou distanciel.",
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
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
        <Nav />
        <ScrollReveal />
        {children}
        <FloatingButtons />
        <FloatingChatbot />
      </body>
    </html>
  );
}
