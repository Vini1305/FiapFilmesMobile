import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title'
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import CardRecent from '../components/CardRecent';

export default function Recents() {
  const { recentes } = useContext(FavoritesContext)

  return (
    <View style={styles.container}>

      <Title text='Recentes' />
      <FlatList style={styles.list} vertical data={recentes} renderItem={({item}) => <CardRecent filme={item} />} /> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#2d2d2d',
    padding: 8
  },
  section:{
    flexDirection: 'row',
    flexGrow: 0,
    marginVertical: 12
  },
  list:{
    margin: 40,
    alignSelf: 'center'
  }
});










