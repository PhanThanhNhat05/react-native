import { View, Text, StyleSheet, Pressable } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
const styles = StyleSheet.create({
   text: {
    textTransform: "uppercase",

   },
   btnContainer:{
       borderWidth: 1,
       borderColor: "green",
       borderRadius: 10,
       paddingHorizontal: 15,
       paddingVertical: 5,
       flexDirection: "row",
       gap: 10,
       alignItems: "center",
       alignSelf: "flex-start",
       backgroundColor: "aqua",
   }

})  
interface IProps {
    title: string;
    onPress: () => void;
}

const MineButton = (props: IProps  ) => { 
    const { title, onPress } = props;
    return (
        <Pressable 
        style={({pressed}) => ({opacity: pressed === true ? 0.5 : 1,
            alignSelf: "flex-start"
        })}
        onPress={onPress}>
        <View style={styles.btnContainer}>
             <Entypo name="add-user" size={24} color="black" />
            <Text style={styles.text}>{title}</Text>
        </View>
        </Pressable>
    )
}

export default MineButton;