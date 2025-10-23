import * as React from 'react'
import { cn } from '../lib'
import type { PolymorphicProps } from '../lib'

/**
 * Grid - Helper de CSS Grid
 *
 * Composant qui facilite l'utilisation de CSS Grid avec des props dédiées.
 * Par défaut un div avec display: grid.
 *
 * @example
 * ```tsx
 * <Grid cols="3" gap="6">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 *
 * <Grid cols={{ base: '1', md: '2', lg: '3' }} gap="8">
 *   <ProjectCard />
 *   <ProjectCard />
 * </Grid>
 * ```
 */

interface GridOwnProps {
  /** Nombre de colonnes (responsive possible) */
  cols?: '1' | '2' | '3' | '4' | '5' | '6' | '12' | 'auto-fit' | 'auto-fill'
  /** Nombre de rangées */
  rows?: '1' | '2' | '3' | '4' | '5' | '6' | 'auto'
  /** Gap entre les items (Tailwind spacing scale) */
  gap?: '0' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16' | '24'
  /** Gap horizontal uniquement */
  gapX?: '0' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16'
  /** Gap vertical uniquement */
  gapY?: '0' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16'
  /** Alignement des items sur l'axe horizontal */
  justify?: 'start' | 'end' | 'center' | 'stretch'
  /** Alignement des items sur l'axe vertical */
  align?: 'start' | 'end' | 'center' | 'stretch'
  /** Auto-flow direction */
  flow?: 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense'
  /** Inline grid au lieu de grid */
  inline?: boolean
}

type GridProps<E extends React.ElementType = 'div'> = PolymorphicProps<E> & GridOwnProps

const colsClasses = {
  '1': 'grid-cols-1',
  '2': 'grid-cols-2',
  '3': 'grid-cols-3',
  '4': 'grid-cols-4',
  '5': 'grid-cols-5',
  '6': 'grid-cols-6',
  '12': 'grid-cols-12',
  'auto-fit': 'grid-cols-[repeat(auto-fit,minmax(0,1fr))]',
  'auto-fill': 'grid-cols-[repeat(auto-fill,minmax(0,1fr))]',
}

const rowsClasses = {
  '1': 'grid-rows-1',
  '2': 'grid-rows-2',
  '3': 'grid-rows-3',
  '4': 'grid-rows-4',
  '5': 'grid-rows-5',
  '6': 'grid-rows-6',
  auto: 'grid-rows-auto',
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
  '24': 'gap-24',
}

const gapXClasses = {
  '0': 'gap-x-0',
  '1': 'gap-x-1',
  '2': 'gap-x-2',
  '3': 'gap-x-3',
  '4': 'gap-x-4',
  '6': 'gap-x-6',
  '8': 'gap-x-8',
  '12': 'gap-x-12',
  '16': 'gap-x-16',
}

const gapYClasses = {
  '0': 'gap-y-0',
  '1': 'gap-y-1',
  '2': 'gap-y-2',
  '3': 'gap-y-3',
  '4': 'gap-y-4',
  '6': 'gap-y-6',
  '8': 'gap-y-8',
  '12': 'gap-y-12',
  '16': 'gap-y-16',
}

const justifyClasses = {
  start: 'justify-items-start',
  end: 'justify-items-end',
  center: 'justify-items-center',
  stretch: 'justify-items-stretch',
}

const alignClasses = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  stretch: 'items-stretch',
}

const flowClasses = {
  row: 'grid-flow-row',
  column: 'grid-flow-col',
  dense: 'grid-flow-dense',
  'row-dense': 'grid-flow-row-dense',
  'column-dense': 'grid-flow-col-dense',
}

export const Grid = React.forwardRef(function Grid<E extends React.ElementType = 'div'>(
  {
    as,
    cols,
    rows,
    gap,
    gapX,
    gapY,
    justify,
    align,
    flow,
    inline = false,
    className,
    children,
    ...props
  }: GridProps<E>,
  ref?: React.Ref<any>
) {
  const Component = as || 'div'

  return (
    <Component
      ref={ref}
      className={cn(
        inline ? 'inline-grid' : 'grid',
        cols && colsClasses[cols],
        rows && rowsClasses[rows],
        gap && gapClasses[gap],
        gapX && gapXClasses[gapX],
        gapY && gapYClasses[gapY],
        justify && justifyClasses[justify],
        align && alignClasses[align],
        flow && flowClasses[flow],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}) as <E extends React.ElementType = 'div'>(
  props: GridProps<E> & { ref?: React.Ref<any> }
) => React.ReactElement | null
