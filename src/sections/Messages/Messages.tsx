import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../../components/Typography/Heading2';
import { Body } from '../../components/Typography/Body';
import { text as NancyLetter } from './Letters/nancy';
import { text as DanLetter } from './Letters/dan';
import { text as VictoriaLetter } from './Letters/victoria';
import { text as PatrickLetter } from './Letters/patrick';
import { text as ChrisLetter } from './Letters/chris';
import { text as PeterLetter } from './Letters/peter';
import NancyImage from './images/nday.jpeg';
import DanImage from './images/dberry.jpeg';
import VictoriaImage from './images/vsakhnin.jpeg';
import PatrickImage from './images/plam.jpeg';
import ChrisImage from './images/cnielsen.jpeg';
import PeterImage from './images/pbuhr.jpeg';
import { Row } from 'src/components/Grid/Row';
import { Section } from 'src/components/Grid/Section';
import { Content } from 'src/components/Grid/Content';

const Wrapper = styled.div`
  width: 100%;
`;

const ProfilePicture = styled.img`
  min-width: 200px;
  width: 200px;
  object-fit: contain;
`;

const Letter = styled.div`
  flex-grow: 1;
  white-space: pre-wrap;
  margin-left: 28px;
`;

export const Messages = () => {
  return (
    <Section bgColor="#f3f3f3">
      <Content>
        <Heading2>Messages from Faculty</Heading2>
        <Row paddingTop="40px">
          <ProfilePicture src={PatrickImage} />
          <Letter>
            <Body>{PatrickLetter}</Body>
          </Letter>
        </Row>
        <Row paddingTop="40px">
          <ProfilePicture src={VictoriaImage} />
          <Letter>
            <Body>{VictoriaLetter}</Body>
          </Letter>
        </Row>
        <Row paddingTop="40px">
          <ProfilePicture src={DanImage} />
          <Letter>
            <Body>{DanLetter}</Body>
          </Letter>
        </Row>
        <Row paddingTop="40px">
          <ProfilePicture src={NancyImage} />
          <Letter>
            <Body>{NancyLetter}</Body>
          </Letter>
        </Row>
        <Row paddingTop="40px">
          <ProfilePicture src={ChrisImage} />
          <Letter>
            <Body>{ChrisLetter}</Body>
          </Letter>
        </Row>
        <Row paddingTop="40px">
          <ProfilePicture src={PeterImage} />
          <Letter>
            <Body>{PeterLetter}</Body>
          </Letter>
        </Row>
      </Content>
    </Section>
  );
};
