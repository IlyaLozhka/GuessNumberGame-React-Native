import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";


export const NumberContainer =({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    number: {
        marginVertical: 10,
        fontSize: 36,
        fontWeight:'600',
        color: Pallet.colors.primaryWhite
    },
    container: {
        borderRadius: 50,
        backgroundColor: Pallet.colors.primary,
        margin:10,
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center'
    }
})
