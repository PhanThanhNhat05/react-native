// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Nat</Text>
      </View>
      <Text style={styles.text2}>Phan Thanh Nhat</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text1 : {
    color: 'red',
    fontSize: 30,
  },
  text2: {
    color: 'blue',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
