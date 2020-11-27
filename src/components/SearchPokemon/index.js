import React from 'react';

import { Feather } from '@expo/vector-icons';

import colors from '../../style/colors';

import { Search, IconComponent, InComponent } from './styles';

export default function SearchPokemon() {
    return (
        <Search>
            <IconComponent>
                <Feather name="search" size={20} color={colors.num} />
            </IconComponent>
            <InComponent
                placeholder="Type the pokémon name"
                placeholderTextColor={colors.num}
                style={{ fontFamily: 'RobotoSlab_400Regular', color: 'white' }}
                autoCorrect={false}
                autoCapitalize="none"
            />
        </Search>
    );
}
