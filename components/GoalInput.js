import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props){

    const [goalText, setGoalText] = useState('');

    function goalInputHandler(text){
        setGoalText(text);
    };

    function addGoalHandler(){
        props.onAddGoal(goalText);
        setGoalText('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} 
            placeholder='Your course goal!' 
            onChangeText={goalInputHandler}
            value={goalText}></TextInput>

            <View>
              <Button title='Add Goal' onPress={addGoalHandler}></Button>
              <Button title="cancel"/>
            </View>
            
        </View>
      </Modal>
    )
    

};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
})