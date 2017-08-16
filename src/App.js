import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import GameHeader from './components/GameHeader';


class App extends Component {


    constructor(props) {
        super(props);
        
        this.playerCount = this.playerCount.bind(this);

        this.state = {
            count: 0,

            roster: [
                'tom cruise',
                'mike myers',
                'leonard cohen',
                'tom cruise',
                'mike myers',
                'leonard cohen'
            ]
            
        };

    }

    playerCount(){

      this.setState({
        count: this.state.count + 1
      })

    }

    onOver(i) {
        console.log('fire' + i)
    }

    render() {
        return (
        <div className="App">
        <GameHeader/>
        players
        {this.state.count} / {this.state.roster.length}
        {this.state.roster.map(function(name,i){
          return (
            <Player key={i} index={i} onOverEvent={this.onOver} name={name} playerCount={this.playerCount}>
            </Player>
            )
        }.bind(this))}
      </div>
        )
    }
}

export default App;


// <div key={i} index={i}>
// <div className={this.state.modal ? 'modal modal-on' : 'modal'} onMouseOut={(e) => this.hideModal(e)}>This is the modal</div>
// <div className='roster-item' ref='myItem'>
//   <li onMouseOver={(e) => this.showModal(e)} >{item}</li>
// </div>
// </div>