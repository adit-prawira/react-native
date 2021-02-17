import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 300,
    },
});
const ShowResultScreen = ({ navigation }) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />
                    );
                }}
            />
        </View>
    );
};
export default ShowResultScreen;
