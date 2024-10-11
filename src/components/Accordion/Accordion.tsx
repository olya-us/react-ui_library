import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean; 
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="accordion">
        {items.map((item, index) => (
            <div key={index} className="accordion-item">
                <div
                    className="accordion-title"
                    onClick={() => handleToggle(index)}
                >
                    {item.title}
                </div>
                {openIndexes.includes(index) && (
                    <div className="accordion-content">{item.content}</div>
                )}
            </div>
        ))}
    </div>
  );
};