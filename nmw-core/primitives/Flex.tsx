import * as React from 'react'
import { cn } from '../lib'
import type { PolymorphicProps } from '../lib'

/**
 * Flex - Helper de flexbox
 *
 * Composant qui facilite l'utilisation de flexbox avec des props dédiées.
 * Par défaut un div avec display: flex.
 *
 * @example
 * ```tsx
 * <Flex direction="row" gap="4" align="center" justify="between">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 *
 * <Flex direction="column" gap="8">
 *   <Card />
 *   <Card />
 * </Flex>
 * ```
 */

interface FlexOwnProps {
  /** Direction du flex (row | column) */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /** Alignement sur l'axe principal (justify-content) */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /** Alignement sur l'axe secondaire (align-items) */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  /** Wrap du flex */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** Gap entre les items (Tailwind spacing scale) */
  gap?: '0' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16'
  /** Inline flex au lieu de flex */
  inline?: boolean
}

type FlexProps<E extends React.ElementType = 'div'> = PolymorphicProps<E> & FlexOwnProps

const directionClasses = {
  row: 'flex-row',
  column: 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
}

const justifyClasses = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const alignClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}

const wrapClasses = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

const gapClasses = {
  '0': 'gap-0',
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '6': 'gap-6',
  '8': 'gap-8',
  '12': 'gap-12',
  '16': 'gap-16',
}

export const Flex = React.forwardRef(function Flex<E extends React.ElementType = 'div'>(
  {
    as,
    direction = 'row',
    justify,
    align,
    wrap,
    gap,
    inline = false,
    className,
    children,
    ...props
  }: FlexProps<E>,
  ref?: React.Ref<any>
) {
  const Component = as || 'div'

  return (
    <Component
      ref={ref}
      className={cn(
        inline ? 'inline-flex' : 'flex',
        direction && directionClasses[direction],
        justify && justifyClasses[justify],
        align && alignClasses[align],
        wrap && wrapClasses[wrap],
        gap && gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}) as <E extends React.ElementType = 'div'>(
  props: FlexProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null
