// - Imports - // 
import React from 'react'
import styled from 'styled-components'
import Button from '../components/button.js'

// - Styled Components - // 
const DashboardContainer = styled.div`
    display: flex;

    border: 1px solid blue
`;
// - Component to Export - // 
function Dashboard(params) {
    console.log(' DASHBAORD params', params)
    console.log(' buttonFunctions', params.buttonFunctions)
    console.log('-*- Strikes -*-',params.strikes)
    console.log('-*- Balls -*-',params.balls)
    // -*- //
    // -*- //
    return (
        <DashboardContainer>
            <Button 
                pitchCount={params} 
                buttonText={'Strike!'}
                buttonType={'strike'}
                updateFunction={params.buttonFunctions.handleStrike}
            />
            <Button 
                pitchCount={params} 
                buttonText={'Ball'}
                buttonType={'ball'}     
                updateFunction={params.buttonFunctions.handleBall}
                />
            {/* <Button 
                pitchCount={params} 
                buttonType={'foul'}     
                buttonText={'Foul'}
                updateFunction={params.buttonFunctions.handleStrike}
                />
            <Button 
                pitchCount={params} 
                buttonType={'hit'}     
                buttonText={'HIT!'}
                updateFunction={params.buttonFunctions.handleClearCount}
                
            /> */}
        </DashboardContainer>
    )
}


// - Exports - // 
export default Dashboard