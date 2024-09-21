import React from 'react';

import { GridPoint, PointActive, PointInactive } from './styles';
import theme from '@/style/theme';


function PokemonPoint({ number }) {
    const maxArr = [];
    const num = number / 10;

    for (let i = 0; i <= 9; i++) {
        if (i <= num) {
            maxArr.push(true);
        } else {
            maxArr.push(false);
        }
    }

    return (
        <GridPoint>
            {maxArr.map((e) =>
                e ? (
                    <PointActive
                        style={{ backgroundColor: theme.background_four }}
                    />
                ) : (
                    <PointInactive
                        style={{ backgroundColor: theme.background_five }}
                    />
                )
            )}
        </GridPoint>
    );
}

export { PokemonPoint }
