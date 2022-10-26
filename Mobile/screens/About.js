import { Text, View, StyleSheet } from 'react-native'

export default function About(){
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Sobre o aplicativo</Text>
      <Text style={styles.text}>Integrantes:</Text>
      <Text style={styles.text}>Vinícius de Paula 85247</Text>
      <Text style={styles.text}>Lucas dos Santos Silva 86361</Text>
      <Text style={styles.text}>Nicolas Breda Damasceno 85741</Text>
      <Text style={styles.text}>Leonardo Seno Coelho 84725</Text>
      <Text style={styles.text}>Éverton Costa da Silva 84618</Text>
      <Text style={styles.text}>Enrico Trivellato 84854</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF'
  },
  textHeader:{
    color: '#FFF',
    fontSize: 20,
  }
})