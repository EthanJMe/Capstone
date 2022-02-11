import React from 'react';
import { Text, Button, StyleSheet, TextInput, } from 'react-native';
  /*1. create state for each field
    2. create function to do math
    3. display result of math function below calculate button
    */
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
  <Text style = {styles.Header}>Welcome to our interest calculator</Text>
  <Text style ={styles.SmallHeader}>Initial Deposit</Text>
  <TextInput style={styles.input}/>
  <Text style ={styles.SmallHeader}>Interest Rate (APY)</Text>
  <TextInput style={styles.input}/>
  <Text style ={styles.SmallHeader}>Years in account</Text>
  <TextInput style={styles.input}/>
  <Button title='Calculate'/>

  </>
    );

}

const styles = StyleSheet.create({
  Header: {
    fontSize: 22,
    textAlign: "center",
  },
  SmallHeader: {
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
})
export default Home;
