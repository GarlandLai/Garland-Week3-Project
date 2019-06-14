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

    var resultStrings = resultNumbers.join('');
    for (var index = 0; index <= resultStrings.length; index +=1)
      if (resultString === 1) {
        return "Beep!"
      } else if (resultString === 2){
        return "Boop!"
      }
        else if (resultString === resultString){
        return resultString
      }
    });
      console.log(resultNumbers);
      console.log(resultStrings);
    });
  });
