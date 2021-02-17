import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({});

const SearchScreen = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <View>
            <SearchBar
                searchValue={searchValue}
                onSearchValueChange={(newSearchValue) =>
                    setSearchValue(newSearchValue)
                }
            />
        </View>
    );
};
export default SearchScreen;
