// - Imports - // 
import React, {useState} from 'react'
import styled from 'styled-components'
import DisplayScreen from '../components/displayScreen.js'
// - Styled Components - // 
const DisplayContainer = styled.div`
    display: flex;
    margin-bottom: 10px; 

    border: 1px solid orange
`;
// - Component to Export - // 
function Display(params) {
    // console.log('DISPLAY params', params)
    // console.log('-*- Strikes -*-',params.strikes)
    // console.log('-*- Balls -*-',params.balls)
    // const [strikes, setStrikes] = useState(0)
    // const [balls, setBalls] = useState(0)
    // -*- //
    // -*- //
    return (
        <DisplayContainer>
            <DisplayScreen 
                displayType={'balls'}
                displayData={params.balls}
            />
            <DisplayScreen 
                displayType={'strikes'}
                displayData={params.strikes}
            />
        </DisplayContainer>
    )

}


// - Exports - // 
export default Display