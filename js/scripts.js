
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

var verify = function(number){
  if(number){

  }  else {
      alert("Please enter a number to play ping-pong!");
    }
  };






$(document).ready(function(){
  $("form").submit(function(event){
    var inputNumber = Math.abs(parseInt($("input#number").val()));
    verify(inputNumber);
    var result = pong(inputNumber);
    for (var i = 0; i < result.length; i++) {
      $("#result").append('<li>' + result[i] + '</li>');
    }
    $(".again").show();
    event.preventDefault();
  });
});
