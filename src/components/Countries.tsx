import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COUNTRIES} from '../data/dummyData';
import {useNavigation} from '@react-navigation/native';
import SearchBar from './SearchBar';
import {useThemeContext} from '../store/Context';

export interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

const Countries = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(COUNTRIES);
  const handlePress = (countryname: string) => {
    navigation.navigate('Details', {countryname});
  };
  const {theme, setTheme} = useThemeContext() as ThemeContextValue;
  const containerStyle = {
    backgroundColor: theme == 'light' ? '#000' : '#fff',
  };

  const textStyle = {
    color: theme == 'light' ? '#fff' : '#000',
  };
  return (
    <ScrollView style={containerStyle}>
      <SearchBar setData={setData} data={COUNTRIES} />
      {data.map(country => {
        return (
          <Pressable
            android_ripple={{color: '#cccccc'}}
            key={country.name.common}
            onPress={() => {
              handlePress(country.name.common);
            }}
            style={styles.pressContainer}>
            <View style={styles.countryBlock}>
              <View style={styles.imageView}>
                <Image source={{uri: country.flags.png}} style={styles.image} />
              </View>
              <View style={styles.titleView}>
                <Text style={[styles.title, textStyle]}>
                  {country.name.common}
                </Text>
              </View>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default Countries;

const styles = StyleSheet.create({
  pressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countryBlock: {
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 100,
    width: '90%',
    marginVertical: 20,
    backgroundColor: '#d1bd86',
  },
  imageView: {
    flex: 0.5,
    margin: 6,
  },
  titleView: {
    flex: 0.5,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
