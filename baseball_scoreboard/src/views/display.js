// - Imports - // 
import React, {useState} from 'react'
import styled from 'styled-components'
import DisplayScreen from '../components/displayScreen.js'
// - Styled Components - // 
const DisplayContainer = styled.div`
    display: flex;
    

    border: 1px solid orange
`;
// - Component to Export - // 
function Display() {
    const [strikes, setStrikes] = useState(0)
    const [balls, setBalls] = useState(0)
    // -*- //
    console.log('-*- Strikes -*-',strikes)
    console.log('-*- Balls -*-',balls)
    // -*- //
    return (
        <DisplayContainer>
            <DisplayScreen 
                displayType={'balls'}
                displayData={balls}
            />
            <DisplayScreen 
                displayType={'strikes'}
                displayData={strikes}
            />
        </DisplayContainer>
    )

}


// - Exports - // 
export default Display