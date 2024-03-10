import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.title}>
                    Dev
                    <Text style={{ color: 'red' }}>Games</Text>
                </Text>
                <Feather name='bookmark' size={20} color='#FFF'/>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1C1C1C',
        paddingTop: 15,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        paddingBottom: 15,
        color: '#FFF'
    }
})
