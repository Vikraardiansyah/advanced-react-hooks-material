import React, {useContext, useEffect, useRef} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {StateContext} from './store/StateContextProvider';
import {start, stop, reset, tick} from './store/action';

const Stopwatch2 = () => {
  const {state, dispatch} = useContext(StateContext);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch(tick()), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [dispatch, state.isRunning]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.time}s</Text>
      <View style={styles.space} />
      <Button title="start" onPress={() => dispatch(start())} />
      <View style={styles.space} />
      <Button title="stop" onPress={() => dispatch(stop())} />
      <View style={styles.space} />
      <Button title="reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  text: {
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 18,
  },
  space: {
    height: 12,
  },
});

export default Stopwatch2;
