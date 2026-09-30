import { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://192.168.1.20:3000';

export default function App() {

  const [mensaje, setMensaje] = useState('🔴 Sin conectar');

  const cargarMensaje = async () => {
    try {
      const respuesta = await fetch(API_URL + '/mensaje');
      const datos = await respuesta.json();

      setMensaje('🟢 ' + datos.texto);
    } catch (error) {
      setMensaje('🔴 Error de conexión');
    }
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Estado del backend</Text>
      <Text style={styles.status}>{mensaje}</Text>
      <Button
        title='Conectar'
        onPress={cargarMensaje}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
});
