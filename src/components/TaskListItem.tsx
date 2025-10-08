import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Task</Text>
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2125',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});
