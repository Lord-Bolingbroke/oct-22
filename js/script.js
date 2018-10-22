
function flipAndJoin(x) {
  x.reverse();
  return x.join(" ");
}

$(document).ready(function() {
  var sentenceArray = [];
  var newArray = [];

  $("#submit").click(function(){
    sentenceArray = $("#sentence").val().split(" ");

    sentenceArray.forEach(function(word){
      if (word.length >= 3) {
        newArray.push(word);
      }
    })

    $(".results").append(flipAndJoin(newArray));


  })

});
