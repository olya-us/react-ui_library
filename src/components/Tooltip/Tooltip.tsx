import { forwardRef, ReactNode, useState } from 'react';
import styles from './Tooltip.module.css';

export interface TooltipProps {
  title: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({
  title,
  children,
  position = 'top',
}, ref) => {
  const [show, setShow] = useState(false);

  return (
    <div ref={ref} className={styles.wrapper} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && <div className={[styles.tooltip, styles[position]].join(' ')}>{title}</div>}
    </div>
  );
});

Tooltip.displayName = 'Tooltip';
