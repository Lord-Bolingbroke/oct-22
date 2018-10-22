var items = ["item1", "item2","item3","item4","item5"];
var userTyped = [];

$(function() {
  $("#groceries").submit(function(event){
    event.preventDefault();

    userTyped = items.map(function(item) {
      return $("#"+item).val().toUpperCase();
    })

    userTyped = userTyped.sort();


    userTyped.forEach(function (lineItem) {
      $("#groceries-list").append("<li>" + lineItem + "</li>");
    })

  })

})
