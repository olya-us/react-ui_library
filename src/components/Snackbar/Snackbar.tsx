import { forwardRef, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Snackbar.module.css';

export interface SnackbarProps {
  message: ReactNode;
  open: boolean;
  autoHideDuration?: number;
  onClose: () => void;
  variant?: 'success' | 'error' | 'info';
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(({
  message,
  open,
  autoHideDuration = 3000,
  onClose,
  variant = 'info',
}, ref) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  if (!open) return null;

  return createPortal(
    <div ref={ref} className={[styles.snackbar, styles[variant]].join(' ')}>
      {message}
      <button onClick={onClose} className={styles.close}>×</button>
    </div>,
    document.body
  );
});

Snackbar.displayName = 'Snackbar';
