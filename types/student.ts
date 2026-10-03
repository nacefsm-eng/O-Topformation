export interface StudentCourse {
  id: string; // 'rs6776' | 'rs7344' | 'rs7351' | 'top'
  title: string;
  badge: string;
  progress: number; // 0 to 100
  enrolledAt: string;
  lmsUrl?: string;
  status: 'actif' | 'termine' | 'en_attente';
}

export interface Student {
  id: string;
  email: string;
  prenom: string;
  nom: string;
  salt?: string;
  passwordHash?: string;
  authProvider: 'password' | 'google' | 'magic_link';
  createdAt: string;
  lastLoginAt: string;
  coachingBooked: boolean;
  coachingDate?: string;
  courses: StudentCourse[];
}
