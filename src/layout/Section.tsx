import React from 'react';
import styled from 'styled-components';

const Section = ({
  children,
  backgroundColor
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <SectionWrapper backgroundColor={backgroundColor || 'transparent'}>{children}</SectionWrapper>
  );
};

const SectionWrapper = styled.section<{ backgroundColor: string }>`
  height: 500px;
  margin: 0 auto;
  padding: 20px;

  background-color: ${(props) => props.backgroundColor};
`;

export default Section;
