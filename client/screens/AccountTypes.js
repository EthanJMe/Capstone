import { Text, Button } from 'react-native';
import { List } from 'react-native-paper';

function AccountTypes({navigation}) {
 const blueFederalArray = [{ 
description: "Earn 1.00 - 2.00% APY* on balances up to $15,000\nATM fee refunds\nup to $28 per month**\nNo minimum balance required\nNo monthly service charge\nNo fee for not meeting criteria\nFree debit MasterCard® available immediately when you open your account in branches\nDeposit checks using your smartphone with free mobile deposit\nFree withdrawals at over 30,000 network ATMs\nAccount access at 5,000 shared branches worldwide\nCleared checks can be viewed online and printed",
title: "Extreme Checking"},]

  const FeesAndChargesHandler = () => {
    navigation.navigate('FeesAndCharges')
  }

  const HomeHandler = () => {
    navigation.navigate('Home')
  }
  const DictionaryHandler = () => {
    navigation.navigate('Dictionary')
  }
  const extremeCheckingDescription = blueFederalArray[0].description
  const extremeCheckingTitle = blueFederalArray[0].title
  return (
    <>
  <Button title='Dictionary' onPress={DictionaryHandler}/>
  <Button title='Fees And Charges' onPress={FeesAndChargesHandler}/>
  <Button title='Home' onPress={HomeHandler}/>
  <List.Accordion title="Blue Federal Credit Union">
        <List.Item title={extremeCheckingTitle} description = {extremeCheckingDescription} descriptionNumberOfLines = {20} />
      </List.Accordion>
      <Text>for more information go to https://www.bluefcu.com/bank/</Text>

  </>);
}

export default AccountTypes;
