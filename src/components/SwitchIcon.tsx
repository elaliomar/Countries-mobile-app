import { View, Text,Button,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Switch } from 'react-native-paper'
import { useThemeContext } from '../store/Context'
import { useNavigation } from '@react-navigation/native'

const SwitchIcon = () => {
  const navigation = useNavigation()
  const {theme,setTheme} = useThemeContext()
  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const handlChange = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
    setIsSwitchOn(!isSwitchOn)
  }
  return (
    <View style={[styles.container,{ backgroundColor: theme == 'light' ? '#000' : '#fff'}]}>
      <Text style={[styles.text,{color: theme == 'light' ? '#fff' : '#000'}]}>Light</Text>
      <Switch value={isSwitchOn} onValueChange={handlChange} />
      <Text style={[styles.text,{color: theme == 'light' ? '#fff' : '#000'}]}>Dark</Text>
    </View>
  )
}

export default SwitchIcon

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:18
  }
})