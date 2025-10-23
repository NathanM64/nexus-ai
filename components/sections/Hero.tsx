'use client';

import { Button } from '@/nmw-core/components/ui';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text } from '@/nmw-core/primitives';
import { ArrowRight, Play } from 'lucide-react';
import { HERO } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Hero() {
  return (
    <Section id="hero" className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <Container size="lg" className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection delay={100} animation="fade-up">
            <Heading
              level="1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 font-bold leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            >
              {HERO.title}
            </Heading>
          </AnimatedSection>

          <AnimatedSection delay={300} animation="fade-up">
            <Text
              size="lg"
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              balance
            >
              {HERO.subtitle}
            </Text>
          </AnimatedSection>

          <AnimatedSection delay={500} animation="scale">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-shadow duration-300"
                asChild
              >
                <a href={HERO.cta.primary.href}>{HERO.cta.primary.label}</a>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                leftIcon={<Play className="w-5 h-5" />}
                asChild
              >
                <a href={HERO.cta.secondary.href}>{HERO.cta.secondary.label}</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </Section>
  );
}
