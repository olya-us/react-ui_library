import { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  orientation?: 'horizontal' | 'vertical';
}

export const Tabs: React.FC<TabsProps> = ({ tabs, orientation = 'horizontal' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`tabs ${orientation}`}>
      <ul className={`tab-list ${orientation}`}>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};