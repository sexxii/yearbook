import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-family: 'Inconsolata', monospace;
  font-weight: 900;
  font-size: 96px;
`;

type Props = {
  children: React.ReactNode;
};

export const Heading1 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
