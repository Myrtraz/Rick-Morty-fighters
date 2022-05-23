import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import CharactersContext from '../../contexts/CharactersContext';
import ApiService from '../../ApiService';
import TowerRightSide from './TowerRightSide';

const transparent = {uri: '\assets\transparent_background.jpg'};
const Item = ({playerData, item}) => (
  <View style={{flexDirection: 'row', alignItems: 'stretch', paddingHorizontal: 60}}>
    <View style={{}}>
      <TouchableOpacity style={{paddingHorizontal:10, paddingVertical: 10}} >
        <Image style={styles.upload} source={transparent} />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:10, paddingVertical: 10}} >
        <Image style={styles.upload} source={transparent} />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingHorizontal:10, paddingVertical: 10}} >
        <Image style={styles.upload} source={{uri: playerData.image}} />
      </TouchableOpacity>
    </View>

    <TowerRightSide item={item}/>
  </View>
);

export default function Towers({navigation}) {
  const selectCharacter = useContext(CharactersContext);
  const [characters, setCharacters] = useState([]);
  const player = useContext(CharactersContext);
  const playerData = player.getCharacter();

  useEffect(() => {
    const api = new ApiService();

    
  }, []);

  return (
    <>
      <View>
        <FlatList
            data={[characters]}
            renderItem={({item}) => <Item playerData={playerData} item={item} navigation={navigation} />}
            keyExtractor={item => item.id + item.name }
            ItemSeparatorComponent={() => <View style={{paddingVertical: 2}} />}
            ListFooterComponent={() => 
            <View style={{width: '50%', alignSelf: 'flex-end', paddingVertical: '28%'}}>
              <TouchableOpacity 
              onPress={ () => navigation.navigate('BattleScreen')}
              style={{paddingHorizontal: 10, paddingVertical: 10, borderWidth: 1, borderColor: 'white'}}>
                <Text style={{color: 'white', alignSelf: 'center'}}>Continuar</Text>
              </TouchableOpacity>
            </View>
      }/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  innercard: {
    padding: 5,
  },
  touchable: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: .5
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  upload: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});