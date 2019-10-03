// - IMPORTS - //
import React from 'react';
import Dashboard from './views/dash.js'
import Display from './views/display.js'
import styled from 'styled-components'

// - Styled Components - // 
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;

  border: 1px solid black
`;

// - Component to Export - // 
function App() {
  return (
    <APP_CONTAINER className="App">
      <h2>ENTER HERE</h2>

      <Dashboard />
      <Display />

    </APP_CONTAINER>
  );
}

// - Exports - // 
export default App;
