
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    growth: string;
  }[];
  tags: string[];
  detailedContent?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl: string;
  content?: string;
  lastModified?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AnalyticMetric {
  name: string;
  value: number | string;
  change: number;
  isPositive: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Read' | 'Contacted' | 'Closed';
  source?: string;
  preferredTime?: string;
  consent: boolean;
}

export interface AppSettings {
  notificationEmail: string;
  notificationPhone: string;
  
  // SMTP / Backend Config (Optional)
  smtpHost: string;
  smtpPort: string;
  smtpUser: string;
  
  // EmailJS Config (Client-side)
  enableEmailJs: boolean;
  emailJsServiceId: string;
  emailJsTemplateId: string;
  emailJsPublicKey: string;

  // Twilio
  enableTwilio: boolean;
  twilioSid: string;
  twilioAuthToken: string;
  
  calendlyApiKey: string;
  testMode: boolean;
}

export interface SystemLog {
  id: string;
  timestamp: string;
  type: 'Email' | 'SMS' | 'System' | 'CRM';
  status: 'Success' | 'Failed';
  message: string;
}