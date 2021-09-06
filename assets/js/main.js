
class Card { //create a card object with or without a name
    constructor(name, image) {
        this.name = name
        this.image = image
    }
}

let aquaman = new Card("aquaman", "assets/img/aquaman.jpg")
let batman = new Card("batman", "assets/img/batman.jpg")
let captainAmerica = new Card("captain-america", "assets/img/captain-america.jpg")
let fantasticFour = new Card("fantasticFour", "assets/img/fantastic-four.jpg")
let flash = new Card("flash", "assets/img/flash.jpg")
let greenArrow = new Card("greenArrow", "assets/img/green-arrow.jpg")
let greenLantern = new Card("greenLantern", "assets/img/green-lantern.jpg")
let ironman = new Card("ironman", "assets/img/ironman.jpg")
let spiderman = new Card("spiderman", "assets/img/spiderman.jpg")
let superman = new Card("superman", "assets/img/superman.jpg")
let theAvengers = new Card("theAvengers", "assets/img/the-avengers.jpg")
let thor = new Card("thor", "assets/img/thor.jpg")

let cardsArr = [aquaman, batman, captainAmerica, fantasticFour, flash, greenArrow, greenLantern, ironman, spiderman, superman, theAvengers, thor]
let duplicatedArr = []

for (let i = 0; i < cardsArr.length; i++) { //duplicate cards
    duplicatedArr.push(cardsArr[i])
    duplicatedArr.push(cardsArr[i])
}
console.log(duplicatedArr)

duplicatedArr.sort(() => .1 - Math.random()) //shuffling the Array

let countArr = []
let pairsClick = 0
let pairsGuess = 0

for (let i = 0; i < duplicatedArr.length; i++) { //cycle of adding cards
    let card = document.createElement('div')
    card.id = `card${i}`
    document.getElementById("setCards").appendChild(card)
    let newImage = document.createElement('img')
    newImage.id = `img${i}`
    newImage.style.display = 'none'
    newImage.src = duplicatedArr[i].image
    document.getElementById(`card${i}`).prepend(newImage)
    document.getElementById(`card${i}`).addEventListener("click", () => { //track the selected card
        pairsClick++
        document.getElementById(`card${i}`).classList.add('flipper')
        document.getElementById('pairsClick').innerHTML = pairsClick
        document.getElementById(`card${i}`).style.pointerEvents = "none" //make the selected card inactive
        countArr.push(duplicatedArr[i].name)
        flipFlap = () => { //rotation animation
            document.getElementById(`img${i}`).style.display = "block"
        }
        setTimeout(flipFlap, 800)
        dupliFilter()
        console.log(countArr)
    })
}

//counter 
dupliFilter = () => {
    for (let i = 0; i < countArr.length; i++) {
        for (let j = i + 1; j < countArr.length; j++) {
            if (countArr[j] == countArr[i]) { //push the names of open cards into a new array and check for paired cards
                pairsGuess++
                countArr.splice(j, 1)
                document.getElementById("pairsGuess").innerHTML = pairsGuess
            }
        }
    }
}






