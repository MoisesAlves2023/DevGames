import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Details() {
    const route = useRoute();
    const { Details } = route.params;
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

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

            <View style={{ flexDirection: "row", height: 250 }}>
                <TouchableOpacity style={styles.buttonBook}>
                    <Feather name='bookmark' size={25} color='#FFF' />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBack} onPress={()=> navigation.goBack()}>
                    <Feather name='arrow-left' size={25} color='#FFF' />
                </TouchableOpacity>

                <ScrollView horizontal={true} style={{ height: 250 }} >
                    <Image style={{ width: 350, height: 250, marginRight: 4 }} source={{ uri: content.background_image }} />
                    <Image style={{ width: 350, height: 250 }} source={{ uri: content.background_image_additional }} />
                </ScrollView>
            </View>

            <View >
                <View style={styles.star}>
                    <MaterialCommunityIcons name='star' size={20} color='#FFA500' />
                    <Text style={styles.textRating}>{content.rating}/5</Text>
                </View>

                <Text style={{ fontSize: 22, color: "#FFF", fontWeight: "bold", marginTop: 50, left: 6 }}>{content.name_original}</Text>
                <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "bold", marginTop: 20, left: 6 }}>Genres</Text>
                <View style={styles.containerGenres}>
                    {content.genres.slice(0).map((item, index) => (
                        <View key={index} style={{ marginHorizontal: 3, borderRadius: 5, backgroundColor: '#6b6b6b', padding: 5 }}>
                            <Text style={{ fontSize: 15, color: "#FFF", fontWeight: "bold" }}>{item.name}</Text>
                        </View>
                    ))}
                </View>
                <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "bold", marginTop: 20,left: 6 }}>Description</Text>
                <Text numberOfLines={4} ellipsizeMode='tail' style={{color: "#FFF",left: 6}}>{content.description_raw}</Text>
                <Text style={{ fontSize: 20,left: 6, color: "#FFF", fontWeight: "bold", marginTop: 20,left: 6 }}>Platforms</Text>
                <Text style={styles.textRating}>{content.parent_platforms.slice(0).map(item => item.platform.name).join(', ')}</Text>
                <Text style={{ fontSize: 20,left: 6, color: "#FFF", fontWeight: "bold", marginTop: 20,left: 6 }}>Stores</Text>
                <Text style={styles.textRating}>{content.stores.slice(0).map(item => item.store.name).join(', ')}</Text>



            </View>

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
    containerGenres: {
        flexDirection: 'row',
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
        left: 6
    },
    star: {
        position: 'absolute',
        top: 20,
        zIndex: 10,
        left: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonBook: {
        backgroundColor: '#000',
        position: 'absolute',
        zIndex: 10,
        right: 10,
        top: 40,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBack: {
        backgroundColor: '#000',
        position: 'absolute',
        zIndex: 10,
        left: 10,
        top: 40,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'


    }
});
