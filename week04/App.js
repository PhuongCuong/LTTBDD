import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen3 from './src/container/Screen3';
import Screen1 from './src/container/Screen1';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen3 />
      {/* <Screen1/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
