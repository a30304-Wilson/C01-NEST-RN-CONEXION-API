import { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
 
const API_URL = 'http://192.168.1.20:3000';

export default function App() {
  const [mensaje, setMensaje] = useState('');

  const cargarMensaje = async () => {
    try {
      const respuesta = await fetch(API_URL + '/mensaje');
      const datos = await respuesta.json();

      setMensaje(datos.texto);
    } catch (error) {
      setMensaje('Error al conectar: ' + String(error));
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{mensaje}</Text>

        <Button
          title="Conectar con Nest"
          onPress={cargarMensaje}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    marginTop: 20,
  },
});