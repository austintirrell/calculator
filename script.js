const clearBtn = document.getElementById('clear')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const equalBtn = document.getElementById('equal')
const zeroBtn = document.getElementById('zero')
const oneBtn = document.getElementById('one')
const twoBtn = document.getElementById('two')
const threeBtn = document.getElementById('three')
const fourBtn = document.getElementById('four')
const fiveBtn = document.getElementById('five')
const sixBtn = document.getElementById('six')
const sevenBtn = document.getElementById('seven')
const eightBtn = document.getElementById('eight')
const nineBtn = document.getElementById('nine')
const decimalBtn = document.getElementById('decimal')
const output = document.getElementById('output')

let mode = ''
let setCounter = 0
let decimalOn = false
let numberToggle = true
let firstNumber = true
let number_one = ''
let number_two = ''

clearBtn.addEventListener('click', () => {
  reset('')
})

zeroBtn.addEventListener('click', () => {
  display('0')
})
oneBtn.addEventListener('click', () => {
  display('1')
})
twoBtn.addEventListener('click', () => {
  display('2')
})
threeBtn.addEventListener('click', () => {
  display('3')
})
fourBtn.addEventListener('click', () => {
  display('4')
})
fiveBtn.addEventListener('click', () => {
  display('5')
})
sixBtn.addEventListener('click', () => {
  display('6')
})
sevenBtn.addEventListener('click', () => {
  display('7')
})
eightBtn.addEventListener('click', () => {
  display('8')
})
nineBtn.addEventListener('click', () => {
  display('9')
})
decimalBtn.addEventListener('click', () => {
  if (decimalOn) {
    return
  } else {
    display('.')
    decimalOn = true
  }
})

divideBtn.addEventListener('click', () => {
  operate('divide')
})
multiplyBtn.addEventListener('click', () => {
  operate('multiply')
})
minusBtn.addEventListener('click', () => {
  operate('minus')
})
plusBtn.addEventListener('click', () => {
  operate('add')
})

let equalOn = false
equalBtn.addEventListener('click', () => {
  doMath()
  equalOn = true
})

function display(x) {
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
}

function operate(x) {
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
}

function doMath() {
  if (equalOn) {
    return
  }
  let outcome = 0
  let num1 = parseFloat(number_one)
  let num2 = parseFloat(number_two)
  if (mode == 'divide') {
    outcome = num1 / num2
  } else if (mode == 'multiply') {
    outcome = num1 * num2
  } else if (mode == 'minus') {
    outcome = num1 - num2
  } else if (mode == 'add') {
    outcome = num1 + num2
  }
  reset(outcome)
}

function reset(x) {
  let number = String(x)
  if (number.length > 10) {
    number = number.slice(0,9) + '...'
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
}