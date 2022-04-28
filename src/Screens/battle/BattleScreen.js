import React from 'react';
import Container from '../../components/shared/Container'
import BattleOneComponent from '../../components/battle/BattleOneComponent';

export default function BattleScreen({route, navigation}) {
  const character = route.params;
  return (
    <>
      <Container primary>
        <BattleOneComponent character={character} navigation={navigation} />
      </Container>
    </>
  );
}