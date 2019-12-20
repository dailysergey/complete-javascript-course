//IIFE

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
})();


//IIFE
(function(goodluck){
    console.log('Hello world' + goodluck);
})(", and morning");
