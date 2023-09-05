import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';



// Tero Rantanen TVT22KMO
// Ohjeen mukaan tehty, testattu omalla Androidilla ja emulaattorilla

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar 
      style="auto"
      // backgroundColor='red' 
      //hidden={true}
      
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});


// npx expo install expo-constants             !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import Constants from 'expo-constants';    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!