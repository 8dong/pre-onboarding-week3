import React from 'react';
import styled from 'styled-components';

const AbsoluteContainer = ({ children }: { children: React.ReactNode }) => {
  return <AbsoluteContainerWrapper>{children}</AbsoluteContainerWrapper>;
};

const AbsoluteContainerWrapper = styled.div`
  position: relative;
`;

export default AbsoluteContainer;
