import React from 'react';

import { VLogo, Logo } from './styles';

import img from '../../assets/head.png';

export default function Header() {
    return (
        <VLogo>
            <Logo source={img} />
        </VLogo>
    );
}
