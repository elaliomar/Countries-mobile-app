import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SwitchIcon from '../components/SwitchIcon'

const Settings = () => {
  return (
    <View style={styles.container}>
      <SwitchIcon/>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})