
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';


export default function Header(){
  const navigation = useNavigation() // hooks

  return(
    <View>  
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text style={styles.button}>detalhes</Text>
      </TouchableOpacity>

      <Image style={styles.hero} source={{uri: 'https://image.tmdb.org/t/p/w780/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg'}} />
    </View>
  )
}

const styles = StyleSheet.create(
  {
  hero: {
    width: '100%',
    height: 200,
    zIndex: -1,
    marginBottom: 30
  },
  button:{
    position: 'absolute',
    color: '#FFF',
    backgroundColor: '#F06',
    padding: 6,
    textAlign: 'center',
    borderRadius: 6,
    width: 180,
    alignSelf: 'center',
    marginTop: 180
  }
  }
)
 