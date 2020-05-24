//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import * as React from 'react';
import Colors from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon';

//import Navigat1 from './Navigat1';
import NAvigat2 from '../navigation/NAvigat2';
import FavoritesMealScreen from '../screens/MealScreen/FavoritesMealScreen'
//import MealsNavigator from '../navigation/MealsNavigator';
import HomeScreen from '../screens/HomeScreen'
const BottomTab = createMaterialBottomTabNavigator();
//const BottomTab = createBottomTabNavigator();
//const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator 
    
   barStyle={{ backgroundColor: Colors.amineColor, }}>
   
      <BottomTab.Screen
        name="Home"
        component={NAvigat2}
        
        options={{
          tabBarColor: Colors.amineColor,
          
          title: 'Meal Menus',
          tabBarIcon: ({ color,focused }) => <TabBarIcon  focused={focused} color='red' name="md-restaurant" />,
        }}
      />
      <BottomTab.Screen
       barStyle={{ backgroundColor: Colors.amineColor ,focused:true}}
        name="Links"
        component={FavoritesMealScreen}
       options={{
        
          title: 'Favorites',
          tabBarIcon: focused  =>{return (<TabBarIcon color={focused.amineColor}  name="md-star" /> )} 
        }}
      />

<BottomTab.Screen
        name="Lifnks"
        component={HomeScreen}
       options={{
         
          title: 'Favorsites',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}  name="md-home" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
/*
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}*/
