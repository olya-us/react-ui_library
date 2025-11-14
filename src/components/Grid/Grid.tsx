import { forwardRef, CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  columns?: number | string
  gap?: string
  templateColumns?: string
  templateRows?: string
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      columns,
      gap = 'var(--spacing-m)',
      templateColumns,
      templateRows,
      style,
      ...props
    },
    ref
  ) => {
    const gridStyle: CSSProperties = {
      display: 'grid',
      gap,
      gridTemplateColumns:
        templateColumns || (columns ? `repeat(${columns}, 1fr)` : undefined),
      gridTemplateRows: templateRows,
      ...style,
    }

    return (
      <div ref={ref} style={gridStyle} {...props}>
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'
