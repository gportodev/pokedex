import styled from 'styled-components/native';

import colors from '../../style/colors'

export const Container = styled.View`
    padding-top: 10%;
    background: ${colors.head};
`;

export const Grid = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 80px;
    height: 80px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${colors.title};
    left: 10px;
`;


