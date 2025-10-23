import * as React from 'react'
import { cn } from '../../lib'

/**
 * Badge - Pastille de statut ou tag
 *
 * Supporte plusieurs variants pour différents cas d'usage
 * (statuts, catégories, compteurs, etc.)
 *
 * @example
 * ```tsx
 * <Badge variant="primary">Nouveau</Badge>
 * <Badge variant="success">Actif</Badge>
 * <Badge variant="warning">En attente</Badge>
 * <Badge variant="error">Erreur</Badge>
 * ```
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Variant de couleur */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'outline'
  /** Taille du badge */
  size?: 'sm' | 'md' | 'lg'
}

const variantStyles = {
  default: 'bg-muted text-muted-foreground',
  primary: 'bg-primary/10 text-primary border border-primary/20',
  success: 'bg-success/10 text-success border border-success/20',
  warning: 'bg-warning/10 text-warning border border-warning/20',
  error: 'bg-error/10 text-error border border-error/20',
  outline: 'bg-transparent text-foreground border border-border',
}

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-0.5',
  lg: 'text-base px-3 py-1',
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          // Styles de base
          'inline-flex items-center gap-1',
          'rounded-full font-medium',
          'transition-colors duration-200',

          // Variant et size
          variantStyles[variant],
          sizeStyles[size],

          // Override custom
          className
        )}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'
