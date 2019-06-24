import React, { Component } from 'react';
import styled from 'styled-components'




const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;


    .Top {
        display: flex;
        flex-direction: row
        justify-content: center;
    }
    .Bottom {
        display: flex;
        
    }
`;

const BALL = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
`;
const STRIKE = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;
const HIT = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
`;
const REFRESH = styled.div`
    display: flex;
    align-items: center;
    // margin: 0 10px;
    margin: 10px auto 0 auto;
`;

export default class Dashboard extends React.Component {
    render() {
        return (
            <DashboardContainer className="Dashboard">
                <div className='Top'>
                    <BALL className='ball'>
                        <button onClick={this.props.Ball_Button_Handler}>Ball</button>
                    </BALL>
                    <STRIKE className='strike'>
                        <button onClick={this.props.Strike_Button_Handler}>Strike</button>
                        <button onClick={this.props.Foul_Button_Handler}>Foul</button>
                    </STRIKE>
                    <HIT className='hit'>
                        <button onClick={this.props.Hit_Button_Handler}>Hit</button>
                    </HIT>
                </div>
                <div className='Bottom'>
                    <REFRESH className='refresh'>
                        <button onClick={this.props.Reset_Handler}>Reset</button>
                    </REFRESH>
                </div>
            </DashboardContainer>
        )
    }
}
