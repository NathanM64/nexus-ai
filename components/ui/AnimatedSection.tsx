'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { animate, inView } from 'motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animations = {
      'fade-up': {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
      },
      'fade-in': {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      },
      scale: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
      },
      'slide-left': {
        initial: { opacity: 0, x: -40 },
        animate: { opacity: 1, x: 0 },
      },
      'slide-right': {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
      },
    };

    const { initial, animate: animateProps } = animations[animation];

    // Set initial state
    Object.entries(initial).forEach(([key, value]) => {
      if (ref.current) {
        (ref.current.style as any)[key] = value;
      }
    });

    // Animate when in view
    const stop = inView(
      ref.current,
      () => {
        if (!ref.current) return;

        animate(
          ref.current,
          animateProps,
          {
            duration: 0.6,
            easing: [0.25, 0.1, 0.25, 1],
            delay: delay / 1000,
          }
        );
      },
      { amount: 0.2 }
    );

    return () => stop();
  }, [delay, animation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
