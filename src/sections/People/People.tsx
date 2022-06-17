import React from 'react';
import styled from 'styled-components';
import { Heading2 } from '../../components/Typography/Heading2';
import { Section } from 'src/components/Grid/Section';
import { Content } from 'src/components/Grid/Content';

import { Profile } from './Profile';

import { SEPeople, NonSEPeople } from './data';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const People = () => {
  const people = SEPeople.map((person) => (
    <Profile
      key={person.name}
      name={person.name}
      image={person.image}
      quote={person.quote}
      link={person.link}
      linkedIn={person.linkedIn ?? false}
      contact={person.contact}
      location={person.location}
    />
  ));

  const other = NonSEPeople.map((person) => (
    <Profile
      key={person.name}
      name={person.name}
      image={person.image}
      quote={person.quote}
      link={person.link}
      linkedIn={person.linkedIn}
      contact={person.contact}
      location={person.location}
    />
  ));

  return (
    <>
      <Section bgColor="#f3f3f3">
        <Content>
          <Heading2>People of SE2022</Heading2>
          <Grid>{people}</Grid>
        </Content>
      </Section>
      <Section bgColor="#f3f3f3">
        <Content>
          <Heading2>SE at Heart</Heading2>
          <Grid>{other}</Grid>
        </Content>
      </Section>
    </>
  );
};
