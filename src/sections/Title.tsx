import React from 'react';
import styled from 'styled-components';
import { Blockquote } from '../components/Typography/Blockquote';
import { Heading1 } from '../components/Typography/Heading1';

const Wrapper = styled.div`
  height: 100vh;
  padding-top: 30vh;
  width: 70%;
`;

export const Title = () => {
  return (
    <Wrapper>
      <Heading1>SE 2022 Yearbook</Heading1>
      <Blockquote>
        &quot;There is a clear increase in both wealth and degeneracy from 1A to
        4B as I look at these photos.&quot;
      </Blockquote>
    </Wrapper>
  );
};
