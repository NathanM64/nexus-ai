import * as React from 'react'
import { cn } from '../../lib'

/**
 * Card - Composant carte composable
 *
 * Structure modulaire : Card > CardHeader > CardTitle/CardDescription
 *                              > CardContent
 *                              > CardFooter
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Titre de la carte</CardTitle>
 *     <CardDescription>Description optionnelle</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     Contenu principal
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant visuel de la carte */
  variant?: 'default' | 'elevated' | 'bordered'
  /** Ajouter un effet hover */
  hover?: boolean
}

const variantStyles = {
  default: 'bg-white dark:bg-gray-900 border border-border shadow-sm',
  elevated: 'bg-white dark:bg-gray-900 shadow-md',
  bordered: 'bg-white dark:bg-gray-900 border-2 border-border',
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg',
          variantStyles[variant],
          hover && 'transition-shadow duration-200 hover:shadow-lg',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

/**
 * CardHeader - En-tête de la carte
 */
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5 p-6', className)}
        {...props}
      />
    )
  }
)

CardHeader.displayName = 'CardHeader'

/**
 * CardTitle - Titre de la carte
 */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Niveau de heading HTML (défaut: h3) */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-xl font-semibold tracking-tight', className)}
        {...props}
      />
    )
  }
)

CardTitle.displayName = 'CardTitle'

/**
 * CardDescription - Description de la carte
 */
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    )
  }
)

CardDescription.displayName = 'CardDescription'

/**
 * CardContent - Contenu principal de la carte
 */
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      />
    )
  }
)

CardContent.displayName = 'CardContent'

/**
 * CardFooter - Pied de page de la carte (actions, boutons)
 */
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2 p-6 pt-0', className)}
        {...props}
      />
    )
  }
)

CardFooter.displayName = 'CardFooter'
