import { forwardRef, CSSProperties, HTMLAttributes, ReactNode } from 'react'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  direction?: 'row' | 'column'
  align?: string
  justify?: string
  gap?: string
  wrap?: string
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      direction = 'row',
      align = 'center',
      justify = 'flex-start',
      gap = 'var(--spacing-m)',
      wrap = 'nowrap',
      style,
      ...props
    },
    ref
  ) => {
    const flexStyle: CSSProperties = {
      display: 'flex',
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      gap,
      flexWrap: wrap as CSSProperties['flexWrap'],
      ...(style as CSSProperties),
    }

    return (
      <div ref={ref} style={flexStyle} {...props}>
        {children}
      </div>
    )
  }
)

Flex.displayName = 'Flex'
