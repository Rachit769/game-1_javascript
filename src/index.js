var scores, roundscores, activeplayer;
var gameplaying
var lastdice
newGame()


document.querySelector('.btn-roll').addEventListener('click',function(){
//on click dice should roll
if(gameplaying){
var dice=Math.floor(Math.random()*6)+1;
var diceDom=document.querySelector('.dice')
diceDom.style.display='block'
diceDom.src='src'+'/die'+dice+'.png'

if(dice!==1){
roundscores=roundscores+dice
document.querySelector('#current-'+activeplayer).textContent=roundscores
}
else{
  nextPlayer()
}


}
})
var winningscore
var input

document.querySelector('.btn-hold').addEventListener('click',function(){

if(gameplaying){
 input=document.querySelector('.input-value').value
if(input){
  winningscore=input
}
else{
winningscore=100
}

scores[activeplayer]=scores[activeplayer]+roundscores
roundscores=0
document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer]

if(scores[activeplayer]>=winningscore){
document.querySelector('#name-'+activeplayer).textContent='winner!'
document.querySelector('.dice').style.display='none'
document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner')
document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active')
gameplaying=false
}
else{
  nextPlayer()
}
}
})
document.querySelector('.btn-new').addEventListener('click',newGame)

function nextPlayer(){
  activeplayer==0 ? activeplayer=1 :activeplayer=0
  roundscores=0
  document.querySelector('#current-0').textContent=0
  document.querySelector('#current-1').textContent=0
document.querySelector('.player-0-panel').classList.toggle('active')
document.querySelector('.player-1-panel').classList.toggle('active')
document.querySelector('.dice').style.display='none'
}
function newGame(){
  scores=[0,0];
roundscores=0;
activeplayer=0;
gameplaying=true

document.querySelector('.dice').style.display='none'
document.querySelector('#score-0').textContent=0
document.querySelector('#score-1').textContent=0
document.querySelector('#current-0').textContent=0
document.querySelector('#current-1').textContent=0
document.querySelector('#name-0').textContent='player 1'
document.querySelector('#name-1').textContent='player 2'
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')



}