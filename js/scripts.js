
var counts = [];

var pong = function(number){
for(var i=1; i <= number; i++) {
  if (i % 15 === 0){
    counts.push("ping-pong");
  } else if (i % 3 === 0){
    counts.push("ping");
  } else if (i % 5 === 0){
    counts.push("pong");
  } else {
    counts.push(i);
  }
}
return counts;
};





$(document).ready(function(){
  $("form").submit(function(event){
    var inputNumber = parseInt($("input#number").val());
    var result = pong(inputNumber);

    // $("#hidden").show();
    $("#result").text(result);
    // $(".disappear").hide();
    event.preventDefault();
  });
});
