const form = document.getElementById('form'),
  username = document.getElementById('username'),
  email = document.getElementById('email'),
  password = document.getElementById('password'),
  password2 = document.getElementById('password2')

const passwords = document.querySelectorAll('.password')
const eyeIcon = document.querySelector('#eye')

//비번 아이콘
eyeIcon.addEventListener('click', () => {
  if (eyeIcon.classList.contains('fa-eye')) {
    password.setAttribute('type', 'text')
    password2.setAttribute('type', 'text')
    // passwords.setAttribute('type', 'text')
    eyeIcon.classList.replace('fa-eye', 'fa-eye-slash')
  } else {
    password.setAttribute('type', 'password')
    password2.setAttribute('type', 'password')
    // passwords.setAttribute('type', 'password')
    eyeIcon.classList.replace('fa-eye-slash', 'fa-eye')
  }
})

//   Form Event Listener
form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkRequired([username, email, password, password2])
  checkLength(username, 5, 16)
  checkLength(password, 8, 16)
  checkEmail(email)
  matchPassword(password, password2)
})

//   1. Check Required Fields
//  inputAll = username, email, password, password2
const checkRequired = (inputAll) => {
  inputAll.forEach((input) => {
    // trim() : 요소 주위의 공백제거
    if (input.value.trim() === '') {
      // showError시 input를 전가하고 두번째 매개변수 보여줄 메세지를 넣는다?
      showError(input, `${getFieldName(input)} is required`)
      // 오류를 처리하는 구간?
    } else {
      showSuccess(input)
      console.log(input.value)
    }
  })
}

// 5. Check Input Length userName 길이 설정
//   checkLength(username, 5 min, 16 max);
const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters.`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters.`)
  } else {
    showSuccess(input)
  }
}

// 7 .Validate Email 강의 31분 부터
function checkEmail(input) {
  const re =
    // 이메일 유효성 검사
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
}

// 6. Check Password
function matchPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  }
}

// 2. Show Error Message
// 함수와 함수에 오류메시지 표기
const showError = (input, message) => {
  const formControl = input.parentElement // parentElement?? 부모요소를 전가한다 ??

  formControl.className = 'form-control error'
  // 오류 클래스 추가
  const small = formControl.querySelector('small')
  // 작은 양식 컨트롤를 텍스트로 설정하여 메시지를 표시
  small.innerText = message
}

// 3. Show Success Message
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// 4. Get Field Name
function getFieldName(input) {
  // charAt(0) 은 첫번재 문자를 나타내며 toUpperCase()로 첫번째 문자만 대문자로 변경
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
