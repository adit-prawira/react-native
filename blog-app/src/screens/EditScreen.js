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
const EditScreen = ({ navigation }) => {
    const { state, addBlogPost } = useContext(Context);
    const currentPost = state.find(
        (post) => post.id === navigation.getParam("id")
    );
    const [title, setTitle] = useState(currentPost.title);
    const [content, setContent] = useState(currentPost.content);
    return (
        <View>
            <Text>Edit Post - {navigation.getParam("id")}</Text>
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
            <Button
                title="Add Post"
                onPress={() => {
                    addBlogPost(title, content, () =>
                        navigation.navigate("Index")
                    );
                }}
            />
        </View>
    );
};

export default EditScreen;
