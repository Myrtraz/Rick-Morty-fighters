import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import ApiService from '../../ApiService';
import CharactersContext from '../../contexts/CharactersContext';

export default function SelectMiddle({navigation}) {
  const selectCharacter = useContext(CharactersContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const api = new ApiService();

    api.getCharacters(characters => {
      setCharacters(characters);
    });

  }, []);

  const Item = ({item, navigation}) => (
    <View style={{justifyContent: 'space-between'}}>
      <TouchableOpacity style={{paddingHorizontal:10, paddingVertical: 10}} onPress={() => {
        selectCharacter.setCharacter(item)
        navigation.navigate('TowerScreen', item)
      }}>
        <Image style={styles.upload} source={{uri: item.image}} />
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 20}}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View>
        <FlatList
          data={characters}
          renderItem={({item}) => <Item item={item} navigation={navigation}/>}
          keyExtractor={(_, i) => String(i)}
          ItemSeparatorComponent={() => <View style={{paddingVertical: 2}} />}
          ListFooterComponent={() => <View style={{paddingVertical: 2}} />}
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
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});