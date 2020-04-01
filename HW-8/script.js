$(document).ready(function(){

dogs();

setInterval(function(){dogs()}, 4000);

//Has dogs appear in a set order onscreen
function dogs(){
    $('#dog1').delay(800).fadeOut("slow").fadeIn("slow");
    $('#dog2').delay(1000).fadeOut("slow").fadeIn("slow");
    $('#dog3').delay(1200).fadeOut("slow").fadeIn("slow");
    $('#dog4').delay(1400).fadeOut("slow").fadeIn("slow");
    $('#dog5').delay(1600).fadeOut("slow").fadeIn("slow");
    $('#dog6').delay(1800).fadeOut("slow").fadeIn("slow");
    $('#dog7').delay(2000).fadeOut("slow").fadeIn("slow");
    $('#dog8').delay(2200).fadeOut("slow").fadeIn("slow");
}

//The button starts the slideshow
      $('#btn_play').click(function(){
        $('.dog').hide( function(){
          $('#btn_play').hide( function(){

            $('#title').text("An Omage to my old pet, Templeton...").delay(2000).fadeOut(function(){

            beginSlideshow();

        });
      });
    });
  });
      var text = new Array("A sweetheart", "A stinker", "Templeton --- RIP");

      var image_src = new Array("./images/sweetheart.jpg", "./images/stinker.jpg")

  function beginSlideshow(){

                $('#descriptionText').html(text[0]).animate({fontSize: "2em"}, "slow").fadeOut(2000, function(){
                    $('#descriptionText2').html(text[1]).animate({fontSize: "2em"}, "slow").fadeOut(4000, function(){
                      $('#ending').html(text[2]).animate({fontSize: "3em"}, "slow");
                    });
                });
                $('#mainImage').attr('src', image_src[0]).fadeOut(2000, function(){
                  $('#mainImage2').delay(2000).attr('src', image_src[1]).fadeOut(4000);
                });

    }

});
