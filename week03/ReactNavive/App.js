import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Screen1 from './container/Screen1';
import Screen2 from './container/Screen2';
import Screen3 from './container/Screen3';
import Screen4 from './container/Screen4';
import Screen5 from './container/Screen5';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Screen1/> */}
      {/* <Screen3 /> */}
      {/* <Screen2 /> */}
      {/* <Screen4 /> */}
      <Screen5 />

    </View>

  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

