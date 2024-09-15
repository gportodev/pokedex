import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
    flex-direction: column;
`;

export const Grid = styled.View`
    align-items: flex-end;
    padding-right: ${`${width * 0.03}px`};
    bottom: ${`${height * 0.05}px`};
`;

export const Title = styled.Text`
    font-size: ${`${width * 0.08}px`};
    color: ${({ theme }) => theme.fcolor_one};
    font-family: 'RobotoSlab_600SemiBold';
`;

export const Search = styled.View`
    width: ${`${width * 0.9}px`};
    height: ${`${height * 0.08}px`};
    left: ${`${width * 0.04}px`};
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    background: ${({ theme }) => theme.background_two};
    margin-bottom: ${`${height * 0.01}px`};
    bottom: ${`${height * 0.025}px`};
`;

export const InComponent = styled.TextInput`
    width: ${`${width * 0.9}px`};
    height: ${`${height * 0.08}px`};
    height: 40px;
    font-size: ${`${width * 0.04}px`};
    padding-left: ${`${width * 0.04}px`};
    font-family: 'RobotoSlab_700Bold';
    color: ${({ theme }) => theme.fcolor_two};
`;

export const IconComponent = styled.TouchableOpacity`
    background: ${({ theme }) => theme.background_six};
    width: ${`${width * 0.13}px`};
    height: ${`${height * 0.07}px`};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    right: ${`${width * 0.15}px`};
`;

export const List = styled.FlatList``;
