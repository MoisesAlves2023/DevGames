import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert, ActivityIndicator, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ListCategoryes from '../../components/ListCategoryes';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';
import ListGames from '../../components/ListGames';

export default function Home() {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
            async function loadingCategories() {
                try {
                    const response = await api.get('genres?key=fce5e699a5f4471293ebaaf0a45b8523');
                    setCategories(response.data.results);
                    setLoading(false);
                } catch (error) {
                    console.error("Error loading categories:", error);
                }
            }
            loadingCategories();

            return () => {

            };
        }, [])
    );

    useFocusEffect(
        React.useCallback(() => {
            async function loadingGames() {
                try {
                    const response = await api.get('games?page_size=30&key=fce5e699a5f4471293ebaaf0a45b8523');
                    setGames(response.data.results);
                    setLoading(false);
                } catch (error) {
                    console.error("Error loading games:", error);
                }
            }
            loadingGames();

            return () => {

            };
        }, [])
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>
                        Dev
                        <Text style={{ color: 'red' }}>Games</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.containerFavorites}>
                    <Feather name='bookmark' size={25} color='#FFF' />
                </TouchableOpacity>
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder='Looking for game?'
                    placeholderTextColor='#FFF'
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
                <TouchableOpacity
                    onPress={() => Alert.alert(search)}
                    style={{ alignItems: 'center', justifyContent: 'center', marginRight: 25 }}>
                    <Feather name='search' size={35} color='red' />
                </TouchableOpacity>
            </View>
            <View style={{ height: 60 }}>
                <FlatList
                    style={{ flex: 1, marginLeft: 10 }}
                    data={categories}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    renderItem={({ item }) => <ListCategoryes category={item} />}
                />

            </View>

            <Text style={{ color: 'white', fontSize: 27, marginHorizontal: 10 }}>Trending Games</Text>
            <FlatList
                data={games}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <ListGames games={item} />}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    containerTitle: {
        width: '80%',
        justifyContent: 'center'
    },
    containerFavorites: {
        backgroundColor: '#1C1C1C',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 15,
        color: '#FFF'
    },
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    input: {
        marginLeft: 10,
        backgroundColor: '#1C1C1C',
        color: '#FFF',
        width: '80%',
        borderRadius: 25,
        padding: 10
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
});
