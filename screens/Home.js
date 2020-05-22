import React from 'react';
import {View,Text,Button} from 'react-native' ;


const Home = ({props,navigation}) => {

return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings HAmouuuuuuuuuuuuuda screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detailss')}
    />
  </View>
);


}
export default Home;