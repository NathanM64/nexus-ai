'use client';

import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text } from '@/nmw-core/primitives';
import { HOW_IT_WORKS } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/20">
      <Container size="lg">
        <AnimatedSection delay={100} animation="fade-up">
          <div className="text-center mb-16">
            <Heading
              level="2"
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
            >
              How It Works
            </Heading>
            <Text size="lg" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in 3 simple steps
            </Text>
          </div>
        </AnimatedSection>

        <div className="space-y-16 md:space-y-24">
          {HOW_IT_WORKS.map((step, index) => (
            <AnimatedSection
              key={step.step}
              delay={200 + index * 200}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Step number with gradient background */}
                <div className="flex-shrink-0 relative">
                  <div className="text-[120px] md:text-[160px] font-bold text-transparent bg-gradient-to-br from-primary/20 to-secondary/20 bg-clip-text select-none">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl -z-10" />
                </div>

                {/* Step content */}
                <div className="flex-1 text-center md:text-left">
                  <Heading level="3" variant="h3" className="text-3xl md:text-4xl mb-4 font-semibold">
                    {step.title}
                  </Heading>
                  <Text className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    {step.description}
                  </Text>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
