import { useState } from 'react'
import styles from './Accordion.module.css'

interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index)
      return allowMultiple ? [...prev, index] : [index]
    })
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        return (
          <div key={index} className={styles.item}>
            <button
              className={styles.title}
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              aria-controls={`content-${index}`}
              id={`title-${index}`}
            >
              {item.title}
            </button>
            {isOpen && (
              <div
                id={`content-${index}`}
                role="region"
                aria-labelledby={`title-${index}`}
                className={styles.content}
              >
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
