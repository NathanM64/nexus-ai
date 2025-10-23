import * as React from 'react'
import { cn } from '../lib'
import type { PolymorphicProps } from '../lib'

/**
 * Text - Primitive de typographie
 *
 * Composant p par défaut pour le contenu textuel.
 * Supporte différentes tailles, poids et couleurs via props.
 *
 * @example
 * ```tsx
 * <Text>Texte par défaut</Text>
 * <Text size="lg" weight="medium">Texte important</Text>
 * <Text as="span" color="muted">Métadonnée</Text>
 * ```
 */

interface TextOwnProps {
  /** Taille du texte */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  /** Poids de la police */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  /** Couleur du texte */
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  /** Alignement du texte */
  align?: 'left' | 'center' | 'right' | 'justify'
  /** Truncate avec ellipsis */
  truncate?: boolean
  /** Balance le texte (text-wrap: balance) */
  balance?: boolean
}

type TextProps<E extends React.ElementType = 'p'> = PolymorphicProps<E> & TextOwnProps

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
}

const colorClasses = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
}

export const Text = React.forwardRef(function Text<E extends React.ElementType = 'p'>(
  {
    as,
    size = 'base',
    weight = 'normal',
    color = 'default',
    align,
    truncate = false,
    balance = false,
    className,
    children,
    ...props
  }: TextProps<E>,
  ref?: React.Ref<any>
) {
  const Component = as || 'p'

  return (
    <Component
      ref={ref}
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        align && alignClasses[align],
        truncate && 'truncate',
        balance && 'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}) as <E extends React.ElementType = 'p'>(
  props: TextProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null
