import * as React from 'react';
//import { Button, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home3 from '../screens/Home3';
import Home4 from '../screens/Home4';
import Home2 from '../screens/Home3';
import Home from '../screens/Home4';
const HomeStack = createStackNavigator();

function Navigat2() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Notification" component={Home3} />
      <HomeStack.Screen options={{headerTitle:'My Home Screen'}} name="Details" component={Home4} />
 
    
      <HomeStack.Screen name="Notification" component={Home} />
      <HomeStack.Screen name="Details" component={Home2} />
    </HomeStack.Navigator>


  );
}
export default Navigat2;

