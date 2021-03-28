import React, { useState } from 'react';
import { View } from 'react-native';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import { styles } from './styles/taskStyle';
export default function App() {
  return (
    <View style={styles.screen}>
      <TaskInput />
      <TaskList />
    </View>
  );
}
