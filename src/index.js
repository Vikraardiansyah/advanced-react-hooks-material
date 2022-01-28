import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StateContextProvider from './store/StateContextProvider';
import HooksComponent from '../hooks';
import OtherScreen from './OtherScreen';
import StopWatch from './StopWatch';
import StopWatch2 from './StopWatch2';

const Stack = createNativeStackNavigator();

function index() {
  return (
    <StateContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HooksComponent" component={HooksComponent} />
          <Stack.Screen name="OtherScreen" component={OtherScreen} />

          {/* <Stack.Screen name="StopWatch" component={StopWatch} />
          <Stack.Screen name="StopWatch2" component={StopWatch2} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </StateContextProvider>
  );
}

export default index;
