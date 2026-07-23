export interface SocialLink {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  url: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  metrics: string;
  client: string;
}

export interface BookingForm {
  name: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}
