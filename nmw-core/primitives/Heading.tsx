import * as React from 'react'
import { cn } from '../lib'
import type { PolymorphicProps } from '../lib'

/**
 * Heading - Primitive de titres (h1-h6)
 *
 * Composant pour les titres avec support de différents niveaux sémantiques
 * et variants visuels. Le niveau sémantique (h1-h6) peut être différent
 * du style visuel.
 *
 * @example
 * ```tsx
 * <Heading level="1">Titre principal</Heading>
 * <Heading level="2" variant="h1">Titre h2 avec style h1</Heading>
 * <Heading level="3" size="lg" weight="semibold">Custom</Heading>
 * ```
 */

interface HeadingOwnProps {
  /** Niveau sémantique HTML (h1-h6) */
  level?: '1' | '2' | '3' | '4' | '5' | '6'
  /** Variant visuel prédéfini (override le style par défaut) */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /** Taille custom (override le variant) */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  /** Poids de la police */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  /** Couleur du texte */
  color?: 'default' | 'muted' | 'primary' | 'secondary'
  /** Alignement du texte */
  align?: 'left' | 'center' | 'right'
  /** Balance le texte (text-wrap: balance) */
  balance?: boolean
}

type HeadingProps<E extends React.ElementType = 'h2'> = PolymorphicProps<E> & HeadingOwnProps

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
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
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

// Variants prédéfinis avec responsive
const variantClasses = {
  h1: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight',
  h3: 'text-xl md:text-2xl font-semibold tracking-tight',
  h4: 'text-lg md:text-xl font-semibold',
  h5: 'text-base md:text-lg font-semibold',
  h6: 'text-base font-semibold',
}

export const Heading = React.forwardRef(function Heading<E extends React.ElementType = 'h2'>(
  {
    as,
    level = '2',
    variant,
    size,
    weight,
    color = 'default',
    align,
    balance = false,
    className,
    children,
    ...props
  }: HeadingProps<E>,
  ref?: React.Ref<any>
) {
  // Si 'as' est fourni, l'utiliser, sinon utiliser le niveau sémantique
  const Component = as || (`h${level}` as React.ElementType)

  // Si un variant est fourni, l'utiliser en priorité
  // Sinon, construire le style à partir des props individuelles
  const styleClasses = variant
    ? variantClasses[variant]
    : cn(
        size && sizeClasses[size],
        weight && weightClasses[weight],
        !size && !weight && 'font-semibold' // Défaut si rien n'est spécifié
      )

  return (
    <Component
      ref={ref}
      className={cn(
        styleClasses,
        colorClasses[color],
        align && alignClasses[align],
        balance && 'text-balance',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}) as <E extends React.ElementType = 'h2'>(
  props: HeadingProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null
