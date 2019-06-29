import React from 'react';
import styled from 'styled-components'

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  width: 35%;
  padding-bottom: 10px;
  margin: 0 auto 10px auto;

  border-bottom: 1px dashed  black

  .Title {
    margin-bottom: 10px;
  }
`;

export default class Display extends React.Component {
  state = {
    // need state or just pass props? 
    // balls: 0,
    // strikes: 0,
  }

  render() {
    return (
      <DisplayContainer className='Display'>

        {this.props.LastAction && 
          <div className='Title'>
            Last Event: {this.props.LastAction}
          </div>
        }
        <div className='Title'>
          Current Count:
        </div>
        <div className='BALLS'>
          Balls: {this.props.Balls}
        </div>
        <div className='STRIKES'>
          Strikes: {this.props.Strikes}
        </div>
          
      </DisplayContainer>
    )
  }
}