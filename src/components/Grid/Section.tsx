import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ bgColor: string }>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

type Props = {
  children: React.ReactNode;
  bgColor?: string;
};

export const Section = ({ children, bgColor = '#d7fff7ef' }: Props) => {
  return <Wrapper bgColor={bgColor}>{children}</Wrapper>;
};
