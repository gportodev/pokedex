/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';

import { Feather } from '@expo/vector-icons';

import ProgressBar from 'react-native-progress/Bar';

import colors from '../../style/colors';

import { Container } from '../../components/Back/styles';
import {
    Card,
    Avatar,
    Line,
    Info,
    Data,
    Tag,
} from '../../components/Card/styles';

import {
    PokeInfo,
    GoBack,
    Form,
    BottomHeader,
    BottomTitle,
    Chain,
} from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

export default function Detail({ route, navigation }) {
    const { item } = route.params;

    const [evolution, setEvolution] = useState([]);

    async function loadEvolution() {
        const poke_specie = await api.get(`pokemon-species/${item.n}`);

        let poke_chain = poke_specie.data.evolution_chain;

        const tree = await api.get(`${poke_chain.url}`);

        const { chain } = tree.data;

        const { species, evolves_to } = chain;

        let e1 = species.name;

        if (evolves_to.length > 0) {
            let e2 = evolves_to[0].species.name;

            if (evolves_to[0].evolves_to.length > 0) {
                let e3 = chain.evolves_to[0].evolves_to[0].species.name;

                if (item.n === e1) {
                    const res1 = await api.get(`pokemon/${e2}`);

                    const res2 = await api.get(`pokemon/${e3}`);

                    let evo1 = {
                        i: String(res1.data.id),
                        n: res1.data.name,
                        t: res1.data.types,
                        s: res1.data.sprites.front_default,
                        hp: res1.data.stats[0].base_stat,
                        atk: res1.data.stats[1].base_stat,
                        def: res1.data.stats[2].base_stat,
                        spd: res1.data.stats[3].base_stat,
                    };

                    let evo2 = {
                        i: String(res2.data.id),
                        n: res2.data.name,
                        t: res2.data.types,
                        s: res2.data.sprites.front_default,
                        hp: res2.data.stats[0].base_stat,
                        atk: res2.data.stats[1].base_stat,
                        def: res2.data.stats[2].base_stat,
                        spd: res2.data.stats[3].base_stat,
                    };

                    setEvolution([evo1, evo2]);
                }

                if (item.n === e2) {
                    const res1 = await api.get(`pokemon/${e1}`);

                    const res2 = await api.get(`pokemon/${e3}`);

                    let evo1 = {
                        i: String(res1.data.id),
                        n: res1.data.name,
                        t: res1.data.types,
                        s: res1.data.sprites.front_default,
                        hp: res1.data.stats[0].base_stat,
                        atk: res1.data.stats[1].base_stat,
                        def: res1.data.stats[2].base_stat,
                        spd: res1.data.stats[3].base_stat,
                    };

                    let evo2 = {
                        i: String(res2.data.id),
                        n: res2.data.name,
                        t: res2.data.types,
                        s: res2.data.sprites.front_default,
                        hp: res2.data.stats[0].base_stat,
                        atk: res2.data.stats[1].base_stat,
                        def: res2.data.stats[2].base_stat,
                        spd: res2.data.stats[3].base_stat,
                    };

                    setEvolution([evo1, evo2]);
                }

                if (item.n === e3) {
                    const res1 = await api.get(`pokemon/${e1}`);

                    const res2 = await api.get(`pokemon/${e2}`);

                    let evo1 = {
                        i: String(res1.data.id),
                        n: res1.data.name,
                        t: res1.data.types,
                        s: res1.data.sprites.front_default,
                        hp: res1.data.stats[0].base_stat,
                        atk: res1.data.stats[1].base_stat,
                        def: res1.data.stats[2].base_stat,
                        spd: res1.data.stats[3].base_stat,
                    };

                    let evo2 = {
                        i: String(res2.data.id),
                        n: res2.data.name,
                        t: res2.data.types,
                        s: res2.data.sprites.front_default,
                        hp: res2.data.stats[0].base_stat,
                        atk: res2.data.stats[1].base_stat,
                        def: res2.data.stats[2].base_stat,
                        spd: res2.data.stats[3].base_stat,
                    };

                    setEvolution([evo1, evo2]);
                }
            } else {
                console.log('ENTROUUU AQUI');
                if (item.n === e1) {
                    const res = await api.get(`pokemon/${e2}`);

                    let evo = {
                        i: String(res.data.id),
                        n: res.data.name,
                        t: res.data.types,
                        s: res.data.sprites.front_default,
                        hp: res.data.stats[0].base_stat,
                        atk: res.data.stats[1].base_stat,
                        def: res.data.stats[2].base_stat,
                        spd: res.data.stats[3].base_stat,
                    };

                    setEvolution([evo]);
                } else {
                    const res = await api.get(`pokemon/${e1}`);

                    let evo = {
                        i: String(res.data.id),
                        n: res.data.name,
                        t: res.data.types,
                        s: res.data.sprites.front_default,
                        hp: res.data.stats[0].base_stat,
                        atk: res.data.stats[1].base_stat,
                        def: res.data.stats[2].base_stat,
                        spd: res.data.stats[3].base_stat,
                    };

                    setEvolution([evo]);
                }
            }
        }
    }

    useEffect(() => {
        loadEvolution();
    }, []);

    return (
        <Container>
            <Header />

            <GoBack onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color={colors.value} />

                <Data
                    style={{
                        left: 5,
                        fontFamily: 'RobotoSlab_400Regular',
                        fontSize: 22,
                    }}
                >
                    Back
                </Data>
            </GoBack>

            <Card
                style={{
                    height: '50%',
                    width: '80%',
                    alignSelf: 'center',
                    top: 4,
                }}
            >
                <Tag style={{ alignSelf: 'flex-start' }}>
                    <Info
                        style={{
                            fontSize: 30,
                            color: colors.num,
                        }}
                    >
                        # {item.i}
                    </Info>
                </Tag>
                <PokeInfo style={{ bottom: 50 }}>
                    <Avatar
                        source={{ uri: item.s }}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    />

                    <Data
                        style={{
                            fontSize: 24,
                            fontFamily: 'RobotoSlab_600SemiBold',
                        }}
                    >
                        {item.n}
                    </Data>

                    <Form>
                        <Line style={{ flexDirection: 'column' }}>
                            <Data
                                style={{
                                    color: colors.key,
                                    fontSize: 20,
                                    fontFamily: 'RobotoSlab_400Regular',
                                }}
                            >
                                {' '}
                                {item.w} KG
                            </Data>

                            <Data
                                style={{
                                    color: colors.num,
                                    fontSize: 16,
                                    fontFamily: 'RobotoSlab_400Regular',
                                }}
                            >
                                {' '}
                                Weight
                            </Data>
                        </Line>

                        <Line style={{ flexDirection: 'column' }}>
                            <Data
                                style={{
                                    color: colors.key,
                                    fontSize: 20,
                                    fontFamily: 'RobotoSlab_400Regular',
                                }}
                            >
                                {' '}
                                {item.h} M
                            </Data>

                            <Data
                                style={{
                                    color: colors.num,
                                    fontSize: 14,
                                    fontFamily: 'RobotoSlab_400Regular',
                                }}
                            >
                                {' '}
                                Height
                            </Data>
                        </Line>
                    </Form>

                    <Data style={{ color: colors.key, fontSize: 16 }}>
                        Stats
                    </Data>

                    <Line>
                        <Info
                            style={{
                                fontFamily: 'RobotoSlab_400Regular',
                                fontSize: 12,
                                textTransform: 'uppercase',
                            }}
                        >
                            HP
                        </Info>

                        <ProgressBar
                            width={200}
                            height={22}
                            borderRadius={20}
                            style={{
                                left: 10,
                            }}
                            progress={item.hp / 100}
                            color={colors.value}
                            unfilledColor={colors.probar}
                        />
                        <Data style={{ color: colors.key, right: 100 }}>
                            {item.hp}/100
                        </Data>
                    </Line>

                    <Line>
                        <Info
                            style={{
                                fontFamily: 'RobotoSlab_400Regular',
                                fontSize: 12,
                                textTransform: 'uppercase',
                            }}
                        >
                            ATK
                        </Info>

                        <ProgressBar
                            width={200}
                            height={22}
                            borderRadius={20}
                            style={{
                                left: 10,
                            }}
                            progress={item.atk / 100}
                            color={colors.value}
                            unfilledColor={colors.probar}
                        />
                        <Data style={{ color: colors.key, right: 100 }}>
                            {item.atk}/100
                        </Data>
                    </Line>

                    <Line>
                        <Info
                            style={{
                                fontFamily: 'RobotoSlab_400Regular',
                                fontSize: 12,
                                textTransform: 'uppercase',
                            }}
                        >
                            DEF
                        </Info>

                        <ProgressBar
                            width={200}
                            height={22}
                            borderRadius={20}
                            style={{
                                left: 10,
                            }}
                            progress={item.def / 100}
                            color={colors.value}
                            unfilledColor={colors.probar}
                        />
                        <Data style={{ color: colors.key, right: 100 }}>
                            {item.def}/100
                        </Data>
                    </Line>

                    <Line>
                        <Info
                            style={{
                                fontFamily: 'RobotoSlab_400Regular',
                                fontSize: 12,
                                textTransform: 'uppercase',
                            }}
                        >
                            SPD
                        </Info>

                        <ProgressBar
                            width={200}
                            height={22}
                            borderRadius={20}
                            style={{
                                left: 10,
                            }}
                            progress={item.spd / 100}
                            color={colors.value}
                            unfilledColor={colors.probar}
                        />
                        <Data style={{ color: colors.key, right: 100 }}>
                            {item.spd}/100
                        </Data>
                    </Line>
                </PokeInfo>
            </Card>

            <BottomHeader>
                <BottomTitle>Family tree</BottomTitle>
                {console.log(evolution)}
                <Chain>
                    {evolution.map((e) => (
                        <Card
                            key={e.i}
                            onPress={() =>
                                navigation.replace('Detail', { item: e })
                            }
                        >
                            <Avatar source={{ uri: e.s }} />

                            <Line>
                                <Info
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'RobotoSlab_400Regular',
                                    }}
                                >
                                    Name:
                                </Info>

                                <Data
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'RobotoSlab_600SemiBold',
                                        left: 5,
                                    }}
                                >
                                    {e.n}
                                </Data>
                            </Line>

                            <Line>
                                <Info
                                    style={{
                                        fontSize: 12,
                                        fontFamily: 'RobotoSlab_400Regular',
                                    }}
                                >
                                    Types:
                                </Info>
                                {e.t.length === 2 ? (
                                    <Data
                                        style={{
                                            fontSize: 14,
                                            fontFamily:
                                                'RobotoSlab_600SemiBold',
                                            left: 5,
                                        }}
                                    >
                                        {e.t[0].type.name},{e.t[1].type.name}
                                    </Data>
                                ) : (
                                    <Data
                                        style={{
                                            fontSize: 14,
                                            fontFamily:
                                                'RobotoSlab_600SemiBold',
                                            left: 5,
                                        }}
                                    >
                                        {e.t[0].type.name}
                                    </Data>
                                )}
                            </Line>
                        </Card>
                    ))}
                </Chain>
            </BottomHeader>
        </Container>
    );
}
