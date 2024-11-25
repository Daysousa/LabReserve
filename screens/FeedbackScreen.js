import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');

  const submitFeedback = () => {
    alert('Feedback enviado!');
    setFeedback('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu feedback..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Enviar" onPress={submitFeedback} />
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
  input: {
    height: 40,
    borderColor: '#BA8E7A',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
});
