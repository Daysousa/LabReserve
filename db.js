import * as SQLite from 'expo-sqlite';

// Inicializa o banco de dados
const db = SQLite.openDatabase('labreserve.db');

// Verifica se o banco de dados foi inicializado
if (!db) {
  console.error('Erro: SQLite não inicializou corretamente.');
}

// Função para criar tabelas
export const createTables = () => {
  console.log('Iniciando criação das tabelas...');
  db.transaction(
    (tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          password TEXT NOT NULL
        );`,
        [],
        () => console.log('Tabela users criada com sucesso!'),
        (_, error) => console.error('Erro ao criar tabela users:', error)
      );
    },
    (error) => console.error('Erro na transação SQLite:', error),
    () => console.log('Transação concluída com sucesso.')
  );
};
