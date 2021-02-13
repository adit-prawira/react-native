import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    const { navigation } = props;
    return (
        <View>
            <Text style={styles.text}>Home</Text>
            <Button
                title="Random Color Generator"
                onPress={() => navigation.navigate("Color")}
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
