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

export default function Input({ onAdd, modal, onCancel, text, setText }) {
    

    return (
        <>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={text}
                onChangeText={(newText) => {
                    setText(newText);
                }}
                placeholder="Type something"
                maxLength={4}
            />

            {/* <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button title="Reset" onPress={() => {
                        setText("");
                    }} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Confirm"
                        onPress={() => {
                            setText("");
                            alert("success");
                        }}
                        disabled={text.length ? false : true}
                    />
                </View>
            </View> */}

        </>


        //   {/* <Image
        //     source={
        //       require("../assets/Images/goalImage.png")
        //       // {
        //       // uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
        //       // }
        //     }
        //     style={styles.image}
        //   /> */}

        //   {/* <View style={styles.buttonsContainer}>
        //     <View style={styles.button}>
        //       <Button title="Cancel" onPress={onCancel} />
        //     </View>
        //     <View style={styles.button}>
        //       <Button
        //         title="Confirm"
        //         onPress={() => {
        //           onAdd(text);
        //           setText("");
        //         }}
        //         disabled={text.length? false: true}
        //       />
        //     </View>
        //   </View> */}

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        color: COLORS.BLUE,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.YELLOW,
        // borderBottomStyle:'solid'
        margin: 5,
        fontSize:20
    },
    button: {
        margin: 5,
        width: '30%'
    },
    image: {
        width: 100,
        height: 100,
    },
    buttonsContainer:
    {
        flexDirection: 'row'
    }
});