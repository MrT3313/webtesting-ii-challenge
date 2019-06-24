// IMPORTS
  import React from 'react';

// COMPONENTS
  import Dashboard from './Dashboard'
  import Display from './Display';

export default class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    lastAction: ''
  }

  render() {
    return (
      <div className="App">
        <Display
          Balls={this.state.balls}
          Strikes={this.state.strikes}
          LastAction={this.state.lastAction}
        />
        <Dashboard 
          Ball_Button_Handler={this.Ball_Button_Handler}
          Strike_Button_Handler={this.Strike_Button_Handler}
          Foul_Button_Handler={this.Foul_Button_Handler}
          Hit_Button_Handler={this.Hit_Button_Handler}
          Reset_Handler={this.Reset_Handler}
        />
      </div>
    );
  }

  // METHODS
  Ball_Button_Handler = e => {
    e.preventDefault();
    console.log('BALL BUTTON HANDLER')

    this.state.balls < 3 ? (
      this.setState(prevState => ({
        ...prevState,
        balls: prevState.balls + 1,
        lastAction: 'BALL'
      }))
    ) : (
      this.setState({
        balls: 0,
        strikes: 0,
        lastAction: 'WALK'
      })
    )
      
  }

  Strike_Button_Handler = e => {
      e.preventDefault();
      console.log('STRIKE BUTTON HANDLER')

      this.state.strikes < 2 ? (
        this.setState(prevState => ({
          ...prevState,
          strikes: prevState.strikes + 1,
          lastAction: 'STRIKE'
        }))
      ) : (
        this.setState({
          balls: 0,
          strikes: 0,
          lastAction: 'STRIKEOUT'
        })
      ) 
      
  }
  Foul_Button_Handler = e => {
      e.preventDefault();
      console.log('FOUL BUTTON HANDLER')

      this.state.strikes < 2 ? (
        this.setState(prevState => ({
          ...prevState,
          strikes: prevState.strikes + 1,
          lastAction: 'FOUL'
        }))
      ) : (
        this.setState({
          lastAction: 'FOUL TIP - Continue At Bat'
        })
      )
  }

  Hit_Button_Handler = e => {
      e.preventDefault();
      console.log('HIT BUTTON HANDLER')
      
      this.setState({
        balls: 0,
        strikes: 0,
        lastAction: 'HIT!!!'
      })
  }
  Reset_Handler = e => {
      e.preventDefault();
      console.log('Reset')

      this.setState({
        balls: 0,
        strikes: 0,
        lastAction: 'Batter Reset'
      })
      
  }
}


