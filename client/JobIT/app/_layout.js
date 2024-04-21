import React, { useCallback, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { Stack } from 'expo-router'

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            console.log('Fonts loaded, hiding splash screen');
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        console.log('Fonts not loaded, returning null');
        return null;
    }

    console.log('Rendering View component');
    return (
        <Stack onLayout={onLayoutRootView}/>
    );
}

export default Layout;