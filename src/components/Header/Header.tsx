import React from 'react';

import { VLogo, Logo } from './styles';

import img from '../../assets/head.png';

function Header(): JSX.Element {
    return (
        <VLogo>
            <Logo source={img} />
        </VLogo>
    );
}

export { Header }