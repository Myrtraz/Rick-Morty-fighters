import React from 'react';
import {View, Image} from 'react-native';
import Button from './Button';

export default function WelcomeMiddle({navigation}) {
  return (
    <>
      <View>
        <Image style={{width: 320, height: 280}} source={{uri: 'https://i.imgur.com/iaeaOAE.jpg'}} />
        <Button navigation={navigation}/>
      </View>
    </>
  );
}