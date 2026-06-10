import { Caregiver, Testimonial, CommunityProgram, StatItem } from './types';

export const EXCELLENT_CAREGIVERS: Caregiver[] = [
  {
    id: 'cg1',
    name: 'Sarah Jenkins, RN',
    title: 'Registered Nurse & Care Manager',
    photoUrl: '/src/assets/images/caregiver_sarah_1780951518388.png',
    qualifications: [
      'BSc in Nursing (BSN)',
      '12+ years clinical experience',
      'Advanced Cardiac Life Support (ACLS)'
    ],
    experience: 'Over a decade leading clinical home-health care and senior safety strategies.',
    certifications: [
      'Licensed Registered Nurse',
      'Dementia Care Certified (CDP)',
      'Senior Safety Specialist'
    ],
    introduction: '“Healing happens at home. I listen to each family’s story to ensure safety, respect, and moments of genuine joy.”',
    rating: 5,
    specialties: ['Post-Operative Recovery', 'Dementia Care', 'Medication Management']
  },
  {
    id: 'cg2',
    name: 'Michael Vance, CNA',
    title: 'Senior Support Specialist',
    photoUrl: '/src/assets/images/caregiver_michael_1780951533151.png',
    qualifications: [
      'Certified Nursing Assistant (CNA)',
      'Certified Medical Assistant (CMA)',
      'Mobility Transfer Trainer'
    ],
    experience: '8+ years providing companion care, physical assistance, and mental wellness exercise.',
    certifications: [
      'CNA & BLS Certified',
      'Alzheimer’s Care Certified',
      'Stroke Recognition Support'
    ],
    introduction: '“Helping seniors remain independent is my calling. I care for my clients exactly as I would my own grandparents.”',
    rating: 5,
    specialties: ['Alzheimer’s Support', 'Physical Rehabilitation', 'Nutrition & Lifestyle Support']
  }
];

export const SUCCESS_STORIES: Testimonial[] = [
  {
    id: 't1',
    author: 'Eleanor Vance',
    relation: 'Daughter of Richard V., Client',
    title: 'A Lifeline of Dignity',
    text: '“Ambiance Joy became our partner, allowing my father to stay in his beloved garden home with dignity.”',
    rating: 5,
    videoDuration: '1:45',
    videoThumbnail: 'https://images.unsplash.com/photo-1543333995-a78aea2efe50?auto=format&fit=crop&q=80&w=600',
    transcript: [
      '0:00 - Eleanor: "Caring for Dad on our own felt like we were failing..."',
      '0:30 - Eleanor: "When Sarah walked in, she was so calm. It changed everything instantly."',
      '1:00 - Eleanor: "Now we can just breathe and be his children again."',
      '1:30 - Eleanor: "They handle everything with pure safety and care."'
    ],
    beforeCare: 'Richard was struggling with confused nights, mobility risks, and family burnout.',
    afterCare: 'Richard enjoys stable daily routines, safe garden walks, and family connection.'
  },
  {
    id: 't2',
    author: 'The Peterson Family',
    relation: 'Children of Arthur & Helen P.',
    title: 'Kept Our Parents Together',
    text: '“Our parents wanted to stay in their family home. Thanks to Michael’s exceptional support, they are thriving together.”',
    rating: 5,
    videoDuration: '2:15',
    videoThumbnail: 'https://images.unsplash.com/photo-1516307364728-22f127ec3102?auto=format&fit=crop&q=80&w=600',
    transcript: [
      '0:00 - Arthur: "We didn’t want to go to an institution. We want to watched sunset here."',
      '0:45 - Helen: "Michael feels like a grandson. He makes sure Arthur takes his medicine."',
      '1:30 - Family: "Our anxiety is gone. Our parents look forward to Michael’s visits."',
      '2:05 - Helen: "He brings ambiance and joy."'
    ],
    beforeCare: 'Arthur & Helen were skipping meals and neglecting medication schedules.',
    afterCare: 'Arthur maintains high physical mobility, Helen gets companionship, and medication lists are synchronized.'
  }
];

