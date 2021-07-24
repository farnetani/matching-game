// import './style.css'
import CardGame from './src/components/CardGame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)

// Não usar innerHTML (por segurança)
// $root.innerHTML = $htmlCardGame

// Método seguro
$root.insertAdjacentHTML('beforeend', $htmlCardGame)