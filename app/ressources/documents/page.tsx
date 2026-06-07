import { Metadata } from 'next';
import DocumentsClient from './client';

export const metadata: Metadata = {
  title: "Ressources & Documents | Ô'TOP Formation",
  description: "Téléchargez nos ressources pédagogiques : programme FI TOP®, règlement intérieur, livret d'accueil et catalogue de formations.",
};

export default function DocumentsPage() {
  return <DocumentsClient />;
}
