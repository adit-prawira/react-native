import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1,
    },
});

const TextScreen = () => {
    const [name, setName] = useState("");
    return (
        <View>
            {/* Prevent IOS to auto-correct and capitalize our input */}
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
        </View>
    );
};

export default TextScreen;
