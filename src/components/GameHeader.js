import React, { Component } from 'react';
import '../App.css';

class GameHeader extends Component {







    constructor(props) {
        super(props);
        this.state = {

            schedule: [

                {
                    title: 'Wellington vs Paris',
                    date: 'Wednesday 7pm',
                    dateStamp: '2017-07-10',
                    location: 'North York Spot',
                    locationURL: 'example'
                },
                {
                    title: 'Wellington vs Barca',
                    date: 'Thursday 7pm',
                    dateStamp: '2017-07-11',
                    location: 'North York Spot',
                    locationURL: 'example'
                },
                {
                    title: 'Wellington vs Arsenal',
                    date: 'Wednesday 7pm',
                    dateStamp: '2017-08-23',
                    location: 'North York Spot',
                    locationURL: 'example'
                },
                {
                    title: 'Wellington vs Chelsea',
                    date: 'Thursday 7pm',
                    dateStamp: '2017-08-24',
                    location: 'North York Spot',
                    locationURL: 'example'
                }

            ]
        };
    }

    nextTeam() {

        // check todays date and see when the next game is
        // is the next game greater than today, stop the loop


        var nextTeam;


        for (var i = 0; i < this.state.schedule.length; i++) {

            if (new Date() > new Date(this.state.schedule[i].dateStamp)) {


            } else {

                nextTeam = this.state.schedule[i].title;
                console.log(i)
                break;

            }
        }

        return nextTeam;

    }


    nextGameDate() {

        // check todays date and see when the next game is
        // is the next game greater than today, stop the loop


        var nextGame;


        for (var i = 0; i < this.state.schedule.length; i++) {

            if (new Date() > new Date(this.state.schedule[i].dateStamp)) {

                console.log('this game has passed ' + new Date(this.state.schedule[i].dateStamp).toISOString())



            } else {

                nextGame = new Date(this.state.schedule[i].dateStamp);
                break;

            }
        }

        return nextGame.toString();

    }


    render() {

        return (
            <div>
            <h1>{this.nextTeam()}</h1>
            <h2>{this.nextGameDate()}</h2>
    </div>
        )
    }
}

export default GameHeader;