let deck = [1,2,3,4,5,6,7,8,9,10]

const playerCard1 = document.getElementById("p1")
const playerCard2 = document.getElementById("p2")
const aiCard1 = document.getElementById("a1")
const aiCard2 = document.getElementById("a2")
const tableCard1 = document.getElementById("t1")
const tableCard2 = document.getElementById("t2")
const tableCard3 = document.getElementById("t3")
const tableCard4 = document.getElementById("t4")
const tableCard5 = document.getElementById("t5")

//Shuffling Deck
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
//shuffle(deck);
playerCard1.innerHTML = deck[0]
playerCard2.innerHTML = deck[1]
aiCard1.innerHTML = deck[2]
aiCard2.innerHTML = deck[3]
tableCard1.innerHTML = deck[4]
tableCard2.innerHTML = deck[5]
tableCard3.innerHTML = deck[6]
tableCard4.innerHTML = deck[7]
tableCard5.innerHTML = deck[8]