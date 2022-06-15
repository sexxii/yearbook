import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

type Props = {
  children: React.ReactNode;
  paddingTop?: string;
};

export const CenterAlign = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
