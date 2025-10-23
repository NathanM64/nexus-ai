'use client';

import { Card, CardContent } from '@/nmw-core/components/ui';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Grid } from '@/nmw-core/primitives';
import * as LucideIcons from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

// Helper to render icon: supports ReactNode, Lucide icon names, or emoji strings
function renderIcon(icon: React.ReactNode | string) {
  if (typeof icon !== 'string') {
    return icon; // ReactNode (custom component)
  }

  // Try to load as Lucide icon if it starts with uppercase (e.g., "Sparkles", "Heart")
  if (icon[0] === icon[0].toUpperCase()) {
    const IconComponent = (LucideIcons as any)[icon];
    if (IconComponent) {
      return <IconComponent className="w-12 h-12 text-primary" />;
    }
  }

  // Fallback: render as emoji or plain string
  return <span role="img" aria-label="feature icon">{icon}</span>;
}

export function Features() {
  return (
    <Section id="features" className="bg-background">
      <Container size="lg">
        <AnimatedSection delay={100} animation="fade-up">
          <div className="text-center mb-12 lg:mb-16">
            <Heading
              level="2"
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
            >
              Everything You Need to Scale Content
            </Heading>
            <Text size="lg" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to supercharge your marketing workflow
            </Text>
          </div>
        </AnimatedSection>

        <Grid cols="3" gap="8" className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <AnimatedSection key={index} delay={200 + index * 150} animation="fade-up">
              <Card
                variant="bordered"
                hover
                className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted/50"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                    {renderIcon(feature.icon)}
                  </div>
                  <Heading level="3" variant="h4" className="mb-3 text-2xl font-semibold">
                    {feature.title}
                  </Heading>
                  <Text className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </Text>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
