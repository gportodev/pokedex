import styled from 'styled-components/native';

import colors from '../../style/colors';

export const Card = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    align-items: center;
    border-radius: 8px;
    background-color: ${colors.view};
    margin: 5px;
`;

export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    margin: 15px;
`;

export const Line = styled.View`
    flex-direction: row;
    justify-content: center;
    margin: 5px;
`;

export const Info = styled.Text`
    color: ${colors.key};
`;

export const Data = styled.Text`
    color: ${colors.value};
`;
