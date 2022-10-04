import {
    View,
    Button,
    TextInput,
    Modal,
    StyleSheet,
    Image,
    Text,
} from "react-native";
import React from "react";
import { COLORS } from "../helper";

export default function BlackTitle({ title }) {
    return (
        <Text style={styles.blackTitleContainer} >
            {title}
        </Text>
    )


}

styles = StyleSheet.create({
    blackTitleContainer: {
        width: 300,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: COLORS.GREEN,
        borderWidth: 3,
        padding: 10,
        margin: 10,
        color:COLORS.GREEN,
        fontSize:30,
        textAlign:'center'
    }
})