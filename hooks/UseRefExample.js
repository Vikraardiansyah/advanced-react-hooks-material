import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function UseRefExample() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const textInputRef = useRef();

  const increment = () => {
    //   countRef.current++;
    //   console.log(`Clicked ${countRef.current} times`);
    setCount(count + 1);
    console.log(`Clicked ${count} times`);
  };

  const focus = () => {
    // textInputRef.current.focus();
    textInputRef.current.focusAndDelete();
  };

  const blur = () => {
    textInputRef.current.blur();
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{countRef.current}</Text> */}
      <Text style={styles.text}>{count}</Text>
      <Button title="Increment" onPress={increment} />
      <View style={styles.space} />
      {/* <TextInput
        value={value}
        onChange={setValue}
        ref={textInputRef}
        style={styles.textInput}
      /> */}
      <TextInputComponent
        value={value}
        setValue={setValue}
        ref={textInputRef}
        style={styles.textInput}
      />
      <View style={styles.space} />
      <Button title="focus" onPress={focus} />
      <View style={styles.space} />
      <Button title="blur" onPress={blur} />
    </View>
  );
}

const TextInputComponent = forwardRef(({value, setValue, ...props}, ref) => {
  const textInputComponentRef = useRef();
  useImperativeHandle(ref, () => ({
    focusAndDelete: () => {
      textInputComponentRef.current.focus();
      setValue('');
    },
    blur: () => {
      textInputComponentRef.current.blur();
    },
  }));

  return (
    <TextInput
      {...props}
      ref={textInputComponentRef}
      style={styles.textInput}
      value={value}
      onChangeText={setValue}
    />
  );
});

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
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default UseRefExample;
