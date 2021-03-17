import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({});
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const currentPost = state.find(
        (post) => post.id === navigation.getParam("id")
    );

    return (
        <View>
            <Text>{currentPost.title}</Text>
            <Text>{currentPost.content}</Text>
        </View>
    );
};
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("Edit", {
                        id: navigation.getParam("id"),
                    })
                }
            >
                <Ionicons name="pencil" size={30} color="black" />
            </TouchableOpacity>
        ),
    };
};
export default ShowScreen;
