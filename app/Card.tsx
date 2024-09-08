import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from "../api.json";


const Card: React.FC = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch('https://example.com/path/to/your/file.json')
      .then((response) => response.json())
      .then((json) => setApi(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Perso à deviner</Text>
      {/* <FlatList
        data={api}
        keyExtractor={(api) => api.id.toString()}
        renderItem={({ api }) => (
      <View>
        <Text>{api.imgSrc}</Text>
        <Text>{api.name}</Text>
    </View>
     )}
      /> */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Card;