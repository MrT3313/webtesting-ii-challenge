// - Imports - // 
import React from 'react'
import styled from 'styled-components'

// - Styled Components - // 
const DashboardContainer = styled.div`
    display: flex;

    border: 1px solid blue
`;
// - Component to Export - // 
function Dashboard() {
    
    // -*- //
    return (
        <DashboardContainer>
            DASH
        </DashboardContainer>
    )
}


// - Exports - // 
export default Dashboard