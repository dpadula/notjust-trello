import { View } from 'react-native';
import TaskListItem from '../components/TaskListItem';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TaskListItem />
    </View>
  );
}
