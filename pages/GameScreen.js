import {
  View,
  Modal,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS } from "../helper";
import Card from "../components/Card";

function GuessResult(props) {
  if (props.guess === props.randomNumber) {
    return (
      <Card
        contents="Congrats! You Won!"
        imgUrl={""}
        inputFlag={false}
        buttons={[
          {
            title: "Thank You!",
            color: COLORS.YELLOW,
            action: props.stopPlaying,
          },
        ]}
      />
    );
  } else {
    return (
      <Card
        contents={
          "You have chosen " +
          props.guess +
          "\nThat's not my number!" +
          "\nGuess " +
          (props.guess > props.randomNumber ? "Lower!" : "Higher!")
        }
        imgUrl={""}
        inputFlag={false}
        buttons={[
          {
            title: "I am done",
            color: COLORS.PURPLE,
            action: props.stopPlaying,
          },
          {
            title: "Let Me Guess Again",
            color: COLORS.YELLOW,
            action: props.keepPlaying,
          },
        ]}
      />
    );
  }
}

export default function GameScreen(props) {
  return (
    <Modal visible={props.modal}>
      <View style={styles.container}>
        {GuessResult(props)}
      </View>
    </Modal>
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
