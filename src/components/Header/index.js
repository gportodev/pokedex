import React from 'react';

import { Container, Grid, Logo, Title } from './styles';

import logo from '../../assets/logo.png'

export default function Header () {
  return (
    <Container>
      <Grid>
          <Logo source={logo}/>

          <Title>POKEMON CHALLENGE</Title>
      </Grid>
    </Container>
  );
};

