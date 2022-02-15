import React from "react";
import { StyleSheet, View} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";
import {MainButton} from "../Button/MainButton";


export const ActionButtons =({onConfirm, onCancel, confirmTitle, cancelTitle}) => {
    return (
        <View style={styles.actions}>
                <MainButton style={{backgroundColor:Pallet.colors.secondary}} title={cancelTitle} onPressAction={onCancel}/>
                <MainButton title={confirmTitle} onPressAction={onConfirm}/>
        </View>
    )
};

const styles = StyleSheet.create({
    actions: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
})
