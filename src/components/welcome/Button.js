import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

export default function Button({navigation}) {
  return (
    <>
      <View style={{paddingTop: 10}}>
        <TouchableOpacity 
          onPress={ () => navigation.navigate('SelectCharactersScreen')}
          style={{paddingHorizontal: 10, paddingVertical: 10, borderWidth: 1, borderColor: 'white'}}>
              <Text style={{color: 'white', alignSelf: 'center'}}>Entrar</Text>
        </TouchableOpacity>         
      </View>
    </>
  );
}