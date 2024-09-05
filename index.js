
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let randomNumber = 1
let displayCard = document.createElement('img')
let sumEl = document.querySelector("#sum-el")
//let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let player = {
    name: "Ibukun",
    chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "$" + player.chips
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+ 1
    //displayCard()
    if(randomNumber > 10){
        if(randomNumber === 11){
            let jack = document.createElement('img')
            jack.src = 'J.jpg'
            let playsjack = document.getElementById("playingcards")
            playsjack.appendChild(jack)
        }
        else if(randomNumber === 12){
            let queen = document.createElement('img')
            queen.src = 'Q.jpg'
            let playsqueen = document.getElementById("playingcards")
            playsqueen.appendChild(queen)
        }
        else if(randomNumber === 13){
            let king = document.createElement('img')
            king.src = 'K.jpg'
            let playsking = document.getElementById("playingcards")
            playsking.appendChild(two)
        }
        return 10
    }
    else if(randomNumber === 1){
        let ace = document.createElement('img')
        ace.src = 'A.jpg'
        let plays = document.getElementById("playingcards")
        plays.appendChild(ace)
        return 11

    }
    else{
        if(randomNumber === 2){
            let two = document.createElement('img')
            two.src = '2.jpg'
            let playstwo = document.getElementById("playingcards")
            playstwo.appendChild(two)
        }
        else if(randomNumber === 3){
            let three = document.createElement('img')
            three.src = '3.jpg'
            let playsthree = document.getElementById("playingcards")
            playsthree.appendChild(three)
        }
        else if(randomNumber === 4){
            let four = document.createElement('img')
            four.src = '4.jpg'
            let playsfour = document.getElementById("playingcards")
            playsfour.appendChild(four)
        }
        else if(randomNumber === 5){
            let five = document.createElement('img')
            five.src = '5.jpg'
            let playsfive = document.getElementById("playingcards")
            playsfive.appendChild(five)
        }
        else if(randomNumber === 6){
            let six = document.createElement('img')
            six.src = '6.jpg'
            let playsix = document.getElementById("playingcards")
            playsix.appendChild(six)
        }
        else if(randomNumber === 7){
            let seven = document.createElement('img')
            seven.src = '7.jpg'
            let playsseven = document.getElementById("playingcards")
            playsseven.appendChild(seven)
        }
        else if(randomNumber === 8){
            let eight = document.createElement('img')
            eight.src = '8.jpg'
            let playseight = document.getElementById("playingcards")
            playseight.appendChild(eight)
        }
        else if(randomNumber === 9){
            let nine = document.createElement('img')
            nine.src = '9.jpg'
            let playsnine = document.getElementById("playingcards")
            playsnine.appendChild(nine)
        }
        else if(randomNumber === 10){
            let ten = document.createElement('img')
            ten.src = '2.jpg'
            let playsten = document.getElementById("playingcards")
            playstwo.appendChild(ten)
        }
        return randomNumber
    }
}
function startGame(){
    let display = document.getElementById("playingcards")
    display.textContent = ""
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards : " 
    for(let i =0; i < cards.length; i++ ){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum 
    if(sum <= 20){
        message = "Do you want to draw a new card? 🧐"
        hasBlackJack = false
    }else if(sum === 21){
        message = "You have got blackjack 😄"
        hasBlackJack = true
    }
    else /*if (sum > 21)*/{
        message = "You are out of the game 😖"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        }
}

//Cash out!
