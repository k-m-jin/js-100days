const links = document.querySelectorAll('.nav-list li a')

for (const link of links) {
  link.addEventListener('click', (e) => smoothScroll(e, link))
}

function smoothScroll(e, link) {
  e.preventDefault()
  const href = link.getAttribute('href')

  console.log(href)
  // 연결되는 섹션
  console.log(document.querySelector(href))
  // a 링크 자체
  console.log(link)

  document.querySelector(href).scrollIntoView({
    // link.scrollIntoView({
    behavior: 'smooth',
  })
}
