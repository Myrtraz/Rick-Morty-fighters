import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

export default function BattleTop() {
  const [health, setHealth] = useState(40);
  return (
    <>
      <View style={{flex:1}}>
      <View style={{ flexDirection: 'row', paddingVertical: 20}}>
          <View style={{borderWidth: 1, borderColor: 'white', paddingVertical: 10, width: '40%'}}>
            <View>
              <Text style={{color:'white', fontSize: 16, textAlign: 'center'}}>Rick Sanchez</Text>
            </View>

            <View style={{ flexDirection: 'row'}}>
              <Text style={{color:'white', fontSize: 16, paddingHorizontal: 20}}>PS</Text>
              <Text style={{color:'white', fontSize: 16}}> {health}/40</Text>
            </View>
          </View>

          <View style={{ width: '60%', paddingHorizontal: 100}}>
          <Image 
            style={{width: 80, height: 80, paddingHorizontal: 10}} 
            source={{uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}} 
          />
        </View>
      </View>
      </View>
    </>
  );
}