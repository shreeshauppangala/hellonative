import React from 'react';
import { StyleSheet, Text } from 'react-native';

function App() {
  return (
    <Text style={styles.container}>
      Hi
    </Text>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#efefef',
  },
});

export default App;
