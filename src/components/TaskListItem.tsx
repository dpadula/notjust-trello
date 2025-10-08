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
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
