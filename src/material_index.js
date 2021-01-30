import React from 'react';
import { render } from 'react-dom'
import { Button } from '@material-ui/core';

function App() {
  return <Button color="primary">Hello World</Button>;
}

render(<App/>, document.getElementById('root'))