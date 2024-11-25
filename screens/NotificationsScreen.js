import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('labreserve.db');

export default function NotificationsScreen() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM reservations;',
        [],
        (_, { rows }) => setReservations(rows._array),
        (_, error) => console.log('Erro ao consultar reservas:', error)
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.lab} - {item.date}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D4C2AD',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#BA8E7A',
  },
  item: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#EFDFCC',
    borderRadius: 5,
  },
});
