
  moviecart = [
  {name: "hasdaooasd", st: "12", state: "upcoming"},
  {name: "hasdaooasd", st: "12", state: "upcoming"},
  {name: "hasdaooasd", st: "12", state: "upcoming"},
];


  var moviecart = localStorage.getItem('moviecart') ? JSON.parse(localStorage.getItem('moviecart')):{
  items: []
};
localStorage.setItem('moviecart',JSON.stringify(moviecart)); //temporary


$(document).ready(function(){
    
    moviecart.forEach(function(movie, index){
      var colDiv = $('<div>').addClass('column');        
      var screenTimesDiv = $('<div>').addClass('mvST');
      var nameDiv = $('<div>').addClass('mvName');
      var buttonDiv = $('<div>').addClass('mvBtn');
      
      screenTimesDiv.append( $('<p>').text("Screen Times"));
      screenTimesDiv.append( $('<p>').attr(movie.st));

      var changeStatebtn = $('<button>').addClass('btn').text(movie.state).attr('id', index);
      buttonDiv.append(changeStatebtn);
      
      changeStatebtn.click(function(event){
        moviecart[event.target.id].state = "Show Next" ;
        var idd = "#" + event.target.id;
        $(idd).css("background-color", "red");
        localStorage.setItem('moviecart',JSON.stringify(cart));
      });
      
      colDiv.append(screenTimesDiv);
      colDiv.append(nameDiv);
      colDiv.append(buttonDiv);
      $('#movieShow').append(colDiv);
      
    });
    
    $("#addMovieButton").click(function(){
        obj = {name: "hasdaooasd", st: "12", state: "upcoming"};
        obj.name = $("#movieTextBox").val();
        moviecart.push(obj);
        localStorage.setItem('moviecart',JSON.stringify(moviecart));
  });
  

});
