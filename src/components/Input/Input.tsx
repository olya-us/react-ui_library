import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import styles from './Input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, disabled, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label} htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={[
            styles.input,
            error ? styles.error : '',
            disabled ? styles.disabled : '',
            className,
          ].join(' ')}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? 'error-message' : undefined}
          {...props}
        />
        {helperText && <span className={styles.helper}>{helperText}</span>}
        {error && (
          <span id="error-message" className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
