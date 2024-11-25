import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'professor@labreserve.com' && password === '1234') {
      navigation.navigate('Home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LabReserve - Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.forgot}>Esqueceu a senha?</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D7A184',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#BA8E7A',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  forgot: {
    marginTop: 10,
    color: '#BA8E7A',
    textDecorationLine: 'underline',
  },
});
