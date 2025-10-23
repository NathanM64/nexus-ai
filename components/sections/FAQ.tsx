'use client';

import { useState } from 'react';
import { Container, Section } from '@/nmw-core/components/layout';
import { Heading, Text, Box } from '@/nmw-core/primitives';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/nmw-core/lib/cn';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: readonly FAQItem[] | FAQItem[];
}

function FAQAccordionItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <Text className="font-semibold pr-4">{question}</Text>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-4">
          <Text className="text-muted-foreground">{answer}</Text>
        </div>
      </div>
    </Box>
  );
}

export function FAQ({ title, subtitle, items }: FAQProps) {
  return (
    <Section className="bg-muted/20">
      <Container size="md">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <Heading
                level="2"
                className="text-3xl sm:text-4xl lg:text-5xl mb-4"
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text size="lg" className="text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </Text>
            )}
          </div>
        )}

        <div className="space-y-4">
          {items.map((item, index) => (
            <FAQAccordionItem key={index} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
