import React from 'react'
import ReactDOM from 'react-dom'

import GameList from './GameList'

const games = [
    { id: 1, title: 'Red Dead Redemption 2'},
    { id: 2, title: 'Tomb Raider'},
    { id: 3, title: 'Spiderman'},
    { id: 4, title: 'Mafia 3'}
]
ReactDOM.render(
    <GameList games={games} />, document.getElementById('app'))