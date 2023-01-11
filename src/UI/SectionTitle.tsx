import styled from 'styled-components';

const SectionTitle = ({ children }: { children: string }) => {
  return <SectionTitleWrapper>{children}</SectionTitleWrapper>;
};

const SectionTitleWrapper = styled.h2`
  white-space: pre-wrap;
  text-align: center;
`;

export default SectionTitle;
