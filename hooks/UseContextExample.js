import React, {useState, createContext, useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

// const CountContext = createContext();

// const CountContextProvider = props => {
//   const [count, setCount] = useState(0);
//   const value = {
//     count,
//     setCount,
//   };

//   return <CountContext.Provider value={value} {...props} />;
// };

const UseContextExample = () => {
  const [count, setCount] = useState(0);
  return (
    // <CountContextProvider>
    <>
      <Component1 count={count} />
      <Component2 setCount={setCount} />
    </>
    // </CountContextProvider>
  );
};

const Component1 = ({count}) => {
  // const {count} = useContext(CountContext);
  return <Text style={styles.text}>{count}</Text>;
};

const Component2 = ({setCount}) => {
  // const {setCount} = useContext(CountContext);

  const increament = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decreament = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Increment" onPress={increament} />
      <View style={styles.space} />
      <Button title="Decrement" onPress={decreament} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
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

export default UseContextExample;
