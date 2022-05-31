import { data } from './data.js';

function addAtribute(element, attribute, value) {
  
  // let elementCopy =  {  ...element}
  element[attribute] = value
  return element
}

export function changeName() {
  let container = document.querySelector('.container');

  data.sort((a, b) => b.points - a.points);

  data.forEach( (teamData) => {

    let logo = document.createElement("img");
    logo.src = teamData.logo;
    addAtribute(logo, "src", teamData.logo)

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("imgContainer");
    logoContainer.appendChild(logo)

    let name = document.createElement("p");
    name.innerText = teamData.name; 

    let rank = document.createElement("p");
    rank.innerText = `#${teamData.rank}`;
    rank.classList.add("rank");
    
    let points = document.createElement("p");
    points.innerText = `Points: ${teamData.points}`;
    
    let cardFace1 = document.createElement("div");
    // cardFace1.classList.add("card");
    cardFace1.classList.add("cardFront");

    cardFace1.appendChild(rank);
    cardFace1.appendChild(logoContainer);
    cardFace1.appendChild(name);
    cardFace1.appendChild(points);
  
    let rosterTable = document.createElement("table")
    let tableHead = document.createElement("thead")
    let tableHeadRow = document.createElement("tr")
    let tableBody = document.createElement("tbody")
    
    for (var item of ["Player","Rating"]) {
      var th = document.createElement("th")
      var p = document.createElement("p")
      p.innerText = item
      th.appendChild(p)
      tableHeadRow.appendChild(th)
    }

    
    tableHead.appendChild(tableHeadRow)
    rosterTable.appendChild(tableHead)
    rosterTable.classList.add(".tablee")

    teamData.roster.forEach( roster => {
      let player = document.createElement("tr")
      
      let tdName = document.createElement("td")
      let name = document.createElement("p")
      name.innerText = roster.player
      tdName.appendChild(name)
      player.appendChild(tdName)

      let tdRating = document.createElement("td")
      let rating = document.createElement("p")
      rating.innerText = roster.stats.rating
      tdRating.appendChild(rating)
      player.appendChild(tdRating)

      tableBody.appendChild(player)
      rosterTable.appendChild(tableBody)
    })

    let cardFace2 = document.createElement("div")
    cardFace2.appendChild(rosterTable)
    // cardFace2.classList.add("card");
    cardFace2.classList.add("cardBack");

    let card = document.createElement("div")
    card.classList.add("card")

    card.appendChild(cardFace1);
    card.appendChild(cardFace2);

    container.appendChild(card)
  }); 
}

changeName()
