console.log("Pagina lista!")

var SERVICE_URL = "https://jsonplaceholder.typicode.com";
var API_KEY = "AIzaSyD8B--R9FDNkyhdPwGW2o6YsJB4pMO_w6U";
var YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + API_KEY + "&q=";

jQuery(document).ready(function($) { //il dollaro significa che quando questa funzione viene eseguita si porta di nascosto JQUERY come argomento.
    //La pagina è completamente carica e jQuery è pronto!
    console.log("READY!")
        //console.log("arguments", arguments)

    /*$("#loadingBar").hide(); //nascondo la barra di caricamento
    $("#usersTable").hide(); //nascondo la Tabella*/

    $("#searchBtn")
        .click(function() {
            console.log("Click");
            //getUser();
            var search = $("#searchInput").val()
            getVideos(search);
        })

    function getUser() {
        console.log("Chiamo getUsers");

        $("#loadingBar").show();
        $("#emptyContent").fadeOut(2000);

        $.getJSON(SERVICE_URL + "/users", function(response) {
            var users = response;
            console.log("Users", users);
            fillTable(users);
        })

    }

    function getVideos(search) {
        console.log("Chiamo getVideo");

        $("#loadingBar").show();
        $("#emptyContent").fadeOut(2000);

        $.getJSON(YOUTUBE_URL + search, function(response) {
            var videos = response.items;
            console.log("Videos", videos);
            fillTable(videos);
        })

    }

    function fillTable(arrayData) {
        //creo la funzione FILLTABLE 
        var $tableBody = $("#usersTable tbody")

        $tableBody.html("");

        $.each(arrayData, function(index, video) {
            console.log(index, video)
                //creo una nuova riga vuota
            var newRow = jQuery("<tr></tr>");
            //inserisco dentro la riga vuota un tag con il valore che voglio <td>VALORE</td>
            newRow.append("<td>" + video.id.videoId + "</td>") //id
            newRow.append("<td>" + video.snippet.title + "</td>") //name
            newRow.append("<td><img src='" + video.snippet.thumbnails.default.url + "'/></td>") //email
            $tableBody.append(newRow)
        })

        //ritardo MANUALMENTE di due secondi
        setTimeout(function() {
            $("#loadingBar").fadeOut(); //nascondo la barra di caricamento
            $("#usersTable").fadeIn(); //mostro la tabella
        }, 2 * 1000)
    }







    console.log("fine file lista...")
})