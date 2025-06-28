let send = document.querySelector('.send')
send.addEventListener('click',()=>{
    send.classList.add('disabled')
    send.textContent = 'загружаем данные......'
    addData()
})

async function addData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let result = await res.json()
    console.log(result);
    let cards = document.querySelector('.cards')
    cards.insertAdjacentHTML('beforeend',`
        ${getUsers(result)}
        `)


    // send.classList.remove('disabled')
    send.textContent = 'данные загружены'
}

function getUsers(params) {
    return params
        .map((el) => `
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">имя ${el.name}</h5>
    <p class="card-text">телефон <a href="tel:">${el.phone}</a></p>
    <p class="card-text">емаил <a href="mailto:">${el.email}</a></p>
    <p class="card-text">город ${el.address.city}</p>
    <p class="card-text">улица ${el.address.street}</p>
    <p>сайт <a href="https://${el.website}">${el.website}</a></p>
  </div>
</div>
    `).join('')
}



// function getUsers(params) {
//     return params
//         .map((el) => `
//         <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">${el.name}</h5>
    
//   </div>
// </div>
//     `).join('')
// }