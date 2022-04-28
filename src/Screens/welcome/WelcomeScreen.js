import React from 'react';
import {View} from 'react-native';
import WelcomeTop from '../../components/welcome/WelcomeTop';
import WelcomeMiddle from '../../components/welcome/WelcomeMiddle';
import Container from '../../components/shared/Container'

export default function WelcomeScreen({navigation}) {
  return (
    <>
      <Container primary>
          <WelcomeTop />
          <WelcomeMiddle navigation={navigation}/>
      </Container>
    </>
  );
}