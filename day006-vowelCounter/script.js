const word = document.querySelector('.input-text')
// const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const container = document.querySelector('.container')

word.focus()
word.addEventListener('fosus', clearInput)
// container.addEventListener('submit', countVowel)

container.addEventListener('submit', (e) => {
  // 프리벤트디폴트도 호출 !!
  e.preventDefault()
  countVowel()
})

function countVowel() {
  let vowelCount = 0
  let wordVal = word.value.toLowerCase()

  for (let i = 0; i < wordVal.length; i += 1) {
    let letter = wordVal[i]
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount += 1
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}

function clearInput() {
  word.value = ''
  result.innerHTML = ''
}
