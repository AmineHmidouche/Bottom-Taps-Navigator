import React from 'react';
import {View,Text,Button} from 'react-native' ;


const Home4 = ({props,navigation}) => {

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Home')}
    />
  </View>

);
}

export default Home4;