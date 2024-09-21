
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('window');

export const VLogo = styled.View``;

export const Logo = styled.View`
    width: 100%;
    height: ${`${height * 0.25}px`};
`;
