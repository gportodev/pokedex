import React from 'react';

import { GridPoint, PointActive, PointInactive } from './styles';

import colors from '../../style/colors';

export default function PokemonPoint({ number }) {
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
                        style={{ backgroundColor: colors.background_four }}
                    />
                ) : (
                    <PointInactive
                        style={{ backgroundColor: colors.background_five }}
                    />
                )
            )}
        </GridPoint>
    );
}
