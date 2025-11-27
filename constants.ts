
import { CaseStudy, BlogPost, Service, AppSettings } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Tools', path: '/tools' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Technical SEO Audit',
    description: 'Comprehensive analysis of crawlability, indexing, Core Web Vitals, and site architecture to uncover hidden growth blockers.',
    icon: 'Search',
  },
  {
    id: '2',
    title: 'On-Page SEO Optimization',
    description: 'Optimization of title tags, headings, internal linking, and content structure to maximize relevance for target keywords.',
    icon: 'FileText',
  },
  {
    id: '3',
    title: 'Content Strategy & Copywriting',
    description: 'Data-backed content roadmaps, pillar-cluster modeling, and high-quality copywriting that ranks and converts.',
    icon: 'PenTool',
  },
  {
    id: '4',
    title: 'Local SEO & GMB',
    description: 'Dominating local search results with Google Business Profile optimization, citation management, and local landing pages.',
    icon: 'MapPin',
  },
  {
    id: '5',
    title: 'eCommerce SEO',
    description: 'Specialized strategies for Shopify, Magento, and WooCommerce focusing on faceted navigation, product schema, and category optimization.',
    icon: 'ShoppingBag',
  },
  {
    id: '6',
    title: 'Conversion Rate Optimization (CRO)',
    description: 'User behavior analysis and A/B testing to turn more organic visitors into paying customers or leads.',
    icon: 'TrendingUp',
  },
  {
    id: '7',
    title: 'Analytics & Reporting',
    description: 'Custom GA4 setup, Looker Studio dashboards, and goal tracking to visualize ROI and campaign performance.',
    icon: 'BarChart2',
  },
  {
    id: '8',
    title: 'Monthly SEO Management',
    description: 'End-to-end execution of SEO strategy including link building, content updates, and continuous technical monitoring.',
    icon: 'Calendar',
  },
];

export const INITIAL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Home & Kitchen E-Commerce Brand',
    client: 'Modern Living',
    industry: 'E-commerce',
    challenge: 'Stagnant growth due to duplicate URL issues, slow LCP scores, and thin category content.',
    solution: 'Implemented canonical tag fixes, optimized images for WebP, and rolled out a content expansion strategy for top 20 categories.',
    results: [
      { metric: 'Organic Traffic', value: '45k', growth: '+28%' },
      { metric: 'Conversions', value: '1.2k', growth: '+21%' },
      { metric: 'Top 10 Keywords', value: '42', growth: '+150%' },
    ],
    tags: ['E-commerce', 'Technical SEO', 'Schema'],
  },
  {
    id: 'cs2',
    title: 'Local Medical Clinic',
    client: 'City Health Partners',
    industry: 'Healthcare / Local',
    challenge: 'Low visibility in local map packs due to inconsistent NAP data and incorrect GMB categorization.',
    solution: 'Audited and fixed citations, optimized Google Business Profile with new categories and photos, and launched location-specific landing pages.',
    results: [
      { metric: 'Map Ranking', value: '#3', growth: '#9 -> #3' },
      { metric: 'Calls Generated', value: '350', growth: '+46%' },
      { metric: 'Map Views', value: '12k', growth: '+33%' },
    ],
    tags: ['Local SEO', 'GMB', 'Healthcare'],
  },
  {
    id: 'cs3',
    title: 'SaaS Tool SEO',
    client: 'MetricFlow',
    industry: 'B2B SaaS',
    challenge: 'High competition for seed keywords and poor internal linking structure preventing deep pages from ranking.',
    solution: 'Deployed a Topic Cluster strategy with "Hub and Spoke" internal linking and created comparison pages vs competitors.',
    results: [
      { metric: 'Organic Traffic', value: '22k', growth: '+35%' },
      { metric: 'Trial Signups', value: '450', growth: '+14%' },
      { metric: 'Domain Auth', value: '45', growth: '+12' },
    ],
    tags: ['SaaS', 'Content Strategy', 'Link Building'],
  },
  {
    id: 'cs4',
    title: 'B2B Lead Gen Site',
    client: 'Industrial Pro',
    industry: 'Manufacturing',
    challenge: 'Low lead quality and high bounce rates on key service pages.',
    solution: 'Revamped page speed (CWV), optimized CTA placement, and restructured content for better readability.',
    results: [
      { metric: 'Qualified Leads', value: '180', growth: '+24%' },
      { metric: 'Bounce Rate', value: '45%', growth: '-17%' },
      { metric: 'Load Time', value: '1.2s', growth: '+1.8s Faster' },
    ],
    tags: ['B2B', 'CRO', 'Core Web Vitals'],
  },
  {
    id: 'cs5',
    title: 'Lifestyle Blog Growth',
    client: 'Urban Wellness',
    industry: 'Publishing',
    challenge: 'Traffic plateau despite high content velocity. Content was not effectively grouped.',
    solution: 'Implemented strict topic clustering, Article schema, and an aggressive internal linking campaign.',
    results: [
      { metric: 'Organic Traffic', value: '150k', growth: '+40%' },
      { metric: 'Pages in Top 10', value: '15', growth: '+200%' },
      { metric: 'Ad RPM', value: '$18', growth: '+18%' },
    ],
    tags: ['Blogging', 'Architecture', 'AdSense'],
  },
  {
    id: 'cs6',
    title: 'Fashion eCommerce Tech SEO',
    client: 'Vogue Trends',
    industry: 'Fashion Retail',
    challenge: 'Severe crawl budget waste due to faceted navigation and parameter URLs.',
    solution: 'Configured robots.txt to block parameter URLs, implemented self-referencing canonicals, and fixed sitemaps.',
    results: [
      { metric: 'Crawl Errors', value: '0', growth: '-78%' },
      { metric: 'Organic Traffic', value: '85k', growth: '+19%' },
      { metric: 'Indexed Products', value: '1,200', growth: '+100%' },
    ],
    tags: ['Technical SEO', 'E-commerce', 'Indexing'],
  },
];

