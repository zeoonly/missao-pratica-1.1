import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet } from 'react-native';

// Componente funcional para exibir uma saudação personalizada
const Greeting = ({ name, imageUrl }) => {
  return (
    <View style={styles.greetingContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.greetingText}>Olá, {name}!</Text>
    </View>
  );
};

const App = () => {
  const [name, setName] = useState(''); // Estado para o nome inserido pelo usuário
  const [imageUrl, setImageUrl] = useState('https://www.example.com/default-avatar.png'); // URL da imagem do perfil
  
  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>Seja bem vindo ao Meeting App!</Text>

      {/* Input para o nome do usuário */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)} // Atualiza o nome conforme o usuário digita
      />

      {/* Exibe a saudação com o nome e imagem do usuário */}
      {name ? (
        <Greeting name={name} imageUrl={imageUrl} />
      ) : (
        <Text style={styles.instructions}>Por favor digite seu nome acima.</Text>
      )}
    </View>
  );
};

// Estilos para o aplicativo
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  greetingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;
