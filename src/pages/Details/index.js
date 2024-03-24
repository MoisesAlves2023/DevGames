import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';

export default function Details() {
    const route = useRoute();
    const { Details } = route.params;
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        async function getDetails() {
            try {
                const response = await api.get(`games/${Details}?key=fce5e699a5f4471293ebaaf0a45b8523`);
                console.log(response.data);
                setContent(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error", error);
                setLoading(false);
            }
        }
        getDetails();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={'large'} color={"red"} />
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <ScrollView horizontal={true} >
                <Image style={{width: 350, height: 250, marginRight: 4 }} source={{ uri: content.background_image }} />
                <Image style={{width: 350, height: 250}} source={{ uri: content.background_image_additional }} />
            </ScrollView>

            <Text style={styles.textRating}>{content.name}</Text>
            {/* <Text style={styles.textRating}>{content.description}</Text> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        height: 200
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    textRating: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 5,
    },
});
