lightGallery(document.getElementById('lightgallery'), {
    mode: 'lg-fade',
    cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    thumbnail: 'true',
    thumbWidth: '100'
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Navbar Updating

$(window).on('scroll', function() { 
    if ($(window).scrollTop() >= $('#segment6').offset().top)  { 
        $("#navtext").html("Chapter VI  |  <span class='highlight2'>Moving Forward</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment4').offset().top)  { 
        $("#navtext").html("Chapter V  |   <span class='highlight2'>The Scandinavian Way</span>");
    }
    
    else if ($(window).scrollTop() >= $('#segment5').offset().top)  { 
        $("#navtext").html("Chapter IV  |   <span class='highlight2'>The Liberal Policy</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment2').offset().top)  { 
        $("#navtext").html("Chapter III  |   <span class='highlight2'>The Green New Deal</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment3').offset().top)  { 
        $("#navtext").html("Chapter II  |   <span class='highlight2'>Lloydminster</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment1').offset().top)  { 
        $("#navtext").html("Chapter I  |  <span class='highlight2'>La Grève du Climat</span>");
    } 
    
    else if ($(window).scrollTop() <= $('#essayDiv1').offset().top)  { 
        $("#navtext").html("Introduction  |  <span class='highlight2'>A Country Divided</span>");
    } 
}); 

$(function () {
    
//Intro Photo Essay

var controller = new ScrollMagic.Controller();
    
    var duration = screen.height * 6;
    
    $('#essayCaptionBox1').height(duration);
    
    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#essayDiv1",
            triggerHook: "onLeave",
            duration: duration
        })
        .setPin("#essayDiv1", {pushFollowers: false})
        .addTo(controller);

    var scene12 = new ScrollMagic.Scene({
            triggerElement: "#essayDiv1",
            triggerHook: "onLeave",
            duration: 400
        })
        .setPin("#titlebox", {pushFollowers: false})
        .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#essayDiv1",
        triggerHook: "onLeave",
        duration: 0,
        offset: 200
    })
    .setClassToggle("#sidebar", "visible")
    .addTo(controller);

    var scene11 = new ScrollMagic.Scene({
        triggerElement: "#essayDiv1",
        triggerHook: "onLeave",
        duration: duration,
        offset: 50
    })
    .setClassToggle("#titlebox", "invisible")
    .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#essayDiv1",
            triggerHook: "onLeave",
            offset: 1*(duration/4)
        })
        .setClassToggle("#essayPic1-1", "isHidden")
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#essayDiv1",
            triggerHook: "onLeave",
            duration: duration/4,
            offset: 1*(duration/4)
        })
        .setClassToggle("#essayPic1-2", "visible")
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
            triggerElement: "#essayDiv1",
            triggerHook: "onLeave",
            duration: duration/4,
            offset: 2*(duration/4)
        })
        .setClassToggle("#essayPic1-3", "visible")
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
            triggerElement: "#essayDiv1",
            triggerHook: "onLeave",
            duration:0,
            offset: 3*(duration/4)
        })
        .setClassToggle("#essayPic1-4", "visible")
        .addTo(controller);

//Climate Strikes Photo Essay

    var controller = new ScrollMagic.Controller();
        
        var duration = screen.height * 7.5;
        $('#essayCaptionBox4').height(duration);
        
        var scene1 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv4",
                triggerHook: "onLeave",
                duration: duration
            })
            .setPin("#essayDiv4", {pushFollowers: false})
            .addTo(controller);

        var scene2 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv4",
                triggerHook: "onLeave",
                offset: 1*(duration/5)
            })
            .setClassToggle("#essayPic4-1", "isHidden")
            .addTo(controller);

        var scene3 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv4",
                triggerHook: "onLeave",
                duration: duration/4,
                offset: 1*(duration/5)
            })
            .setClassToggle("#essayPic4-2", "visible")
            .addTo(controller);

        var scene4 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv4",
                triggerHook: "onLeave",
                duration: duration/5,
                offset: 2*(duration/5)
            })
            .setClassToggle("#essayPic4-3", "visible")
            .addTo(controller);

        var scene5 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv4",
                triggerHook: "onLeave",
                duration:duration/5,
                offset: 3*(duration/5)
            })
            .setClassToggle("#essayPic4-4", "visible")
            .addTo(controller);

        var scene5 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv4",
                triggerHook: "onLeave",
                duration:0,
                offset: 4*(duration/5)
            })
            .setClassToggle("#essayPic4-5", "visible")
            .addTo(controller);

//GND Photo Essay

    var controller = new ScrollMagic.Controller();
        
        var duration = screen.height * 7.5;
        $('#essayCaptionBox2').height(duration);
        
        var scene1 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv2",
                triggerHook: "onLeave",
                duration: duration
            })
            .setPin("#essayDiv2", {pushFollowers: false})
            .addTo(controller);

        var scene2 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv2",
                triggerHook: "onLeave",
                offset: 1*(duration/5)
            })
            .setClassToggle("#essayPic2-1", "isHidden")
            .addTo(controller);

        var scene3 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv2",
                triggerHook: "onLeave",
                duration: duration/4,
                offset: 1*(duration/5)
            })
            .setClassToggle("#essayPic2-2", "visible")
            .addTo(controller);

        var scene4 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv2",
                triggerHook: "onLeave",
                duration: duration/5,
                offset: 2*(duration/5)
            })
            .setClassToggle("#essayPic2-3", "visible")
            .addTo(controller);

        var scene5 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv2",
                triggerHook: "onLeave",
                duration:duration/5,
                offset: 3*(duration/5)
            })
            .setClassToggle("#essayPic2-4", "visible")
            .addTo(controller);

        var scene5 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv2",
                triggerHook: "onLeave",
                duration:0,
                offset: 4*(duration/5)
            })
            .setClassToggle("#essayPic2-5", "visible")
            .addTo(controller);

//Copenhill Photo Essay

    var controller = new ScrollMagic.Controller();
        
        var duration = screen.height * 6;
        $('#essayCaptionBox3').height(duration);
        
        var scene1 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv3",
                triggerHook: "onLeave",
                duration: duration
            })
            .setPin("#essayDiv3", {pushFollowers: false})
            .addTo(controller);

        var scene2 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv3",
                triggerHook: "onLeave",
                offset: 1*(duration/4)
            })
            .setClassToggle("#essayPic3-1", "isHidden")
            .addTo(controller);

        var scene3 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv3",
                triggerHook: "onLeave",
                duration: duration/4,
                offset: 1*(duration/4)
            })
            .setClassToggle("#essayPic3-2", "visible")
            .addTo(controller);

        var scene4 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv3",
                triggerHook: "onLeave",
                duration: duration/4,
                offset: 2*(duration/4)
            })
            .setClassToggle("#essayPic3-3", "visible")
            .addTo(controller);

        var scene5 = new ScrollMagic.Scene({
                triggerElement: "#essayDiv3",
                triggerHook: "onLeave",
                duration:0,
                offset: 3*(duration/4)
            })
            .setClassToggle("#essayPic3-4", "visible")
            .addTo(controller);
   
    //Progress Bar
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#essayDiv1",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length0")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#segment1",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length10")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#segment2",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length30")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#segment3",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length50")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#segment4",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length70")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#segment5",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length90")
    .addTo(controller);
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#segment6",
        triggerHook: "onLeave",
        duration: 0,
        offset: 0
    })
    .setClassToggle("#progressBar", "length100")
    .addTo(controller);
});
