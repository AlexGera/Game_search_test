$( document ).ready(function () {


$(".img_position").css({ width: $("#main_bg_lvl1").width(),
    height: $("#main_bg_lvl1").height()

})


    $("#img_lvl_1").click(function() {

        $("#img_lvl_1").animate({
            top: "0",
            left: "1000"

        }, 1500,  function(){
            $("#img_lvl_1").css({display:"none"})
        } )



        ;    })

    $('img').magnify({
        speed: 100, // fade in/out speed
        timeout: -1, // timeout for mobile
        src: 'img/level1-clear.png', // The URI of the large image that will be shown in the magnifying lens.
        onload: function(){} // callback
    });

    $('img').magnify({
        speed: 100, // fade in/out speed
        timeout: -1, // timeout for mobile
        src: '', // The URI of the large image that will be shown in the magnifying lens.
        onload: function(){} // callback
    });






});



