import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';


function Headers({}) {
  return (    
    <View style={styles.container}>
    <View style = {styles.header}>
    <Button title='Account Types' style = {styles.headerText} onPress={()=> navigate("accountTypes")}/>
    <Button title='Home' style = {styles.headerText} onPress={()=> navigate("home")}/>
    <Button title='Fees And Charges' style = {styles.headerText} onPress={()=> navigate("feesAndCharges")}/>
    </View>
    <StatusBar style="auto" />
    </View>);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
      
    },
    header:{
      backgroundColor: "#34C2FF",
      paddingTop: 50,
        display: 'flex'
        
        
    },
    headerText: {
      color : "#fff",
      fontSize: 20,
      paddingHorizontal: 5
    }
  });
  

export default Headers;
