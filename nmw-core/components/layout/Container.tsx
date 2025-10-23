import * as React from 'react'
import { cn } from '../../lib'

/**
 * Container - Wrapper responsive avec max-width
 *
 * Centre le contenu et applique une largeur maximale responsive.
 * Utilisé pour maintenir une largeur de lecture confortable.
 *
 * @example
 * ```tsx
 * <Container>Contenu centré</Container>
 * <Container size="lg">Contenu large</Container>
 * <Container size="full">Pleine largeur</Container>
 * ```
 */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Taille maximale du container */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Désactiver le padding horizontal */
  noPadding?: boolean
}

const sizeStyles = {
  sm: 'max-w-3xl',     // 768px
  md: 'max-w-5xl',     // 1024px
  lg: 'max-w-7xl',     // 1280px
  xl: 'max-w-[1440px]',
  full: 'max-w-full',
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', noPadding = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Centrage et largeur max
          'mx-auto w-full',
          sizeStyles[size],

          // Padding horizontal (sauf si désactivé)
          !noPadding && 'px-4 md:px-6 lg:px-8',

          // Override custom
          className
        )}
        {...props}
      />
    )
  }
)

Container.displayName = 'Container'
