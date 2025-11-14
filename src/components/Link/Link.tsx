import { forwardRef, AnchorHTMLAttributes } from 'react'
import styles from './Link.module.css'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: 'none' | 'hover' | 'always'
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ underline = 'hover', className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={[
          styles.link,
          styles[`underline-${underline}`],
          className,
        ].join(' ')}
        {...props}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'
