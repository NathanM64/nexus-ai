import Link from 'next/link';
import { Container } from '@/nmw-core/components/layout';
import { Flex, Grid, Text } from '@/nmw-core/primitives';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Social links with display labels
  const socialLinks: Record<string, string> = {
    github: 'GitHub',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
    facebook: 'Facebook',
    instagram: 'Instagram',
  };

  return (
    <footer className="border-t border-border bg-muted/20">
      <Container size="lg" className="py-12 md:py-16">
        <Grid cols="4" gap="8" className="mb-8 grid-cols-1 md:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link href="/" className="font-bold text-xl mb-4 inline-block">
              Logo
            </Link>
            <Text size="sm" className="text-muted-foreground">
              {SITE_CONFIG.description}
            </Text>
          </div>

          {/* Navigation Column */}
          <div>
            <Text className="font-semibold mb-4">Navigation</Text>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Column */}
          <div>
            <Text className="font-semibold mb-4">Legal</Text>
            <nav className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Social Column */}
          <div>
            <Text className="font-semibold mb-4">Connect</Text>
            <nav className="flex flex-col gap-2">
              {Object.entries(SITE_CONFIG.links).map(([key, url]) => {
                const label = socialLinks[key] || key.charAt(0).toUpperCase() + key.slice(1);
                return url ? (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                ) : null;
              })}
            </nav>
          </div>
        </Grid>

        <div className="pt-8 border-t border-border">
          <Flex justify="between" align="center" className="flex-col md:flex-row gap-4">
            <Text size="sm" className="text-muted-foreground">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </Text>
            <Text size="sm" className="text-muted-foreground">
              Built with ❤️ using Next.js
            </Text>
          </Flex>
        </div>
      </Container>
    </footer>
  );
}
