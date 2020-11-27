import React from 'react';

import { Container } from '../../components/Back/styles';

import Header from '../../components/Header';
import Search from '../../components/SearchPokemon';
import Pokemons from '../../components/Pokemons';

export default function Home({ navigation }) {
    return (
        <Container>
            <Header />

            <Search />

            <Pokemons navigation={navigation} />
        </Container>
    );
}
