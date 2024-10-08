export interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  children: React.ReactNode;
  underline?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  target = '_self',
  rel,
  children,
  underline = false,
}) => {
  return (
    <a className={`link ${underline ? 'underline' : ''}`} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};