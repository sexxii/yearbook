import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ paddingTop: string }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: 14px;
`;

type Props = {
  children: React.ReactNode;
  paddingTop?: string;
};

export const Row = ({ children, paddingTop = '14px' }: Props) => {
  return <Wrapper paddingTop={paddingTop}>{children}</Wrapper>;
};
