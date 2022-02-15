import React from "react";
import {View, StyleSheet} from "react-native";
import {Card} from "../Card/Card";
import {BodyText} from "../Text/BodyText";

export const ListItem = ({item}) => {
    return (
        <View>
            <Card style={styles.cardWrapper}>
                <BodyText >
                    {item}
                </BodyText>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    cardWrapper: {
        alignItems:'center',
        borderRadius:50,
        margin:30
    }
})
