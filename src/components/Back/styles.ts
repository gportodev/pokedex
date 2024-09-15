import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.background_one};
`;
