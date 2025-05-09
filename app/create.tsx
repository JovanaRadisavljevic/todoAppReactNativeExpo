import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CreateTodo() {
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Dodajte novi zadatak</Text>
    </View>
  )
}
const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center"
  },

  formContainer: {
    marginVertical: 20,
    gap: 20,
  },
});