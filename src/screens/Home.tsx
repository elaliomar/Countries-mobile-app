import { View, Text,Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import Countries from '../components/Countries';



const Home = () => {
  return (
    <View>
      <Countries/>
    </View>
  )
}

export default Home

