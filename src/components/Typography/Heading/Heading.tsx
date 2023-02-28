import TypographyProps from '../interfaces/TypographyProps';

const Heading = ({ children, className }: TypographyProps) => (
  <h1 className={`text-3xl ${className}`}>{children}</h1>
);

export default Heading;
