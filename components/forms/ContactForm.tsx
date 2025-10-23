'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@/nmw-core/components/ui';
import { contactSchema, type ContactFormData } from '@/lib/validations/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Name"
        type="text"
        placeholder="John Doe"
        error={errors.name?.message}
        {...register('name')}
      />

      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Subject"
        type="text"
        placeholder="How can we help?"
        error={errors.subject?.message}
        {...register('subject')}
      />

      <Textarea
        label="Message"
        placeholder="Tell us more about your project..."
        rows={6}
        error={errors.message?.message}
        {...register('message')}
      />

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-success/10 text-success border border-success/20">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-error/10 text-error border border-error/20">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
