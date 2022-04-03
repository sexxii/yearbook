import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
`;

type Props = {
  children: React.ReactNode;
};

export const Body = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
