// - IMPORTS - //
import React, {useState, useEffect} from 'react';
import Dashboard from './views/dash.js'
import Display from './views/display.js'
import styled from 'styled-components'

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
  const [foul, handleFoul, setFoul] = useButton('foul', strikes)
  const [ball, handleBall, setBall] = useButton('ball', balls)
  // const [clearCount, handleClearCount, setClearCount] = useButton('clearCount', [balls,strikes])
  // -*- //

  useEffect(() => {
    console.log('useEffect Triggered')
    console.log(strikes)
    console.log(balls)

    console.log('handlerStrike',strike)
    console.log('handlerFoul',foul)
    console.log('handlerBall',ball)
    // console.log('handlerClearCount',clearCount)
    // -*- //
    setBalls(ball)
    setStrikes(strike)
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
          handleFoul,
          handleBall,
          // handleClearCount
        }}
      />
    </APP_CONTAINER>
  );
}

// - Exports - // 
export default App;
