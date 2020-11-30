/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';

import { Alert } from 'react-native';
import { List, Search, IconComponent, InComponent } from './styles';

import { Card, Avatar, Tag, Line, Data, Info } from '../Card/styles';

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
            <Tag>
                <Info
                    style={{
                        fontSize: 15,
                        color: colors.num,
                    }}
                >
                    # {item.i}
                </Info>

                <Avatar source={{ uri: item.s }} />
            </Tag>

            <Line>
                <Info
                    style={{
                        fontSize: 16,
                        fontFamily: 'RobotoSlab_400Regular',
                    }}
                >
                    Name:
                </Info>

                <Data
                    style={{
                        fontSize: 16,
                        fontFamily: 'RobotoSlab_600SemiBold',
                        left: 5,
                    }}
                >
                    {item.n}
                </Data>
            </Line>

            <Line>
                <Info
                    style={{
                        fontSize: 14,
                        fontFamily: 'RobotoSlab_400Regular',
                    }}
                >
                    Types:
                </Info>
                {item.t.length > 1 ? (
                    <Data
                        style={{
                            fontSize: 14,
                            fontFamily: 'RobotoSlab_600SemiBold',
                            left: 5,
                        }}
                    >
                        {item.t[0].type.name},{item.t[1].type.name}
                    </Data>
                ) : (
                    <Data
                        style={{
                            fontSize: 14,
                            fontFamily: 'RobotoSlab_600SemiBold',
                            left: 5,
                        }}
                    >
                        {item.t[0].type.name}
                    </Data>
                )}
            </Line>
        </Card>
    );

    const searchPoke = () => {
        let convert = String(wantedPokemon).toLowerCase();

        if (!convert) {
            Alert.alert('Type the pokemon name!');
        } else {
            (async () => {
                const response = await api.get(`pokemon/${convert}`);

                const chain = await api.get('evolution-chain');

                console.log(chain.data);

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
            })();
        }
    };

    if (poke) {
        poke.sort((a, b) => a.i - b.i);
    }

    return (
        <>
            <Search>
                <IconComponent onPress={searchPoke}>
                    <Feather name="search" size={20} color={colors.num} />
                </IconComponent>
                <InComponent
                    placeholder="Type the pokémon name"
                    placeholderTextColor={colors.num}
                    style={{
                        fontFamily: 'RobotoSlab_400Regular',
                        color: 'white',
                    }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(text) => setWantedpokemon(text)}
                    value={wantedPokemon}
                    onSubmitEditing={searchPoke}
                />
            </Search>

            <List
                data={poke}
                renderItem={renderItem}
                keyExtractor={(item) => item.i}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                numColumns={2}
            />
        </>
    );
}
