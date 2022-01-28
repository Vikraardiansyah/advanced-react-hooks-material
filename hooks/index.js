import React from 'react';

import UseRefExample from './UseRefExample';
import UseContextExample from './UseContextExample';
import UseReducerExample from './UseReducerExample';

const index = props => {
  return <UseRefExample {...props} />;
  // return <UseContextExample {...props} />;
  // return <UseReducerExample {...props} />;
};

export default index;
