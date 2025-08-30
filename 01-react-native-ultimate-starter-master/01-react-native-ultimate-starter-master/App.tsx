// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
          // data type
  //string
  const[name, setName] = useState<string>("Nat");
  //number
  const[age, setAge] = useState<number>(18);
  // null, underfined, boolean

  const test = undefined;
  //object, array

  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Phan Thanh Nhat",
    age: 20
  });

  //array
  const [numbers, setNumbers] = useState([{
    name: "Number 1",
    age1: 25
  }]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>{name} : {age}</Text>
        <Text style={styles.text1}>{person.name} : {person.age}</Text>
        {/* // convert object sang string */}
        <Text style={styles.text1}>{JSON.stringify(numbers)}</Text>

        <TextInput 
        value={name}
        onChangeText={v => setName(v)}
        autoCapitalize='none' 
        autoCorrect={false}
        // keyboardType='numeric'
        // //ki tu toi da
        // maxLength={2}
         
        //tu donn xuong dong
        // multiline={true}
        // //chinh sua lai cac ki tu go sai
        
        style={{borderColor: "red",
          borderWidth: 1,
          padding: 10
        }} />

      </View> 
      <Button title='add new'/>
      
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
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,

  },
});
