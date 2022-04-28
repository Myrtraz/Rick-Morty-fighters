import React from 'react';
import {View} from 'react-native';
import Towers from '../../components/tower/Towers';
import Container from '../../components/shared/Container'

export default function TowerScreen({route, navigation}) {
  const character = route.params;
  return (
    <>
      <Container primary>
        <Towers navigation={navigation} character={character} /> 
      </Container>
    </>
  );
}