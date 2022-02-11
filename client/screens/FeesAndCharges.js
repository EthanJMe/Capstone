import React from 'react';
import { Text, Button } from 'react-native';
function FeesAndCharges({navigation}) {
  const AccountTypesHandler = () => {
    navigation.navigate('AccountTypes')
  }
  const HomeHandler = () => {
    navigation.navigate('Home')
  }
  return (
    <>
    <Button title='Account Types' onPress={AccountTypesHandler}/>
  <Button title='Home' onPress={HomeHandler}/>
  <Text>hi</Text>
  </>);
}

export default FeesAndCharges;
