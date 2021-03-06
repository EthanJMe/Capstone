import { Text, Button } from 'react-native';
import { List } from 'react-native-paper';

function Dictionary({navigation}) {
    const AccountTypesHandler = () => {
        navigation.navigate('AccountTypes')
      }
      const HomeHandler = () => {
        navigation.navigate('Home')
      }
      const FeesAndChargesHandler = () => {
        navigation.navigate('FeesAndCharges')
      }
    

    return (
    <>
    <Button title='Home' onPress={HomeHandler}/>
    <Button title='Account Types' onPress={AccountTypesHandler}/>
    <Button title='Fees And Charges' onPress={FeesAndChargesHandler}/>
    <List.Accordion title="Terms">
        <List.Item title = 'APY' description = "APY is the rate of return earned on an investment taking into account the effect of compounding interest." />
        <List.Item title = 'Initial Deposit' description = "An  initial deposit is the minimum amount of money required to open an account with a financial institution, such as a bank or brokerage firm. " />
      </List.Accordion>
    </>
  )
}

export default Dictionary