import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

import Card from '../components/Card'
import Title from '../components/Title'
import Header from '../components/Header'
import useAxios from 'axios-hooks';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function Home() {
  const navigation = useNavigation()
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"
  const [{data, loading}] = useAxios(url)
  const { quantidade } = useContext(FavoritesContext)

  
  if(loading) return <Text>carregando filmes...</Text>
  const filmes = data.results

  return (
    <View style={styles.container}>

      <Header />

      <Title text='Filmes em Alta' />

      <FlatList horizontal data={filmes} renderItem={({item}) => <Card filme={item} />} /> 

      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=> navigation.navigate('Favorites')}>
          <Text style={styles.button}>Favoritos {quantidade}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Recents')}>
          <Text style={styles.button}>Recentes</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#2d2d2d',
    padding: 8,
  },
  button:{
    color: '#FFF',
    backgroundColor: '#F06',
    padding: 6,
    textAlign: 'center',
    borderRadius: 6,
    width: 100,
    alignSelf: 'center'
  },
  bottom:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});










