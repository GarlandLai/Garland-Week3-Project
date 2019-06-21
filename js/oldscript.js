//user interface logic

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    var resultNumbers = [];

    for (var index = 0; index <= numberInput; index +=1){
      resultNumbers.push(index);
      // var resultStrings = resultNumbers.join('')
    };
    console.log(resultNumbers);
    console.log(resultNumbers.length);


    //Business interface logic
    var responseResult = [];

    resultNumbers = resultNumbers.map(function(num) {
      for (var index = 0; index < resultNumbers.length; index +=1) {
        var newResult = index.toString();
        if (newResult.includes("3")) {
          responseResult[index] = " I'm sorry, Dave. I'm afraid I can't do that."
        } else if (newResult.includes("2")){
          responseResult[index] = " Boop!"
        } else if (newResult.includes("1")) {
          responseResult[index] = " Beep!"
        } else {
          responseResult[index] = index
        }
      };
    });
    $("#output h3").text(responseResult);
  });
});
