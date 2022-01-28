import {START, STOP, RESET, TICK} from './actionTypes';

const reducer = (state, action) => {
  const {type} = action;
  switch (type) {
    case START:
      return {...state, isRunning: true};
    case STOP:
      return {...state, isRunning: false};
    case RESET:
      return {isRunning: false, time: 0};
    case TICK:
      return {...state, time: state.time + 1};
    default:
      return state;
  }
};

export default reducer;
