import React from "react";
import {Platform, StyleSheet, View} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";

export const Card = ({children, style}) => {
    return (
        <View style={{...styles.wrapper, ...style}}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        marginVertical: 10,
        ...Platform.select({
            ios:{
                shadowColor: Pallet.colors.secondary,
                shadowOpacity: 0.6,
                shadowOffset: {
                    width: 10,
                    height: 7
                },
                shadowRadius: 10,
            },
            android: {
                elevation: 10
            }
        }),

        backgroundColor: Pallet.colors.primaryWhite,
        borderRadius: 20,
    },
});

