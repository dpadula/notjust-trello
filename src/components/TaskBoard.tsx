import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskList from './TaskList';

const TaskBoard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#3a424bff', '#cbe0ffff']}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView style={styles.container}>
        <TaskList />
      </SafeAreaView>
    </View>
  );
};

export default TaskBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
