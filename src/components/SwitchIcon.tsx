import {View, Text, Button, StyleSheet, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useThemeContext} from '../store/Context';
import {useNavigation} from '@react-navigation/native';

const SwitchIcon = () => {
  const navigation = useNavigation();
  const {theme, setTheme} = useThemeContext();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handlChange = () => {
    if (theme == 'light') {
      setTheme('dark');
      setIsSwitchOn(true);
    } else {
      setTheme('light');
      setIsSwitchOn(false);
    }
  };
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'light' ? '#000' : '#fff'},
      ]}>
      <Text style={[styles.text, {color: theme == 'light' ? '#fff' : '#000'}]}>
        Dark
      </Text>
      <Switch
        key={theme}
        value={isSwitchOn}
        onValueChange={handlChange}
        trackColor={{false: '#900', true: '#lightblue'}}
      />
      <Text style={[styles.text, {color: theme == 'light' ? '#fff' : '#000'}]}>
        Light
      </Text>
    </View>
  );
};

export default SwitchIcon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
