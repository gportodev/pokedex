import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const GridPoint = styled.View`
    flex-direction: row;
    align-items: center;
    left: ${`${width * 0.04}px`};
`;

export const PointActive = styled.View`
    width: 20px;
    height: 20px;
    margin: 0.6%;
    border-radius: 4px;
`;

export const PointInactive = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 0.6%;
`;
