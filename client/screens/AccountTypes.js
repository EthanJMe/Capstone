import React from 'react';
import { Text, Button } from 'react-native';
function AccountTypes({navigation}) {
 
  const FeesAndChargesHandler = () => {
    navigation.navigate('FeesAndCharges')
  }

  const HomeHandler = () => {
    navigation.navigate('Home')
  }
  return (
    <>
  <Button title='Fees And Charges' onPress={FeesAndChargesHandler}/>
  <Button title='Home' onPress={HomeHandler}/>
  <Text>hi</Text>
  </>);
}

export default AccountTypes;
