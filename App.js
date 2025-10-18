import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList  } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [goals, setGoals] = useState([]);


  function addGoalHandler(goalText){                                    //or an API
    setGoals(currentGoals => [...currentGoals, {text: goalText, id: Math.random().toString()}])
  };

  function deleteGoalHandler(id){
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }; 
  return (
    <View style={styles.appContainer}>

      <GoalInput onAddGoal={addGoalHandler}/>          

          <View style={styles.goalsContainer}>
            <Text>List of goals --- Haider Guilherme Nº 5539</Text>
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
});
