let player = prompt("Welcome to Kayla's Mini Golf Game! What is your name?");

let num_games = prompt(`Hi, ${player}! Would you like to play 3 or 6 games?`);

let par = num_games * 3; 
let player_putts = 0;

for (let i = 0; i < num_games; i++) {
    let hole = Number (prompt(`How many putts for Hole ${i + 1}? (Par is 3)`))
    player_putts += hole
}

score = par - player_putts; 

if (score === 0) {
    console.log(`Good game, ${player}. Your total par was: 0`)
} 
else if (score < 0) {
    console.log(`Nice try ${player}... Your total par was: +${score * -1}`)
}
else if (score > 0) {
    console.log(`Great job, ${player}! Your total par was: -${score}`)
}