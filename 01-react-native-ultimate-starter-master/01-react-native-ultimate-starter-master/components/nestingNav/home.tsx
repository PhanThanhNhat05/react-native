import { useNavigation } from "@react-navigation/native";
import { View , Text, Button} from "react-native";

const Home = () => {
    const navigation:any = useNavigation();
    return (

        <View>
            <Text>Nat</Text>
            <Button 
            onPress={()=>navigation.navigate('HomeDetails')}
            title="go to detail"/>
        </View>
    );
}
export default Home;