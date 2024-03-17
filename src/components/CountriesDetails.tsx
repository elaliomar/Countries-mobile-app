import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { COUNTRIES } from '../data/dummyData'
import { useRoute } from '@react-navigation/native';
import { useThemeContext } from '../store/Context';


const CountriesDetails = () => {
    const route = useRoute()
    const countryname = route.params.countryname
    const selectedCountry = COUNTRIES.filter((country) => country.name.common === countryname)
    const {theme,setTheme} = useThemeContext()
  return (
    <>
    {selectedCountry.map((c)=>{
        return(
            <View style={[styles.viewContainer,{ backgroundColor: theme == 'light' ? '#000' : '#fff'}]}>
            <Text style={[styles.textCapital,{color: theme == 'light' ? '#fff' : '#000'}]}>Capital: {c.capital}</Text>
            <Text style={[styles.text,{color: theme == 'light' ? '#fff' : '#000'}]}>Population: {c.population}</Text>
            <Text style={[styles.text,{color: theme == 'light' ? '#fff' : '#000'}]}>Area: {c.area} km²</Text>
          </View>
        )
    })}
    </>
    
  )
}

export default CountriesDetails

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textCapital:{
        width:'90%',
        textAlign:'center',
        paddingVertical:15,
        fontSize:22,
        fontWeight:'bold',
        borderBottomWidth:4,
        borderColor:'#cccccc',
    },
    text:{
        padding:10,
        fontSize:21,
    }
})

