// outra forma
// const CardGame = () => {
// }
// por conta do vitejs, podemos importar um css (não é padrao do javascript importar um css dentro do js)
import './style.css'

function CardGame() {
    return `
        <article class="card-game">
            <img src="images/alura-pixel.png" alt="alura-pixel" />
        </article>
    `
}

export default CardGame