import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://otopformations.com';
  const now = new Date();
  
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/commander', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/formations/ia', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/formations/reseaux-sociaux', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/formations/fi-top', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/catalogue', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/entreprises', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/methode', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/financement', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/equipe', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/a-propos', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ressources/blog', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/reglement-interieur', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/reclamations', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/accessibilite', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cgv', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
