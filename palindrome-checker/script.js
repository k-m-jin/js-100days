const btn = document.querySelector('.btn')
const result = document.querySelector('.result')
const input = document.querySelector('.input-text')

// 왜 함수 호출을 하지 않아도 되는가?
btn.addEventListener('click', palindrome)
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    palindrome()
  }
})
// madam
// noon
function palindrome() {
  // .value?? 신기방기
  const word = document.querySelector('.input-text').value
  let len = word.length

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase()
  //substring  indexEnd 가 생략된 경우, substring() 문자열의 끝까지 모든 문자를 추출합니다.
  // 중간 다음 숫자
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase()

  // let flip = end.split("").reverse().join("");

  let flip = [...end].reverse().join('')
  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`
  }
  // alert(flip);
}
