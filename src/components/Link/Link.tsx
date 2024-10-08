export interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  target = '_self',
  rel,
  children,
}) => {
  return (
    <a className="link" href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};
