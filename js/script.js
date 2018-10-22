var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
var suits = ["clubs", "diams", "spades", "hearts"]

$(function() {
  var allCards = buildADeck();

  $("#deal").click(function() {

    allCards.forEach(function(card) {
      var cardSuit = card.split(" ")[2];
      var cardNumb = card.split(" ")[0];

      if (cardNumb === 'jack') {cardNumb = 'j'}
      if (cardNumb === 'queen') {cardNumb = 'q'}
      if (cardNumb === 'king') {cardNumb = 'k'}

      $("#each-card").append("<li><div class='card rank-7 "+cardSuit+"'><span class='rank'>"+cardNumb+"</span><span class='suit'></span></div></li>");

      $("#deal").hide();
    })


  })


})

function buildADeck() {
  var deck = [];
  suits.forEach(function(suit) {
    // ["clubs", "diamonds", "spades", "hearts"]
    ranks.forEach(function(rank) {
      // ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
      deck.push(rank + " of " + suit);
    })
  })
  return deck;

}
