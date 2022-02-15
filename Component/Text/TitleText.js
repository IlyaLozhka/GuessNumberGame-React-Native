import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";

export const TitleText = ({style, children}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={{...styles.content, ...style }}>
                {children}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 5,
        marginHorizontal: 10,
    },
    content: {
        fontSize: 20,
        color: Pallet.colors.secondary,
        fontFamily: Pallet.fonts.title
    }
})
