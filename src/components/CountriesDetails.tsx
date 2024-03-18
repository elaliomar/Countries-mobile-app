import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {COUNTRIES} from '../data/dummyData';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useThemeContext} from '../store/Context';
import {ThemeContextValue} from './Countries';

const CountriesDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const countryname = route.params.countryname;
  const selectedCountry = COUNTRIES.filter(
    country => country.name.common === countryname,
  );
  const {theme, setTheme} = useThemeContext() as ThemeContextValue;

  const handlPress = () => {
    navigation.push('Tab');
  };

  const containerStyle = {
    backgroundColor: theme == 'light' ? '#000' : '#fff',
  };

  const textStyle = {
    color: theme == 'light' ? '#fff' : '#000',
  };

  return (
    <>
      {selectedCountry.map((c, index) => {
        return (
          <View key={c.tld} style={[styles.viewContainer, containerStyle]}>
            <Text style={[styles.textCapital, textStyle]}>
              Capital: {c.capital}
            </Text>
            <Text
              style={[
                styles.text,
                {color: theme == 'light' ? '#fff' : '#000'},
              ]}>
              Population: {c.population}
            </Text>
            <Text
              style={[
                styles.text,
                {color: theme == 'light' ? '#fff' : '#000'},
              ]}>
              Area: {c.area} km²
            </Text>
          </View>
        );
      })}
      <View
        style={[
          styles.buttonView,
          {backgroundColor: theme == 'light' ? '#000' : '#fff'},
        ]}>
        <Button title="Go back to home page" onPress={handlPress} />
      </View>
    </>
  );
};

export default CountriesDetails;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCapital: {
    width: '90%',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 22,
    fontWeight: 'bold',
    borderBottomWidth: 4,
    borderColor: '#cccccc',
  },
  text: {
    padding: 10,
    fontSize: 21,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 15,
  },
});
