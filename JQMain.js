$(document).ready(function () {
   /* $("p").on("click", function(){
        alert("The paragraph was clicked.");
    });*/
    $("#divid").on("mouseover mouseout", function(){
        $(this).toggleClass("moved");
    });
});