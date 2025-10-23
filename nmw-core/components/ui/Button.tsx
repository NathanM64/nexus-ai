import * as React from 'react'
import { cn } from '../../lib'

/**
 * Button - Composant bouton avec variants prédéfinis
 *
 * Supporte 6 variants (primary, secondary, outline, ghost, destructive, link),
 * 3 tailles (sm, md, lg), et des états comme loading.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Get Started</Button>
 * <Button variant="outline" leftIcon={<Icon />}>Learn More</Button>
 * <Button variant="ghost" isLoading>Saving...</Button>
 * ```
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variant visuel du bouton */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
  /** Taille du bouton */
  size?: 'sm' | 'md' | 'lg'
  /** État de chargement (désactive le bouton et affiche un spinner) */
  isLoading?: boolean
  /** Icône à gauche du texte */
  leftIcon?: React.ReactNode
  /** Icône à droite du texte */
  rightIcon?: React.ReactNode
  /** Utiliser avec Slot pour Next.js Link (nécessite @radix-ui/react-slot) */
  asChild?: boolean
}

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary',
  secondary: 'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary',
  outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus-visible:ring-primary',
  ghost: 'hover:bg-muted text-foreground',
  destructive: 'bg-error text-white hover:bg-error/90 focus-visible:ring-error',
  link: 'text-primary underline-offset-4 hover:underline',
}

const sizeStyles = {
  sm: 'h-8 px-3 py-1.5 text-sm',
  md: 'h-10 px-4 py-2 text-base',
  lg: 'h-12 px-6 py-3 text-lg',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Note: asChild nécessiterait @radix-ui/react-slot pour fonctionner
    // Pour l'instant, on l'ignore et on rend toujours un button
    const Component = 'button'

    return (
      <Component
        ref={ref}
        className={cn(
          // Styles de base
          'inline-flex items-center justify-center gap-2',
          'rounded-lg font-medium',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',

          // Variant et size
          variantStyles[variant],
          sizeStyles[size],

          // Override custom
          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <Spinner size={size} />
        ) : leftIcon ? (
          <span className="inline-flex shrink-0">{leftIcon}</span>
        ) : null}

        {children}

        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </Component>
    )
  }
)

Button.displayName = 'Button'

/**
 * Spinner - Indicateur de chargement pour le bouton
 */
function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  }

  return (
    <svg
      className={cn('animate-spin', sizeClasses[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}
