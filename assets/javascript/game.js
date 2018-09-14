$( document ).ready(function(){
    var Random=Math.floor(Math.random()*70+30)
    $('#scoreToReach').text(Random);
    var num1= Math.floor(Math.random()*9+1)
    var num2= Math.floor(Math.random()*9+1)
    var num3= Math.floor(Math.random()*9+1)
    var num4= Math.floor(Math.random()*9+1)
    var userScore= 0; 
    var wins= 0;
    var losses = 0;
  $('#finalTotal').text(userScore);
  $('#wins').text(wins);
  $('#losses').text(losses);
  function won(){
    alert("Congrats, you matched your numbers!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }
  function loss(){
    alert ("Sorry you went over your number, play again!");
      losses++;
      $('#losses').text(losses);
      reset()
  }
  function reset(){
        Random=Math.floor(Math.random()*70+30);
        console.log(Random)
        $('#scoreToReach').text(Random);
        num1= Math.floor(Math.random()*9+1);
        num2= Math.floor(Math.random()*9+1);
        num3= Math.floor(Math.random()*9+1);
        num4= Math.floor(Math.random()*9+1);
        userScore= 0;
        $('#finalTotal').text(userScore);
        } 
    $('#gem-one').on ('click', function(){
      userScore = userScore + num1;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore); 
          if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            loss();
          }   
    })  
    $('#gem-two').on ('click', function(){
      userScore = userScore + num2;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore); 
          if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            loss();
          } 
    })  
    $('#gem-three').on ('click', function(){
      userScore = userScore + num3;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore);
            if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            loss();
          } 
    })  
    $('#gem-four').on ('click', function(){
      userScore = userScore + num4;
      console.log("New userScore= " + userScore);
      $('#finalTotal').text(userScore); 
        
            if (userScore == Random){
            won();
          }
          else if ( userScore > Random){
            loss();
          }
    });   
  }); 