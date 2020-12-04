import React from 'react';

import { Grid, Logo, Title } from './styles';

import img_one from '../../assets/head.png';

export default function Header() {
    return (
        <>
            <Logo source={img_one} />

            <Grid>
                <Title>Pokedex</Title>
            </Grid>
        </>
    );
}
