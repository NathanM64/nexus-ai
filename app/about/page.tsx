import type { Metadata } from 'next';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Grid } from '@/nmw-core/primitives';
import { Card, CardContent } from '@/nmw-core/components/ui';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about our company and mission',
};

export default function AboutPage() {
  return (
    <>
      <Section className="bg-muted/20">
        <Container size="md">
          <div className="text-center">
            <Heading level="1" className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              About Us
            </Heading>
            <Text size="lg" className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re on a mission to help businesses build beautiful, performant websites
              that convert visitors into customers.
            </Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <Grid cols="2" gap="12" className="grid-cols-1 md:grid-cols-2">
            <div>
              <Heading level="2" variant="h3" className="mb-4">
                Our Story
              </Heading>
              <Text className="text-muted-foreground mb-4">
                Founded in 2024, we started with a simple idea: make it easier for
                developers to build professional landing pages without starting from
                scratch every time.
              </Text>
              <Text className="text-muted-foreground">
                Today, we&apos;re proud to help thousands of developers and businesses
                launch their projects faster with our modern, customizable templates.
              </Text>
            </div>

            <div>
              <Heading level="2" variant="h3" className="mb-4">
                Our Mission
              </Heading>
              <Text className="text-muted-foreground mb-4">
                To provide developers with high-quality, production-ready templates
                that accelerate development and deliver exceptional user experiences.
              </Text>
              <Text className="text-muted-foreground">
                We believe that great design and clean code should be accessible to
                everyone, regardless of their experience level.
              </Text>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section className="bg-muted/20">
        <Container size="lg">
          <div className="text-center mb-12">
            <Heading level="2" className="text-3xl sm:text-4xl mb-4">
              Our Values
            </Heading>
          </div>

          <Grid cols="3" gap="8" className="grid-cols-1 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} variant="bordered">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <Heading level="3" variant="h4" className="mb-2">
                    {value.title}
                  </Heading>
                  <Text className="text-muted-foreground">{value.description}</Text>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

const values = [
  {
    icon: '🎯',
    title: 'Quality First',
    description: 'We never compromise on code quality or user experience.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Always staying ahead with the latest technologies and best practices.',
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Building tools that help developers succeed and grow together.',
  },
];
