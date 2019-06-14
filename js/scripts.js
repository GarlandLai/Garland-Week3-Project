//user interface logic

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    var resultNumbers = [];
    for (var index = 0; index <= numberInput; index +=1){
      resultNumbers.push(index);
    };
    console.log(resultNumbers);
    console.log(resultNumbers.length);

    var specialNumbers = [1, 2 , 3]

    //Business interface logic

    resultNumbers = resultNumbers.map(function(num) {
      for (var index = 0; index <= resultNumbers.length; index +=1) {
        if (num === 1){
          return "test"
        }
          else if (num === 3) {
          return " I'm sorry, Dave. I'm afraid I can't do that."
        } else if (num === 2){
          return " Boop!"
        } else if (num === 1) {
          return " Beep!"
        } else if (num === index){
          return num
        }
      };
    });
    $("#output h3").text(resultNumbers);
  });
});
