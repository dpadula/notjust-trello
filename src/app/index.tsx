import { Stack } from 'expo-router';
import TaskBoard from '../components/TaskBoard';

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Trello Board' }} />
      <TaskBoard />
    </>
  );
}
