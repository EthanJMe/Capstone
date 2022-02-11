import React from 'react';
import { Text, Button } from 'react-native';
function Home({navigation}) {
  const AccountTypesHandler = () => {
    navigation.navigate('AccountTypes')
  }
  const FeesAndChargesHandler = () => {
    navigation.navigate('FeesAndCharges')
  }
  return (
  <>
  <Button title='Account Types' onPress={AccountTypesHandler}/>
  <Button title='Fees And Charges' onPress={FeesAndChargesHandler}/>
  <Text>hi</Text>
  </>
    );
}

export default Home;
