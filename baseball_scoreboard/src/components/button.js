// - Imports - // 
import React from 'react'
import styled from 'styled-components'

// - Styled Components - // 
const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    justify-items: center;

    min-width: 50px;
    margin: 5px;

    border: 1px dashed red;
`;
// - Component to Export - // 
function Button(params) {
    // console.log('INSIDE BUTTON')
    console.log('params', params)
    // console.log('params.updateFunction', params.updateFunction)
    // -*- //

    const handleClick = e => {
        console.log('BUTTON CLICKED')
        e.preventDefault()
        params.updateFunction(params.buttonType)
    }
    
    return (
        <StyledButton
            onClick={handleClick}
        >
            <h4>{params.buttonText}</h4>
        </StyledButton>
    )
}
// - Exports - // 
export default Button