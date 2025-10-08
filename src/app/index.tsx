import { View } from 'react-native';
import TaskListItem from '../components/TaskListItem';

export default function Index() {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <TaskListItem task={{ description: 'Task 1' }} />
      <TaskListItem task={{ description: 'Task 2' }} />
      <TaskListItem task={{ description: 'Task 3' }} />
    </View>
  );
}
