import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import StackManager from './StackManager';

function Headers({ navigation: { navigate } }) {
  return (    
    <View style={styles.container}>
    <View style = {styles.header}>
        <Button title='Home' style = {styles.headerText} onPress={()=>  
        navigate("home")}/>
    </View>
    <StatusBar style="auto" />
    </View>);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    header:{
      backgroundColor: "#34C2FF",
      paddingTop: 50,
        
    },
    headerText: {
      color : "#fff",
      fontSize: 20,
      paddingHorizontal: 5
    }
  });
  

export default Headers;
