$(document).keypress(function (e) { 
    console.log(e.key);
    $("h1").text(e.key);
});