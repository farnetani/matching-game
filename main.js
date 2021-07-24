import './style.css'

import CardGame from './components/CardGame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)

$root.innerHTML = $htmlCardGame