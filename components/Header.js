import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Inter_900Black,
  } from '@expo-google-fonts/inter';


const Header = props => {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.Header}>
            <Text style={styles.headertitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        height: 60,
        paddingTop: 6,
        backgroundColor: '#09253a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headertitle: {
        fontSize: 21,
        color: '#ffffff',
        fontFamily: 'Inter_900Black'
    }
});

export default Header;