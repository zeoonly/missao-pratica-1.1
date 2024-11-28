import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

// Componente funcional para exibir as informações de um participante
const Participant = (props) => {
  return (
    <View style={styles.participantContainer}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.role}>{props.role}</Text>
    </View>
  );
};

// Componente principal que exibe uma lista de participantes
const Meeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meeting Participants</Text>

      {/* Passando props para o componente Participant */}
      <Participant 
        name="Maru" 
        role="Moderator" 
        imageUrl="https://www.example.com/maru-avatar.jpg" 
      />
      <Participant 
        name="Jellylorum" 
        role="Participant" 
        imageUrl="https://www.example.com/jellylorum-avatar.jpg" 
      />
      <Participant 
        name="Spot" 
        role="Participant" 
        imageUrl="https://www.example.com/spot-avatar.jpg" 
      />
    </View>
  );
};

// Estilos para o aplicativo
const styles = StyleSheet.create({
  container: {
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
  participantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
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

export default Meeting;
