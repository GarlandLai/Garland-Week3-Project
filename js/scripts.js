//Business interface logic
function beepBoop(input) {
  var result = [];
  for (var i = 0; i <= input; i +=1) {
    var index = i.toString();
    if (index.includes("3")) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.")
    } else if (index.includes("2")){
      result.push("Boop!")
    } else if (index.includes("1")) {
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
