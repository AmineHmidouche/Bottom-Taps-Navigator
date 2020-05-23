import React from 'react';
import {View , Text ,Button, StyleSheet ,FlatList} from 'react-native';
import MealItem from '../../components/MealItem';
import {CATEGORIES, MEALS} from '../../data/dammy-data';

const CategoriesMealScreen = ({props , route, navigation }) =>{

    const renderMealItem = itemData => {
        return (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {navigation.navigate('Detail' , {mealId: itemData.item.id});}}
          />
        );
      };
      const { CategoryId } = route.params;
      //const catId = props.navigation.getParam('CategoryId');
    
      const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(CategoryId) >= 0
      );
    
      return (
        <View style={styles.screen}>
          <FlatList
            data={displayedMeals}
            keyExtractor={(item, index) => item.id}
            renderItem={renderMealItem}
            style={{ width: '100%' }}
          />
        </View>
      );
    };
    
  /*  const { CategoryId } = route.params;
   const SlectCategory = CATEGORIES.find(cat =>cat.id === CategoryId);
    */


   const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    }
  });
  


        

export default CategoriesMealScreen;
