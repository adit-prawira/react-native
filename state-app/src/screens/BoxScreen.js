import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewStyle: { borderWidth: 3, borderColor: "black" },
    textStyle: {
        borderWidth: 1,
        borderColor: "red",
        margin: 20,
    },
});

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );
};
export default BoxScreen;
