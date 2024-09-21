import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import {
    useFonts,
    RobotoSlab_400Regular,
    RobotoSlab_600SemiBold,
    RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';
import { Routes } from '@/screens/routes';
import { ThemeProvider } from 'styled-components';
import theme from '@/style/theme';



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
        <ThemeProvider theme={theme}>
            <StatusBar />
            <Routes />
        </ThemeProvider>
    );
}
