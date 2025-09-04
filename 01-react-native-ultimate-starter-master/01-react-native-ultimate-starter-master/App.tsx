// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export default function App() {

  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    // console.log("props", props);
    // console.log("props route", props.route);
    // const navigation = props.navigation;
    
    const navigation:any = useNavigation(); 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
      <View style={{marginVertical: 20}}>
        <Button 
      title='Go to detail' 
      onPress={() => navigation.navigate('nat')}
      />
      </View>
      <View style={{marginVertical: 20}}>
        <Button 
      title='Go to user id 1' 
      onPress={() => navigation.navigate('nat', {userId: 1, name: 'nat1'})}
      />
      </View>
      <View style={{marginVertical: 20}}>
        <Button 
      title='Go to user id 2' 
      onPress={() => navigation.navigate('nat', {userId: 2, name: 'nat2'})}
      />
      </View>
    </View>
  );
}
  function DetailsScreen() {
    const navigation:any = useNavigation();
    const route:any = useRoute();
    console.log(">> check route", route.params);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>User id: {route.params?.userId}</Text>
      <Button title='Go back Home' onPress={() => navigation.goBack("Home")} />
    </View>
  );
}

  return (
    <NavigationContainer> 
<Stack.Navigator initialRouteName='Home'
 screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
>
        <Stack.Screen name="Home" 
        options={{headerTitle: 'Phan Thanh Nhat'}}
        component={HomeScreen} />
        <Stack.Screen name="nat"
       options={({route} : {route: any}) => ({headerTitle: `Detail Info ${route?.params?.userId ?? ""}`,
      
        })}
         component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


