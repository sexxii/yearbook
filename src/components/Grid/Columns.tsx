import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const LeftWrapper = styled.div`
  vertical-align: top;
  @media (min-width: 800px) {
    display: inline-block;
    width: 42%;
    padding: 0 4% 16px 0;
  }
  @media (max-width: 800px) {
    display: block;
    width: 100%;
    padding: 16px 0;
  }
  @media print {
    display: block;
    width: 100%;
    padding: 16px;
  }
`;

export const LeftColumn = ({ children }: Props) => {
  return <LeftWrapper>{children}</LeftWrapper>;
};

const RightWrapper = styled.div`
  @media (min-width: 800px) {
    width: 42%;
    padding: 0 4% 16px 0;
  }
  @media (max-width: 800px) {
  }
`;

export const RightColumn = ({ children }: Props) => {
  return <RightWrapper>{children}</RightWrapper>;
};
