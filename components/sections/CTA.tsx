'use client';

import { Button } from '@/nmw-core/components/ui';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text } from '@/nmw-core/primitives';
import { ArrowRight } from 'lucide-react';
import { CTA_FINAL } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <Container size="lg" className="relative z-10 py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <AnimatedSection delay={100} animation="fade-up">
            <Heading
              level="2"
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white font-bold"
            >
              {CTA_FINAL.title}
            </Heading>
          </AnimatedSection>

          <AnimatedSection delay={300} animation="fade-up">
            <Text size="lg" className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
              {CTA_FINAL.subtitle}
            </Text>
          </AnimatedSection>

          <AnimatedSection delay={500} animation="scale">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-2xl text-lg px-8 py-6"
              asChild
            >
              <a href={CTA_FINAL.cta.href}>{CTA_FINAL.cta.label}</a>
            </Button>

            <Text size="sm" className="mt-6 text-white/80">
              {CTA_FINAL.note}
            </Text>
          </AnimatedSection>
        </div>
      </Container>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
      </div>
    </Section>
  );
}
