import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#d8d6d6",
        height: 50,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
});

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" />

            <TextInput
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                // when enter key is pressed it will submit the value
                // that has been type inside the SearchBar
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};
export default SearchBar;
