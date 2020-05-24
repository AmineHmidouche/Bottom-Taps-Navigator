import * as React from 'react';
//import {Text,Button} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle,} from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/MealScreen/CategoriesScreen';
import CategoriesMealScreen from '../screens/MealScreen/CategoriesMealScreen';
import MealDetailScreen from '../screens/MealScreen/MealDetailScreen';
import FavoritesMealScreen from '../screens/MealScreen/FavoritesMealScreen'
//import FavoritesMealScreen from '../screens/MealScreen/FavoritesMealScreen';
import Colors from '../constants/Colors'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
//import BottomTabNavigator from '../navigation/BottomTabNavigator';

const MealStack = createStackNavigator();

//const Tab = createBottomTabNavigator();
const MealsNavigator = () =>{

  return (







<MealStack.Navigator   screenOptions={{ headerStyle:{backgroundColor:Colors.amineColor , borderEndColor : Colors.warningBackground}, headerTintColor:'white'  }} initialRouteName="Home"> 

<MealStack.Screen  options={{ title: 'Meal Categories' }} name="Home" component={CategoriesScreen} />

<MealStack.Screen name="CategoriMeal" /* options={({ route }) => ({ title: route.params.header })}*/ component={CategoriesMealScreen} />

<MealStack.Screen  name="Detail"

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
      
         component={MealDetailScreen} />
      
      <MealStack.Screen name="fav" component={FavoritesMealScreen} />

      

</MealStack.Navigator>
  
 

 

  );
}
 


export default (MealsNavigator) ;