import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.text}>Home</Text>
            <Button
                title="Random Color Generator"
                onPress={() => navigation.navigate("Color")}
            />
            <Button
                title="Square Color"
                onPress={() => navigation.navigate("Square")}
            />
            <Button
                title="Text Demo"
                onPress={() => navigation.navigate("Text")}
            />
            <Button
                title="Box Demo"
                onPress={() => navigation.navigate("Box")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: "center",
    },
});

export default HomeScreen;
