import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function Detail(){
  const {titulo, sinopse, voteCount, releaseDate, poster} = useContext(FavoritesContext)
  const navigation = useNavigation()
  const posterLink = 'https://image.tmdb.org/t/p/w200' + poster

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalhes do Filme</Text>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.text}>{sinopse}</Text>
      <Text style={styles.text}>data de lançamento: {releaseDate}</Text>
      <Text style={styles.text}>nota: {voteCount}</Text>
      <Image style={styles.posterCSS} source={posterLink}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textBottom}>voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2d2d2d',
    padding: 8,
  },
  textBottom: {
    color: '#FFF',
    backgroundColor: '#F06',
    padding: 6,
    textAlign: 'center',
    borderRadius: 6,
    width: 100,
    alignSelf: 'center'
  },
  text:{
    color: '#FFF',
    justifyContent: 'center'
  },
  title:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  posterCSS:{
    width: 130,
    height: 220
  }
})