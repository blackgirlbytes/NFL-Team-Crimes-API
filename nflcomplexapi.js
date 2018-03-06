'use strict';
function getPlayer(playerName){
var crimeURL =" http://cors-proxy.htmldriven.com/?url=http://nflarrest.com/api/v1/player/arrests/" +encodeURI(playerName)
  $.ajax({

    url:  crimeURL,
    success: function(r){
      // console.log(r)


      $("section").append("<li>"+r[0].Position_name+", "+r[0].Name+" was "+r[0].Description+"As a result, " + r[0].Outcome+"</li>")
    },
    error: function(er){
      console.log("Error: " + er )
    }
  });
}
$("#submit").on("click", function(){
var teamName = $("#team").val();
var apiURL = "http://cors-proxy.htmldriven.com/?url=http://thesportsdb.com/api/v1/json/1/searchplayers.php?t=" + encodeURI(teamName)


  $.ajax({

       url: apiURL,

       success: function(response){
         response.player.forEach(function(e){
           console.log(e.strPlayer)
           getPlayer(e.strPlayer)
           //console.log(response.player[0].strPlayer);

             });
       },

       error: function(r){
         console.log(r);
       }


  })
})
