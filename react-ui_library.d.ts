import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const Accordion: React.FC<AccordionProps>;

declare interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

declare interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
}

export declare const Button: ({ primary, disabled, size, label, ...props }: ButtonProps) => JSX_2.Element;

declare interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export declare const Input: ({ disabled, ...props }: InputProps) => JSX_2.Element;

declare interface InputProps {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}

export declare const Link: React.FC<LinkProps>;

declare interface LinkProps {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    rel?: string;
    children: React.ReactNode;
    underline?: boolean;
}

declare interface Tab {
    label: string;
    content: React.ReactNode;
}

export declare const Tabs: React.FC<TabsProps>;

declare interface TabsProps {
    tabs: Tab[];
    orientation?: 'horizontal' | 'vertical';
}

export { }
