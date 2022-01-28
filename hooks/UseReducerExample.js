import React, {useReducer, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

// const countReduder = (state, action) => {
//   const {type, step} = action;
//   switch (type) {
//     case 'increment': {
//       return {
//         ...state,
//         count: state.count + step,
//       };
//     }
//     case 'decrement': {
//       return {
//         ...state,
//         count: state.count - step,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

const UseReducerExample = () => {
  const [count, setCount] = useState(0);
  // const [state, dispatch] = useReducer(countReduder, {
  //   count: 1,
  // });
  // const {count} = state;

  const increament = () => {
    setCount(prevCount => prevCount + 1);
    // dispatch({type: 'increment', step: 1});
  };

  const decreament = () => {
    setCount(prevCount => prevCount - 1);
    // dispatch({type: 'decrement', step: 1});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button style={styles.button} title="Increment" onPress={increament} />
      <View style={styles.space} />
      <Button title="Decrement" onPress={decreament} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 18,
  },
  space: {
    height: 12,
  },
});

export default UseReducerExample;
