import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const styles = StyleSheet.create({});
const ColorCounter = ({ color }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} />
            <Button title={`Decrease ${color}`} />
        </View>
    );
};
export default ColorCounter;
