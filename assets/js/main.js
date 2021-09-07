
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

duplicatedArr.sort(() => .5 - Math.random()) //shuffling the Array

let countArr = []
let pairsClick = 0
let pairsGuess = 0

for (let i = 0; i < duplicatedArr.length; i++) { //cycle of adding cards
    let card = document.createElement('div')
    card.id = `card${i}`
    document.getElementById("setCards").appendChild(card)
    let newImage = document.createElement('img')
    newImage.classList.add('hider')
    newImage.src = duplicatedArr[i].image
    document.getElementById(`card${i}`).prepend(newImage)
    document.getElementById(`card${i}`).addEventListener("click", () => { //track the selected card
        document.getElementById(`card${i}`).classList.add('flipper')
        countArr.push(duplicatedArr[i].name)
        let selectCard = document.querySelectorAll('.flipper')
        let selectImage = document.querySelectorAll('.flipper img')
        selectImage.forEach(elt => {
            elt.classList.remove('hider')
        })

        if (countArr.length == 2 && countArr[0] !== countArr[1]) {
            pairsClick++
            document.getElementById('pairsClick').innerHTML = pairsClick
            console.log(countArr)
            selectCard.forEach(elt => {
                elt.classList.add('flipperHide')
                hiderTime = () => { //rotation animation
                    elt.classList.remove('flipper')
                    elt.classList.remove('flipperHide')
                }
                setTimeout(hiderTime, 2000)
            })
            selectImage.forEach(elt => {
                hiderTime = () => { //rotation animation
                    elt.classList.add('hider')
                }
                setTimeout(hiderTime, 2000)
            })
            countArr.length = 0
        } else if (countArr[0] == countArr[1]) {
            pairsClick++
            document.getElementById('pairsClick').innerHTML = pairsClick
            pairsGuess++
            document.getElementById("pairsGuess").innerHTML = pairsGuess
            countArr.length = 0
        }
    })
}
