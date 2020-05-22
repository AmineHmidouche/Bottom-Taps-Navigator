import * as React from 'react';
//import { Button, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Home2 from '../screens/Home2';


const HomeStack = createStackNavigator();

function Navigat1() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen  options={{headerTitle:'My Home Screen'}} name="Home" component={Home} />
      <HomeStack.Screen name="Detailss" component={Home2} />
    </HomeStack.Navigator>
  );
}

export default Navigat1;