import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Card = styled.TouchableOpacity`
    width: ${`${width * 0.35}px`};
    height: ${`${height * 0.46}px`};
    border-radius: 20px;
    background-color: ${({ theme })=> theme.background_tree};
    margin: 1px 10px;
    justify-content: flex-end;
`;

export const Avatar = styled.Image`
    height: ${`${height * 0.2}px`};
`;

export const Line = styled.View``;

export const Info = styled.Text`
    color: ${({ theme })=> theme.fcolor_one};
    text-transform: capitalize;
    font-family: 'RobotoSlab_600SemiBold';
`;

export const Data = styled.Text`
    color: ${({ theme })=> theme.fcolor_two};
    text-transform: capitalize;
    font-family: 'RobotoSlab_600SemiBold';
`;
