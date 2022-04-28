import React from 'react';
import SelectTop from '../../components/characters/SelectTop';
import SelectMiddle from '../../components/characters/SelectMiddle';
import Container from '../../components/shared/Container'

export default function SelectCharactersScreen({navigation}) {
  return (
    <>
      <Container primary>
        <SelectTop />
        <SelectMiddle navigation={navigation}/>
      </Container>
    </>
  );
}