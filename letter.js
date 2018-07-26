var letter = function(charecter) {
    this.charecter= charecter.toUpperCase();
    this.letterGuessedCorrectly = false;
    this.showCharecter = function(){
        if(this.letterGuessedCorrectly)
        {
            console.log(this.charecter);
        }
        else {
            console.log("_");
        }
    }
}
module.exports = letter