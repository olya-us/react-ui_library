import { forwardRef, ReactNode, useState } from 'react';
import styles from './Dropdown.module.css';

export interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  position?: 'bottom-left' | 'bottom-right';
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({
  trigger,
  children,
  position = 'bottom-left',
}, ref) => {
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className={[styles.menu, styles[position]].join(' ')}>
          {children}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';
