import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  font-size: 3.5vw;
  letter-spacing: -2px;
  line-height: 1.2;
`;

type Props = {
  children: React.ReactNode;
};

export const Heading1 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
