import TypographyProps from '../interfaces/TypographyProps';

const Link = ({ children, className, href, onClick }: TypographyProps) => (
  <a
    className={`text-l cursor-pointer  ${className}`}
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

export default Link;
