import { View } from 'react-native';
import TaskList from '../components/TaskList';

export default function Index() {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <TaskList />
    </View>
  );
}
