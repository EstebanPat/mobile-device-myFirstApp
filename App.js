import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyFirstComponent from './screens/MyFirstComponent';
export default function App() {
  return (
    <View style={styles.container}>
      <MyFirstComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
