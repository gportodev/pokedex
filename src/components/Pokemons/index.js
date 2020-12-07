/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { Alert } from 'react-native';
import { List, Search, Square, IconComponent, InComponent } from './styles';

import { Card, Avatar, Line, Data } from '../Card/styles';

import api from '../../services/api';
import colors from '../../style/colors';

export default function Pokemons({ navigation }) {
    const [poke, setPoke] = useState([]);
    const [wantedPokemon, setWantedpokemon] = useState();

    async function loadData() {
        const response = await api.get('pokemon');

        const { results } = response.data;

        results.forEach(async (r) => {
            const res = await api.get(`pokemon/${r.name}`);

            let { id, name, height, weight, types, sprites, stats } = res.data;

            if (res.data) {
                let pok = {
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
        loadData();
    }, []);

    const renderItem = ({ item }) => (
        <Card onPress={() => navigation.navigate('Detail', { item })}>
            <Line style={{ alignItems: 'center' }}>
                <Data
                    style={{
                        top: 20,
                        fontSize: 24,
                        fontFamily: 'RobotoSlab_600SemiBold',
                        color: colors.fcolor_one,
                    }}
                >
                    {item.n}
                </Data>
            </Line>

            {item.t.length > 1 ? (
                <Line style={{ left: 15 }}>
                    <Data
                        style={{
                            top: 50,
                            justifyContent: 'flex-start',
                            fontSize: 18,
                            fontFamily: 'RobotoSlab_600SemiBold',
                            color: colors.fcolor_one,
                        }}
                    >
                        {item.t[0].type.name}
                    </Data>

                    <Data
                        style={{
                            top: 50,
                            justifyContent: 'flex-start',
                            fontSize: 18,
                            fontFamily: 'RobotoSlab_600SemiBold',
                            color: colors.fcolor_one,
                        }}
                    >
                        {item.t[1].type.name}
                    </Data>
                </Line>
            ) : (
                <Line style={{ left: 15 }}>
                    <Data
                        style={{
                            top: 50,
                            justifyContent: 'flex-start',
                            fontSize: 18,
                            fontFamily: 'RobotoSlab_600SemiBold',
                            color: colors.fcolor_one,
                        }}
                    >
                        {item.t[0].type.name}
                    </Data>
                </Line>
            )}
            <Avatar source={{ uri: item.s }} style={{ top: 100 }} />
        </Card>
    );

    const searchPoke = () => {
        if (!wantedPokemon) {
            Alert.alert('Type the pokemon name!');
        } else {
            let convert = String(wantedPokemon).toLowerCase();

            (async () => {
                try {
                    const response = await api.get(`pokemon/${convert}`);
                    let {
                        id,
                        name,
                        height,
                        weight,
                        types,
                        sprites,
                        stats,
                    } = response.data;

                    if (response.data) {
                        let pok = {
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
                }
            })();
        }
    };

    if (poke) {
        poke.sort((a, b) => a.i - b.i);
    }

    return (
        <>
            <Search>
                <InComponent
                    placeholder="Search"
                    placeholderTextColor={colors.fcolor_two}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(text) => setWantedpokemon(text)}
                    value={wantedPokemon}
                    onSubmitEditing={searchPoke}
                />
                <Square>
                    <IconComponent onPress={searchPoke}>
                        <Feather
                            name="search"
                            size={24}
                            color={colors.background_one}
                        />
                    </IconComponent>
                </Square>
            </Search>

            <List
                data={poke}
                renderItem={renderItem}
                keyExtractor={(item) => item.i}
                showsVerticalScrollIndicator={false}
                horizontal={true}
            />
        </>
    );
}
