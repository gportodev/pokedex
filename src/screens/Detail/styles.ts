import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.background_tree};
`;

export const VLogo = styled.View`
    align-items: flex-start;
`;

export const Logo = styled.Image`
    width: 100%;
`;

export const GoBack = styled.TouchableOpacity`
    bottom: 40%;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: ${({ theme }) => theme.background_one};
`;

export const PokeInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Info = styled.View`
    flex-direction: column;
    right: ${`${width * 0.05}px`};
`;

export const AView = styled.View``;

export const Avatar = styled.Image`
    height: ${`${height * 0.2}px`};
`;

export const Tag = styled.View`
    flex-direction: row;
`;

export const PokeStats = styled.View`
    width: ${`${width}px`};
    height: ${`${height * 1}px`};
    background-color: ${({ theme }) => theme.background_one};
    align-items: center;
`;

export const PokeData = styled.View`
    top: 5%;
    background-color: ${({ theme }) => theme.background_six};
    width: ${`${width * 0.9}px`};
    height: ${`${height * 0.3}px`};
    border-radius: 8px;
`;

export const FamilyTree = styled.TouchableOpacity`
    top: 8%;
    background-color: ${({ theme }) => theme.background_six};
    width: ${`${width * 0.9}px`};
    height: ${`${height * 0.1}px`};
    border-radius: 8px;
    justify-content: center;
    padding: 4%;
`;
