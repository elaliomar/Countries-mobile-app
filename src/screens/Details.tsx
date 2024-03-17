import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import CountriesDetails from '../components/CountriesDetails'


const Details = () => {
  return (
    <View style={styles.container}>
      <CountriesDetails/>
    </View>
  )
}

export default Details
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})