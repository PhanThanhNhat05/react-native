// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {

  const [todoList, setTodoList] = useState<ITodo[]>([ 
  ]);
  
  function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  const addTodo = (text: string) => {
    alert(text);
    const todo = {id: randomInteger(1, 1000), title: text }
    setTodoList([...todoList, todo]);
  }
  
  const deleTodo = (id: number) => {
     const newTodo = todoList.filter(todo => todo.id != id);
     setTodoList(newTodo)
  }
  return (
    <TouchableWithoutFeedback onPress={() => console.log("Press me")}>
    <View style={styles.container}>
      <InputTodo
      addTodo={addTodo}
      />
      <ListTodo 
      todoList={todoList}
      deleTodo={deleTodo}
      />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
