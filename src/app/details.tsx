import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TaskDetails = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Task Details' }} />
      <Text>Details</Text>
    </>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({});
