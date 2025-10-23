import type { Metadata } from 'next';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Grid } from '@/nmw-core/primitives';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/nmw-core/components/ui';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our services and what we can do for you',
};

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-muted/20">
        <Container size="md">
          <div className="text-center">
            <Heading level="1" className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Our Services
            </Heading>
            <Text size="lg" className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, launch, and grow your online presence.
            </Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <Grid cols="2" gap="8" className="grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} variant="bordered" hover>
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <Text size="sm">{feature}</Text>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

const services = [
  {
    icon: '🎨',
    title: 'Custom Design',
    description: 'Beautiful, modern designs tailored to your brand',
    features: [
      'Unique, custom designs',
      'Brand identity integration',
      'Responsive across all devices',
      'Dark mode support',
    ],
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Lightning-fast websites that convert',
    features: [
      'Lighthouse score 90+',
      'Image optimization',
      'Code splitting',
      'SEO optimization',
    ],
  },
  {
    icon: '🔧',
    title: 'Development',
    description: 'Clean, maintainable code built with modern technologies',
    features: [
      'Next.js 15 & React 19',
      'TypeScript for type safety',
      'Tailwind CSS for styling',
      'Component-based architecture',
    ],
  },
  {
    icon: '🚀',
    title: 'Deployment & Support',
    description: 'Seamless deployment and ongoing maintenance',
    features: [
      'Vercel deployment',
      'Custom domain setup',
      'SSL certificates',
      'Ongoing support',
    ],
  },
];
