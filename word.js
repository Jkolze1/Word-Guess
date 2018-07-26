// Refers to other file
var letter = require("./letter");

// Function
var word = function(myWord) {
    this.myWord = myWord;
    this.letters = [ ];
    this.underScores =[ ];
    // Split function
    this.splitWord = function(){
        // Splits words
        this.letters = this.myWord.split("");
        numberUnderscoresNeeded = this.letters.length;
        // Loopity Loop
        for (var i = 0; i < numberUnderscoresNeeded; i++) {
            this.underScores.push("_");
        }
        console.log(this.underScores.join(" "));
        this.generateLetters = function(){
            for (i=0; i < this.letters.length; i++){
                this.letter[i].showCharecter();
    }
}
    }
}
module.exports= word;