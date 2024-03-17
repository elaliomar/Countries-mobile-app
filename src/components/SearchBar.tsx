import {View, Text, TextInput, Button, Pressable} from 'react-native';
import React, {useState,useEffect} from 'react';

export default function SearchBar(props) {
    const [search,setSearch] = useState('')
    const handleChange = (e) => {
        setSearch(e)
    }
    const handlSearch = (name) => {
      return props.data.filter((item) =>  item.name.common.toLowerCase().includes(name.toLowerCase()))
    }
    useEffect(()=>{
      if(search){
       const data = handlSearch(search)
        props.setData(data)
      }else{
        props.setData(props.data)
      }
    },[search])
  return (
    <View style={{padding:10}}>
      <TextInput style={{color:'black',paddingLeft:10,backgroundColor:'#d1d1d1',borderWidth:1,borderRadius:7,borderColor:'#a1a1a1'}} value={search} onChangeText={handleChange} />
      {/* <Pressable
        style={{
          width: '45%',
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 7,
          backgroundColor: 'green',
        }}>
        <Text style={{color: 'white'}}>Search</Text>
      </Pressable> */}
    </View>
  );
}
