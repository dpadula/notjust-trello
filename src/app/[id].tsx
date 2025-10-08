import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Task Details' }} />
      <Text style={styles.text}>ID {id}</Text>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
