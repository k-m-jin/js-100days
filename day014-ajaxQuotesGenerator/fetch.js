const btn = document.querySelector('.get-quotes')
btn.addEventListener('click', getQuotes)
const number = document.getElementById('number')
const URL = 'https://type.fit/api/quotes'

function getQuotes(e) {
  e.preventDefault()

  if (number.value.length == 0) {
    return alert('Plese enter a number')
  } else {
    fetch(URL)
      .then(function (response) {
        // console.log(response)
        // console.log(response.length)
        return response.json()
      })
      .then(function (data) {
        // console.log(JSON.stringify(data))
        // data = shuffle(data)
        let output = ''
        // console.log('데이터', data)

        for (let i = 0; i < number.value; i++) {
          const randomI = Math.floor(Math.random() * data.length)

          output += `
                    <li>Quote: ${data[randomI].text}</li>
                    <li>Author: ${data[randomI].author}</li>
                   <hr>
               `
        }
        document.querySelector('.quotes').innerHTML = output
      })
  }
}

//  FUNCTION TO SHUFFLE QUOTES

// 필요없어짐

function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex

  // While elements exist in the array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI)
    // DECREASE CI BY 1
    CI--
    // SWAP THE LAST ELEMENT WITH CI
    tempValue = quotes[CI]
    quotes[CI] = quotes[randomIndex]
    quotes[randomIndex] = tempValue
  }
  return quotes
}
