import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 26px;
`;

type Props = {
  children: React.ReactNode;
};

export const Blockquote = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
