import React from "react";
import {StyleSheet, TextInput} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";

export const Input = ({style, ...props} ) => {
    return <TextInput  style={{...styles.wrapper, ...style}} {...props}  />
};

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        borderBottomColor: Pallet.colors.secondary,
        borderBottomWidth: 1,
    },
})
