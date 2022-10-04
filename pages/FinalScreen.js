import React from "react";
import { COLORS } from "../helper";
import Card from "../components/Card";
import BlackTitle from "../components/BlackTitle";

import {
  View,
  StyleSheet,
} from "react-native";

export default function FinalScreen(props) {
  var img = "";
  if (props.rightGuess) {
    img = `https://picsum.photos/id/${props.randomNumber}/100/100`;
  } else {
    img = img + "../assets/unamused-face_1f612.png";
  }

  return (
    <View style={styles.container}>
      <BlackTitle title={"Game Is Over"} />      
      <Card
        inputFlag={false}
        contents="Here's your picture"
        imgUrl={img}
        buttons={[
          {
            title: "Start Again",
            color: COLORS.YELLOW,
            action: () => {
              props.restart();
            },
          },
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
