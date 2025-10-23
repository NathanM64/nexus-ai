'use client';

import { Container, Section } from '@/nmw-core/components/layout';
import { Text } from '@/nmw-core/primitives';
import { SOCIAL_PROOF } from '@/lib/constants';

export function SocialProof() {
  return (
    <Section className="bg-muted/30 border-y border-muted">
      <Container size="lg" className="py-8">
        <div className="text-center">
          <Text className="text-sm md:text-base text-muted-foreground mb-8">
            {SOCIAL_PROOF.title}
          </Text>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {SOCIAL_PROOF.companies.map((company, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl font-semibold text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
