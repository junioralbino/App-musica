import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  const [audio, setarAudio ] = useState(null);

  const [musicas, setarMusicas] = useState([
     {
        nome: 'Sweet Child O Mine',
        artista: 'Guns N Roses',
        playing: 'false',
        file: ''
     },
     {
      nome: 'Rocket Queen',
      artista: 'Guns N Roses',
      playing: 'false',
      file: ''
     },
     {
      nome: 'Numb',
      artista: 'Linkin Park',
      playing: 'true',
      file: ''
     }
  ]);

  return (
      <ScrollView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.header}>
          <Text style={{textAlign: 'center', color:'white', fontSize: 24}}>Musica Star</Text>
        </View>
        
        <View style={styles.table}>
           <Text style={{width: '50%', color:'rgb(200, 200, 200)' }}>Música</Text>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  header:{
    backgroundColor: '#1db954',
    width: '100%',
    padding: 20
  },
  table:{
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
});
