import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native';

export default function CardFav({filme}){
  const navigation = useNavigation()
  const poster = 'https://image.tmdb.org/t/p/w200' + filme.poster_path

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View style={styles.card}>
            <Image style={styles.poster} source={poster} />
            <Text style={styles.title}>
              {filme.title}
            </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 190,
    width: 100,
    backgroundColor: '#111',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    position: 'relative',
    zIndex: -1,
    marginBottom: 30
  },
  title: {
    color: '#FFF',
    opacity: 0.8,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  poster: {
    width: '100%',
    height: 141,
    borderRadius: 6,
  }
});
