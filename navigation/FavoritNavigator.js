import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';

import FavoritesMealScreen from '../screens/MealScreen/FavoritesMealScreen';

const HomeStack = createStackNavigator();
function FaforitNavigator() {
  return (
    <HomeStack.Navigator 
    screenOptions={{ headerStyle:{backgroundColor:Colors.amineColor ,
     borderEndColor : Colors.warningBackground}, headerTintColor:'white'  }} 
    initialRouteName="Fav">
      <HomeStack.Screen options={{ title: ' Favorites Meal ' }} name="Favorites" component={FavoritesMealScreen} />

    
     
     
    
</HomeStack.Navigator>




  );
}
export default FaforitNavigator;

