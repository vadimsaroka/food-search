import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
    <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    imageStyle: {
        width: 250,
        height: 130,
        borderRadius: 5,
        marginBottom: 5,
    },
    nameStyle: {
        fontWeight: "bold"
    },
});

export default ResultsDetail;