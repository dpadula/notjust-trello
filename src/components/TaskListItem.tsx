import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface TaskListItemProps {
  task: { description: string };
}

const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    // La propiedad asChild hace que el Link no cree un View adicional y use el View que ya existe como root. Pero tenemos que reemplazar
    // el View por un Pressable para que funcione el toque
    <Link href={ `/${task.id}` } asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <AntDesign name='close' size={16} color='gray' />
      </Pressable>
    </Link>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a424bff',
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
