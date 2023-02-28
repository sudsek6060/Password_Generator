const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

console.log(resultEl);

// const text = resultEl.innerHTML;

// const copyContent = async () => {
//     try {
//       await navigator.clipboard.writeText(text);
     
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
// }

// // 
clipboardEl.addEventListener('click', async function(){
    const text = resultEl.textContent;
    const textCopy =  await navigator.clipboard.writeText(text);
    textCopy !== 'empty' ? alert('Copied Sucessfuly'): alert('failed to copy')
})

generateEl.addEventListener('click', () => {
    const valu = generatePassword();
    resultEl.textContent = valu;
})

function generatePassword() {
    length = Math.floor((lengthEl.value) / 4);
    let password = ''
    for (let i = 0; i < length; i++) {
        password +=  getRandomUpper() +
            getRandomLower() +
            getRandomSymbol() +
            getRandomNumber()
    }
    return password;

}


function getRandomLower() {
    if(lowercaseEl.checked){
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let lowerChars = '';

    lowerChars += lower.charAt(Math.floor(Math.random() * lower.length))

    return lowerChars
    }else{
        return getRandomUpper()
    }
}

function getRandomUpper() {
    if(uppercaseEl.checked){
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let upperChars = '';

    upperChars += upper[Math.floor(Math.random() * upper.length)]

    return upperChars;

    }else{
        return getRandomNumber()
    }
}


function getRandomNumber() {
    if(numbersEl.checked){
        const num = '1234567890';
    let nums = '';

    nums += num[Math.floor(Math.random() * num.length)]

    return nums;
    }else{
        return getRandomSymbol()
    }

}


function getRandomSymbol() {
    if(symbolsEl.checked){
        const sym = '!@#$&^%'
    let syms = '';
    return syms = sym[Math.floor(Math.random() * sym.length)]
    }else{
        return getRandomLower()
    }

}

