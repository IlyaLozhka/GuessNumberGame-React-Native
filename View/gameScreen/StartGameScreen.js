import React, {useState} from "react";
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Alert,
} from "react-native";
import {Card} from "../../Component/Card/Card";
import {Input} from "../../Component/Input/Input";
import {ActionButtons} from "../../Component/ActionButtons/ActionButtons";
import {ConfirmCard} from "../confirmingCard/ConfirmCard";
import {Pallet} from "../../assets/pallet/pallet";
import {BodyText} from "../../Component/Text/BodyText";
import {TitleText} from "../../Component/Text/TitleText";


export const StartGameScreen = ({onStartGame}) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [chosenNumber, setChosenNumber] = useState();
    const [confirmed, setConfirmed] = useState(false);

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const onResetHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const onConfirmHandler = () => {
        const number = parseInt(enteredValue);
        if (isNaN(number) || number <= 0 || number >= 100) {
            setConfirmed(false);
            Alert.alert('Invalid Number!',
                'You need to choose number between 1 and 99',
                [{
                    text: 'Okay', style: 'destructive', onPress: () => {
                        onResetHandler()
                    }
                }])
        }
        setConfirmed(true);
        setChosenNumber(number)
    }

    return (
        <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={90}>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={styles.wrapper}>
                    <TitleText> Start a New Game! </TitleText>
                    { !confirmed && <Card style={styles.inputContainer}>
                        <BodyText style={{color: Pallet.colors.secondary}}>Select a Number!</BodyText>
                        <Input style={styles.inputText}
                               blurOnSubmit autoCapitalizt={'none'}
                               placeholder={'Enter your Number!!'}
                               autoCorrect={false}
                               keyboardType={'number-pad'}
                               maxLength={2}
                               onChangeText={numberInputHandler}
                               value={enteredValue}
                        />

                        <ActionButtons onConfirm={onConfirmHandler} onCancel={onResetHandler}
                                       cancelTitle={'Reset'} confirmTitle={'Confirm'}/>

                    </Card>}
                    {
                        confirmed && <ConfirmCard onConfirm={onStartGame}>{chosenNumber}</ConfirmCard>
                    }
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        alignItems: 'center',
    },
    inputText: {
        fontSize: 15,
        marginVertical: 5,
    },
});
