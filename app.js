$("document").ready(function(){

    $("body").append("<h1>I love JQuery!</h1>");

    //events
    $(".evntBtn").on("click", function(){
        $(this).hide(1000);
    })
    
    //effects
    //hide/show/toggle
    $("p.clickDemo").click(function(){
        $(this).hide();
      });

    //fade
    $("#fadeBtn").click(function(){
        $("#fadeContent").fadeToggle(1000);
    });

    //slide
    $("#slide").click(function(){
        $("#slideContent").slideToggle("slow");
    });

    //animate
    $(".animateBtn").click(function(){
        var div=$(".div1");
        div.animate({height: '300px', opacity: '0.4',fontSize:'1rem'},"slow");
        div.animate({width: '300px', opacity: '0.8', fontSize:'3rem'},"slow");
        div.animate({height: '100px', opacity: '0.4',fontSize:'3rem'},"slow");
        div.animate({width: '100px', opacity: '0.8',fontSize:'1rem'},"slow");
    });

    //stop()
    $(".heading").click(function(){
        $(".content").slideDown(5000);
    })
    $(".stop").click(function(){
        $(".content").stop()
    });

    $(".start").click(function(){
        var div=$(".div2");
        div.animate({height: '300px',fontSize:'1rem'},3000);
        div.animate({width: '300px',fontSize:'3rem'},3000);
        div.animate({height: '100px',fontSize:'3rem'},3000);
        div.animate({width: '100px',fontSize:'1rem'},3000);
    });
    $(".stop1").click(function(){
        $(".div2").stop();
    });
    $(".stopAll").click(function(){
        $(".div2").stop(true);
    });
    $(".stopButFinish").click(function(){
        $(".div2").stop(true,true);
    });
});
