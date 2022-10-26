import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Card({filme}){
  const navigation = useNavigation()
  const poster = 'https://image.tmdb.org/t/p/w200' + filme.poster_path

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View style={styles.card}>
            <Image style={styles.poster} source={poster} />
            <Text style={styles.vote}>
              <MaterialIcons name='star' color='gold' size={16} /> 
              {filme.vote_average.toFixed(1)}
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
    zIndex: -1
  },
  vote: {
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
  },
  favorite: {
    position: 'absolute',
    right: 0
  }

});
