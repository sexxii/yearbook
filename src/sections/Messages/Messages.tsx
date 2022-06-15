import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../../components/Typography/Heading2';
import { Body } from '../../components/Typography/Body';
import { text as DerekLetter } from './Letters/derek';
import { text as DanLetter } from './Letters/dan';
import { text as VictoriaLetter } from './Letters/victoria';
import { text as PatrickLetter } from './Letters/patrick';
import DerekImage from './images/drayside.png';
import DanImage from './images/dberry.jpeg';
import VictoriaImage from './images/vsakhnin.jpeg';
import PatrickImage from './images/plam.jpeg';
import { Row } from 'src/components/Grid/Row';

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
    <Wrapper>
      <Heading2>Messages from Faculty</Heading2>
      <Row>
        <ProfilePicture src={DerekImage} />
        <Letter>
          <Body>{DerekLetter}</Body>
        </Letter>
      </Row>
      <Row paddingTop="40px">
        <ProfilePicture src={VictoriaImage} />
        <Letter>
          <Body>{VictoriaLetter}</Body>
        </Letter>
      </Row>
      <Row paddingTop="40px">
        <ProfilePicture src={PatrickImage} />
        <Letter>
          <Body>{PatrickLetter}</Body>
        </Letter>
      </Row>
      <Row paddingTop="40px">
        <ProfilePicture src={DanImage} />
        <Letter>
          <Body>{DanLetter}</Body>
        </Letter>
      </Row>
    </Wrapper>
  );
};
