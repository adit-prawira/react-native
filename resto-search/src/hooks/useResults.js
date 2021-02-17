import { useState, useEffect } from "react";
import yelp from "../api/yelp";
export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const searchApi = async (searchTerm) => {
        try {
            const res = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "melbourne",
                },
            });
            setResults(res.data.businesses);
        } catch (err) {
            setErrorMessage("Something went wrong");
        }
    };

    // Run searchApi 1 time each time the user open the app.
    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
};
