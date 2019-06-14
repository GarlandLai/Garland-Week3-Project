$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    // var outputAnswer = toReturn(numberInput)
    // $("#output").text(outputAnswer)
    var resultNumbers = ["0"];
    for (var index = 0; index < numberInput.length; index +=1){
      resultNumbers.push(numberInput[index]);
    };
    resultNumbers = resultNumbers.map(function(resultNumber){
      for (var index = 0; index <= resultNumbers.length; index +=1){
        if (resultNumber[0] === 0) {
          return resultNumber
        }
      }
      console.log(numberInput);
      console.log(resultNumbers);
    });
  });
});
