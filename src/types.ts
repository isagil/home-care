export interface Caregiver {
  id: string;
  name: string;
  title: string;
  photoUrl: string;
  qualifications: string[];
  experience: string;
  certifications: string[];
  introduction: string;
  rating: number;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  relation: string;
  title: string;
  text: string;
  rating: number;
  videoDuration?: string;
  videoThumbnail?: string;
  transcript?: string[];
  beforeCare: string;
  afterCare: string;
}

export interface ConsultationRequest {
  parentName?: string;
  clientType: string;
  needs: string[];
  frequency: string;
  phone: string;
  email: string;
  submittedAt?: string;
}

export interface CommunityProgram {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tagline: string;
  metrics?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}
