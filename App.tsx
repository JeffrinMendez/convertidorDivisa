import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CalculoDivisa } from './src/components/CalculoDivisa';

export default function App() {
  return (
    <View style={styles.container}>
     <CalculoDivisa/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
