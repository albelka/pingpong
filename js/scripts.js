
var counts = [];
var inputNumber = 12;
for(var i=1; i<=inputNumber; i++) {
  counts.push(i);
}
counts;

for(var i=0;i<=inputNumber;i++) {
  if (counts[i] % 3 === 0)
  counts.push("ping");
}



$(document).ready(function(){
  $("form").submit(function(event){
    var inputNumber = parseInt($("input#number").val());
    // var puzzle = insertDashes(inputSentence);
    // var puzzle = puzzle.join(" ");

    $("#hidden").show();
    $("#result").text(puzzle);
    $(".disappear").hide();
    event.preventDefault();
  });
});
