import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.header}><Text style = {styles.headerText}>Home</Text></View>
      <StatusBar style="auto" />
    </View>
  );
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
