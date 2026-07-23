import { SocialLink, ServiceItem, ProjectItem } from './types';

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    category: 'Visual & Culture',
    description: 'Behind the scenes, design drops & agency life',
    iconName: 'Instagram',
    url: 'https://www.instagram.com/everest.x.27/',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    category: 'Instant Chat',
    description: '+213 559 39 12 11 - Direct chat with our team',
    iconName: 'MessageSquare',
    url: 'https://wa.me/213559391211',
  },
  {
    id: 'email',
    title: 'Email',
    category: 'Direct Contact',
    description: 'everestx27@gmail.com - Drop us a message anytime',
    iconName: 'Mail',
    url: 'mailto:everestx27@gmail.com',
  },
];

export const servicesList: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Strategic visual positioning, naming, design systems, and comprehensive brand guidelines.',
    icon: 'Sparkles',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Timeless, memorable vector logotypes and responsive marks crafted for modern digital spaces.',
    icon: 'Command',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Lightning-fast, high-converting immersive web applications built with cutting-edge stack.',
    icon: 'Code2',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Intuitive user experiences and gorgeous interfaces designed for web3, SaaS, and luxury brands.',
    icon: 'Layout',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns, performance marketing, and high-impact social growth strategies.',
    icon: 'TrendingUp',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Cinematic video production, 3D motion graphics, and premium editorial copy.',
    icon: 'Video',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom AI integration, generative workflows, intelligent chatbots, and predictive models.',
    icon: 'Cpu',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Streamlining enterprise operations with intelligent workflows and seamless API integrations.',
    icon: 'Workflow',
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: 'vortex-quantum',
    title: 'Vortex Quantum',
    category: 'FinTech & Web3 Architecture',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Complete brand overhaul and high-performance Web3 trading dashboard with real-time analytics.',
    tags: ['Next.js', 'WebGL', 'Brand Identity'],
    metrics: '+340% User Engagement',
    client: 'Vortex Financial Group (Zurich)',
  },
  {
    id: 'komorebi-living',
    title: 'Komorebi Living',
    category: 'Luxury Hospitality & E-Commerce',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Immersive digital experience and bespoke minimalist e-commerce platform for luxury Japanese architecture.',
    tags: ['Shopify Plus', 'UI/UX', 'Art Direction'],
    metrics: '$4.2M Launch Sales',
    client: 'Komorebi Estates (Tokyo)',
  },
  {
    id: 'aether-ai',
    title: 'Aether AI Suite',
    category: 'Generative Workspace & SaaS',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    description: 'Next-generation AI creative workspace interface with multimodal agent orchestration and fluid design.',
    tags: ['React', 'AI Integration', 'Design System'],
    metrics: '1.2M Active Users',
    client: 'Aether Technologies (San Francisco)',
  },
];
