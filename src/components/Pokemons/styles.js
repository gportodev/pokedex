import styled from 'styled-components/native';

import colors from '../../style/colors';

export const List = styled.FlatList``;

export const Search = styled.View`
    flex-direction: row;
    align-items: center;
    align-self: center;
    background: ${colors.background_two};
    border-radius: 6px;
    height: 50px;
    bottom: 15px;
    margin-bottom: 10px;
`;

export const Square = styled.View`
    background: ${colors.background_six};
    width: 48px;
    height: 48px;
    border-radius: 10px;
    justify-content: center;
`;

export const IconComponent = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    left: 10px;
`;

export const InComponent = styled.TextInput`
    width: 300px;
    height: 40px;
    font-size: 18px;
    left: 10px;
    font-family: 'RobotoSlab_400Regular';
    color: ${colors.fcolor_two};
`;
