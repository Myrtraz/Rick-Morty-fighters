import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import Ionicons from 'react-native-vector-icons/Ionicons';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

import WelcomeScreen from './Screens/welcome/WelcomeScreen';
import SelectCharactersScreen from './Screens/choose/SelectCharactersScreen';
import BattleScreen from './Screens/battle/BattleScreen';
import TowerScreen from './Screens/tower/TowerScreen';

function RouterProvider() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SelectCharactersScreen"
          component={SelectCharactersScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TowerScreen"
          component={TowerScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BattleScreen"
          component={BattleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouterProvider;
