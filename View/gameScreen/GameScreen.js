import React, {useEffect, useRef, useState} from "react";
import {StyleSheet, View, Alert, Dimensions} from "react-native";
import {NumberContainer} from "../../Component/numberContainer/NumberContainer";
import {Card} from "../../Component/Card/Card";
import {MainButton} from "../../Component/Button/MainButton";
import {Pallet} from "../../assets/pallet/pallet";
import {Ionicons} from '@expo/vector-icons';
import {ListContainer} from "../../Component/List/ListContainer";
import {useOrientation} from "../../Component/hooks/useOrientation";
import {TitleText} from "../../Component/Text/TitleText";

const randomNumberGenerator = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
        return randomNumberGenerator(min, max, exclude)
    } else {
        return rndNum
    }
}

export const GameScreen = ({userChoice, onGameOver}) => {
    const initialGuess = randomNumberGenerator(1, 100, userChoice)

    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuess, setPastGuess] = useState([initialGuess]);

    const orientation = useOrientation()
    console.log(orientation)

    const currentHigh = useRef(100);
    const currentLow = useRef(1);

    const wrapperLandscape = orientation === 'PORTRAIT' ? null : {flexDirection: 'row'};
    const contentLandscape = orientation === 'PORTRAIT' ? null : { flex:1};

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userChoice)
            || (direction === 'greater' && currentGuess > userChoice)) {
            return Alert.alert('Don\'t lie!', 'You know you are cheating!', [{
                text: 'Sorry :(', style: 'destructive',
            }])
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else if (direction === 'greater') {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = randomNumberGenerator(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuess(currentPastGuess => [nextNumber, ...currentPastGuess]);
    }

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuess.length)
        }
    }, [currentGuess]);


    return (
        <View style={{...styles.wrapperPortrait, ...wrapperLandscape}}>
            <View style={{...styles.content, ...contentLandscape}}>
                <View style={{alignItems: 'center'}}>
                    <TitleText>
                        Opponent's Guess
                    </TitleText>
                    <NumberContainer>
                        {currentGuess}
                    </NumberContainer>
                </View>

                <Card style={styles.buttonContainer}>

                    <MainButton title={<Ionicons name={'remove-circle'} size={26} color={'white'}/>}
                                onPressAction={() => nextGuessHandler('lower')}
                                style={{backgroundColor: Pallet.colors.secondary}}/>
                    <MainButton title={<Ionicons name={'ios-add-circle'} size={26} color={'white'}/>}
                                onPressAction={() => nextGuessHandler('greater')}
                                style={{backgroundColor: Pallet.colors.secondary,}}/>
                </Card>

            </View>
            <View style={{ ...contentLandscape,...styles.content }}>
                <ListContainer dataList={pastGuess}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapperPortrait: {
        flex: 1,
        alignItems: 'center',
    },
    wrapperLandscape: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        alignContent: "flex-start"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        width: 250,
        maxWidth: "90%",
        paddingHorizontal: 20,
    }
})
