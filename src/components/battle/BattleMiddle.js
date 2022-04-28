import React, {useState}  from 'react';
import {View, Text, Image} from 'react-native';

export default function BattleMiddle({character}) {
  const [health, setHealth] = useState(40);
  
  return (
    <>
      <View style={{ flexDirection: 'row', paddingVertical: 20}}>
        <View style={{ width: '60%'}}>
          <Image 
            style={{width: 80, height: 80, paddingHorizontal: 10}} 
            source={{uri: character.image}} 
          />
        </View>

          <View style={{borderWidth: 1, borderColor: 'white', paddingVertical: 10, width: '40%'}}>
            <View>
              <Text style={{color:'white', fontSize: 16, textAlign: 'center'}}>{character.name}</Text>
            </View>

            <View style={{ flexDirection: 'row'}}>
              <Text style={{color:'white', fontSize: 16, paddingHorizontal: 20}}>PS</Text>
              <Text style={{color:'white', fontSize: 16}}>{health}/40</Text>
            </View>
          </View>
      </View>
    </>
  );
}