import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

function GoalInput(props) {

    const [userInputVal, setUserInputVal] = useState('');

    function getTextInputData(textData) {
        setUserInputVal(textData);
    }

    function addGoalHandler() {
        props.addUserInput(userInputVal);
        setUserInputVal('');
    }

    function closeModal() {
        props.closeVisibility();
    }

    return (
        <Modal
            visible={props.visibility}
            animationType={'slide'}>
            <View>
                <View style={styles.inputContainer}>
                    <View style={{borderColor: '#000000', borderWidth: 1, marginEnd: 10}}>
                        <TextInput
                            placeholder="Your course goal!"
                            onChangeText={getTextInputData}
                            value={userInputVal} />
                    </View>
                    <Button title="Add Goal" onPress={addGoalHandler} />
                </View>
                <View style={{marginTop:10, marginLeft:20, marginRight:20}}>
                    <Button title="Close" onPress={closeModal}/>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'flex-start',
        marginTop:10, 
        marginLeft:20,
      },
});