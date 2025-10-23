import * as React from 'react'
import { cn } from '../../lib'

/**
 * Section - Wrapper de section avec padding vertical responsive
 *
 * Ajoute automatiquement un espacement vertical cohérent
 * entre les sections d'une page.
 *
 * @example
 * ```tsx
 * <Section>
 *   <Container>Contenu de la section</Container>
 * </Section>
 *
 * <Section size="lg" className="bg-muted">
 *   Section avec plus d'espacement
 * </Section>
 * ```
 */

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Taille du padding vertical */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Élément HTML à utiliser (default: section) */
  as?: 'section' | 'div' | 'article' | 'aside' | 'main'
}

const sizeStyles = {
  sm: 'py-8 md:py-12',          // 32px -> 48px
  md: 'py-12 md:py-16 lg:py-20', // 48px -> 64px -> 80px
  lg: 'py-16 md:py-20 lg:py-24', // 64px -> 80px -> 96px
  xl: 'py-20 md:py-24 lg:py-32', // 80px -> 96px -> 128px
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ size = 'md', as = 'section', className, ...props }, ref) => {
    const Component = as

    return (
      <Component
        ref={ref as React.Ref<HTMLElement & HTMLDivElement & HTMLParagraphElement>}
        className={cn(
          // Padding vertical responsive
          sizeStyles[size],

          // Override custom
          className
        )}
        {...props}
      />
    )
  }
)

Section.displayName = 'Section'
