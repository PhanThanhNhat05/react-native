import { TextInput, View, Button, StyleSheet, Alert } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    todoInput: {
        borderColor: "violet",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5
    }
})
interface IProps {
    addTodo: (v : string) => void;
}
const InputTodo = (props : IProps) => {
    const {addTodo} = props

    const[name, setName] = useState<string>("");

    const handleAddNewTodo = () =>{
        if(!name) {
            Alert.alert("Thong Tin Khong Hop Le", 
                "Tieu De Khong Hop Le",
                [
                    {
                        text: "Cancel",
                        onPress:() => console.log("cancel pressed"),
                        style: "cancel",
                    },
                    {text: "OK", onPress: () => console.log("OK Pressed")},
                ]
            );
            return;
        }
         addTodo(name);
         setName("");
    } 
    return (
        <>
        <View>
                <TextInput
                value={name}
                onChangeText={v => setName(v)}
                autoCapitalize='none' 
                autoCorrect={false}              
                style={styles.todoInput}
                />
                <Button title='add new' color='violet' onPress={handleAddNewTodo} />
              </View> 
        </>
    )
}

export default InputTodo;