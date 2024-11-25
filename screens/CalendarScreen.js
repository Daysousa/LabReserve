import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen({ route, navigation }) {
  const { lab } = route.params;

  const onDayPress = (day) => {
    navigation.navigate('Confirmation', { lab, date: day.dateString });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione uma data para o {lab}</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          '2024-11-25': { selected: true, marked: true, selectedColor: 'red' },
          '2024-11-26': { marked: true },
        }}
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
    marginBottom: 20,
    color: '#BA8E7A',
  },
});
