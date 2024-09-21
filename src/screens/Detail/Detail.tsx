import React, { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { Dimensions } from 'react-native';

import {Bottom} from '../../components/Bottom';

import { Card, Line, Data } from '../../components/Card/styles';

import {
    VLogo,
    Logo,
    GoBack,
    PokeInfo,
    AView,
    PokeStats,
    Info,
    Tag,
    Avatar,
    Container,
    PokeData,
    FamilyTree,
} from './styles';

import img from '@/assets/head.png';

import api from '@/services/api';
import { PokemonPoint } from '@/components/PokemonPoint';
import theme from '@/style/theme';

function Detail({ route, navigation }) {
    const { item } = route.params;

    const [evolution, setEvolution] = useState([]);

    const { height, width } = Dimensions.get('window');

    async function loadEvolution() {
        const poke_specie = await api.get(`pokemon-species/${item.n}`);

        const poke_chain = poke_specie.data.evolution_chain;

        const tree = await api.get(`${poke_chain.url}`);

        const { chain } = tree.data;

        const { species, evolves_to } = chain;

        const e1 = species.name;

        if (evolves_to.length > 0) {
            const e2 = evolves_to[0].species.name;

            if (evolves_to[0].evolves_to.length > 0) {
                const e3 = chain.evolves_to[0].evolves_to[0].species.name;

                if (item.n === e1) {
                    const res1 = await api.get(`pokemon/${e2}`);

                    const res2 = await api.get(`pokemon/${e3}`);

                    const evo1 = {
                        i: String(res1.data.id),
                        n: res1.data.name,
                        t: res1.data.types,
                        s: res1.data.sprites.front_default,
                        hp: res1.data.stats[0].base_stat,
                        atk: res1.data.stats[1].base_stat,
                        def: res1.data.stats[2].base_stat,
                        spd: res1.data.stats[3].base_stat,
                    };

                    const evo2 = {
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

                    const evo1 = {
                        i: String(res1.data.id),
                        n: res1.data.name,
                        t: res1.data.types,
                        s: res1.data.sprites.front_default,
                        hp: res1.data.stats[0].base_stat,
                        atk: res1.data.stats[1].base_stat,
                        def: res1.data.stats[2].base_stat,
                        spd: res1.data.stats[3].base_stat,
                    };

                    const evo2 = {
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

                    const evo1 = {
                        i: String(res1.data.id),
                        n: res1.data.name,
                        t: res1.data.types,
                        s: res1.data.sprites.front_default,
                        hp: res1.data.stats[0].base_stat,
                        atk: res1.data.stats[1].base_stat,
                        def: res1.data.stats[2].base_stat,
                        spd: res1.data.stats[3].base_stat,
                    };

                    const evo2 = {
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
            } else if (item.n === e1) {
                const res = await api.get(`pokemon/${e2}`);

                const evo = {
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

                const evo = {
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

    useEffect(() => {
        loadEvolution();
    }, []);

    return (
        <Container>
            <VLogo>
                <Logo source={img} />
                <GoBack onPress={() => navigation.goBack()}>
                    <AntDesign
                        name="left"
                        size={24}
                        color={theme.fcolor_one}
                    />
                </GoBack>
            </VLogo>

            <Line
                style={{
                    flexDirection: 'column',
                    bottom: height * 0.1,
                }}
            >
                <PokeInfo>
                    <Line
                        style={{
                            left: width * 0.05,
                        }}
                    >
                        {item.t.length === 2 ? (
                            <>
                                <Data
                                    style={{
                                        fontSize: width * 0.06,
                                        fontFamily: 'RobotoSlab_600SemiBold',
                                        color: theme.fcolor_one,
                                    }}
                                >
                                    {item.t[0].type.name}
                                </Data>

                                <Data
                                    style={{
                                        fontSize: width * 0.06,
                                        fontFamily: 'RobotoSlab_600SemiBold',
                                        color: theme.fcolor_one,
                                    }}
                                >
                                    {item.t[1].type.name}
                                </Data>
                            </>
                        ) : (
                            <Data
                                style={{
                                    fontSize: width * 0.06,
                                    fontFamily: 'RobotoSlab_600SemiBold',
                                    color: theme.fcolor_one,
                                }}
                            >
                                {item.t[0].type.name}
                            </Data>
                        )}
                    </Line>
                    <Info>
                        <Line
                            style={{
                                marginBottom: height * 0.1,
                            }}
                        >
                            <Data
                                style={{
                                    fontSize: width * 0.09,
                                    fontFamily: 'RobotoSlab_600SemiBold',
                                    color: theme.fcolor_one,
                                }}
                            >
                                {item.n}
                            </Data>

                            <Tag>
                                <Data
                                    style={{
                                        fontSize: width * 0.04,
                                        color: theme.fcolor_one,
                                    }}
                                >
                                    #{item.i}
                                </Data>
                            </Tag>
                        </Line>

                        <AView>
                            <Avatar source={{ uri: item.s }} />
                        </AView>
                    </Info>
                </PokeInfo>

                <PokeStats>
                    <PokeData>
                        <Data
                            style={{
                                fontFamily: 'RobotoSlab_700Bold',
                                fontSize: width * 0.05,
                                top: '2%',
                                left: '2%',
                                margin: '1%',
                            }}
                        >
                            Stats
                        </Data>

                        <Line
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: '1%',
                                left: '5%',
                            }}
                        >
                            <Data
                                style={{
                                    fontFamily: 'RobotoSlab_600SemiBold',
                                    fontSize: width * 0.04,
                                    textTransform: 'uppercase',
                                    right: '15%',
                                }}
                            >
                                HP
                            </Data>

                            <PokemonPoint number={item.hp} />
                        </Line>

                        <Line
                            style={{
                                flexDirection: 'row',
                                margin: '1%',
                            }}
                        >
                            <Data
                                style={{
                                    fontFamily: 'RobotoSlab_600SemiBold',
                                    fontSize: width * 0.04,
                                    textTransform: 'uppercase',
                                    left: '15%',
                                }}
                            >
                                ATK
                            </Data>
                            <PokemonPoint number={item.atk} />
                        </Line>

                        <Line
                            style={{
                                flexDirection: 'row',
                                margin: '1%',
                                left: '1%',
                            }}
                        >
                            <Data
                                style={{
                                    fontFamily: 'RobotoSlab_600SemiBold',
                                    fontSize: width * 0.04,
                                    textTransform: 'uppercase',
                                }}
                            >
                                DEF
                            </Data>
                            <PokemonPoint number={item.def} />
                        </Line>

                        <Line
                            style={{
                                flexDirection: 'row',
                                left: '1%',
                                margin: '1%',
                            }}
                        >
                            <Data
                                style={{
                                    fontFamily: 'RobotoSlab_600SemiBold',
                                    fontSize: width * 0.04,
                                    textTransform: 'uppercase',
                                }}
                            >
                                SPD
                            </Data>

                            <PokemonPoint number={item.spd} />
                        </Line>
                    </PokeData>
                    <FamilyTree>
                        <Data
                            style={{
                                fontSize: 18,
                                fontFamily: 'RobotoSlab_700Bold',
                            }}
                        >
                            Family Tree
                        </Data>
                    </FamilyTree>
                    <Line
                        style={{
                            flexDirection: 'row',
                            top: height * 0.1,
                        }}
                    >
                        {evolution.map((e) => (
                            <Card
                                key={e.i}
                                onPress={() =>
                                    navigation.replace('Detail', { item: e })
                                }
                            >
                                <Line
                                    style={{
                                        alignItems: 'center',
                                        bottom: height * 0.15,
                                    }}
                                >
                                    <Data
                                        style={{
                                            top: height * 0.03,
                                            fontSize: width * 0.05,
                                            color: theme.fcolor_one,
                                        }}
                                    >
                                        {e.n}
                                    </Data>
                                </Line>

                                {e.t.length > 1 ? (
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
                                            {e.t[0].type.name}
                                        </Data>

                                        <Data
                                            style={{
                                                justifyContent: 'flex-start',
                                                fontSize: width * 0.042,
                                                color: theme.fcolor_one,
                                            }}
                                        >
                                            {e.t[1].type.name}
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
                                            {e.t[0].type.name}
                                        </Data>
                                    </Line>
                                )}
                                <Avatar source={{ uri: e.s }} />
                            </Card>
                        ))}
                    </Line>
                </PokeStats>
            </Line>

            <Bottom />
        </Container>
    );
}

export { Detail } 