const BLOG_CONTENT_TEMPLATE = `
<p class="mb-4">In the rapidly evolving world of search engine optimization, staying ahead of the curve is not just an advantage—it's a necessity. This article explores the critical strategies that are shaping the digital landscape this year.</p>
<h3 class="text-xl font-bold text-white mt-6 mb-3">The Core Problem</h3>
<p class="mb-4">Many businesses struggle because they focus on outdated metrics rather than user intent and technical foundation. We often see sites with great content failing to rank simply because of crawlability issues or poor internal linking structures.</p>
<h3 class="text-xl font-bold text-white mt-6 mb-3">Strategic Implementation</h3>
<p class="mb-4">To combat this, a holistic approach is required. This involves:</p>
<ul class="list-disc list-inside mb-6 space-y-2 text-slate-300">
  <li> comprehensive technical audits to ensure search engines can understand your site.</li>
  <li>Data-driven keyword research that moves beyond volume to look at conversion potential.</li>
  <li>User experience optimization that reduces bounce rates and signals quality to Google.</li>
</ul>
<h3 class="text-xl font-bold text-white mt-6 mb-3">Measurable Results</h3>
<p class="mb-4">By implementing these changes, our clients typically see a 20-40% increase in organic traffic within the first quarter. The key is consistency and data-backed decision making.</p>
<p>Ready to audit your own strategy? Start by looking at your Google Search Console coverage report and Core Web Vitals.</p>
`;

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Most Websites Fail SEO Audits & Fixes',
    excerpt: 'Common technical pitfalls that destroy rankings and how to identify them using modern audit tools.',
    date: 'Nov 03, 2025',
    category: 'Technical SEO',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/800/400?random=11',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Keyword Research Framework 2025',
    excerpt: 'Moving beyond search volume: Understanding intent, topical authority, and SERP features.',
    date: 'Nov 07, 2025',
    category: 'Strategy',
    readTime: '10 min read',
    imageUrl: 'https://picsum.photos/800/400?random=12',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Maximizing Local SEO with GMB',
    excerpt: 'A complete guide to optimizing your Google Business Profile for the Local Pack 3-pack.',
    date: 'Nov 11, 2025',
    category: 'Local SEO',
    readTime: '6 min read',
    imageUrl: 'https://picsum.photos/800/400?random=13',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Building Programmatic SEO Pages',
    excerpt: 'How to scale content creation safely without triggering "thin content" penalties.',
    date: 'Nov 15, 2025',
    category: 'Advanced SEO',
    readTime: '12 min read',
    imageUrl: 'https://picsum.photos/800/400?random=14',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'The Impact of Core Web Vitals',
    excerpt: 'Why LCP, CLS, and INP matter for rankings and user experience in 2024.',
    date: 'Nov 19, 2025',
    category: 'Technical',
    readTime: '7 min read',
    imageUrl: 'https://picsum.photos/800/400?random=15',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Technical SEO Checklist',
    excerpt: 'The ultimate 50-point checklist for launching a new website or auditing an existing one.',
    date: 'Nov 22, 2025',
    category: 'Resources',
    readTime: '15 min read',
    imageUrl: 'https://picsum.photos/800/400?random=16',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'Power of Internal Linking',
    excerpt: 'How to distribute PageRank effectively to boost your most profitable pages.',
    date: 'Nov 24, 2025',
    category: 'On-Page',
    readTime: '5 min read',
    imageUrl: 'https://picsum.photos/800/400?random=17',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'GA4 Tips for Business Owners',
    excerpt: 'Making sense of the new Google Analytics 4 interface and setting up custom reports.',
    date: 'Nov 26, 2025',
    category: 'Analytics',
    readTime: '9 min read',
    imageUrl: 'https://picsum.photos/800/400?random=18',
    content: BLOG_CONTENT_TEMPLATE,
    lastModified: new Date().toISOString(),
  },
];

export const DEFAULT_SETTINGS: AppSettings = {
  notificationEmail: 'shravan.chauhan0009@gmail.com',
  notificationPhone: '+91 81600 72455',
  
  smtpHost: 'smtp.sendgrid.net',
  smtpPort: '587',
  smtpUser: '',
  
  enableEmailJs: false,
  emailJsServiceId: '',
  emailJsTemplateId: '',
  emailJsPublicKey: '',

  enableTwilio: false,
  twilioSid: '',
  twilioAuthToken: '',
  calendlyApiKey: '',
  
  testMode: true, // Default to true so user can test UI without keys
};