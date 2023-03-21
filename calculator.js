export function calculate(deposit, period) {
  let result = 0
  if(period == 6) {
    result = deposit * 0.025
  } else if(period == 12) {
    result = deposit * 0.04
  } else {
    result = deposit * 0.06 // rate of 1.5year isn't specified
  }

  return result
}




