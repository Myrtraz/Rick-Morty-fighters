import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BattleModal from './BattleModal';
import WinModal from './WinModal';
//import SpriteSheet from 'rn-sprite-sheet';
import CharactersContext from '../../contexts/CharactersContext';

export default function BattleOneComponent({character, navigation}) {
  const [enemyHealth, setEnemyHealth] = useState(40);
  const [modal, setModal] = useState(<BattleModal navigation={navigation}/>); 
  const [victory, setVictory] = useState(<WinModal navigation={navigation}/>); 
  const enemy = Math.floor(Math.random() * 2);
  const DATA = useContext(CharactersContext);
  const player = DATA.getCharacter();
  const playerHealth = player.health;

  const damage  = () => {
    let total;

    if (enemyHealth === enemyHealth) {
     if (enemyHealth != 0) {
      total = enemyHealth - parseInt(Math.floor(Math.random() * player.max_atk));
       setEnemyHealth(total)
     }  
    }
}

  const defense = () => {
    let total;

    if (playerHealth === playerHealth) {
      if (playerHealth != 0) {
       total = playerHealth - parseInt(Math.floor(Math.random() * 3));
       total;
       console.log(total);
       console.log(playerHealth);
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
            style={{width: 80, height: 80,paddingHorizontal: 10}} 
            source={{uri: player.image}} 
          />
        </View>

          <View style={{borderWidth: 1, borderColor: 'white', paddingVertical: 10, width: '40%'}}>
            <View>
              <Text style={{color:'white', fontSize: 16, textAlign: 'center'}}>{player.name}</Text>
            </View>

            <View style={{ flexDirection: 'row'}}>
              <Text style={{color:'white', fontSize: 16, paddingHorizontal: 20}}>PS</Text>
              <Text style={{color:'white', fontSize: 16}}>{player.health}/40</Text>
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