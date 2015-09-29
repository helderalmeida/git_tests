$(function () {
    $("input:checkbox").prop('checked', true);
});

function randomizeIt() {

    $("#results tbody").html("");

    var gk = new Array();

    $("#convocados [type=checkbox][data-gk=y]:checked").each(function() {
        gk.push($(this).attr("id"));
    });

    /*if ($("#PC").is(':checked'))
        

    if ($("#DR").is(':checked'))
        gk.push("DR");*/

    console.log(gk);

    var sideA="", sideB="";

    sideA = Math.floor(Math.random() * gk.length);
    sideB = sideA == 1 ? 0 : 1;

    var gkA = gk[sideA]==undefined ? "-": $("#" + gk[sideA]).parent().prev().html();
    var gkB = gk[sideB]==undefined ? "-": $("#" + gk[sideB]).parent().prev().html();

    $("#results tbody").append("<tr><td>" +  gkA + "</td><td>" + gkB + "</td></tr>");
    

    var players = new Array();

    $("#convocados [type=checkbox][data-gk=n]:checked").each(function (obj) {
        players.push(this.id);
    });

    console.log(players);

    while (players.length >= 2) {
        players = shuffle(players);

        $("#results tbody").append("<tr><td>" + $("#" + players.pop()).parent().prev().html() + "</td><td>" + $("#" + players.pop()).parent().prev().html() + "</td></tr>");
    }

    if (players.length==1 )
        $("#results tbody").append("<tr><td>" + $("#" + players.pop()).parent().prev().html() + "</td><td></td></tr>");
    
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}