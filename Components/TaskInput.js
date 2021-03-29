import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const handleInputBtn = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Todo task'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='CANCEL' onPress={props.onCancel.bind()} color='orange' />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={handleInputBtn} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'darkgray',
    borderWidth: 2,
    padding: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: '62%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  button: {
    width: 80,
  },
});

export default GoalInput;
