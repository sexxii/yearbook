import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  line-height: 1.8;
  font-size: 18px;
  font-weight: 300;
  color: rgba(71, 71, 71, 0.9);
`;

type Props = {
  children: React.ReactNode;
};

export const Body = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
