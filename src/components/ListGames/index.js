import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ListGames({ games }) {
  return (
    <TouchableOpacity styles={styles.container}>
      <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
        <Image style={styles.image} source={{ uri: games.background_image }} />
      </View>
      <View style={styles.overlay}>

        <Text style={styles.textName}>{games.name}</Text>
        <Text style={styles.textRating}>{games.rating} / {games.rating_top}</Text>
        <View style={styles.star}>
          <MaterialCommunityIcons name='star' size={20} color='#FFA500' />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    opacity: 0
  },
  image: {
    height: 250,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajuste a opacidade conforme necessário
    zIndex: 2,
  },
  textName: {
    fontSize: 20,
    color: '#fff',
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 50,
    zIndex: 10,
    left: 15
  },
  textRating: {
    fontSize: 15,
    color: '#fff',
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 30,
    zIndex: 10,
    left: 35
  },
  star:{
    position: 'absolute',
    bottom: 30,
    zIndex: 10,
    left: 15

  }
});

