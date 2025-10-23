import type { Metadata } from 'next';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Grid } from '@/nmw-core/primitives';
import { Card, CardContent } from '@/nmw-core/components/ui';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us',
};

export default function ContactPage() {
  return (
    <>
      <Section className="bg-muted/20">
        <Container size="md">
          <div className="text-center">
            <Heading level="1" className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Get in Touch
            </Heading>
            <Text size="lg" className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? We&apos;d love to hear from you.
            </Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="lg">
          <Grid cols="2" gap="12" className="grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Heading level="2" variant="h3" className="mb-6">
                Send us a Message
              </Heading>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <Heading level="2" variant="h3" className="mb-6">
                Contact Information
              </Heading>

              <div className="space-y-6">
                <Card variant="bordered">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Heading level="3" variant="h5" className="mb-1">
                          Email
                        </Heading>
                        <Text className="text-muted-foreground">
                          contact@example.com
                        </Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Heading level="3" variant="h5" className="mb-1">
                          Location
                        </Heading>
                        <Text className="text-muted-foreground">
                          San Francisco, CA, USA
                        </Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card variant="bordered">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Heading level="3" variant="h5" className="mb-1">
                          Business Hours
                        </Heading>
                        <Text className="text-muted-foreground">
                          Monday - Friday: 9AM - 6PM PST
                        </Text>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
