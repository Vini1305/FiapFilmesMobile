
import { View, Text, StyleSheet } from 'react-native'

export default function Title(props){
  return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.text}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  titleContainer:{
        borderColor: '#F06',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRadius: 1,
      },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 4
  }
})