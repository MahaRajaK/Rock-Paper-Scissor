/*
  Rock Paper Scissors SOLUTION 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {computerScore:0,playerScore:0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const getComputerChoice = () => {
  const rpschoice = ['Rock','Paper','Scissors']
  let randomnumber = Math.floor(Math.random()*3)
  return rpschoice[randomnumber]
}


const getResult=(playerChoice, computerChoice) =>{

  let score;
  if(playerChoice == computerChoice){
    score = 0
  }
    
  else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score =1
  }
    
  else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
    score =1
  }
    
  else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
    score =1
  }
    
  else{
    score = -1
  }
    

  return score 
}
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
const showResult=(score, playerChoice, computerChoice)=> {
  
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let resultdiv = document.getElementById('result')
  let playerscorediv = document.getElementById('player-score')
  let handsdiv = document.getElementById('hands')

  if(score < 0){
    resultdiv.innerText='you lost'
    
  }
  else if(score == 0){
    resultdiv.innerText='Tie match'
    
  }
  else{
    resultdiv.innerText='you won' 
    
  }

  handsdiv.innerText = `👨‍🦰 ${playerChoice} vs 🤖 ${computerChoice}`
  playerscorediv.innerText = `Your score: ${totalScore['playerScore']}`
  
}

const onClickRPS=(playerChoice)=> {
  console.log(playerChoice)
  const computerChoice = getComputerChoice()
  console.log(computerChoice)
  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore'] +=score
  console.log(score)
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)
}
// ** Calculate who won and show it on the screen **


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
const playGame=()=> {

  rpsButtons = document.querySelectorAll('.rpsButton')
  
  // use querySelector to select all RPS Buttons
 


  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  
  rpsButtons.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  
  let endgamebutton = document.getElementById('endGameButton')
  endgamebutton.onclick=() =>endGame(totalScore)
  
}

// ** endGame function clears all the text on the DOM **
const endGame=(totalScore)=> {
  
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  let resultdiv = document.getElementById('result')
  let playerscorediv = document.getElementById('player-score')
  let handsdiv = document.getElementById('hands')

  resultdiv.innerText = ''
  playerscorediv.innerText = ''
  handsdiv.innerText = ''
 
}

playGame()