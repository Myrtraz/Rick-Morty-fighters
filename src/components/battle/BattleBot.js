import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function BattleBot({navigation, character}) {
  return (
    <>
      <View style={{}}>
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#cecece', borderWidth: 1, width: '50%'}}>
              <View style={{paddingVertical: 6}}>
                <Text style={{ fontSize: 16, fontWeight: '800', textAlign: 'center'}}>Atacar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#cecece', borderWidth: 1, width: '50%'}}>
              <View style={{paddingVertical: 6}}>
                <Text style={{ fontSize: 16, fontWeight: '800', textAlign: 'center'}}>Defender</Text>
              </View>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#cecece', borderWidth: 1, width: '50%'}}>
              <View style={{paddingVertical: 6}}>
                <Text style={{ fontSize: 16, fontWeight: '800', textAlign: 'center'}}></Text>
              </View>
            </View>
            <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#cecece', borderWidth: 1, width: '50%'}} onPress={ () => navigation.navigate('WelcomeScreen')}>
              <View style={{paddingVertical: 6}}>
                <Text style={{ fontSize: 16, fontWeight: '800', textAlign: 'center'}}>Rendirse</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}