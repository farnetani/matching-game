import './style.css'

import CardGame from './components/CardGame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)

// Não usar innerHTML (por segurança)
// $root.innerHTML = $htmlCardGame

$root.insertAdjacentHTML('beforeend', $htmlCardGame)