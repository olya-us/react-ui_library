import { forwardRef, HTMLAttributes } from 'react'
import styles from './Card.module.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'outlined' | 'elevated' | 'filled'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'outlined', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[styles.card, styles[variant], className].join(' ')}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
