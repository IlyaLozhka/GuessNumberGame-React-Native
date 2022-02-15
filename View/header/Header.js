import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import {Pallet} from '../../assets/pallet/pallet';

export const Header = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.headerTitle}> Guess The Number!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height:60,
        position: 'relative',
        zIndex: 1,
        width: '100%',
        backgroundColor: Pallet.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 26,
        color: Pallet.colors.primaryWhite,
        fontFamily: Pallet.fonts.title
    }
});

