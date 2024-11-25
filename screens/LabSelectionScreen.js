import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function LabSelectionScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const labs = [
    'Laboratório de Informática',
    'Laboratório de Anatomia',
    'Laboratório de Ensino de Matemática e Física',
    'Laboratório de Geografia, Geotecnologias e Dinâmicas da Natureza',
    'Laboratório de Práticas Pedagógicas',
  ];

  const filteredLabs = labs.filter((lab) => lab.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar laboratório..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredLabs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Calendar', { lab: item })}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EFDFCC',
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
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#D4C2AD',
    borderRadius: 5,
  },
});
