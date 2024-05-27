import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:24}}>My name is AMAKYE JACOB HAGAN</Text>
      <StatusBar style="auto" />
    </View>
  );
}

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
