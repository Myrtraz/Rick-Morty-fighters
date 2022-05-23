import React, {useEffect, useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList, StyleSheet} from 'react-native';
import CharactersContext from '../../contexts/CharactersContext';
import ApiService from '../../ApiService';
import useCharacters from '../../hooks/useCharacters';

const Item = ({item, navigation}) => (
  <View style={{alignItems: 'stretch', paddingHorizontal: 60}}>
  <View style={{}}>
    <View style={{paddingHorizontal:10, paddingVertical: 10}}>
      <Image style={styles.upload} source={{uri: item.image}} />
    </View>
  </View>
  </View>
);

export default function TowerRightSide({navigation}) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const api = new ApiService();

    api.getCharacters(characters => {
      setCharacters(characters);
    });
  }, []);
  
  return (
    <>
      <View>
        <FlatList
            data={characters}
            renderItem={({item}) => <Item item={item} navigation={navigation} />}
            keyExtractor={item => item.id + item.name }
            ItemSeparatorComponent={() => <View style={{paddingVertical: 2}} />}
          />
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