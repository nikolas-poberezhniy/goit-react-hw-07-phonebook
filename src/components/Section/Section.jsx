import { SectionWrapper } from './Section.style';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
};
