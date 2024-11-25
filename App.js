import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { createTables } from './db'; // Importa a configuração do SQLite

// Importação das telas
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import LabSelectionScreen from './screens/LabSelectionScreen';
import CalendarScreen from './screens/CalendarScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ControlScreen from './screens/ControlScreen';
import ReportScreen from './screens/ReportScreen';
import SettingsScreen from './screens/SettingsScreen';
import FeedbackScreen from './screens/FeedbackScreen';

const Stack = createStackNavigator();

export default function App() {
  // Configuração inicial do SQLite
  useEffect(() => {
    createTables(); // Cria as tabelas necessárias no banco de dados
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LabSelection" component={LabSelectionScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Control" component={ControlScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4C2AD',
  },
  text: {
    fontSize: 18,
    color: '#BA8E7A',
  },
});
