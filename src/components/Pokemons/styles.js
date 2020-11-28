import styled from 'styled-components/native';

import colors from '../../style/colors';

export const List = styled.FlatList``;

export const Search = styled.View`
    margin-top: 5px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    background: ${colors.search};
    border-radius: 6px;
    align-self: center;
`;

export const IconComponent = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    left: 10px;
`;

export const InComponent = styled.TextInput`
    width: 300px;
    height: 40px;
    font-size: 16px;
    padding: 10px;
`;
