import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: -2px;
  margin-bottom: 32px;
  &:before {
    content: '>';
    position: absolute;
    transform: translate(-100%, 0);
    padding-right: 16px;
    font-size: 36px;
    padding-top: 6px;
    opacity: 0.5;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Heading2 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
