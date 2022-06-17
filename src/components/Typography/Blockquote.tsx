import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-style: italic;
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  font-size: 1.5vw;
  letter-spacing: -1px;
  line-height: 1.4;
  color: rgba(71, 71, 71, 0.85);
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Blockquote = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
