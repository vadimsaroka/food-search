import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
// import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  // const [results, setResults] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");

  // const searchApi = async (searchTerm) => {
  //   try {
  //     const response = await yelp.get("/search", {
  //       params: {
  //         limit: 50,
  //         term: searchTerm,
  //         location: "san francisco",
  //       },
  //     });
  //     setResults(response.data.businesses);
  //   } catch (err) {
  //     setErrorMessage("Something went wrong");
  //   }
  // };

  // useEffect(() => {
  //   searchApi("pizza")
  // }, [])

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
