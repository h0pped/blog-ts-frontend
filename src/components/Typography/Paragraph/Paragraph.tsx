import TypographyProps from '../interfaces/TypographyProps';

const Paragraph = ({ children, className }: TypographyProps) => (
  <p className={`text-l ${className}`}>{children}</p>
);

export default Paragraph;
