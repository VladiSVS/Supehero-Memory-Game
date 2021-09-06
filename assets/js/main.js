
class Card {
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

for (let i = 0; i < cardsArr.length; i++) {
    duplicatedArr.push(cardsArr[i])
    duplicatedArr.push(cardsArr[i])
}
console.log(duplicatedArr)

//shuffling the Array
duplicatedArr.sort(() => .1 - Math.random())

let countArr = []
let pairsClick = 0

for (let i = 0; i < duplicatedArr.length; i++) {
    let card = document.createElement('div')
    card.id = `card${i}`
    document.getElementById("setCards").appendChild(card)
    let newImage = document.createElement('img')
    newImage.id = `img${i}`
    newImage.style.display = 'none'
    newImage.src = duplicatedArr[i].image
    document.getElementById(`card${i}`).prepend(newImage)
    document.getElementById(`card${i}`).addEventListener("click", () => {
        pairsClick++
        document.getElementById('pairsClick').innerHTML = pairsClick
        document.getElementById(`img${i}`).style.display = "block"
        document.getElementById(`card${i}`).style.pointerEvents = "none"
        countArr.push(duplicatedArr[i].name)
        console.log(countArr)
        dupliFilter()
    })
}

let pairsGuess = 0

dupliFilter = () => {
    for (let i = 0; i < countArr.length; i++) {
        for (let j = i + 1; j < countArr.length; j++) {
            if (countArr[j] == countArr[i]) {
                countArr.splice(j, 1)
                pairsGuess++
                document.getElementById("pairsGuess").innerHTML = pairsGuess
            }
        }
    }
}






