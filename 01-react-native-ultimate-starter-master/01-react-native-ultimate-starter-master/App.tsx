// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
          // data type
  //string
  const[name, setName] = useState<string>("Nat");
 

  const [todoList, setTodoList] = useState([
    {id: 1, title: "Learn React"},
    {id: 2, title: "Learn React.js"},
    {id: 3, title: "Learn Node.js"},
    {id: 4, title: "Learn java spring-boot"},
    {id: 5, title: "Learn asp.net"},
    {id: 6, title: "Learn nest.js"},
    {id: 7, title: "Learn express.js"},
    {id: 8, title: "Learn express.js"},
    {id: 9, title: "Learn express.js"},
    {id: 10, title: "Learn express.js"},
    {id: 11, title: "Learn express.js"},
    
  ]);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
        value={name}
        onChangeText={v => setName(v)}
        autoCapitalize='none' 
        //chinh sua lai cac ki tu go sai
        autoCorrect={false}
           
        style={{borderColor: "red",
          borderWidth: 1,
          padding: 10
        }} />

      </View> 
      <Button title='add new' color='violet' onPress={() => alert("click me")}/>

        <ScrollView style={{marginTop: 20, borderColor: 'blue', borderWidth: 2}}>
          {todoList.map(todo => {
            return (
              <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
            )
          })}
        </ScrollView>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    color: 'yellow',
    fontWeight: 'bold',
    backgroundColor: 'pink',
    fontSize: 30,
    marginBottom: 20,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: 50

  },
});
