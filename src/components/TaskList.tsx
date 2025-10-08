import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskListItem from './TaskListItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { description: 'Sample Task' },
    { description: 'Sample Task' },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task List</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
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
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
