// - Imports - // 
import React, {useState} from 'react'
import styled from 'styled-components'

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
    return (
        <DisplayContainer>
            DISP
        </DisplayContainer>
    )

}


// - Exports - // 
export default Display