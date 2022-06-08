const count = document.querySelector('.count')
const inputEl = document.querySelector('input')

inputEl.addEventListener('keyup', () => {
  count.innerHTML = inputEl.value.length
})
