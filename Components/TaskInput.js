import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { styles } from '../styles/taskStyle';

const TaskInput = () => {
  const [input, setInput] = useState();
  const [todoList, setTodoList] = useState([]);
  const inputText = (e) => {
    setInput(e);
  };
  const handleInput = () => {
    setTodoList((currentState) => [
      ...todoList,
      { key: Math.random().toString(), value: input },
    ]);
    setInput('');
  };
  return (
    <View>
      <View
        style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}
      >
        <TextInput
          placeholder='input username'
          value={input}
          onChangeText={inputText}
          style={{ borderBottomColor: 'black', borderWidth: 1, height: 40, width: '50%' }}
        />
        <Button title='click' onPress={handleInput} />
      </View>
      <FlatList
        data={todoList}
        renderItem={(itemData) => (
          <View style={styles.todo}>
            <Text style={styles.textTask}>{itemData.item} </Text>
          </View>
        )}
      />
    </View>
  );
};

export default TaskInput;
