import { forwardRef, HTMLAttributes } from 'react';
import styles from './Loader.module.css';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(({
  size = 'medium',
  color,
  className,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={[styles.loader, styles[size], className].join(' ')}
      style={{ '--loader-color': color } as React.CSSProperties}
      {...props}
    />
  );
});

Loader.displayName = 'Loader';
