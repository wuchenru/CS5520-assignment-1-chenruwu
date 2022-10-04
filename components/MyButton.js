import {
  View,
  Button,
  TextInput,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS } from "../helper";

export default function MyButton({ title, action, color }) {
  return (
    // <View style={styles.button}>
    <Button
      style={styles.button}
      title={title}
      color={color}
      onPress={action}
    />
    // {/* </View> */}
  );
}

styles = StyleSheet.create({
  button: {
    margin: 5,
    width: "30%",
    // flexDirection: "row",
  },
});
