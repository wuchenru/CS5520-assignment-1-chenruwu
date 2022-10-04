import {
    View,
    Button,
    TextInput,
    Modal,
    StyleSheet,
    Text,
    Image,
  } from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS } from "../helper";

  export default function YellowText ( {contents} ) {
    return (
        <Text style = { styles.yellowText }>{contents}</Text>
    )
  }


  const styles = StyleSheet.create({
    yellowText: {
        color: COLORS.DARKBLUE,
        fontSize:30,
    },
  })