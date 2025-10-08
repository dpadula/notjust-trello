import React, { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import TaskListItem from './TaskListItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { description: 'Sample Task' },
    { description: 'Sample Task' },
  ]);

  const [newTask, setNewTask] = useState('');

  const createTask = () => {
    setTasks([...tasks, { description: newTask }]);
    setNewTask('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder='Add Task'
        placeholderTextColor='gray'
        style={styles.inputAddTask}
      />
      <Button title='Add Task' onPress={createTask} />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#101112',
    borderRadius: 5,
    gap: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputAddTask: {
    color: 'white',
    backgroundColor: '#1D2125',
    padding: 10,
    borderRadius: 5,
  },
});
