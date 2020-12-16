import React from 'react';

import { AppLoading } from 'expo';

import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    RobotoSlab_400Regular,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';

import Route from './src/routes';

export default function App() {
    const [fontsLoaded] = useFonts({
        RobotoSlab_400Regular,
        RobotoSlab_600SemiBold,
        RobotoSlab_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar auto />
            <Route />
        </>
    );
}
