import { data } from './data.js';

export function changeName() {
  let container = document.querySelector('.container');

  data.sort((a, b) => b.points - a.points);

  data.map( (teamData) => {

    let logo = document.createElement("img");
    logo.src = teamData.logo;

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
    
    let card = document.createElement("div");
    card.classList.add("card");

    card.appendChild(rank);
    card.appendChild(logoContainer);
    card.appendChild(name);
    card.appendChild(points);
    container.appendChild(card);
  }); 
}

changeName()
