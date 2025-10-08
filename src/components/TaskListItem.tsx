import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TaskListItemProps {
  task: { description: string };
}

const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.description}</Text>
      <AntDesign name='close' size={16} color='gray' />
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2125',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
