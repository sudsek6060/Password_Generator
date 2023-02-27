const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
// 
clipboardEl.addEventListener('click', () => {
    // clipboardEl.select()
    // document.execCommand('copy');
})

generateEl.addEventListener('click', () => {
    const valu = generatePassword();
    resultEl.textContent = valu;
})

function generatePassword(lower, upper, number, symbol, length) {
   length  = Math.floor((lengthEl.value)/4);
   let password = ''
    for (let i = 0; i < length; i++) {
        password += getRandomUpper() + getRandomLower() + getRandomSymbol() + getRandomNumber()
    }
    return password;
   
}


function getRandomLower() {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let lowerChars = '';
    
     lowerChars += lower.charAt(Math.floor(Math.random() * lower.length))        
    
    return lowerChars
    
}

function getRandomUpper() {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let upperChars = '';
    
     upperChars += upper[Math.floor(Math.random() * upper.length)]        
    
    return upperChars;
    
}


function getRandomNumber() {
    const num = '1234567890';
    let nums = '';
    
     nums += num[Math.floor(Math.random() * num.length)]        
    
    return nums;
    
}


function getRandomSymbol() {
    const sym = '!@#$&^%'
    let syms = '';
    return syms = sym[Math.floor(Math.random() * sym.length)]
   
}

