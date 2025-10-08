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
    { id: 1, description: 'Sample Task' },
    { id: 2, description: 'Sample Task' },
  ]);

  const [newTask, setNewTask] = useState('');

  const createTask = () => {
    setTasks([
      ...tasks,
      {
        description: newTask,
        id: tasks.length + 1,
      },
    ]);
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
    backgroundColor: '#2b3238ff',
    padding: 10,
    borderRadius: 5,
  },
});
