// - IMPORTS - //
import React, {useState, useEffect} from 'react';
import Dashboard from './views/dash.js'
import Display from './views/display.js'
import styled from 'styled-components'
import buttonHelpers from './helpers/buttonHelpers.js'

// - HOOKS - //
import useButton from './hooks/useButton.js'

// - Styled Components - // 
const APP_CONTAINER = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;

  border: 1px solid black
`;

// - Component to Export - // 
function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)
  // -*- //

  const [strike, handleStrike, setStrike] = useButton('strike', strikes)
  const [ball, handleBall, setBall] = useButton('ball', balls)
  const [clearCount, handleClearCount, setClearCount] = useButton('clearCount', [balls,strikes])
  
  // -*- //
  useEffect(() => {
    console.log('useEffect Triggered')
    setStrikes(strike)
    setBalls(ball)
  })
  // -*- //
  return (
    <APP_CONTAINER className="App">
      <h2>CURRENT AT BAT</h2>

      <Display 
      balls={balls} strikes={strikes}
      />
      <Dashboard 
      balls={balls} strikes={strikes}
      setStrikes={setStrikes} setBalls={setBalls}
      
      buttonFunctions={{
        handleStrike,
        handleBall,
        handleClearCount
      }}
      // buttonHelpers={buttonHelpers}
      />

    </APP_CONTAINER>
  );
}

// - Exports - // 
export default App;
