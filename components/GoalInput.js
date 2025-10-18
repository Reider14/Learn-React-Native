import { 
  StyleSheet, 
  View, 
  TextInput, 
  Button, 
  Modal,
  Image } from "react-native";
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

        <Image style={styles.image} source={require('../assets/images/goal.png')}/>

            <TextInput 
            style={styles.textInput} 
            placeholder='Your course goal!' 
            onChangeText={goalInputHandler}
            value={goalText}></TextInput>

            <View style={styles.buttonContainer}>
              
              <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
              </View>
              <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} color="#5e0acc"></Button>
              </View>
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
    padding: 16,
    //marginBottom: 24,
    //borderBottomWidth: 1,
    //borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 10
  },
  buttonContainer: {
    marginTop: 12,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})