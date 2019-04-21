$(document).ready(function(){
    $(".ryu").mouseenter(function(){
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
    .mouseleave(function(){
       
        $(".ryu-ready").hide();
        $(".ryu-still").show();
    })
    .mousedown(function(){
        console.log("mousedown");
        // play hadouken sound
        playHadouken();

        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show().animate(
            {'left':'1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left','550px');
            }
        );
        // animate it to the right of the
        // screen.
    })
    .mouseup(function(){
        console.log("mouseup");
        // ryu goes back to his ready position
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
    });


    // playHadouken music

    function playHadouken(){
        $("#hadouken-sound")[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

    
});