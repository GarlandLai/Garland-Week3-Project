
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("#userInput").val());
    var resultNumbers = [];

    for (var index = 0; index <= numberInput; index +=1){
      resultNumbers.push(index);
    };

    var resultStrings = resultNumbers.join('');

    console.log(resultNumbers);
    console.log(resultStrings);
    console.log(resultStrings.length)

    for (var index = 0; index <= resultStrings.length; index +=1) {
      if (index === "1") {
        return "Beep!"
      } else if (index === "2"){
        return "Boop!"
      }
        else if (index === index){
        return index
      }
      $("#output").text(resultNumbers);
    }
  });

  // var rangeResult = resultStrings
});

// });
