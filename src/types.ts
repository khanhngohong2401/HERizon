export interface RescueStation {
  id: string;
  name: string;
  district: string;
  address: string;
  contact?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  email?: string;
  bankingInfo?: {
    vcb?: string;
    sacombank?: string;
    momo?: string;
  };
}

export interface GuideItem {
  id: 'cotton' | 'jeans' | 'parachute';
  name: string;
  icon: string;
  subtitle: string;
  description: string;
  warning: string;
  youtubeId: string;
  isShorts?: boolean;
  tips: string[];
}

export interface TeamMember {
  id: string;
  studentId: string;
  name: string;
  imageSrc: string;
  altImageSrc?: string;
  role?: string;
  avatarUrl?: string;
  bio?: string;
}

