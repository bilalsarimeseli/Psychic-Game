# Psychic-Game

A Guessing-letters game using Javascript with CSS, and HTML.

This is a very simple game where you have to guess what letter the computer is thinking of. Every time you type *one* letter it will print out on the page whether you are wrong or right. Also giving you the amount of losses & wins with the amount of tries you have left. 

This game will automatically reset when you lose or win by typing in another letter.


## Installing:
Download repository on GitHub, open in preferred text editor to view source code (i.e. Atom, Sublime, Visual Studio Code). Open index.html, style.css, and game.js. Right click on the html file code and select "view in default browser" to view a demo of the website created. (Google Chrome Preferred for viewing)

index.html
style.css
game.js
README.md

## Sample of JavaScript used:

This function creates a random number to create a letter.

```
function game() {

    var index = Math.floor(Math.random() * alphabet.length)
    computerLetter = alphabet[index]
    console.log("computer letter: ", computerLetter);

```

## Built With

* [html]
* [css]
* [javascript]

## Screenshot
![interface](https://github.com/bilalsarimeseli/Psychic-Game/blob/master/assets/images/Screen%20Shot%202020-03-05%20at%204.20.01%20AM.png?raw=true)

## Author

* **Bilal Sarimeseli** - *Github* - [Github](https://github.com/bilalsarimeseli)

# LIVE HERE
[Play](https://bilalsarimeseli.github.io/Psychic-Game/)


