import React from 'react';
import styled from 'styled-components';
import { Blockquote } from '../components/Typography/Blockquote';
import { Heading1 } from '../components/Typography/Heading1';
import cover from 'src/assets/cover.png';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #e4f4f3;
  background-position: center center;
`;

const Half = styled.div`
  height: 100vh;
  padding-top: 30vh;
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = () => {
  return (
    <Wrapper>
      <section>
        <Half>
          <Heading1>SE 2022 Yearbook</Heading1>
          <Blockquote>
            &quot;There is a clear increase in both wealth and degeneracy from
            1A to 4B as I look at these photos.&quot;
          </Blockquote>
        </Half>
      </section>
    </Wrapper>
  );
};
