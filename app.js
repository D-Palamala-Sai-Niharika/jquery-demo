$("document").ready(function(){

    $("body").append("<h1>I love JQuery!</h1>");

    //events
    $(".evntBtn").on("click", function(){
        $(this).hide(1000);
    })
    
    // Jquery effects
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
    //chaining
    $(".chaining").click(function(){
        $(".chainingContent").css("color","red").slideUp(3000).slideDown(3000);
    });

    //Jquery HTML 
    //  get - text(),html(),val(),attr()
    $(".btn1").click(function(){
        alert($(".test1").text());
    });
    $(".btn2").click(function(){
        alert($(".test2").html());
    });
    $(".btn3").click(function(){
        alert($(".test3").val());
    });
    $(".btn4").click(function(){
        alert($(".test4").attr("href"));
    });
    // Set Content - text(), html(), val(),attr()
    $(".btn5").click(function(){
        $(".test1").text("<b>Hello World</b>");
    });
    $(".btn6").click(function(){
        $(".test2").html("<b>Hello World</b>");
    });
    $(".btn7").click(function(){
        $(".test3").val("Diasy Dolly");
    });
    // $(".btn8").click(function(){
    //     $(".test4").attr("href","https://www.w3schools.com/jquery/");
    // });
    $(".btn8").click(function(){
        alert($(".test4").attr("href"));
        $(".test4").attr({
            "href" : "https://www.w3schools.com/jquery",
            "title" : "jquery Tutorial"
        });
    });
    //callbacks
    $(".btn9").click(function(){
        $(".test1").text(function(i,org){
            return "Old HTML : " + org  + " ; New HTML : Hello World!  (index: " + i + ")";
        });
    });
    $(".btn10").click(function(){
        $(".test2").html(function(i,org){
            return "Old HTML : " + org  + " ; New HTML : <b> Hello World!</b>  (index: " + i + ")";
        });
    });
    $(".btn11").click(function(){
        $(".test4").attr("href",function(i,org){
            return org + "/jquery";
        });
    });

});
