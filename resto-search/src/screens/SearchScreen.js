import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
const styles = StyleSheet.create({});

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        // price === "$" || "$$" || "$$$"
        return results.filter((resto) => resto.price === price);
    };
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/* {errorMessage !== "" && <Text>{errorMessage}</Text>} */}
            <ResultsList
                title="Cost Effective"
                results={filterResultsByPrice("$")}
            />
            <ResultsList
                title="Bit Pricier"
                results={filterResultsByPrice("$$")}
            />
            <ResultsList
                title="Big Spender"
                results={filterResultsByPrice("$$$")}
            />
        </View>
    );
};
export default SearchScreen;
