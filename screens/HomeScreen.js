import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Reservar Laboratório"
        color="#D7A184"
        onPress={() => navigation.navigate('LabSelection')}
      />
      <Button
        title="Minhas Reservas"
        color="#BA8E7A"
        onPress={() => navigation.navigate('Notifications')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D4C2AD',
  },
});
