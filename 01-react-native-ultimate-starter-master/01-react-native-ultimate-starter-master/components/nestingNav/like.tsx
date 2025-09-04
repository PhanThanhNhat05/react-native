import { useNavigation } from "@react-navigation/native";
import { View , Text, Button} from "react-native";

const Like = () => {
    const navigation:any = useNavigation();
    return (

        <View>
            <Text>Nat like</Text>
            <Button 
                onPress={()=>navigation.navigate('LikeDetail')}
                title="like detail"/>
        </View>
    );
}
export default Like;