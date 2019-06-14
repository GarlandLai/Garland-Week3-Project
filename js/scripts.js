$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("#userInput").val());
    // var outputAnswer = toReturn(numberInput)
    // $("#output").text(outputAnswer)
    var resultNumbers = [];
    for (var index = 0; index <= numberInput; index +=1){
      resultNumbers.push(index);
    };
    // resultNumbers = resultNumbers.map(function(resultNumber){
    //   for (var index = 0; index <= resu; index +=1){
    //     resultNumbers += index
    //      if (resultNumber[0] === 0) {
    //       return resultNumber

      // for (var index = 0; index <= resultNumbers.length; index +=1){
      //   if (resultNumber[0] === 0) {
      //     return resultNumber
      //   }
      // });
      // console.log(numberInput);
      console.log(resultNumbers);
    });
  });
