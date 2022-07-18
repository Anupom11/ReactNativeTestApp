import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [userInputVal, setUserInputVal] = useState('');

  function getTextInputData(textData) {
    setUserInputVal(textData);
  }

  function addUserInput() {
    console.log("Val::"+userInputVal);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={{margin:10}}>Hello World!!!!</Text>
        <Button title='Click Me'/>
      </View>

      <View style={styles.inputContainer}>
        
        <View style={{borderColor: '#000000', borderWidth:1, marginEnd:10}}>
          <TextInput placeholder='Your course goal!' onChangeText={getTextInputData} />
        </View>

        <Button title='Add Goal' onPress={addUserInput}/>
      
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  appContainer: {
    padding: 50,
  },

  inputContainer: {
    flexDirection:'row',
    padding:5,
    justifyContent:'flex-start',
  }

});
