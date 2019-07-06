// Variables
var wins = 0
var losses = 0
var attempts = 10;
var lettersClicked = []
var computerLetter = ""
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// functio calulate the computer letter


// game // get the letters user is clicking and then comapre with the computer lters
// if ===  wins increae if not attemps === 0 then you lost

function game() {

    var index = Math.floor(Math.random() * alphabet.length)
    computerLetter = alphabet[index]
    console.log("computer letter: ", computerLetter)

    // update the info

    document.getElementById("Wins").innerHTML = "wins: " + wins
    document.getElementById("Losses").innerHTML = "losses: " + losses
    document.getElementById("guesses-left").innerHTML = "guesses-left: " + attempts
    document.getElementById("clicked-letters").innerHTML = "clicked-letters: " + lettersClicked
}

document.onkeydown = function (event) {
    console.log(event)
    console.log(event.key)
    var letterInput = event.key.toLowerCase()
    document.getElementById("info").innerHTML = ""

    ///// validate that the input is an alphabet letter
    if (alphabet.indexOf(letterInput) === -1 || lettersClicked.indexOf(letterInput) !== -1) {
        document.getElementById("info").innerHTML = "please just a letter and not repetition"
    }
    else {

        // validate users is not clicking the same letter twice
        attempts--
        document.getElementById("guesses-left").innerHTML = "guesses-left: " + attempts
        lettersClicked.push(letterInput)
        document.getElementById("clicked-letters").innerHTML = "clicked-letters: " + lettersClicked

        if (letterInput === computerLetter) {
            wins++
            document.getElementById("Wins").innerHTML = "Wins: " + wins
            document.getElementById("info").innerHTML = "you won, let's start again"

        }
        else {
            if (attempts <= 0) {
                losses++
                document.getElementById("losses").innerHTML = "losses: " + losses
                document.getElementById("info").innerHTML = "you lost, let's start again"
                setTimeout(() => {
                    clean()
                }, 2000);

            }
        }
    }

}


function clean() {
    attempts = 10;
    lettersClicked = []
    document.getElementById("info").innerHTML = ""
    game()
}

game()


