const btn = document.querySelector('.btn')
const coupon = document.querySelector('.coupon')

// const copyText = (e) => {
// e.preventDefault()
// coupon.focus()
// coupon.select()
// coupon.setSelectionRange(0, 999999)
// //execCommand() 퇴출될 예정
// document.execCommand('copy')

// btn.textContent = 'Copied!!!'
// setTimeout(() => {
//   btn.textContent = 'Copy'
// }, 3000)
// }

// btn.addEventListener('click', copyText)

const copyText = (text) => {
  //then 두개의 콜백을 인수로 받음( 정상/ 예외)
  navigator.clipboard.writeText(text).then(
    () => {
      //alert('클립보드에 복사되었습니다!')
      btn.textContent = 'Copied!!!'
      setTimeout(() => {
        btn.textContent = 'Copy'
      }, 3000)
    },
    () => {
      alert('복사를 다시 시도해주세요!')
    }
  )
}

btn.addEventListener('click', (e) => {
  e.preventDefault() // 왜인지는 모르겠지만 새로고침이 자꾸 일어나는거 같아서 일단 넣으니까 잘 됨..!! 위에 코드랑 비교해보고 싶다아아!!
  console.log(coupon.value)

  copyText(coupon.value)
})
