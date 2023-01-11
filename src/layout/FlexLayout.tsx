import styled from 'styled-components';

type FlexLayoutProps = {
  children: React.ReactNode;
  flexDirection: 'row' | 'column';
  flexWrap: 'no-wrap' | 'wrap';
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly';
  alignItems: 'stretch' | 'flex-start' | 'flex-end' | 'center';
};

const FlexLayout = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems
}: FlexLayoutProps) => {
  return (
    <FlexLayoutWrapper
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </FlexLayoutWrapper>
  );
};

const FlexLayoutWrapper = styled.div<
  Pick<FlexLayoutProps, 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems'>
>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};

  height: 100%;
`;

export default FlexLayout;
