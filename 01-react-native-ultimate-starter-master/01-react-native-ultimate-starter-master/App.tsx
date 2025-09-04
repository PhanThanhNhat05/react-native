// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen(props: any) {
    console.log("props", props);
    const navigation = props.navigation;
    // const navigation:any = useNavigation(); (Hooks)cách này nó di động hơn cách khai báo props
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{marginVertical: 20}}>
        <Button 
      title='Go to detail' 
      onPress={() => navigation.navigate('Details')}
      />
      </View>
      <View style={{marginVertical: 20}}>
        <Button 
      title='Go to user id 1' 
      onPress={() => navigation.navigate('Details')}
      />
      </View>
      <View style={{marginVertical: 20}}>
        <Button 
      title='Go to user id 2' 
      onPress={() => navigation.navigate('Details')}
      />
      </View>
    </View>
  );
}
  function DetailsScreen(props: any) {
    const navigation = props.navigation;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title='Go back Home' onPress={() => navigation.goBack("Home")} />
    </View>
  );
}
  return (
    <NavigationContainer> 
<Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


