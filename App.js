import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Alert} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  //const [userInputVal, setUserInputVal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  /* function getTextInputData(textData) {
    setUserInputVal(textData);
  } */

  function addUserInput(userInputVal) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, userInputVal]);
  }

  function deleteItem(item) {
    Alert.alert('Confirm!', 'Are you sure? You want to delete '+item, [
      {
        text: 'Cancel',
        onPress:()=> null,
        style: 'cancel'
      },
      {
        tex: 'Yes',
        onPress:()=>{
          setCourseGoals(currentCourseGoals=> { return currentCourseGoals.filter((goal)=> goal!=item);  });
        }
      }
    ]);
    
  }

  function clickMeResponse() {
    alert('Click me!');
  }

  return (
    <View style={styles.appContainer}>

      <View>
        <Text style={{margin: 10}}>Hello World!!!!</Text>
        <Button title="Click Me" onPress={clickMeResponse} />
      </View>

      <GoalInput addUserInput={addUserInput}/>
      <GoalItem courseGoals={courseGoals} deleteItem={deleteItem} />

      {/* <View style={styles.inputContainer}>
        <View style={{borderColor: '#000000', borderWidth: 1, marginEnd: 10}}>
          <TextInput
            placeholder="Your course goal!"
            onChangeText={getTextInputData}/>
        </View>

        <Button title="Add Goal" onPress={addUserInput} />
      </View> */}

      {/* <View style={{marginBottom: 20}}>
        <ScrollView>
          <View>
            {courseGoals.map(goal => (
              <Text style={styles.goalItem} key={goal}>
                {goal}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View> */}

      {/* <View style={{marginBottom: 20}}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index)=> index.toString()}
          renderItem={({item, index})=> {
            return (
              <View>
                <Text style={styles.goalItem}> {item} </Text>
              </View>
            );
          }}  />
      </View> */}

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
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'flex-start',
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0aee',
    padding: 8,
    color: 'white',
  },
});