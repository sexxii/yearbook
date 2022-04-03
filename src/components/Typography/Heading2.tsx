import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-family: 'Inconsolata', monospace;
  font-weight: 900;
  font-size: 72px;
  padding-top: 40px;
`;

type Props = {
  children: React.ReactNode;
};

export const Heading2 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
