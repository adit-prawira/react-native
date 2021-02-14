import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";
const styles = StyleSheet.create({});
const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    // color === "red" || "blue" || "green"
    // change === +COLOR_INCREMENT || -COLOR_INCREMENT
    const setColor = (color, change) => {
        switch (color) {
            case "red":
                red + change > 255 || red + change < 0
                    ? null
                    : setRed(red + change);
                return;
            case "blue":
                blue + change > 255 || blue + change < 0
                    ? null
                    : setBlue(blue + change);
                return;
            case "green":
                green + change > 255 || green + change < 0
                    ? null
                    : setGreen(green + change);
                return;
            default:
                return;
        }
    };
    return (
        <View>
            <ColorCounter
                onIncrease={() => setColor("red", COLOR_INCREMENT)}
                onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => setColor("blue", COLOR_INCREMENT)}
                onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => setColor("green", COLOR_INCREMENT)}
                onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                }}
            />
        </View>
    );
};
export default SquareScreen;
