function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  
  `
}

document.querySelector("#cards").innerHTML = 

    createCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "saudi_arabia")) +
   createCard(
     "24/11",
     "quinta",
     createGame("brazil", "16:00", "serbia") +
       createGame("portugal", "13:00", "ghana")) + 
   createCard(
     "28/11",
     "segunda",
     createGame("brazil", "13:00", "switzerland") +
       createGame("south_korea", "10:00", "ghana")) +
   createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon")) 

