import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const styles = StyleSheet.create({});

// Function that will create random color from R, G, and B value (0- 255 each);
const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
    // start collections of colors as an empty array
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    // Creating a brand new array by spreading or includes all colors element
                    // with new entry which is randomRGB(). Pretty much like concat.
                    setColors([...colors, randomRGB()]);
                }}
            />
            {/* item is the element inside colors list/array */}
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                backgroundColor: item,
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

export default ColorScreen;
