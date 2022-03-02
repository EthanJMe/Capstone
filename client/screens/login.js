import { Text, Button, StyleSheet, TextInput, } from 'react-native';
import { useState } from 'react';


function Login({navigation}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const newUser = {
    username:username,
    password:password
  }
  const LoginHandler = () => {
    navigation.navigate('Home')
  }
  const RegistrationHandler = () => {
    navigation.navigate('Registration')
  }
    return (
    <>
      <Text style = {styles.Header}>Login</Text>
      <Text style ={styles.SmallHeader}>Username</Text>
      <TextInput keyboardType='default' style={styles.input} onChangeText={newText => setUsername(newText)}/>
      <Text style ={styles.SmallHeader}>Password</Text>
      <TextInput keyboardType='default' style={styles.input} onChangeText={newText => setPassword(newText)}/>
      <Button style = {styles.opacity} title='Sign in' onPress={LoginHandler}/>
      <Button style = {styles.opacity} title='Register' onPress={RegistrationHandler}/>
    </>
  )
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
  opacity : {
    backgroundColor: "#34C2FF",
    opacity: 0.5,
  },
})
export default Login