import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.firstText]}>je peut developper meme facebook </Text>
      <Button
        buttonStyle={styles.button}
        title="Cliquez moi..."
        onPress={() => Alert.alert('Mon gars Edo ;) ça c\'\est ta passion')}
        color="#FFC501"
      //  backgroundColor="#000000"
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
  },
  button: {
    backgroundColor: '#000000', 
    borderColor: '#000000',
    borderWidth: 5,
    borderRadius: 15
  },
});
