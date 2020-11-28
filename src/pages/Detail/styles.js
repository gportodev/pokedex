import styled from 'styled-components/native';

import colors from '../../style/colors';

export const GoBack = styled.TouchableOpacity`
    flex-direction: row;
    left: 10px;
    top: 10px;
    align-items: center;
`;

export const PokeInfo = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.View`
    flex-direction: row;
`;

export const ProgressMax = styled.View`
    border-radius: 20px;
    align-items: center;
`;

export const BottomHeader = styled.View`
    top: 15px;
    left: 10px;
`;

export const BottomTitle = styled.Text`
    font-size: 20px;
    color: ${colors.key};
`;

export const Chain = styled.View`
    flex-direction: row;
`;
