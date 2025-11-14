import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import styles from './Badge.module.css'

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode
  children: ReactNode
  variant?: 'standard' | 'dot'
  color?: 'primary' | 'secondary' | 'success' | 'error'
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      content,
      children,
      variant = 'standard',
      color = 'primary',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={[styles.badge, className].join(' ')} {...props}>
        {children}
        <span
          className={[styles.badgeContent, styles[variant], styles[color]].join(
            ' '
          )}
        >
          {variant === 'dot' ? null : content}
        </span>
      </div>
    )
  }
)

Badge.displayName = 'Badge'
