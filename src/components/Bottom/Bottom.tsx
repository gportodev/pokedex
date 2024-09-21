import React from 'react';

import { VLogo, Logo } from './styles';

import img from '../../assets/bottom.png';

function Bottom(): JSX.Element {
    return (
        <VLogo>
            <Logo source={img} />
        </VLogo>
    );
}

export { Bottom }
