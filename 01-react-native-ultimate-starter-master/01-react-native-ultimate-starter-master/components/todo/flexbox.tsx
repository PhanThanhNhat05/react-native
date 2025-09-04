import { StyleSheet,View, Text } from 'react-native';

const styles = StyleSheet.create({
    // default flex direction  is column and display flex
  container: {  
    display: "flex",
    flex: 1,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "red",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",

    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
    item1: {
        borderWidth: 1,
        borderColor: "violet",
        backgroundColor: "aqua",
        padding: 20,
        height: 150,
        width: 120
    },
    item2: {
 borderWidth: 1,
        borderColor: "violet",
        backgroundColor: "green",
        padding: 20,
        height: 250,
        width: 200
    },
    item3: {
 borderWidth: 1,
        borderColor: "violet",
        backgroundColor: "orange",
        padding: 20,
        
    }
});
const FlexBox = () => {
    return(
        <View style={styles.container}>
           <View style={styles.item1}>
            <Text>Child 1</Text>
           </View>
           <View style={styles.item2}>
            <Text>Child 2</Text>
           </View>
           <View style={styles.item3}>
            <Text>Child 3</Text>
           </View>
        </View>
    )
}

export default FlexBox;