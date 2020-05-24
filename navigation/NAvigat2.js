import * as React from 'react';
//import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors'
import CategoriesScreen from '../screens/MealScreen/CategoriesScreen';
import CategoriesMealScreen from '../screens/MealScreen/CategoriesMealScreen';
import MealDetailScreen from '../screens/MealScreen/MealDetailScreen';

const HomeStack = createStackNavigator();
function NAvigat2() {
  return (
    <HomeStack.Navigator 
    screenOptions={{ headerStyle:{backgroundColor:Colors.amineColor ,
     borderEndColor : Colors.warningBackground}, headerTintColor:'white'  }} 
    initialRouteName="Home">
      <HomeStack.Screen options={{ title: 'Meal Categories' }} name="Home" component={CategoriesScreen} />

    
      <HomeStack.Screen name="CategoriMeal" component={CategoriesMealScreen} />
      <HomeStack.Screen
      options={{
            headerTitle: 'My Deatail Meal',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
            ),
          }}
       name="Detail" component={MealDetailScreen} />

     
    
</HomeStack.Navigator>




  );
}
export default NAvigat2;

