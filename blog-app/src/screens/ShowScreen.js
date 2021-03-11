import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import { View, StyleSheet, Text } from "react-native";
const styles = StyleSheet.create({});
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const currentPost = state.find(
        (post) => post.id === navigation.getParam("id")
    );
    return (
        <View>
            <Text>{currentPost.title}</Text>
        </View>
    );
};
export default ShowScreen;
