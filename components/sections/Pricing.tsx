'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge, Button } from '@/nmw-core/components/ui';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Grid, Flex } from '@/nmw-core/primitives';
import { Check } from 'lucide-react';
import { cn } from '@/nmw-core/lib/cn';
import { PRICING_PLANS } from '@/lib/constants';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Pricing() {
  return (
    <Section id="pricing" className="bg-background">
      <Container size="lg">
        <AnimatedSection delay={100} animation="fade-up">
          <div className="text-center mb-12 lg:mb-16">
            <Heading
              level="2"
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
            >
              Simple, Transparent Pricing
            </Heading>
            <Text size="lg" className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees.
            </Text>
          </div>
        </AnimatedSection>

        <Grid cols="3" gap="8" className="grid-cols-1 md:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <AnimatedSection key={index} delay={200 + index * 150} animation="fade-up">
              <Card
                variant={plan.highlighted ? 'elevated' : 'bordered'}
                className={cn(
                  'h-full relative transition-all duration-300 hover:-translate-y-1',
                  plan.highlighted && 'border-2 border-primary/50 shadow-2xl md:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5'
                )}
              >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge
                    variant="primary"
                    size="md"
                    className="bg-gradient-to-r from-accent to-secondary text-white shadow-lg"
                  >
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl md:text-3xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>

                <div className="mt-6">
                  {plan.price === null ? (
                    <div className="text-5xl font-bold">Custom</div>
                  ) : (
                    <Flex align="baseline" justify="center" gap="1">
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className="text-lg text-muted-foreground">/mo</span>
                    </Flex>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <Text className="text-base">{feature}</Text>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className={cn(
                    'w-full',
                    plan.highlighted && 'bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]'
                  )}
                  asChild
                >
                  <a href="#pricing">
                    {plan.price === null ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </Button>
              </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
