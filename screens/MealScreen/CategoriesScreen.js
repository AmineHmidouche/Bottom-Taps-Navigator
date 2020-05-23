
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View , FlatList } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

import {CATEGORIES ,MEALS} from '../../data/dammy-data';
import CategoryGridTile from '../../components/CategoryGridTile';

 const CategoriesScreen =( props,navigation) => {

    const RenderMyitem = (itemData) => {
    
   
        return (
          <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {props.navigation.navigate('CategoriMeal' , {CategoryId: itemData.item.id});}} />
                
       
        );
      }
        
  return (


    <FlatList
 
    numColumns={2}
    data={CATEGORIES}
    renderItem={RenderMyitem}
    keyExtractor={(item,index) => {item.id}}
    />
    
    );
  };
  
  /*CategoriesScreen.Options = navigationData =>{
    console.log(navigationData);
  }*/

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
  
  export default CategoriesScreen;