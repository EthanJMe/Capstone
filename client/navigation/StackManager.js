import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../screens/home';
import feesAndCharges from '../screens/feesAndCharges';
import accountTypes from '../screens/accountTypes';

function StackManager() {
    const Pages = createNativeStackNavigator(); 
  return (
  <Pages.Navigator>
      <Pages.Screen name = "home" component = {home}/>
      <Pages.Screen name = "accountTypes" component = {accountTypes}/>
      <Pages.Screen name = "feesAndCharges" component = {feesAndCharges}/>
  </Pages.Navigator>
  
  )
}

export default StackManager;
