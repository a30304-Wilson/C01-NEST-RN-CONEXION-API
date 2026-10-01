import { useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const API_URL = 'http://192.168.1.20:3000';

export default function App() {
  const [likes, setLikes] = useState(14);

  const darLike = async () => {
    const respuesta = await fetch(
      API_URL + '/mascotas/1/like',
      { method: 'PATCH' }
    );

    const mascota = await respuesta.json();
    setLikes(mascota.likes);
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🐶 Toby</Text>
      <Text style={styles.likes}>
        ❤️ {likes} likes
      </Text>
      <Button
        title="❤️ Me gusta"
        onPress={darLike}
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
  title: { fontSize: 28, fontWeight: '700' },
  likes: { fontSize: 20, marginVertical: 18 },
});