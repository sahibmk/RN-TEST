import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screens } from '../config';
import AppStack from './app-stack';


const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name={screens.home} component={AppStack} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
