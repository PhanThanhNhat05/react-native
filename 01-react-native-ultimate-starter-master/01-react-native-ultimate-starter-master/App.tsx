// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeDetails from './components/nestingNav/home.details';
import Home from './components/nestingNav/home';
import Like from './components/nestingNav/like';
import LikeDetails from './components/nestingNav/like.detail';
import About from './components/nestingNav/about';
import ChangePass from './components/nestingNav/change.password';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const TabApp = () => {
    return (
 <Tab.Navigator 
     screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'american-football'
                : 'american-football-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'aperture' : 'aperture-outline';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator> 
    )
  }
  const StackApp = () => {
    return (
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
        options={{headerTitle: 'Phan Thanh Nhat', headerShown: false}}
        component={TabApp} />
        <Stack.Screen name="HomeDetails"
       options={({route} : {route: any}) => ({headerTitle: `Detail Info ${route?.params?.userId ?? ""}`,
      
        })}
         component={HomeDetails} />
        <Stack.Screen name="LikeDetail" component={LikeDetails} />
      </Stack.Navigator> 
    )
  }
//   function HomeScreen() {
//     // console.log("props", props);
//     // console.log("props route", props.route);
//     // const navigation = props.navigation;
    
//     const navigation:any = useNavigation(); 
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
      
//       <View style={{marginVertical: 20}}>
//         <Button 
//       title='Go to detail' 
//       onPress={() => navigation.navigate('nat')}
//       />
//       </View>
//       <View style={{marginVertical: 20}}>
//         <Button 
//       title='Go to user id 1' 
//       onPress={() => navigation.navigate('nat', {userId: 1, name: 'nat1'})}
//       />
//       </View>
//       <View style={{marginVertical: 20}}>
//         <Button 
//       title='Go to user id 2' 
//       onPress={() => navigation.navigate('nat', {userId: 2, name: 'nat2'})}
//       />
//       </View>
//     </View>
//   );
// }
//   function DetailsScreen() {
//     const navigation:any = useNavigation();
//     const route:any = useRoute();
//     console.log(">> check route", route.params);
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>User id: {route.params?.userId}</Text>
//       <Button title='Go back Home' onPress={() => navigation.goBack("Home")} />
//     </View>
//   );
// }

  return (
    <NavigationContainer > 

     {/* <Stack.Navigator initialRouteName='Home'
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
        options={{headerTitle: 'Phan Thanh Nhat', headerShown: false}}
        component={TabApp} />
        <Stack.Screen name="HomeDetails"
       options={({route} : {route: any}) => ({headerTitle: `Detail Info ${route?.params?.userId ?? ""}`,
      
        })}
         component={HomeDetails} />
        <Stack.Screen name="LikeDetail" component={LikeDetails} />
      </Stack.Navigator> */}

      <Drawer.Navigator >
        <Drawer.Screen name='Stackapp' component={StackApp}/>
        <Drawer.Screen
        
        name='about' component={About} />
        <Drawer.Screen name='changePass' component={ChangePass} />
      </Drawer.Navigator>

    

    </NavigationContainer>
  );
}


