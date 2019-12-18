/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activeScore;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random()*6)+1;


function updateToNull(){

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}
updateToNull();
document.querySelector('.btn-roll').addEventListener('click',function(){//anonymous function

    //0.Console the log
    
    console.log('roundscore: '+roundScore);
    console.log('activePlayer: '+ activePlayer);

    //1.Random number
    var dice = Math.floor(Math.random()*6)+1;

    //2. Display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';

    //3. update the round score if th rolled number was not a 1
    if(dice !== 1 ){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        console.log('dice not 1: '+ dice)
    } else{
        console.log('dice is 1');
        nextPlayer();
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none'
    }

}) // btn is a callback function 

document.querySelector('.btn-hold').addEventListener('click', function(){

    //Add current score to global score
    scores[activePlayer] += roundScore;


    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    

    //Check if player won the game
    if(scores[activePlayer] >= 15){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    }else{
        nextPlayer();
    }
})

function nextPlayer(){
    //Next Player
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}