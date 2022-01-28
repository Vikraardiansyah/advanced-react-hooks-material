import {START, STOP, RESET, TICK} from './actionTypes';

export const start = () => {
  return {
    type: START,
  };
};

export const stop = () => {
  return {
    type: STOP,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const tick = () => {
  return {
    type: TICK,
  };
};
