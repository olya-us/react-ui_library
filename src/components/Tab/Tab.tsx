// Update to use styles, add ARIA for tabs.
import { useState } from 'react';
import styles from './Tab.module.css';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  orientation?: 'horizontal' | 'vertical';
}

export const Tabs = ({ tabs, orientation = 'horizontal' }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={[styles.tabs, styles[orientation]].join(' ')}>
      <div role="tablist" className={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            className={[styles.tabItem, index === activeIndex ? styles.active : ''].join(' ')}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={`panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeIndex}`}
        className={styles.tabContent}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};