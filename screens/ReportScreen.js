import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('labreserve.db');

export default function ReportScreen() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM reservations;',
        [],
        (_, { rows }) => setReports(rows._array),
        (_, error) => console.log('Erro ao gerar relatório:', error)
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Reservas</Text>
      <FlatList
        data={reports}
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
    color: '#BA8E7A',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#EFDFCC',
    marginBottom: 10,
    borderRadius: 5,
  },
});
