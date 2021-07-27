import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.firstText]}>Let's Go !</Text>
      <Button
        title="Cliquez moi..."
        onPress={() => Alert.alert('Mon gars Edo ;)')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    color: '#FFC501',
    fontSize: 30,
    backgroundColor: '#BC0BFF',
  }
});
