import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Button  } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const[modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler(){
    setModalVisible(true);
  }

  function endAddGoalHandler(){
    setModalVisible(false);
  }

  function addGoalHandler(goalText){                                    //or an API
    setGoals(currentGoals => [...currentGoals, {text: goalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }; 
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button 
      title='Add New Goal' 
      color="#5e0acc"
      onPress={startAddGoalHandler}/>
      <GoalInput 
      visible={modalVisible} 
      onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}/>        

          <View style={styles.goalsContainer}>
            <Text style={{color: 'white'}}>List of goals --- Haider Guilherme Nº 5539</Text>
            <FlatList 
              data={goals} 
              renderItem={(itemData) => {
                return <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}/>;
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            alwaysBounceVertical={false}/>
          </View>      

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1b0a4aff'
  },
  goalsContainer: {
    flex: 5
  },
});
