flavors = ["Vanilla", "Chocolate", "Rocky Road", "Cherry Garcia"]

$(function(){
  flavors.forEach(function(flavor) {
    console.log(flavor)
    $(".flavors1").append("<p>"+flavor+"</p>")
  })
})
