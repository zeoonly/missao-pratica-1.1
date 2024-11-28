import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Componente funcional para exibir informações sobre um participante de reunião
const Participant = ({ name, imageUrl, role }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
};

const App = () => {
  // Dados para o participante
  const participantName = 'Maru';
  const participantImageUrl = 'https://www.example.com/maru.jpg'; // Exemplo de URL de imagem
  const participantRole = 'Moderator';

  return (
    <View style={styles.appContainer}>
      <Text style={styles.header}>Meeting Participants</Text>
      <Participant 
        name={participantName}
        imageUrl={participantImageUrl}
        role={participantRole}
      />
    </View>
  );
};

// Estilos para o aplicativo
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#888',
  },
});

export default App;
