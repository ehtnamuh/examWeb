moviecart = [
  { name: "hasdaooasd", st: "12", state: "upcoming" },
  { name: "hasdaooasd", st: "12", state: "upcoming" },
  { name: "hasdaooasd", st: "12", state: "upcoming" },
];

var moviecart = localStorage.getItem('moviecart') ? JSON.parse(localStorage.getItem('moviecart')) : {
    moviecart
};
localStorage.setItem('moviecart', JSON.stringify(moviecart)); 


function loadMovies(movie, index) {
    var colDiv = $('<div>').addClass('column');
    var screenTimesDiv = $('<div>').addClass('mvST');
    var nameDiv = $('<div>').addClass('mvName');
    var buttonDiv = $('<div>').addClass('mvBtn');

    screenTimesDiv.append($('<p>').text("Screen Times"));
    screenTimesDiv.append($('<p>').text(movie.st));
    
    nameDiv.append($('<p>').text(movie.name))

    var changeStatebtn = $('<button>').addClass('btn').text(movie.state).attr('id', index);
    buttonDiv.append(changeStatebtn);

    changeStatebtn.click(function(event) {
      if (event.target.innerText == "upcoming") {
        moviecart[event.target.id].state = "show next";
        var idd = "#" + event.target.id;
        $(idd).css("background-color", "yellow");
        event.target.innerText = "show next";
      }
      else if (event.target.innerText == "show next") {
          moviecart[event.target.id].state = "screening";
          var idd = "#" + event.target.id;
          $(idd).css("background-color", "cyan");
          
          event.target.innerText = "screening";
      } else {
        moviecart[event.target.id].state = "upcoming";
        moviecart[event.target.id].st = (parseInt(moviecart[event.target.id].st) + 1);
        var idd = "#" + event.target.id;
        $(idd).css("background-color", "green");
        event.target.innerText = "upcoming";
      }
      localStorage.setItem('moviecart', JSON.stringify(moviecart));
    });
    // colDiv.css("float","left");
    // colDiv.css("width, 100%");
    // screenTimesDiv.css("float","left");
    // screenTimesDiv.css("width, 30%");
    // nameDiv.css("float","left");
    // nameDiv.css("width, 40%");
    // buttonDiv.css("float","left");
    // buttonDiv.css("width, 30%");
    
    colDiv.append(screenTimesDiv);
    colDiv.append(nameDiv);
    colDiv.append(buttonDiv);
    $('#movieShow').append(colDiv);

  }


$(document).ready(function() {


  moviecart.forEach(function(movie, index) {
    var colDiv = $('<div>').addClass('column');
    var screenTimesDiv = $('<div>').addClass('mvST');
    var nameDiv = $('<div>').addClass('mvName');
    var buttonDiv = $('<div>').addClass('mvBtn');

    screenTimesDiv.append($('<p>').text("Screen Times"));
    screenTimesDiv.append($('<p>').text(movie.st));
    
    nameDiv.append($('<p>').text(movie.name))

    var changeStatebtn = $('<button>').addClass('btn').text(movie.state).attr('id', index);
    buttonDiv.append(changeStatebtn);

    changeStatebtn.click(function(event) {
      if (event.target.innerText == "upcoming") {
        moviecart[event.target.id].state = "show next";
        var idd = "#" + event.target.id;
        $(idd).css("background-color", "yellow");
        event.target.innerText = "show next";
      }
      else if (event.target.innerText == "show next") {
          moviecart[event.target.id].state = "screening";
          var idd = "#" + event.target.id;
          $(idd).css("background-color", "cyan");
          
          event.target.innerText = "screening";
      } else {
        moviecart[event.target.id].state = "upcoming";
        moviecart[event.target.id].st = (parseInt(moviecart[event.target.id].st) + 1);
        var idd = "#" + event.target.id;
        $(idd).css("background-color", "green");
        event.target.innerText = "upcoming";
      }
      localStorage.setItem('moviecart', JSON.stringify(moviecart));
    });
    // colDiv.css("float","left");
    // colDiv.css("width, 100%");
    // screenTimesDiv.css("float","left");
    // screenTimesDiv.css("width, 30%");
    // nameDiv.css("float","left");
    // nameDiv.css("width, 40%");
    // buttonDiv.css("float","left");
    // buttonDiv.css("width, 30%");
    
    colDiv.append(screenTimesDiv);
    colDiv.append(nameDiv);
    colDiv.append(buttonDiv);
    $('#movieShow').append(colDiv);

  });

  $("#addMovieButton").click(function(event) {
    namee = $("#movieTextBox").val();
    if (namee == ""){
      return;
    }
    obj = { name: "hasdaooasd", st: "0", state: "upcoming" };
    obj.name = namee;
    moviecart.push(obj);
    localStorage.setItem('moviecart', JSON.stringify(moviecart));
    //document.getElementById('#movieTextBox').value = "";
    console.log(moviecart);
  });


});
