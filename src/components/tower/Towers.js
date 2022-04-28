import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import CharactersContext from '../../contexts/CharactersContext';
import ApiService from '../../ApiService';
import TowerLeftSide from './TowerLeftSide';
import TowerRightSide from './TowerRightSide';

const Item = ({item, navigation}) => (
  <View style={{flexDirection: 'row', alignItems: 'stretch', paddingHorizontal: 60}}>
  <View style={{}}>
    <TouchableOpacity style={{paddingHorizontal:10, paddingVertical: 10}} >
      <Image style={styles.upload} source={{uri: item.image}} />
    </TouchableOpacity>
  </View>

  <TowerRightSide item={item}/>
  </View>
);

export default function Towers({navigation, character, item}) {
  return (
    <>
      <View>
        <FlatList
            data={[character]}
            renderItem={({item}) => <Item item={item} navigation={navigation} />}
            keyExtractor={item => item.id + item.name }
            ItemSeparatorComponent={() => <View style={{paddingVertical: 2}} />}
            ListFooterComponent={() => 
            <View style={{width: '50%', alignSelf: 'flex-end', paddingVertical: '50%'}}>
              <TouchableOpacity 
              onPress={ () => navigation.navigate('BattleScreen', character)}
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