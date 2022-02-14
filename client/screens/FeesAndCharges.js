import React from 'react';
import { Text, Button } from 'react-native';
import { List } from 'react-native-paper';

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
  <List.Accordion title="Overdraft">
        <List.Item title="Checking overdraft is $30" />
      </List.Accordion>
      <List.Accordion title="Paper Statement">
        <List.Item title="A Paper Statement is $2"/>
      </List.Accordion>
      <Text>overdraft information can be found at https://www.supermoney.com/reviews/checking-accounts/blue-federal-credit-union-extreme-checking</Text>
  </>);
}

export default FeesAndCharges;
