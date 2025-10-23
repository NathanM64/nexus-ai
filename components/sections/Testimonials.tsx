'use client';

import { Card, CardContent } from '@/nmw-core/components/ui';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Grid, Flex } from '@/nmw-core/primitives';
import { TESTIMONIALS } from '@/lib/constants';
import { Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-muted/20">
      <Container size="lg">
        <AnimatedSection delay={100} animation="fade-up">
          <div className="text-center mb-12 lg:mb-16">
            <Heading
              level="2"
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
            >
              What Our Customers Say
            </Heading>
            <Text size="lg" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied marketers transforming their content strategy
            </Text>
          </div>
        </AnimatedSection>

        <Grid cols="2" gap="8" className="grid-cols-1 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedSection key={index} delay={200 + index * 200} animation="scale">
              <Card
                variant="bordered"
                hover
                className="h-full transition-all duration-300 hover:shadow-xl border-muted/50"
              >
                <CardContent className="p-8 md:p-10">
                  <Quote className="w-10 h-10 text-primary/30 mb-6" />

                  <Text className="text-xl md:text-2xl mb-8 leading-relaxed">
                    {testimonial.quote}
                  </Text>

                  <Flex align="center" gap="4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shrink-0 flex items-center justify-center">
                      <Text className="text-xl font-bold text-primary">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </Text>
                    </div>
                    <div>
                      <Text className="font-semibold text-lg">{testimonial.author}</Text>
                      <Text size="sm" className="text-muted-foreground">
                        {testimonial.role}
                      </Text>
                      <Text size="sm" className="text-muted-foreground font-medium">
                        {testimonial.company}
                      </Text>
                    </div>
                  </Flex>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
