import { redirect } from 'next/navigation';

/**
 * Redirection permanente 301 : /respirez → /catalogue
 * Maintenu pour la compatibilité des anciens liens.
 */
export default function RespirezRedirect() {
  redirect('/catalogue');
}