export const COMMUNITY_PROGRAMS: CommunityProgram[] = [
  {
    id: 'cp1',
    title: 'Senior Health Seminars',
    description: 'Free public workshops on fall prevention, home safety, and early memory-loss signs.',
    iconName: 'Shield',
    tagline: 'Empowering local families with safety education.',
    metrics: 'Over 450+ families educated annually'
  },
  {
    id: 'cp2',
    title: 'Socialization Circles',
    description: 'Gentle senior yoga, puzzle groups, and safe nature walks to foster friendships.',
    iconName: 'Users',
    tagline: 'Eliminating senior isolation through active connection.',
    metrics: '20+ activities hosted quarterly'
  },
  {
    id: 'cp3',
    title: 'Caregiver Support Groups',
    description: 'Professional-led group coaching and training for family caretakers.',
    iconName: 'Heart',
    tagline: 'Caring for those who care for loved ones.',
    metrics: 'Weekly counselor-led sessions'
  }
];

export const KEY_STATISTICS: StatItem[] = [
  { value: 98, suffix: '%', label: 'Client Satisfaction', iconName: 'Award' },
  { value: 1200, suffix: '+', label: 'Families Supported', iconName: 'Smile' },
  { value: 24, suffix: '/7', label: 'Continuous Care', iconName: 'Clock' },
  { value: 15, suffix: '+', label: 'Years Excellence', iconName: 'Activity' }
];

export interface RecommendedService {
  title: string;
  sub: string;
  description: string;
  features: string[];
  bestFor: string;
  caregiverRecommendation: string;
}

export const RECOMMENDATIONS: Record<string, RecommendedService> = {
  nursing: {
    title: 'Skilled Private Duty Nursing',
    sub: 'Clinical monitoring and specialized medical therapy directly in the peace of home.',
    description: 'Managed by registered nurses to ensure clinical protocols are followed seamlessly.',
    features: [
      'Chronic condition care (Stroke, Diabetes, Heart)',
      'Advanced wound and IV management',
      'Prescription coordination & team updates',
      'Vitals track and biometric reporting'
    ],
    bestFor: 'Seniors requiring skilled medical care or post-operative recovery.',
    caregiverRecommendation: 'Matched with Sarah Jenkins, RN and our skilled nurse panel.'
  },
  personal: {
    title: 'Personal Assistant & Activity Support',
    sub: 'Helping seniors maintain beautiful personal routines and optimal safety.',
    description: 'Assists with daily living activities (ADLs) to preserve dignity and comfort.',
    features: [
      'Bathing, grooming, and clothing assistance',
      'Safe transfer support and fall mitigation',
      'Fresh meal preparation and dietary tracking',
      'Light house tidying and errand assistance'
    ],
    bestFor: 'Medically stable seniors needing help with mobility, meals, or hygiene.',
    caregiverRecommendation: 'Matched with Michael Vance, CNA or our personal care specialists.'
  },
  dementia: {
    title: 'Specialized Memory & Cognitive Support',
    sub: 'Secure, enriching, and respectful care designed designed for cognitive comfort.',
    description: 'Uses research-backed techniques to reduce anxiety and promote daily peace.',
    features: [
      'Gentle memory stimulation and custom activities',
      'Consistent daily routines to ease transition anxiety',
      'Attentive safety monitoring to prevent wandering',
      'Mindful sensory and socialization exercises'
    ],
    bestFor: 'Seniors experiencing forgetfulness, Alzheimer’s, or cognitive challenges.',
    caregiverRecommendation: 'Joint coordination with Nurse Sarah and Michael Vance.'
  },
  companionship: {
    title: 'Compassionate Companionship Care',
    sub: 'Bringing warm interaction and daily engagement to eliminate isolation.',
    description: 'Nurtures emotional well-being through friendly connection and social activities.',
    features: [
      'Active chatting, reading, and memory sharing',
      'Accompaniment to local walks and appointments',
      'Card games, puzzles, and hobby engagement',
      'Dynamic checklists updated for distant relatives'
    ],
    bestFor: 'Seniors living alone seeking friendly enrichment for their days.',
    caregiverRecommendation: 'Matched with our expert Certified Companions or Coordinators.'
  }
};
