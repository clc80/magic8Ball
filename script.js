$(document).ready(function(){
  
  var frontOf8BallImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png";
  var backOf8BallImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png";
  
  var magic8Ball = {};
  //hide the answers before anything else happens
  $("#answer").hide();
  
  //List of answers
  magic8Ball.answers = ["yes", "no", "maybe", "try again later", "outlook not good", "definetely"];
  
  //method for getting the answer
  magic8Ball.shake = function(question){
    var random = Math.floor(Math.random()*this.answers.length); 
    var answer = this.answers[random];
    
    //switch images
    $("#8ball").attr("src", backOf8BallImage);
    
    //Display the answer after the user clicks the button
    $("#answer").text(answer);
    //fade the answer in
    $("#answer").fadeIn(4000);
    
    console.log(question);
    console.log(answer);
  };

  //Function to get the user to ask a question
  var askAQuestion = function(){
    //Make the 8Ball Shake
    $("#8ball").effect("shake");
    
    //Hide the answer when the user clicks the button
    $("#answer").hide();
    var question = prompt("Ask A YES/NO Question");
    magic8Ball.shake(question);
  };
  
  //Run the function when the user clicks the button
  $("#questionButton").click(askAQuestion);
  
  //Show the front side of the image again
  $("#8ball").attr("src", frontOf8BallImage);
  
  
});