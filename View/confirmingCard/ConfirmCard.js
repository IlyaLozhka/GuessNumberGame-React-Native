import {Card} from "../../Component/Card/Card";
import {View} from "react-native";
import {Pallet} from "../../assets/pallet/pallet";
import React from "react";
import {StyleSheet} from "react-native";
import {NumberContainer} from "../../Component/numberContainer/NumberContainer";
import {MainButton} from "../../Component/Button/MainButton";
import {BodyText} from "../../Component/Text/BodyText";

export const ConfirmCard = ({children, onConfirm}) => {
    return (
        <Card style={styles.summaryContainer}>
            <View>
                <BodyText style={styles.summaryText}>Chosen number:</BodyText>
            </View>
            <NumberContainer>
                {children}
            </NumberContainer>
            <MainButton title={'Start Game!'} onPressAction={() => onConfirm(children)}/>
        </Card>

    )
};

const styles = StyleSheet.create({
    summaryContainer: {
        width: 400,
        maxWidth: "90%",
        alignItems: 'center',
    },
    summaryText: {
        marginVertical: 10,
        fontSize: 20,
        color: Pallet.colors.secondary
    },
})
