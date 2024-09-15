import React from 'react';

import { Container } from '../../components/Back/styles';

import {Header} from '../../components/Header';
import {Pokemons} from '../../components/Pokemons';
import {Bottom} from '../../components/Bottom';

function Home({ navigation }) {
    return (
        <Container>
            <Header />

            <Pokemons navigation={navigation} />

            <Bottom />
        </Container>
    );
}

export { Home }
