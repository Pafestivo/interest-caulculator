import { calculate } from "./calculator.js"
const deposit = document.getElementById('deposit')
const period = document.getElementById('period')
const resultDisplay = document.querySelector('p.result')
const submit = document.querySelector('button')

submit.addEventListener('click', () => {
  displayResult(calculate(deposit.value, period.value))
})

function displayResult(callback) {
  const result = callback
  resultDisplay.style.display = "block"
  resultDisplay.textContent = result
}