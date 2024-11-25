import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import db from '../db'; // Importa o banco de dados configurado

export default function ConfirmationScreen({ route, navigation }) {
  const { lab, date, time } = route.params;

  const saveReservation = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO reservations (lab, date, time) VALUES (?, ?, ?);',
        [lab, date, time],
        () => {
          alert('Reserva confirmada!');
          navigation.navigate('Notifications'); // Navega para a tela de notificações após salvar
        },
        (_, error) => console.log('Erro ao salvar reserva:', error)
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar Reserva</Text>
      <Text style={styles.label}>Laboratório: {lab}</Text>
      <Text style={styles.label}>Data: {date}</Text>
      <Text style={styles.label}>Horário: {time}</Text>
      <Button title="Confirmar" onPress={saveReservation} color="#BA8E7A" />
      <Button title="Cancelar" onPress={() => navigation.goBack()} color="#D7A184" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#EFDFCC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BA8E7A',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#D7A184',
    marginBottom: 10,
  },
});
