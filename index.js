/* Scrivi una funzione checkWinners che accetta un parametro di tipo array e restituisce una promise.
 Se il parametro è un array la promise viene risolta dopo 1 secondo restituendo un array che contiene i giocatori che hanno vinto,
 un giocatore vince se il suo punteggio totale è superiore a 100.
 Se il parametro non è un array la promise viene rigettata con il messaggio 'il parametro non è un array'.
 */

const players = [
  {
    name: "Player1",
    scores: [50, 30, 60],
  },
  {
    name: "Player2",
    scores: [15, 10, 50],
  },
  {
    name: "Player3",
    scores: [20, 30, 40],
  },
  {
    name: "Player4",
    scores: [100, 30, 60],
  },
  {
    name: "Player5",
    scores: [90, 80, 10],
  },
];

function checkWinners(players) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(players)) {
      setTimeout(() => {
        let winnersPlayer = [];

        for (const player of players) {
          let sum = player.scores.reduce((a, num) => a + num, 0);

          if (sum > 100) {
            winnersPlayer.push(player);
          }
        }

        resolve(winnersPlayer);
      }, 1000);

      
    } else {
      reject(new Error("il parametro non è un array"));
    }
  });
}

// checkWinners(players)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// async function startProm() {
//   try {
//     const checkPlayers = await checkWinners(players);
//     console.log(checkPlayers);
//   } catch (error) {
//     console.error(error);
//   }
// }
// startProm();


//Array oggetto  nome gioc + somma dei suoi punteggi
function printObj(players) {
    let arr = []

    players.forEach(player => {
        let playersName = player.name
        let sum = player.scores.reduce((a, num) => a + num, 0)

        let result = {name: playersName, sum: sum}
        arr.push(result)
    });
 
console.log(arr);

}

printObj(players)