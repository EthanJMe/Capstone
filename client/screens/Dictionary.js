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
    <List.Accordion title="APY">
        <List.Item title="APY is the rate of return earned on an investment" />
        <List.Item title = "taking into account the effect of"/>
        <List.Item title = "compounding interest."/>
      </List.Accordion>
    </>
  )
}

export default Dictionary