import React from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../components/Typography/Heading2';
import { Heading3 } from '../../components/Typography/Heading3';
import { Heading4 } from '../../components/Typography/Heading4';
import { Body } from '../../components/Typography/Body';
import { Section } from 'src/components/Grid/Section';
import { Content } from 'src/components/Grid/Content';

const Link = styled.a`
  text-decoration: underline;
  color: rgb(71, 71, 71);
  &:hover {
    color: #8a7a99;
  }
`;

const Spacer = styled.div`
  height: 40px;
  background-color: #f3f3f3;
`;

const Footer = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1200px;
  width: 80%;
  min-height: 100%;
  margin: 0px auto;
  padding: 40px 0;
  font-size: 16px;
  line-height: 1.8;
  font-weight: 300;
  color: rgba(71, 71, 71, 0.9);
`;

export const ThankYou = () => {
  return (
    <>
      <Section bgColor="#f3f3f3">
        <Content>
          <Heading2>Thank You!</Heading2>
          <Heading3>
            We hope you enjoyed viewing the University of Waterloo Software
            Engineering 2022 Yearbook!
          </Heading3>
          <Heading4>Acknowledgements</Heading4>
          <Body>
            This project was inspired by the Software Engineering Class of 2019
            website, <Link href="https://softi.es/">https://softi.es/</Link>.
            The styling was inspired by the Software Engineering Class of 2021
            Class Profile,{' '}
            <Link href="https://sexxis.github.io/classprofile/">
              https://sexxis.github.io/classprofile/
            </Link>
            .
          </Body>
        </Content>
      </Section>
      <Spacer />
      <Section bgColor="#e4f4f3">
        <Footer>
          <p>
            In classic SE fashion, the source code for this website is available
            on <Link href="https://github.com/sexxii/yearbook">Github</Link>.
            Create a PR to fix mistakes or update your information.
          </p>
        </Footer>
      </Section>
    </>
  );
};
