import React, {createContext, useReducer} from 'react';
import initialState from './initialState';
import reducer from './reducer';

export const StateContext = createContext();

const StateContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return <StateContext.Provider value={value} {...props} />;
};

export default StateContextProvider;
