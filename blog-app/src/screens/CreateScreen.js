import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
});

const CreateScreen = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return (
        <View>
            <Text style={styles.label}>Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.label}>Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button title="Add Post" />
        </View>
    );
};

export default CreateScreen;
