import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');

  const [goals, setGoals] = useState([]);

  function goalInputHandler(text){
    setGoalText(text);
  };

  function addGoalHandler(){
    setGoals(currentGoals => [...currentGoals, goalText])
  };

  return (
    <View style={styles.appContainer}>

          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}></TextInput>
            <Button title='Add Goal' onPress={addGoalHandler}></Button>
          </View>

          <View style={styles.goalsContainer}>
            <Text>List of goals --- Haider Guilherme Nº 5539</Text>
            {goals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>)}
          </View>      

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
