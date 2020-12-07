import styled from 'styled-components/native';

import colors from '../../style/colors';

export const Card = styled.TouchableOpacity`
    width: 177px;
    height: 350px;
    border-radius: 20px;
    background-color: ${colors.background_tree};
    margin: 1px 10px;
`;

export const Avatar = styled.Image`
    width: 160px;
    height: 160px;
`;

export const Line = styled.View``;

export const Info = styled.Text`
    color: ${colors.fcolor_one};
    text-transform: capitalize;
`;

export const Data = styled.Text`
    color: ${colors.fcolor_two};
    text-transform: capitalize;
`;
