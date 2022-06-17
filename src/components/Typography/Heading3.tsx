import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  font-size: 22px;
  font-weight: 300;
  display: block;
  margin-bottom: 8px;
  color: rgba(71, 71, 71, 1);
  line-height: 1.8;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Heading3 = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
