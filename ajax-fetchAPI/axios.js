const btn = document.getElementById('btn')
btn.addEventListener('click', getUsers)

async function getUsers() {
  const { data } = await axios.get('./users.json')
  console.log(data)
  rendering(data)
}

function rendering(users) {
  let output = ''
  users.forEach((user) => {
    output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
            `
  })

  document.getElementById('users').innerHTML = output
}
