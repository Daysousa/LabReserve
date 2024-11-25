import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('labreserve.db');

export default function SettingsScreen() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Função para atualizar a senha no banco de dados
  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE users SET password = ? WHERE password = ?;',
        [newPassword, currentPassword],
        (_, result) => {
          if (result.rowsAffected > 0) {
            Alert.alert('Sucesso', 'Senha alterada com sucesso!');
            setCurrentPassword('');
            setNewPassword('');
          } else {
            Alert.alert('Erro', 'Senha atual incorreta.');
          }
        },
        (_, error) => console.log('Erro ao alterar senha:', error)
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      {/* Alterar Senha */}
      <Text style={styles.label}>Senha Atual</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="Digite sua senha atual"
      />

      <Text style={styles.label}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Digite sua nova senha"
      />

      <Button title="Alterar Senha" onPress={handlePasswordChange} />

      {/* Preferências de Notificação */}
      <View style={styles.preferenceContainer}>
        <Text style={styles.preferenceText}>Habilitar Notificações</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>

      <Text style={styles.note}>
        {notificationsEnabled
          ? 'Notificações ativadas.'
          : 'Notificações desativadas.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    fontSize: 16,
    marginBottom: 5,
    color: '#D7A184',
  },
  input: {
    height: 40,
    borderColor: '#BA8E7A',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  preferenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  preferenceText: {
    fontSize: 16,
    color: '#BA8E7A',
  },
  note: {
    fontSize: 14,
    color: '#D7A184',
    textAlign: 'center',
  },
});
