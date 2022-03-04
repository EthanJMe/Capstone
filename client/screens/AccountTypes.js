import { Text, Button } from 'react-native';
import { List } from 'react-native-paper';

function AccountTypes({navigation}) {
 const blueFederalArray = [
`Earn 1.00 - 2.00% APY* on balances up to $15,000,
ATM fee refunds,
up to $28 per month**,
No minimum balance required,
No monthly service charge,
No fee for not meeting criteria,
Free debit MasterCard® available immediately when you open your account in branches,
Deposit checks using your smartphone with free mobile deposit
Free withdrawals at over 30,000 network ATMs
Account access at 5,000 shared branches worldwide
Cleared checks can be viewed online and printed
`]

  const FeesAndChargesHandler = () => {
    navigation.navigate('FeesAndCharges')
  }

  const HomeHandler = () => {
    navigation.navigate('Home')
  }
  const DictionaryHandler = () => {
    navigation.navigate('Dictionary')
  }
  const extremeCheckingDescription = blueFederalArray[0]
  return (
    <>
  <Button title='Dictionary' onPress={DictionaryHandler}/>
  <Button title='Fees And Charges' onPress={FeesAndChargesHandler}/>
  <Button title='Home' onPress={HomeHandler}/>
  <List.Accordion title="Blue Federal Credit Union">
        <List.Item title="Extreme Checking" description = {extremeCheckingDescription} descriptionNumberOfLines = {20} />
      </List.Accordion>
      <Text>for more information go to https://www.bluefcu.com/bank/</Text>

  </>);
}

export default AccountTypes;
