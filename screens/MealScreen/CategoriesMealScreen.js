import React from 'react';
import {View , Text ,Button, StyleSheet ,FlatList} from 'react-native';
import MealItem from '../../components/MealItem';
import {CATEGORIES, MEALS} from '../../data/dammy-data';
import MealList from '../../components/MealList';
const CategoriesMealScreen = ({props , route, navigation }) =>{

   
         
      const { CategoryId } = route.params;
      //const catId = props.navigation.getParam('CategoryId');
    
      const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(CategoryId) >= 0
      );
    
      return <MealList listData={displayedMeals} navigation={navigation} />;
    };
    
  

        

export default CategoriesMealScreen;
