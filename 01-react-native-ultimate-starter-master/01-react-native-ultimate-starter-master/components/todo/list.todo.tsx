import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";


const styles = StyleSheet.create({
   todo: {
    color: 'yellow',
    fontWeight: 'bold',
    backgroundColor: 'pink',
    fontSize: 30,
    marginBottom: 20,
    padding: 10
  },
})

interface IProps {
    todoList: ITodo[];
    deleTodo: (v : number) => void;
}
const ListTodo = (props : IProps) => {
    const { todoList, deleTodo } = props;
    return (
        <>
         <FlatList 
              style={{marginTop: 20, borderColor: 'black', borderWidth: 3}}
              data={todoList}
              keyExtractor={item => item.id.toString()}
              renderItem={({item,}) => {
                 return (
                    <TouchableOpacity
                     onPress={() => deleTodo(item.id)}>
                      <Text key={item.id} style={styles.todo}
                      >
                        {item.title}
                        </Text>
                        </TouchableOpacity>
                    )
              }}
              />  
        </>
    )
}

export default ListTodo;