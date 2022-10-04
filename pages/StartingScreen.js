import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../helper";
import Card from "../components/Card";
import { useState } from "react";
import BlackTitle from "../components/BlackTitle";
import Input from "../components/Input";
import MyButton from "../components/MyButton";
import { Alert } from "react-native";

export default function StartingScreen(props) {
  const onReset = () => {
    props.setText("");
  };
  const onConfirm = () => {
    if (checkValid(props.text)) {
      props.confirmInput();
    }
  };
  const checkValid = (input) => {
    const num = Number(input);
    if (!Number.isInteger(num) || num < 1020 || num > 1029) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1020 and 1029."
      );
      props.setText("");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <BlackTitle title={"Guess My Number"} />
      <Card
        input={{ text: props.text, setText: props.setText }}
        imgUrl={""}
        flexDirection={"row"}
        inputFlag={true}
        contents="Enter a Number"
        buttons={[
          { title: "Reset", color:COLORS.YELLOW, action: onReset },
          { title: "Confirm", color: COLORS.MAROON , action: onConfirm },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
