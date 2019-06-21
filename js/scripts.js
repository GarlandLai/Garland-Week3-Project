//Business interface logic
function beepBoop(input) {
  var result = [];
  for (var index = 0; index <= input; index +=1) {
    var newIndex = index.toString();
    if (newIndex.includes("3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (newIndex.includes("2")){
      result.push("Boop!")
    } else if (newIndex.includes("1")) {
      result.push("Beep!")
    } else {
      result.push(index)
    }
  }
  return result
};


//user interface logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    var result = beepBoop(numberInput);
    $("#output").text(result);
  });
});
