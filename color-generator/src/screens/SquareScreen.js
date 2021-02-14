import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";
const styles = StyleSheet.create({});

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
    // state === { red: Number, green: Number, blue: Number }
    // action === {colorToChange: "red" || "green" || "blue",
    //             amount: COLOR_INCREMENT || -COLOR_INCREMENT}
    switch (action.colorToChange) {
        case "red":
            return { ...state, red: state.red + action.amount };
        case "green":
            return { ...state, green: state.green + action.amount };
        case "blue":
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreen = () => {
    // In this case, initially, state = { red: 0, green: 0, blue: 0 }
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });
    const { red, green, blue } = state;
    return (
        <View>
            <ColorCounter
                onIncrease={() =>
                    dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "red",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="Red"
            />
            <ColorCounter
                onIncrease={() =>
                    dispatch({
                        colorToChange: "blue",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="Blue"
            />
            <ColorCounter
                onIncrease={() =>
                    dispatch({
                        colorToChange: "green",
                        amount: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        colorToChange: "green",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
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
