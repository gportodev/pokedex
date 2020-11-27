import React, { useEffect, useState } from 'react';

import { Alert } from 'react-native';

import { Feather } from '@expo/vector-icons';

import ProgressBar from 'react-native-progress/Bar';

import colors from '../../style/colors';

import { Container } from '../../components/Back/styles';
import { Card, Avatar, Line, Info, Data } from '../../components/Card/styles';

import { PokeInfo, GoBack, Form, BottomHeader, BottomTitle } from './styles';

import Header from '../../components/Header';

export default function Detail({ route, navigation }) {
    const { item } = route.params;

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
                    height: 360,
                    width: 300,
                    alignSelf: 'center',
                    top: 10,
                }}
            >
                <PokeInfo>
                    <Avatar
                        source={{ uri: item.s }}
                        style={{ width: 80, height: 80 }}
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
                            progress={0.5}
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
                            progress={0.73}
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
                            progress={0.3}
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
                            progress={0.56}
                            color={colors.value}
                            unfilledColor={colors.probar}
                        />
                        <Data style={{ color: colors.key, right: 100 }}>
                            {item.spd}/100
                        </Data>
                    </Line>
                </PokeInfo>
            </Card>

            {/* <BottomHeader>
                <BottomTitle>Family tree</BottomTitle>

                <Card
                    style={{
                        width: 150,
                        height: 150,
                    }}
                >
                    <Avatar />

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
                            {item.name}
                        </Data>
                    </Line>

                    <Line>
                        <Info
                            style={{
                                fontSize: 10,
                                fontFamily: 'RobotoSlab_400Regular',
                            }}
                        >
                            Types:
                        </Info>

                        <Data
                            style={{
                                fontSize: 10,
                                fontFamily: 'RobotoSlab_600SemiBold',
                                left: 5,
                            }}
                        >
                            {item.types}
                        </Data>
                    </Line>
                </Card>
            </BottomHeader> */}
        </Container>
    );
}
