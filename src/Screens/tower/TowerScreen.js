import React, {useContext} from 'react';
import {View} from 'react-native';
import Towers from '../../components/tower/Towers';
import Container from '../../components/shared/Container'

export default function TowerScreen({navigation}) {

  return (
    <>
      <Container primary>
        <Towers navigation={navigation}/> 
      </Container>
    </>
  );
}