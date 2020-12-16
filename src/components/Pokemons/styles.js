import styled from 'styled-components/native';

import { Dimensions } from 'react-native';
import colors from '../../style/colors';

const { height, width } = Dimensions.get('window');

export const Container = styled.View``;

export const Grid = styled.View`
    align-items: flex-end;
    bottom: 15%;
`;

export const Title = styled.Text`
    right: 5%;
    font-size: ${`${width * 0.1}px`};
    color: ${colors.fcolor_one};
`;

export const Search = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    width: ${`${width * 0.8}px`};
    height: ${`${height * 0.075}px`};
    background: ${colors.background_two};
    border-radius: 6px;
    bottom: 10%;
`;

export const IconComponent = styled.TouchableOpacity`
    width: ${`${width * 0.11}px`};
    height: ${`${width * 0.11}px`};
    align-items: center;
    justify-content: center;
    right: ${`${width * 0.22}px`};
    background-color: ${colors.background_six};
    border-radius: 10px;
`;

export const InComponent = styled.TextInput`
    width: ${`${width * 0.9}px`};
    font-size: ${`${width * 0.04}px`};
    left: 20%;
    font-family: 'RobotoSlab_700Bold';
    color: ${colors.fcolor_two};
`;

export const List = styled.FlatList``;
