export interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

export const Button = ({
  primary = false,
  disabled = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary';
  const disabledBtn = disabled ? 'disabled' : '';
  return (
    <button
      type="button"
      className={[`button--${size}`, mode, disabledBtn].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};