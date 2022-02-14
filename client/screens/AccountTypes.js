import React from 'react';
import { Text, Button } from 'react-native';
import { List } from 'react-native-paper';

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
  <List.Accordion title="Extreme Checking">
        <List.Item title="Earn 1.00 - 2.00% APY* on balances up to $15,000" />
        <List.Item title="ATM fee refunds, up to $28 per month**" />
        <List.Item title="No minimum balance required" />
        <List.Item title="No monthly service charge" />
        <List.Item title="No fee for not meeting criteria" />
        <List.Item title="Free debit MasterCard® available immediately when you open your account in branches" />
        <List.Item title="Deposit checks using your smartphone with free mobile deposit" />
        <List.Item title="Free withdrawals at over 30,000 network ATMs" />
        <List.Item title="Account access at 5,000 shared branches worldwide" />
        <List.Item title="Cleared checks can be viewed online and printed" />
        <List.Item title="Overdraft protection is available" />
      </List.Accordion>
      <Text>for more information go to https://www.bluefcu.com/bank/</Text>

  </>);
}

export default AccountTypes;
