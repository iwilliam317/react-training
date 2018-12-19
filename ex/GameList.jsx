import React, { Component } from 'react'

export default class GameList extends Component {
    constructor(props){
        super(props)
        this.games = props.games
    }

    render(){
        return(
            <div>
                <h1>Games List</h1>
                <ul>
                    { this.games.map(game => 
                        <li key={game.id}>{game.title}</li>
                    ) }
                </ul>
            </div>
        )
    }
}