import React from 'react';
import {View , Text , Button } from 'react-native';
import {MEALS} from '../../data/dammy-data';
const MealDetailScreen = ({route,props ,navigation}) =>{
    

    
    const { mealId } = route.params;

    const selectedMeal = MEALS.find(cat => cat.id === mealId);
  

    return (
<View><Text>{selectedMeal.title}</Text>
<Button title='Go back ' onPress={()=>{navigation.navigate('Home')}}  />

</View>


    );

}





export default MealDetailScreen;
