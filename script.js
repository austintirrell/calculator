const numberButtons = document.querySelectorAll('[number-button]')
const operatorButtons = document.querySelectorAll('[operator-button]')
const equalBtn = document.getElementById('equal-button')
const clearBtn = document.getElementById('clear')
const output = document.getElementById('output')

let mode = ''
let number_one = ''
let number_two = ''
let setCounter = 0
let equalOn = false
let operatorOn = false
let decimalOn = false
let numberToggle = true
let firstNumber = true

numberButtons.forEach((button) => {
  button.addEventListener('click', () => display(button.textContent))
})
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => operate(button.textContent))
})
equalBtn.addEventListener('click', () => {
  doMath()
  equalOn = true
})
clearBtn.addEventListener('click', () => reset(''))
window.addEventListener('keydown', handleKeydown)

function display(x) {
  if (x == '.') {
    if (decimalOn) {
      return
    } else {
      decimalOn = true
    }
  }
  if (firstNumber) {
    if (x == '0') {
      return
    }
    output.innerText = x
    firstNumber = false
  } else {
    if (output.innerText.length >= 10) {
      return
    } else {
      output.innerText += x
    }
  }
  if (numberToggle) {
    if (number_one.length >= 10) {
      return
    } else {
      number_one += x
    }
  } else {
    if (number_two.length >= 10) {
      return
    } else {
      number_two += x
    }
  }
  operatorOn = false;
}

function operate(x) {
  if (operatorOn) {
    mode = x
    return
  }
  equalOn = false
  decimalOn = false
  if (setCounter > 0) {
    doMath()
  }
  mode = x
  setCounter++
  if (numberToggle) {
    numberToggle = false
  } else {
    numberToggle = true
  }
  firstNumber = true
  operatorOn = true
}

function doMath() {
  if (equalOn) {
    return
  }

  let outcome = 0
  let num1 = parseFloat(number_one)
  let num2 = parseFloat(number_two)

  if (mode == '/') {
    outcome = num1 / num2
  } else if (mode == 'X') {
    outcome = num1 * num2
  } else if (mode == '-') {
    outcome = num1 - num2
  } else if (mode == '+') {
    outcome = num1 + num2
  }
  reset(outcome)
}

function reset(x) {
  let number = String(x)
  if (number.length > 10) {
    number = number.slice(0, 9) + '...'
  }
  mode = ''
  if (x === '') {
    output.innerText = '0'
  } else {
    output.innerText = number
  }
  number_one = number
  number_two = ''
  firstNumber = true
  numberToggle = true
  setCounter = 0
  decimalOn = false
}

function handleKeydown(e) {
  if (e.key >= 0 && e.key <= 9 || e.key == '.') {
    display(e.key)
  }
  if (e.key === '=' || e.key === 'Enter') {
    doMath()
    equalOn = true
  }
  if (e.key === 'Escape') {
    reset('')
  }
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    operate(e.key)
  }
}