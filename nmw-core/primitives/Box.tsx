import * as React from 'react'
import { cn } from '../lib'
import type { PolymorphicProps } from '../lib'

/**
 * Box - Primitive polymorphique de base
 *
 * Composant div par défaut, peut être rendu comme n'importe quel élément HTML
 * via la prop `as`. Supporte toutes les props HTML natives + className.
 *
 * @example
 * ```tsx
 * <Box className="p-4 bg-gray-100">Contenu</Box>
 * <Box as="section" className="my-8">Section</Box>
 * <Box as="a" href="/about" className="text-blue-500">Lien</Box>
 * ```
 */

type BoxProps<E extends React.ElementType = 'div'> = PolymorphicProps<E>

export const Box = React.forwardRef(function Box<E extends React.ElementType = 'div'>(
  { as, className, children, ...props }: BoxProps<E>,
  ref?: React.Ref<any>
) {
  const Component = as || 'div'

  return (
    <Component ref={ref} className={cn(className)} {...props}>
      {children}
    </Component>
  )
}) as <E extends React.ElementType = 'div'>(
  props: BoxProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null
