import React from 'react';
import Container from '../../components/shared/Container'
import BattleOneComponent from '../../components/battle/BattleOneComponent';

export default function BattleScreen({navigation}) {
  return (
    <>
      <Container primary>
        <BattleOneComponent navigation={navigation} />
      </Container>
    </>
  );
}