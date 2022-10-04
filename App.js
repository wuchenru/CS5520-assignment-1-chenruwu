import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StartingScreen from "./pages/StartingScreen";
import FinalScreen from "./pages/FinalScreen";
import GameScreen from "./pages/GameScreen";
import { useState } from "react";
import { COLORS } from "./helper";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  // the state records if the whole game is ended
  const [gameOver, setGameOver] = useState(false);

  // the state records the random number
  const [randomNumber, setRandomNumber] = useState(
    1020 + Math.floor(Math.random() * 10)
  );

  // control the visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  // stores the guess number from the user
  const [guess, setGuess] = useState(0);

  // stores the input text
  const [text, setText] = useState("");

  // check if the user guess the right answer
  const [rightGuess, setRightGuess] = useState(false);

  // operations when the user confirms the input
  const confirmInput = () => {
    let num = Number(text);
    if (num === randomNumber) setRightGuess(true);
    setGuess(num);
    setModalVisible(true);
  };

  // operations when the user stops playing
  const stopPlaying = () => {
    setModalVisible(false);
    setGuess(0);
    setText("");
    setGameOver(true);
  };

  // operations when the user keeps playing
  const keepPlaying = () => {
    setModalVisible(false);
    setGuess(0);
    setText("");
    setGameOver(false);
  };

  // operaions when restart the game
  const reStart = () => {
    setModalVisible(false);
    setGameOver(false);
    setRandomNumber(1020 + Math.floor(Math.random() * 10));
    setGuess(0);
    setText("");
    setRightGuess(false);
  };
const colors = gameOver ? [COLORS.GREEN, COLORS.DARKBLUE, COLORS.GREEN] : [COLORS.WHITE, COLORS.BLUE];
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={colors}
        style={{width:'100%', height:'100%', alignItems:'center'}}
      >
        {gameOver ? (
          <FinalScreen
            rightGuess={rightGuess}
            restart={reStart}
            randomNumber={randomNumber}
          />
        ) : (
          <StartingScreen
            modal={modalVisible}
            setModal={setModalVisible}
            randomNumber={randomNumber}
            setRandomNumber={setRandomNumber}
            guess={guess}
            setGuess={setGuess}
            text={text}
            setText={setText}
            confirmInput={confirmInput}
          />
        )}

        <GameScreen
          modal={modalVisible}
          setModal={setModalVisible}
          randomNumber={randomNumber}
          setRandomNumber={setRandomNumber}
          guess={guess}
          setGuess={setGuess}
          gameOver={gameOver}
          setGameOver={setGameOver}
          text={text}
          setText={setText}
          setRightGuess={setRightGuess}
          keepPlaying={keepPlaying}
          stopPlaying={stopPlaying}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
});
