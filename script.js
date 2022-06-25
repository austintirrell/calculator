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
let numberToggle = true
let firstNumber = true
let firstSet = true
let number_one = ''
let number_two = ''

clearBtn.addEventListener('click', () => {
  output.innerText = '0'
  number_one = 0
  number_two = 0
  firstNumber = true
  numberToggle = true
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

equalBtn.addEventListener('click', () => {
  doMath()
})

function display(x) {
  //if firstNumber is true erase the '0' display
  //change display to what is entered
  if (firstNumber) {
    output.innerText = x
    firstNumber = false
  } else {
    output.innerText += x
  }
  //change number on input depending on which one is toggled
  if (numberToggle) {
    number_one += x
  } else {
    number_two += x
  }
  if (!firstSet) {
    doMath()
  }
}

function operate(x) {
  //set mode to "mode"
  mode = x
  //switch number toggle to start editing opposite number
  if (numberToggle) {
    numberToggle = false
  } else {
    numberToggle = true
  }
  //clear display to 0 and reinstate firstNumber
  output.innerText = '0'
  firstNumber = true
}

function doMath() {
  let outcome = 0
  let num1 = parseInt(number_one)
  let num2 = parseInt(number_two)
  if (mode == 'divide') {
    outcome = num1 / num2
  } else if (mode == 'multiply') {
    outcome = num1 * num2
  } else if (mode == 'minus') {
    outcome = num1 - num2
  } else if (mode == 'add') {
    outcome = num1 + num2
  }
  number_one = outcome
  output.innerText = outcome
}