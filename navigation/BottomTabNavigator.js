import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

//import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
//import LinksScreen from '../screens/LinksScreen';
import Navigat1 from '../navigation/Navigat1.js';
import Navigat2 from '../navigation/NAvigat2';
import Home4 from '../screens/Home4.js';

const BottomTab = createBottomTabNavigator();
//const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  //navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator /*initialRouteName={INITIAL_ROUTE_NAME}*/>
      <BottomTab.Screen
        name="Home"
        component={Navigat1}
        /*options={{
          title: 'Get Started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}*/
      />
      <BottomTab.Screen
        name="Links"
        component={HomeScreen}
       /* options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}*/
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
