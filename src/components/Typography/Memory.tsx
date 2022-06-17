import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-style: italic;
  font-family: 'Source Code Pro', monospace;
  font-weight: 400;
  font-size: 1.5vw;
  letter-spacing: -1px;
  line-height: 1.4;
  color: rgba(71, 71, 71, 0.85);
  padding-left: 32px;
  border-left: 1px solid rgba(71, 71, 71, 0.7);
  @media (max-width: 800px) {
    font-size: 16px;
    border-left: none;
    padding-left: 0;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Memory = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
