'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/nmw-core/components/ui';
import { Container } from '@/nmw-core/components/layout';
import { Flex } from '@/nmw-core/primitives';
import { Menu, X, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/nmw-core/lib/cn';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container size="lg">
        <Flex justify="between" align="center" className="h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <Sparkles className="w-6 h-6 text-primary" />
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <Flex align="center" gap="2">
            <ThemeToggle />

            <Button
              variant="primary"
              size="sm"
              className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
              asChild
            >
              <a href="#pricing">Start Free Trial</a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </Flex>
        </Flex>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" asChild>
              <a href="#pricing">Start Free Trial</a>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
