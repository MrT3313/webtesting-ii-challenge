// - Imports - // 
import React from 'react'
import styled from 'styled-components'

// - Styled Components - // 
const DisplayScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 35px;
    min-height: 35px;

    border: 1px dashed orange;
`;
// - Component to Export - // 
function DisplayScreen(params) {
    console.log('params', params)
    // -*- //
    return (
        <DisplayScreenContainer>
            {params.displayData}
        </DisplayScreenContainer>
    )
}
// - Exports - // 
export default DisplayScreen