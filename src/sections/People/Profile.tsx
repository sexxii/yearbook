import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  width: 23%;
  margin-bottom: 16px;
  @media (max-width: 800px) {
    display: block;
    width: 100%;
  }
`;

const AspectRatioBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(100% * (100 / 100));
`;

const Picture = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  opacity: 0.6;
  font-weight: 700;
  margin: 14px 0 4px 0;
  line-height: 1.2;
`;

const Quote = styled.h4`
  color: #8a7a99;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 300;
  margin-bottom: 4px;
`;

const IconTextContainer = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 6px;
  width: 20px;
`;

const LocationIcon = styled.div`
  padding-left: 3.76px;
  padding-right: 9px;
`;

const Text = styled.p`
  font-size: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: rgb(71, 71, 71);
  &:hover {
    color: #8a7a99;
  }
`;

type Props = {
  name: string;
  image: string;
  quote: string;
  link?: string;
  contact: string;
  linkedIn?: boolean;
  location: string;
};

export const Profile = ({
  name,
  image,
  quote,
  contact,
  link,
  linkedIn,
  location,
}: Props) => {
  return (
    <Wrapper>
      <AspectRatioBox>
        <Picture src={image} />
      </AspectRatioBox>
      <Name>{name}</Name>
      <Quote>{quote}</Quote>
      {contact && (
        <IconTextContainer>
          <IconContainer>
            {linkedIn ? (
              <FontAwesomeIcon icon={faLinkedin} />
            ) : (
              <FontAwesomeIcon icon={faAddressCard} />
            )}
          </IconContainer>
          {link ? <Link href={link}>{contact}</Link> : <Text>{contact}</Text>}
        </IconTextContainer>
      )}
      {location && (
        <IconTextContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faLocationDot} />
          </IconContainer>
          <Text>{location}</Text>
        </IconTextContainer>
      )}
    </Wrapper>
  );
};
