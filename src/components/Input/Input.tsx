export interface InputProps {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
};
  
export const Input = ({
    disabled = false,
    ...props
  }: InputProps) => {
    const disabledInput = disabled ? 'disabled' : '';
    return (
      <input
        type="button"
        className={disabledInput}
        {...props}
      />
    );
};