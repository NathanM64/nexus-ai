export const SITE_CONFIG = {
  name: 'Nexus AI',
  description: 'Transform your marketing with AI-powered content. Generate high-quality marketing content in seconds, not hours.',
  url: 'https://nexus.nmwstudios.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/nexusai',
    linkedin: 'https://linkedin.com/company/nexusai',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
] as const;

export const HERO = {
  title: 'Transform Your Marketing with AI-Powered Content',
  subtitle: 'Generate high-quality marketing content in seconds, not hours. Join 10,000+ marketers scaling their content creation.',
  cta: {
    primary: { label: 'Start Free Trial', href: '#pricing' },
    secondary: { label: 'Watch Demo', href: '#how-it-works' },
  },
} as const;

export const SOCIAL_PROOF = {
  title: 'Trusted by leading marketing teams',
  companies: [
    'TechFlow',
    'GrowthLabs',
    'MarketPro',
    'ContentHub',
    'BrandScale',
  ],
} as const;

export const FEATURES = [
  {
    icon: 'Sparkles', // Lucide icon name
    title: 'Instant Content Creation',
    description: 'Generate blog posts, social media content, and email campaigns in seconds with our advanced AI engine.',
  },
  {
    icon: 'Target',
    title: 'Consistent Brand Voice',
    description: 'Train the AI on your brand guidelines to ensure every piece of content matches your unique voice and tone.',
  },
  {
    icon: 'RefreshCw',
    title: 'Export Anywhere',
    description: 'One-click export to LinkedIn, Twitter, Facebook, Instagram, and your CMS. Save hours of copy-pasting.',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Describe What You Need',
    description: 'Tell Nexus AI what type of content you want to create and for which platform.',
  },
  {
    step: 2,
    title: 'Review AI Suggestions',
    description: 'Get multiple content variations instantly. Choose the one that resonates most.',
  },
  {
    step: 3,
    title: 'Publish & Track Performance',
    description: 'Export to your favorite platform and track engagement metrics in real-time.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'Nexus AI cut our content creation time by 70%. It\'s like having a full-time copywriter on the team.',
    author: 'Sarah Chen',
    role: 'Head of Marketing',
    company: 'TechFlow',
    avatar: '/images/avatars/sarah-chen.jpg',
  },
  {
    quote: 'The brand voice consistency is incredible. Our followers can\'t tell the difference between AI and human-written content.',
    author: 'Marcus Johnson',
    role: 'Founder',
    company: 'GrowthLabs',
    avatar: '/images/avatars/marcus-johnson.jpg',
  },
] as const;

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and small teams',
    features: [
      '50 AI generations/month',
      '1 brand voice',
      'Email support',
      'Basic analytics',
      'Export to 3 platforms',
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'Best for growing marketing teams',
    features: [
      '500 AI generations/month',
      '3 brand voices',
      'Priority support',
      'Advanced analytics dashboard',
      'Export to all platforms',
      'Team collaboration (up to 5)',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'For large organizations',
    features: [
      'Unlimited generations',
      'Unlimited brand voices',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Unlimited team members',
      'Advanced security & compliance',
    ],
    highlighted: false,
    badge: null,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'How does the AI generate content?',
    answer: 'Nexus AI uses advanced natural language processing to understand your brand voice and create high-quality marketing content tailored to your needs.',
  },
  {
    question: 'Can I customize the AI to match my brand voice?',
    answer: 'Yes! You can train the AI on your brand guidelines, previous content, and style preferences to ensure consistency across all generated content.',
  },
  {
    question: 'What types of content can I create?',
    answer: 'You can create blog posts, social media content, email campaigns, product descriptions, ad copy, and more. The AI adapts to your specific needs.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'Can I export content to my existing tools?',
    answer: 'Absolutely! Nexus AI integrates with LinkedIn, Twitter, Facebook, Instagram, WordPress, and many other platforms for seamless export.',
  },
  {
    question: 'What if I\'m not satisfied with the results?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not happy with Nexus AI, we\'ll refund your payment in full.',
  },
] as const;

export const CTA_FINAL = {
  title: 'Ready to Transform Your Content Strategy?',
  subtitle: 'Join thousands of marketers creating better content, faster.',
  cta: {
    label: 'Start Your Free Trial',
    href: '#pricing',
  },
  note: 'No credit card required • 14-day free trial',
} as const;
