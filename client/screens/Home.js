import { useState } from 'react';
import { Text, Button, StyleSheet, TextInput, } from 'react-native';
import { Alert, Modal, Pressable, View } from "react-native";


function Home({navigation}) {
  const Calculator = (deposit, myInterest, yearsInAccount) => {
    parseInt(deposit)
    parseInt(myInterest)
    parseInt(yearsInAccount)
    const product = deposit * myInterest/100*yearsInAccount
    return (
      <Text>You would have {product} dollars</Text>
    )
  }
  const AccountTypesHandler = () => {
    navigation.navigate('AccountTypes')
  }
  const FeesAndChargesHandler = () => {
    navigation.navigate('FeesAndCharges')
  }
  const DictionaryHandler = () => {
    navigation.navigate('Dictionary')
  }

  const [initialDeposit, setInitialDeposit] = useState('')
  const [interest, setInterest] = useState('')
  const [years, setYears] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  return (
  <>
  <Button title='Account Types' onPress={AccountTypesHandler}/>
  <Button title='Fees And Charges' onPress={FeesAndChargesHandler}/>
  <Button title='Dictionary' onPress={DictionaryHandler}/>
  <Text style = {styles.Header}>Welcome to our interest calculator</Text>
  <Text style ={styles.SmallHeader}>Initial Deposit</Text>
  <TextInput keyboardType='numeric' style={styles.input} onChangeText={newText => setInitialDeposit(newText)}/>
  <Text style ={styles.SmallHeader}>Interest Rate (APY)</Text>
  <TextInput keyboardType='numeric' style={styles.input} onChangeText={newText => setInterest(newText)}/>
  <Text style ={styles.SmallHeader}>Years in account</Text>
  <TextInput keyboardType='numeric' style={styles.input} onChangeText={newText => setYears(newText)}/>
  <Button title='Calculate' onPress={() => setModalVisible(!modalVisible)}/>

  <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>{Calculator( deposit = initialDeposit,myInterest = interest,yearsInAccount = years)}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
export default Home;
