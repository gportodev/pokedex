import React, { useEffect, useState } from 'react';

import { Alert, Keyboard, Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
    Container,
    Grid,
    Title,
    List,
    Search,
    InComponent,
    IconComponent,
} from './styles';

import { Card, Avatar, Line, Data } from '../Card/styles';

import api from '../../services/api';
import theme from '@/style/theme';

function Pokemons({ navigation }) {
    const [poke, setPoke] = useState([]);
    const [wantedPokemon, setWantedpokemon] = useState();

    const { height, width } = Dimensions.get('window');

    async function loadData() {
        const response = await api.get('pokemon');

        const { results } = response.data;

        results.forEach(async (r) => {
            const res = await api.get(`pokemon/${r.name}`);

            const {
                id,
                name,
                height,
                weight,
                types,
                sprites,
                stats,
            } = res.data;

            if (res.data) {
                const pok = {
                    i: String(id),
                    n: name,
                    h: height,
                    w: weight,
                    t: types,
                    s: sprites.front_default,
                    hp: stats[0].base_stat,
                    atk: stats[1].base_stat,
                    def: stats[2].base_stat,
                    spd: stats[3].base_stat,
                };

                setPoke((state) => [...state, pok]);
            }
        });
    }

    useEffect(() => {
        if (poke.length === 0) {
            loadData();
        }
    }, []);

    const renderItem = ({ item }) => (
        <Card onPress={() => navigation.navigate('Detail', { item })}>
            <Line style={{ alignItems: 'center', bottom: height * 0.15 }}>
                <Data
                    style={{
                        top: height * 0.03,
                        fontSize: width * 0.05,
                        color: theme.fcolor_one,
                    }}
                >
                    {item.n}
                </Data>
            </Line>

            {item.t.length > 1 ? (
                <Line
                    style={{
                        paddingLeft: width * 0.03,
                        bottom: height * 0.05,
                    }}
                >
                    <Data
                        style={{
                            justifyContent: 'flex-start',
                            fontSize: width * 0.042,
                            color: theme.fcolor_one,
                        }}
                    >
                        {item.t[0].type.name}
                    </Data>

                    <Data
                        style={{
                            justifyContent: 'flex-start',
                            fontSize: width * 0.042,
                            color: theme.fcolor_one,
                        }}
                    >
                        {item.t[1].type.name}
                    </Data>
                </Line>
            ) : (
                <Line
                    style={{
                        paddingLeft: width * 0.03,
                        paddingTop: height * 0.03,
                        bottom: height * 0.08,
                    }}
                >
                    <Data
                        style={{
                            justifyContent: 'flex-start',
                            fontSize: width * 0.042,
                            color: theme.fcolor_one,
                        }}
                    >
                        {item.t[0].type.name}
                    </Data>
                </Line>
            )}
            <Avatar source={{ uri: item.s }} />
        </Card>
    );

    const searchPoke = () => {
        if (!wantedPokemon) {
            Alert.alert('Type the pokemon name!');
        } else {
            const convert = String(wantedPokemon).toLowerCase();

            (async () => {
                try {
                    const response = await api.get(`pokemon/${convert}`);
                    const {
                        id,
                        name,
                        height,
                        weight,
                        types,
                        sprites,
                        stats,
                    } = response.data;

                    if (response.data) {
                        const pok = {
                            i: String(id),
                            n: name,
                            h: height,
                            w: weight,
                            t: types,
                            s: sprites.front_default,
                            hp: stats[0].base_stat,
                            atk: stats[1].base_stat,
                            def: stats[2].base_stat,
                            spd: stats[3].base_stat,
                        };

                        navigation.navigate('Detail', { item: pok });
                    }
                } catch (error) {
                    Alert.alert('Error! The pokemon does not exist!');
                    Keyboard.dismiss();
                    setWantedpokemon('');
                }
            })();
        }
    };

    if (poke) {
        poke.sort((a, b) => a.i - b.i);
    }

    return (
        <Container>
            <Grid>
                <Title>PokeApp</Title>
            </Grid>
            <Search>
                <InComponent
                    placeholder="Search"
                    placeholderTextColor={theme.fcolor_two}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(text) => setWantedpokemon(text)}
                    value={wantedPokemon}
                    onSubmitEditing={searchPoke}
                />
                <IconComponent onPress={searchPoke}>
                    <Feather
                        name="search"
                        size={height * 0.027}
                        color={theme.background_one}
                    />
                </IconComponent>
            </Search>

            <List
                data={poke}
                renderItem={renderItem}
                keyExtractor={(item) => item.i}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </Container>
    );
}

export { Pokemons }
