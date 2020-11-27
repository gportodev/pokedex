/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

import { Alert } from 'react-native';
import { List } from './styles';

import { Card, Avatar, Line, Data, Info } from '../Card/styles';

import api from '../../services/api';

export default function Pokemons({ navigation }) {
    const [pokemon, setPokemon] = useState([]);
    const [poke, setPoke] = useState([]);

    async function loadNames() {
        try {
            const response = await api.get('pokemon?limit=2&offset=2.');

            const res = await response.data.results;

            setPokemon(res);
        } catch (error) {
            Alert.alert('Error!Could not load data!');
        }
    }

    async function loadRest(p) {
        const response = await api.get(`pokemon/${p.name}`);

        let { id, name, height, weight, types, sprites, stats } = response.data;

        let pok = {
            i: id,
            n: name,
            h: height,
            w: weight,
            t: types[0].type.name,
            s: sprites.front_default,
            hp: stats[0].base_stat,
            atk: stats[1].base_stat,
            def: stats[2].base_stat,
            spd: stats[3].base_stat,
        };

        poke.push(pok);

        console.log(pok);
    }

    async function loadData() {
        await pokemon.map((p) => loadRest(p));
    }

    useEffect(() => {
        loadNames();
        loadData();
    }, []);

    // const renderItem = ({ item }) => (
    //     <Card onPress={() => navigation.navigate('Detail', { item })}>
    //         <Avatar source={{ uri: item.s }} />
    //         <Line>
    //             <Info
    //                 style={{
    //                     fontSize: 16,
    //                     fontFamily: 'RobotoSlab_400Regular',
    //                 }}
    //             >
    //                 Name:
    //             </Info>

    //             <Data
    //                 style={{
    //                     fontSize: 16,
    //                     fontFamily: 'RobotoSlab_600SemiBold',
    //                     left: 5,
    //                 }}
    //             >
    //                 {item.n}
    //             </Data>
    //         </Line>

    //         <Line>
    //             <Info
    //                 style={{
    //                     fontSize: 14,
    //                     fontFamily: 'RobotoSlab_400Regular',
    //                 }}
    //             >
    //                 Types:
    //             </Info>

    //             <Data
    //                 style={{
    //                     fontSize: 14,
    //                     fontFamily: 'RobotoSlab_600SemiBold',
    //                     left: 5,
    //                 }}
    //             >
    //                 {item.t}
    //             </Data>
    //         </Line>
    //     </Card>
    // );

    return (
        <List
            data={poke}
            renderItem={({ item }) => (
                <Card onPress={() => navigation.navigate('Detail', { item })}>
                    <Avatar source={{ uri: item.s }} />
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

                        <Data
                            style={{
                                fontSize: 14,
                                fontFamily: 'RobotoSlab_600SemiBold',
                                left: 5,
                            }}
                        >
                            {item.t}
                        </Data>
                    </Line>
                </Card>
            )}
            keyExtractor={(item) => item.i}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                alignItems: 'center',
            }}
            numColumns={2}
        />
    );
}
