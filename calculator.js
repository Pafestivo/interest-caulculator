const deposit = document.getElementById('deposit')
const period = document.getElementById('period')
const displayResult = document.querySelector('p.result')
const submit = document.querySelector('button')

submit.addEventListener('click', calculate)

function calculate() {
  let result = 0
  if(period.value == 6) {
    result = deposit.value * 0.025
  } else if(period.value == 12) {
    result = deposit.value * 0.04
  } else {
    result = deposit.value * 0.06 // rate of 1.5year isn't specified
  }
  displayResult.style.display = "block"
  displayResult.textContent = result
}