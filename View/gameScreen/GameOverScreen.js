import React from "react";
import {View, StyleSheet, Image, Dimensions} from "react-native";
import {Card} from "../../Component/Card/Card";
import {MainButton} from "../../Component/Button/MainButton";
import {BodyText} from "../../Component/Text/BodyText";
import {TitleText} from "../../Component/Text/TitleText";
import {useOrientation} from "../../Component/hooks/useOrientation";

const imageScaleByWindow = Dimensions.get('window').width * 0.6;

export const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {

    const orientation = useOrientation();
    const imageSize = orientation === 'PORTRAIT'
        ? {
            width: 250,
            height: 250,
            borderRadius: 125
        }
        : {
            width: 200,
            height: 200,
            borderRadius: 100
        }
    return (
        <View style={styles.wrapper}>
            <Card style={styles.cardWrapper}>
                <TitleText>
                    You are Lose!
                </TitleText>
                <View style={{...styles.imageContainer, ...imageSize}}>
                    <Image style={styles.image} source={require('../../assets/img/success.png')}/>
                </View>
                <BodyText>
                    Number of Rounds: {roundsNumber}
                </BodyText>
                <BodyText>
                    Your Number was: {userNumber}
                </BodyText>
                <MainButton title={'Wanna try again?'} onPressAction={onRestart}/>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    cardWrapper: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    wrapper: {
        flex: 1,
        padding: 10,
        width: 300,
        maxWidth: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
       borderRadius: imageScaleByWindow / 2,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',
    },
})
