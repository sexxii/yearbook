import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.2;
  font-size: 28px;
  margin-bottom: 32px;
  margin-top: 96px;
`;

type Props = {
  children: React.ReactNode;
};

export const Heading4 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
