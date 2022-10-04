import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { COLORS } from "../helper";
import MyButton from "./MyButton";
import Input from "./Input";
import YellowText from "./YellowText";

function InputPlace(input, inputFlag) {
  if (inputFlag) {
    return <Input text={input.text} setText={input.setText} />;
  }
}

function ImgPlace(imgUrl) {
  if (imgUrl !== "") {
    if (imgUrl === "../assets/unamused-face_1f612.png") {
      return <Image source={require("../assets/unamused-face_1f612.png")} />;
    } else {
      //   alert(imgUrl);
      return (
        <Image source={{ uri: imgUrl }} style={{ width: 100, height: 100 }} />
      );
    }
  }
}

export default function Card({
  contents,
  inputFlag,
  input,
  buttons,
  flexDirection,
  imgUrl,
}) {
  return (
    // <>

    //     <View style={styles.cardContainer}>
    //         <Text style={styles.baseText}>
    //             Enter A Number!
    //         </Text>
    //         {props.children}
    //         <Input />
    //     </View>

    // </>
    <>
      <View style={styles.cardContainer}>
        <YellowText contents={contents} />
        {ImgPlace(imgUrl)}
        {InputPlace(input, inputFlag)}
        <View style={[styles.buttonsContainer,flexDirection == 'row' ? styles.buttonsContainerInRow : styles.buttonsContainerInColumn]}>
            {buttons.map((button, idx) => (
              <MyButton
                title={button.title}
                color={button.color}
                action={button.action}
                key={idx}
              />
            ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },

  textContainer: {
    width: 200,
    height: 20,
    flex: 0.04,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000000",
    borderWidth: 3,
    padding: 10,
    margin: 120,
  },

  cardContainer: {
    backgroundColor: COLORS.LIGHTBLUE,
    flex: 0.5,
    width: 380,
    height: 400,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    shadowColor: COLORS.BLACK,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset:{width:4, height:4}
  },

  baseText: {
    color: COLORS.YELLOW,
  },

  input: {
    color: "#ff00ff",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.YELLOW,
    // borderBottomStyle:'solid'
    margin: 5,
  },
  button: {
    margin: 5,
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonsContainerInRow: {
    flexDirection: "row",
  },
  buttonsContainerInColumn: {
    flexDirection: "column",
  },
  buttonsContainer: {
      marginTop:30,
      width:300,
      justifyContent:'space-around'
  }
});
