import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SquareScreen from './src/components/squarescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SquareScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
