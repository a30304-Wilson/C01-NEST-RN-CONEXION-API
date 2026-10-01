import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const API_URL = 'http://192.168.1.20:3000';

type Criatura = {
  id: number;
  nombre: string;
  nivel: number;
  poder: number;
  likes: number;
  emoji: string;
};

export default function App() {
  const [criaturas, setCriaturas] =
    useState<Criatura[]>([]);
  const [seleccionada, setSeleccionada] =
    useState<Criatura | null>(null);

  const cargarCriaturas = async () => {
    const r = await fetch(API_URL + '/criaturas');
    setCriaturas(await r.json());
  };

  const seleccionar = async (id: number) => {
    const r = await fetch(
      API_URL + '/criaturas/' + id
    );
    setSeleccionada(await r.json());
  };

  const darLike = async () => {
    if (!seleccionada) return;

    const r = await fetch(
      API_URL +
        '/criaturas/' +
        seleccionada.id +
        '/like',
      { method: 'PATCH' }
    );

    const actualizada = await r.json();
    setSeleccionada(actualizada);
    await cargarCriaturas();
  };

  useEffect(() => {
    cargarCriaturas();
  }, []);

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        🧪 Creature Lab
      </Text>

      {seleccionada && (
        <View style={styles.hero}>
          <Text style={styles.emoji}>
            {seleccionada.emoji}
          </Text>
          <Text style={styles.name}>
            {seleccionada.nombre}
          </Text>
          <Text>
            Nivel {seleccionada.nivel}
            {' · '}Poder {seleccionada.poder}
          </Text>
          <Text>❤️ {seleccionada.likes}</Text>
          <Button
            title="❤️ Me gusta"
            onPress={darLike}
          />
        </View>
      )}

      <FlatList
        data={criaturas}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => seleccionar(item.id)}
          >
            <Text style={styles.itemEmoji}>
              {item.emoji}
            </Text>
            <Text>{item.nombre}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 18,
  },
  hero: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#EEF4FF',
    marginBottom: 20,
  },
  emoji: { fontSize: 48 },
  name: { fontSize: 24, fontWeight: '700' },
  item: {
    width: 110,
    padding: 12,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
  },
  itemEmoji: { fontSize: 30 },
});
