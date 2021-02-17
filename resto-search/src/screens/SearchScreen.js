import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { View, StyleSheet, Text } from "react-native";
import yelp from "../api/yelp";

const styles = StyleSheet.create({});

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const searchApi = async () => {
        try {
            const res = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term,
                    location: "melbourne",
                },
            });
            setResults(res.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage !== "" && <Text>{errorMessage}</Text>}
            <Text>We have found {results.length}</Text>
        </View>
    );
};
export default SearchScreen;
