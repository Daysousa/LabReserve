import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ControlScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Reservas</Text>
      <Button title="Emitir Relatório" onPress={() => navigation.navigate('Report')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFDFCC',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: '#BA8E7A',
  },
});
