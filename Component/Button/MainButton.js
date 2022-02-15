import React from "react";
import {View, StyleSheet, TouchableOpacity, Text, Platform} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";

export const MainButton = ({onPressAction, title, style}) => {
    return (
        <TouchableOpacity onPress={onPressAction}>
            <View style={{...styles.wrapper, ...style}}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: Pallet.colors.primary,
        ...Platform.select({
           ios: {
               shadowColor: Pallet.colors.secondary,
               shadowOpacity: 0.4,
               shadowOffset: {
                   width: 10,
                   height: 7
               },
           } ,
            android: {
               elevation: 5
            }
        }),

        borderRadius:20
    },
    title: {
        fontSize:18,
        color: Pallet.colors.primaryWhite,
        fontFamily: Pallet.fonts.title
    },
})
