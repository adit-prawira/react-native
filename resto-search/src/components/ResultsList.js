import React from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5,
    },
    container: { marginBottom: 10 },
});
const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>

            {/* horizontal list */}
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(resto) => resto.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ShowResult")}
                        >
                            <ResultDetails result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default withNavigation(ResultsList);
