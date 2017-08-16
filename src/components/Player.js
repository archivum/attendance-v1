import React, { Component } from 'react';
import '../App.css';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            going: false,
            notgoing: false
        };
    }

    newOver() {
        this.props.onOverEvent(this.props.index)
        this.setState({
            modal: true
        })
    }

    newOff() {
        this.props.onOverEvent(this.props.index)
        this.setState({
            modal: false
        })
    }

    going() {

        this.props.playerCount(this.state.count); 

        this.setState({
            going: true,
            notgoing: false,
            modal: false
        })
    }

    notgoing() {

        this.setState({
            going: false,
            notgoing: true,
            modal: false
        })

    }



    render() {

    return (
    <div className="App">

      <div className='roster-item'>

        <div className={this.state.modal ? 'modal modal-on' : 'modal'} onMouseLeave={this.newOff.bind(this)}>

          <button onClick={this.going.bind(this)}>I'm Going</button>
          <button onClick={this.notgoing.bind(this)}>I'm Not</button>

        </div>

          <div >
          {this.props.index+1+" "}
          {this.props.name}
          <div className={`icon ${this.state.going ? 'icon-yes' : '' || this.state.notgoing ? 'icon-no' : ''}`} onMouseOver={this.newOver.bind(this)}></div>
          </div>
      </div>
    </div>
        )
    }
}

export default Player;


// <div>{this.state.going ? goingStruct : null}</div>
// <div>{this.state.notgoing ? notgoingStruct  : null}</div>