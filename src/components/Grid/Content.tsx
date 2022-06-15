import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1200px;
  width: 80%;
  min-height: 100%;
  margin: 0px auto;
  padding: 12% 0 0 0;
`;

type Props = {
  children: React.ReactNode;
};

export const Content = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
