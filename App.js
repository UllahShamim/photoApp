import React from "react";
import { StyleSheet, Text, View, LogBox } from 'react-native';

import {
  useFonts, 
  Nunito_400Regular as NunitoRegular,
  Nunito_700Bold as NunitoBold,
} from '@expo-google-fonts/nunito';
import Feather from '@expo/vector-icons/Feather';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigator from "./src/navigation";

LogBox.ignoreLogs(['VirtualizedLists']);

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoRegular,
    NunitoBold,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Fonts haven't loaded</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "NunitoRegular",
    // fontFamily: "NunitoBold",
    fontSize: 24,
  }
});
