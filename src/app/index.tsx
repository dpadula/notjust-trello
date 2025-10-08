import { View } from 'react-native';
import TaskListItem from '../components/TaskListItem';

export default function Index() {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <TaskListItem />
    </View>
  );
}
