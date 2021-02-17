import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#d8d6d6",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    },
});
const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={24} color="black" />
            <Text>Search Bar</Text>
        </View>
    );
};
export default SearchBar;
