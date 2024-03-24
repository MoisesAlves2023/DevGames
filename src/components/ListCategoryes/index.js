import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListCategoryes({ category }) {
    return (
        <View style={styles.containerCategories}>
            <TouchableOpacity style={styles.categories} >
                {category && <Text style={{ color: 'white',fontSize: 18, fontWeight: 'bold' }}>{category.name}</Text>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCategories: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    categories:{
        backgroundColor: 'gray',
        marginHorizontal: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center'
    }

})