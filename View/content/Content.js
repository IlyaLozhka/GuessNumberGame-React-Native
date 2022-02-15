import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {StartGameScreen} from "../gameScreen/StartGameScreen";
import {GameScreen} from "../gameScreen/GameScreen";
import {GameOverScreen} from "../gameScreen/GameOverScreen";

export const Content = () => {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber)
    };

    const gameOverHandler = (roundNumber) => {
        setGuessRounds(roundNumber)
    };

    const configureNewGame = () => {
        setGuessRounds(0);
        setUserNumber(null)
    };

    let content = <StartGameScreen onStartGame={startGameHandler}/>;

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen onGameOver={gameOverHandler} userChoice={userNumber}/>
    } else if (guessRounds > 0) {
        content =
            <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGame}/>
    }

    return (
        <View style={styles.wrapper}>
            {content}
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
});
