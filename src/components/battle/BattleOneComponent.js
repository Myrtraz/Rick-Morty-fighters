import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BattleModal from './BattleModal';

export default function BattleOneComponent({character, navigation}) {
  const [enemyHealth, setEnemyHealth] = useState(40);
  const [hp, setHP] = useState(40);
  const [defender, setDefender] = useState('defende')
  const [modal, setModal] = useState(<BattleModal navigation={navigation}/>); 

  const damage  = () => {
    let dmg = Math.floor(Math.random() * 5);
    let total;

    if (enemyHealth === enemyHealth) {
     if (enemyHealth != 0) {
      total = enemyHealth - parseInt(dmg);
       setEnemyHealth(total)
     }  
    }
}

  const defense = () => {
    let defense = Math.floor(Math.random() * 3);
    let total;

    if (hp === hp) {
      if (hp != 0) {
       total = hp - parseInt(defense);
       setHP(total)
      }  
     }
  }
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
              <Text style={{color:'white', fontSize: 16}}> {enemyHealth}/40</Text>
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
              <Text style={{color:'white', fontSize: 16}}>{hp}/40</Text>
            </View>
          </View>
      </View>

      <View style={{}}>
        <View style={{ flexDirection: 'row', paddingVertical: 6,}}>
            <TouchableOpacity 
            style={{
              paddingHorizontal: 10, 
              paddingVertical: 10, 
              backgroundColor: '#da2c43',
              borderWidth: 1, 
              width: '50%',
              borderColor: '#ff2400'
              }}
              onPress={ () => damage()}
              >
              <View style={{paddingVertical: 6}}>
              <MaterialIcons
                name="sword" 
                size={25}
                color='black' 
                style={{textAlign: 'center'}}
              />
              </View>
            </TouchableOpacity>
                <View style={{paddingHorizontal: 2}}/>
            <TouchableOpacity 
            style={{
              paddingHorizontal: 10, 
              paddingVertical: 10, 
              backgroundColor: '#2a2a2a', 
              borderWidth: 1, 
              width: '50%', 
              borderColor: 'grey'
              }}
              onPress={ () => defense()}>
              <View style={{paddingVertical: 6}}>
              <Ionicons
                  name='shield'
                  size={25}
                  color='white'
                  style={{textAlign: 'center'}}
                />
              </View>
            </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', paddingVertical: 6 }}>
          <TouchableOpacity style={{paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#253da1', borderWidth: 1, width: '50%', borderColor: 'blue'}}>
              <View style={{paddingVertical: 6}}>
              <Ionicons
                  name='flame'
                  size={25}
                  color='#da2c43'
                  style={{textAlign: 'center'}}
                />
              </View>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 2}}/>
            {modal}
        </View>
      </View>
    </>
  );
}