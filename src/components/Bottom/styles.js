import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const VLogo = styled.View``;

export const Logo = styled.Image`
    width: 100%;
    height: ${`${height * 0.11}px`};
`;
