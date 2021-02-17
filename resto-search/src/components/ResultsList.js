import React from "react";
import { View, StyleSheet, Text, FlatList, Box } from "react-native";
import ResultDetails from "./ResultDetails";
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
    container: { marginBottom: 10 },
});
const ResultsList = ({ title, results }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>

            {/* horizontal list */}
            <FlatList
                horizontal
                data={results}
                keyExtractor={(resto) => resto.id}
                renderItem={({ item }) => {
                    return <ResultDetails result={item} />;
                }}
            />
        </View>
    );
};

export default ResultsList;
