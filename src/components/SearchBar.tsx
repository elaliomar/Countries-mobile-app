import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState, useEffect, ChangeEvent} from 'react';

const SearchBar = props => {
  const [search, setSearch] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e);
  };
  const handlSearch = (name: string) => {
    return props.data.filter((item: {name: {common: string}}) =>
      item.name.common.toLowerCase().includes(name.toLowerCase()),
    );
  };
  useEffect(() => {
    if (search) {
      const data = handlSearch(search);
      props.setData(data);
    } else {
      props.setData(props.data);
    }
  }, [search]);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={'black'}
        style={styles.inputText}
        value={search}
        onChangeText={handleChange}
      />
    </View>
  );
};
export default SearchBar;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  inputText: {
    color: 'black',
    paddingLeft: 10,
    backgroundColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#a1a1a1',
  },
});
