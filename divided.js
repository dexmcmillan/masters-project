// Dismiss loading screen on window load

$(window).on("load", (function(){
    $(".se-pre-con").fadeOut("slow");
}));


// A play function for text-based audio links.

function play(file) {

    var x = document.getElementById(file);

    if (x.paused) {
        x.play();
    }

    else {
        x.pause();
    };

    $("this.playbutton").toggleClass("fa-play-circle fa-pause-circle");
};



// Initialize popovers for explainer links in HTML.

$(function () {
    $('[data-toggle="popover"]').popover()
});

$(document).ready(function(){


// Controls the chart vivus animation

    var vivusIsDone = true;

    const refiningVivus = new Vivus('diagram', {
        pathTimingFunction: Vivus.EASE,
        duration: 20,
        type:'scenario-sync',
        start:'manual'
    }, function(){
        $("#diagramPlayButton").toggleClass("fa-play-circle fa-pause-circle");
        vivusIsDone = true;
    });

    refiningVivus.finish();

    $("#diagramPlayButton").click(function(){

        var x = document.getElementById("refiningprocess");

        if (x.paused) {
            x.play();
            if (vivusIsDone)    {
                refiningVivus.reset();
                refiningVivus.play();
                $(this).toggleClass("fa-play-circle fa-pause-circle");
                vivusIsDone = false;
            }
            else    {
                refiningVivus.play();
                $(this).toggleClass("fa-play-circle fa-pause-circle");
            }
        }

        else {
            x.pause();
            $(this).toggleClass("fa-play-circle fa-pause-circle");
            refiningVivus.stop();
        }
    });




// Toggles pause button to play when audio files ends (not paused by user)

$('#camille').on('ended', function() {
    $("#playButton1").toggleClass("fa-play-circle fa-pause-circle");
});

$('#darrell').on('ended', function() {
    $("#playButton2").toggleClass("fa-play-circle fa-pause-circle");
});

$('#lorax').on('ended', function() {
    $("#playButton3").toggleClass("fa-play-circle fa-pause-circle");
});

$('#aalbers').on('ended', function() {
    $("#playButton4").toggleClass("fa-play-circle fa-pause-circle");
});

$('#refiningprocess').on('ended', function() {
	$("#diagramPlayButton").addClass("fa-play-circle");
	$("#diagramPlayButton").removeClass("fa-pause-circle");
	refiningVivus.finish();
});




//Code to ensure the diagram SVG and the audio stay synced.

$('#myAudio').on('playing', function() {
    refiningVivus.play();
    $("#diagramPlayButton").addClass("fa-play-circle");
    $("#diagramPlayButton").removeClass("fa-pause-circle");
});

$('#myAudio').on('pause', function() {
    refiningVivus.stop();
    $("#diagramPlayButton").addClass("fa-pause-circle");
    $("#diagramPlayButton").removeClass("fa-play-circle");
});





// Toggles play icon for text audio links and play buttons on click.

$('.audioLink').click(function() {
    $(this).children("i").toggleClass("fa-pause fa-volume-up");
});

$('.playbutton').click(function() {
    $(this).toggleClass("fa-play-circle fa-pause-circle");
});




// Handles small growth of imgs in audio boxes when hovered, but disables on mobile.


function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

if (!isMobileWidth())    {

    $(".audioText").mouseover(function(){
        $(this).fadeTo(300, 1.0);
        $(this).parent().children(".shadeBox").fadeTo(300, 0.6);
        $(this).children("img").css('transform','scale(1.05)');
     });

    $(".audioText").mouseleave(function(){
        $(this).fadeTo(300, 0.0);
        $(this).parent().children(".shadeBox").fadeTo(300, 0.0);
        $(this).children("img").css('transform','scale(1.00)');
    });
}

else    {
    $(".audioText").css("opacity", "1.0");
    $(".shadeBox").css("opacity", "0.5");
}



$(document).ready(function()    {

// Initializes popovers on the page.

$('.popover-dismiss').popover({
      trigger: 'hover'
    });
});




// Handles chart loading, animations, and hover behaviour.

var graphController = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#graphbox",
            triggerHook: "onEnter",
        }
    });

    var isDone = false;

    var graphBuilder = new ScrollMagic.Scene({
        duration: 0,
        offset: 100
    })
    .on("enter", function(){
        if(!isDone)  {
            $("#Titles").addClass("show");
            new Vivus('toDraw', { duration: 100, animTimingFunction: Vivus.EASE, type: 'delayed' }, function(){
                $("#Infoboxes").addClass("show");
                $("#Infoboxlines").addClass("show");
                $(".circle").addClass("show");
                $("#stamp").addClass("show");
                $("#Labels").addClass("show");
                $("#Axis_Labels").addClass("show");

                isDone = true;
            });
        }
    })
    .addTo(graphController);

    



$('#circle1').mouseover(function() {
    $("#infobox1").toggleClass("show");
    $('#circle1').toggleClass("red");
    $('#infoboxline1').toggleClass("show");
});

$('#circle1').mouseout(function() {
    $("#infobox1").toggleClass("show");
    $('#circle1').toggleClass("red");
    $('#infoboxline1').toggleClass("show");
});

$('#circle2').mouseover(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle2').mouseout(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle3').mouseover(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle3').mouseout(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle4').mouseover(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle4').mouseout(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle5').mouseover(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle5').mouseout(function() {
    $("#infobox2").toggleClass("show");
    $('#circle2').toggleClass("red");
    $('#circle3').toggleClass("red");
    $('#circle4').toggleClass("red");
    $('#circle5').toggleClass("red");
    $('#infoboxline2').toggleClass("show");
});

$('#circle6').mouseover(function() {
    $("#infobox3").toggleClass("show");
    $('#circle6').toggleClass("red");
    $('#infoboxline3').toggleClass("show");
});

$('#circle6').mouseout(function() {
    $("#infobox3").toggleClass("show");
    $('#circle6').toggleClass("red");
    $('#infoboxline3').toggleClass("show");
});

$('#circle7').mouseover(function() {
    $("#infobox4").toggleClass("show");
    $('#circle7').toggleClass("red");
    $('#circle8').toggleClass("red");
    $('#infoboxline4').toggleClass("show");
});

$('#circle7').mouseout(function() {
    $("#infobox4").toggleClass("show");
    $('#circle7').toggleClass("red");
    $('#circle8').toggleClass("red");
    $('#infoboxline4').toggleClass("show");
});

$('#circle8').mouseover(function() {
    $("#infobox4").toggleClass("show");
    $('#circle7').toggleClass("red");
    $('#circle8').toggleClass("red");
    $('#infoboxline4').toggleClass("show");
});

$('#circle8').mouseout(function() {
    $("#infobox4").toggleClass("show");
    $('#circle7').toggleClass("red");
    $('#circle8').toggleClass("red");
    $('#infoboxline4').toggleClass("show");
});

$('#circle9').mouseover(function() {
    $("#infobox5").toggleClass("show");
    $('#circle9').toggleClass("red");
    $('#circle10').toggleClass("red");
    $('#infoboxline5').toggleClass("show");
});

$('#circle9').mouseout(function() {
    $("#infobox5").toggleClass("show");
    $('#circle9').toggleClass("red");
    $('#circle10').toggleClass("red");
    $('#infoboxline5').toggleClass("show");
});

$('#circle10').mouseover(function() {
    $("#infobox5").toggleClass("show");
    $('#circle9').toggleClass("red");
    $('#circle10').toggleClass("red");
    $('#infoboxline5').toggleClass("show");
});

$('#circle10').mouseout(function() {
    $("#infobox5").toggleClass("show");
    $('#circle9').toggleClass("red");
    $('#circle10').toggleClass("red");
    $('#infoboxline5').toggleClass("show");
});

$('#circle11').mouseover(function() {
    $("#infobox6").toggleClass("show");
    $('#circle11').toggleClass("red");
    $('#infoboxline6').toggleClass("show");
});

$('#circle11').mouseout(function() {
    $("#infobox6").toggleClass("show");
    $('#circle11').toggleClass("red");
    $('#infoboxline6').toggleClass("show");
});



//Navbar Updating on scroll to indicate chapter

$(window).on('scroll', function() { 
    if ($(window).scrollTop() >= $('#segment6').offset().top)  { 
        $("#navtext").html("Chapter IV  |  <span class='highlight2'>Epilogue</span>");
    } 

    else if ($(window).scrollTop() >= $('#segment7').offset().top)  { 
        $("#navtext").html("Chapter III  |  <span class='highlight2'>The Liberal Policy</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment4').offset().top)  { 
        $("#navtext").html("Elsewhere  |   <span class='highlight2'>The Scandinavian Way</span>");
    }
    
    else if ($(window).scrollTop() >= $('#segment5').offset().top)  { 
        $("#navtext").html("Chapter III  |   <span class='highlight2'>The Liberal Policy</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment2').offset().top)  { 
        $("#navtext").html("Elsewhere  |   <span class='highlight2'>The Green New Deal</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment3').offset().top)  { 
        $("#navtext").html("Chapter II  |   <span class='highlight2'>La Grève du Climat</span>");
    } 
    
    else if ($(window).scrollTop() >= $('#segment1').offset().top)  { 
        $("#navtext").html("Chapter I  |  <span class='highlight2'>Mr. Lloydminster</span>");
    } 
    
    else   { 
        $("#navtext").html("Introduction  |  <span class='highlight2'>A Crude Divide</span>");
    } 
});

    // Shows chapter 1 title on scroll.

    var title1Controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#title1",
            triggerHook: "onEnter",
        }
    });

    var title1Lines = new ScrollMagic.Scene({
        duration: 0,
        offset: 0
    })
    .on("enter", function(){
        new Vivus('lines1', { duration: 100, pathTimingFunction: Vivus.EASE, type: 'sync' });
    })
    .setClassToggle("#title1Num", "show")
    .addTo(title1Controller);

    // Shows chapter 2 title on scroll.

    var title2Controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#title2",
            triggerHook: "onEnter",
        }
    });

    var title2Lines = new ScrollMagic.Scene({
        duration: 0,
        offset: 150
    })
    .on("enter", function(){
        new Vivus('lines2', { duration: 100, pathTimingFunction: Vivus.EASE, type: 'sync' });
    })
    .setClassToggle("#title2Num", "show")
    .addTo(title2Controller);

    // Shows chapter 3 title on scroll.

    var title3Controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#title3",
            triggerHook: "onEnter",
        }
    });

    var title3Lines = new ScrollMagic.Scene({
        duration: 0,
        offset: 100
    })
    .on("enter", function(){
        new Vivus('lines3', { duration: 100, pathTimingFunction: Vivus.EASE, type: 'sync' });
    })
    .setClassToggle("#title3Num", "show")
    .addTo(title3Controller);

    // Shows chapter 4 title on scroll.

    var title4Controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#title4",
            triggerHook: "onEnter",
        }
    });

    var title4Lines = new ScrollMagic.Scene({
        duration: 0,
        offset: 100
    })
    .on("enter", function(){
        new Vivus('lines4', { duration: 100, pathTimingFunction: Vivus.EASE, type: 'sync' });
    })
    .setClassToggle("#title4Num", "show")
    .addTo(title4Controller);

    // Animates elsewhere sections

    var elsewhere1Controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#elsewhere1",
            triggerHook: "onEnter",
        }
    });

    var elsewhere1Animation = new ScrollMagic.Scene({
        duration: 0,
        offset: 0
    })
    .setClassToggle("#elsewhereAnim1", "show")
    .addTo(elsewhere1Controller);

    var elsewhere2Controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#elsewhere2",
            triggerHook: "onEnter",
        }
    });

    var elsewhere2Animation = new ScrollMagic.Scene({
        duration: 0,
        offset: 0
    })
    .setClassToggle("#elsewhereAnim2", "show")
    .addTo(elsewhere2Controller);







    var featureQuoteController = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerElement: "#featureQuotePin",
            triggerHook: "onLeave",
        }
    });

    var featureQuoteDuration = 2000;
    var wordSpacing = featureQuoteDuration/13;
    
    
    var pinFeatureScene = new ScrollMagic.Scene({
        duration: featureQuoteDuration + 500,
        offset:-75
    })
    .setPin("#featureQuotePin")
    
    .addTo(featureQuoteController)

    var sketch = new ScrollMagic.Scene({
        duration: 0,
        offset: 0
    })
    .setClassToggle("#sketchAd", "visible")
    .addTo(featureQuoteController);
    

    var word1 = new ScrollMagic.Scene({
        duration: 0,
        offset: wordSpacing
    })
    .setClassToggle("#word1", "visible")
    .addTo(featureQuoteController);

    var word2 = new ScrollMagic.Scene({
        duration: 0,
        offset: (2*wordSpacing)
    })
    .setClassToggle("#word2", "visible")
    .addTo(featureQuoteController);

    var word3 = new ScrollMagic.Scene({
        duration: 0,
        offset: (3*wordSpacing)
    })
    .setClassToggle("#word3", "visible")
    .addTo(featureQuoteController);

    var word4 = new ScrollMagic.Scene({
        duration: 0,
        offset: (4*wordSpacing)
    })
    .setClassToggle("#word4", "visible")
    .addTo(featureQuoteController);

    var word5 = new ScrollMagic.Scene({
        duration: 0,
        offset: (5*wordSpacing)
    })
    .setClassToggle("#word5", "visible")
    .addTo(featureQuoteController);

    var word6 = new ScrollMagic.Scene({
        duration: 0,
        offset: (6*wordSpacing)
    })
    .setClassToggle("#word6", "visible")
    .addTo(featureQuoteController);

    var word7 = new ScrollMagic.Scene({
        duration: 0,
        offset: (7*wordSpacing)
    })
    .setClassToggle("#word7", "visible")
    .addTo(featureQuoteController);

    var word8 = new ScrollMagic.Scene({
        duration: 0,
        offset: (8*wordSpacing)
    })
    .setClassToggle("#word8", "visible")
    .addTo(featureQuoteController);

    var word9 = new ScrollMagic.Scene({
        duration: 0,
        offset: (9*wordSpacing)
    })
    .setClassToggle("#word9", "visible")
    .addTo(featureQuoteController);

    var word10 = new ScrollMagic.Scene({
        duration: 0,
        offset: (10*wordSpacing)
    })
    .setClassToggle("#word10", "visible")
    .addTo(featureQuoteController);

    var word11 = new ScrollMagic.Scene({
        duration: 0,
        offset: (11*wordSpacing)
    })
    .setClassToggle("#word11", "visible")
    .addTo(featureQuoteController);

    var extra = new ScrollMagic.Scene({
        duration: 0,
        offset: (13*wordSpacing)
    })
    .setClassToggle(".extra", "visible")
    .addTo(featureQuoteController);



    var navController = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerHook: "onEnter",
        }
    });



    //This scene reveals the navbar on scrolling past the intro sequence.
    
    var pinScene = new ScrollMagic.Scene({
        duration: 0,
        triggerElement: "#segment1"
    })
    .setClassToggle("#mainNav", "visible")
    .addTo(navController)





// Intro Sequence

    var numPhrases = 12; //The total number of phrases currently in the slide deck.
    var phraseDuration = 700; // The length of time BETWEEN each phrase.
    var delay = 100; //A variable to give space between scenes.
    var totalDuration = (numPhrases * phraseDuration) + (5 * delay); // A variable that sets how long the screen should be pinned.

    var controller = new ScrollMagic.Controller({
        globalSceneOptions:{
            triggerHook: "onLeave",
        }
    });

    //This scene pins the div in which the words will appear.
    
    var pinScene = new ScrollMagic.Scene({
        duration: totalDuration + 400
    })
    .setPin("#splash")
    .addTo(controller)

    //This scene reveals the title right when the page loads.

    var titleScene = new ScrollMagic.Scene({
        duration: phraseDuration
    })
    .setClassToggle("#titlePhrase", "visible")
    .addTo(controller)

    var bylineScene = new ScrollMagic.Scene({
        duration: phraseDuration
    })
    .setClassToggle("#bylinePhrase", "visible")
    .addTo(controller)

    var scrollDownScene = new ScrollMagic.Scene({
        duration: phraseDuration
    })
    .setClassToggle("#scrollDown", "visible")
    .addTo(controller)

    //This scene reveals the first phrase.

    var scene1 = new ScrollMagic.Scene({
        duration: phraseDuration * 3,
        offset: phraseDuration
    })
    .setClassToggle("#phrase1", "visible")
    .addTo(controller);

    //This scene reveals the second phrase.

    var scene2 = new ScrollMagic.Scene({
        duration: phraseDuration * 2,
        offset: phraseDuration * 2
    })
    .setClassToggle("#phrase2", "visible")
    .addTo(controller);

    //This scene reveals the third phrase.

    var scene3 = new ScrollMagic.Scene({
        duration: phraseDuration * 1,
        offset: phraseDuration * 3
    })
    .setClassToggle("#phrase3", "visible")
    .addTo(controller);

    //This scene reveals the first phrase in the second phase.

    var scene4 = new ScrollMagic.Scene({
        duration: phraseDuration * 2,
        offset: phraseDuration * 4 + delay
    })
    .setClassToggle("#phrase4", "visible")
    .addTo(controller);

    //This scene reveals the second phrase.

    var scene5 = new ScrollMagic.Scene({
        duration: phraseDuration * 1,
        offset: phraseDuration * 5 + delay
    })
    .setClassToggle("#phrase5", "visible")
    .addTo(controller);

    //This scene reveals the first phrase in the third phase.

    var scene6 = new ScrollMagic.Scene({
        duration: phraseDuration * 4,
        offset: phraseDuration * 6 + (2*delay)
    })
    .setClassToggle("#phrase6", "visible")
    .addTo(controller);

    //This scene reveals the second phrase in the third phase.

    var scene7 = new ScrollMagic.Scene({
        duration: phraseDuration * 3,
        offset: phraseDuration * 7 + (2*delay)
    })
    .setClassToggle("#phrase7", "visible")
    .addTo(controller);

    //This scene reveals the third phrase in the third phase.

    var scene8 = new ScrollMagic.Scene({
        duration: phraseDuration * 2,
        offset: phraseDuration * 8 + (2*delay)
    })
    .setClassToggle("#phrase8", "visible")
    .addTo(controller);

    //This scene reveals the fourth phrase in the third phase.

    var scene9 = new ScrollMagic.Scene({
        duration: phraseDuration * 1,
        offset: phraseDuration * 9 + (2*delay)
    })
    .setClassToggle("#phrase9", "visible")
    .addTo(controller);

    //This scene reveals the first phrase in the fourth phase.

    var scene10 = new ScrollMagic.Scene({
        duration: 0,
        offset: phraseDuration * 10 + (3*delay)
    })
    .setClassToggle("#phrase10", "visible")
    .addTo(controller);

    //This scene reveals the second phrase in the fourth phase.

    var scene11 = new ScrollMagic.Scene({
        duration: 0,
        offset: phraseDuration * 11 + (3*delay)
    })
    .setClassToggle("#phrase11", "visible")
    .addTo(controller);

    //This scene reveals the third phrase in the fourth phase.

    var scene12 = new ScrollMagic.Scene({
        duration: 0,
        offset: phraseDuration * 12 + (3*delay)
    })
    .setClassToggle("#phrase12", "visible")
    .addTo(controller);





// This section reveals pull quotes as they are scrolled by.

    var controller = new ScrollMagic.Controller();

    var revealQuote1 = new ScrollMagic.Scene({
        triggerElement: "#pullquote1",
        trigger: "onEnter",
        duration: "100%",
        offset: -200
    })
    .setClassToggle("#pullquote1", "visible")
    .addTo(controller);

    var revealQuote2 = new ScrollMagic.Scene({
        triggerElement: "#pullquote2",
        trigger: "onEnter",
        duration: "100%",
        offset: -200
    })
    .setClassToggle("#pullquote2", "visible")
    .addTo(controller);




//Global calculation of captionRow height for photo essay divs

    var captionRowHeight = $(window).height() * 2; //Each caption row is set based on the height of the essayDiv window
    $(".captionRow").css("height", captionRowHeight);	 //Sets the height of each caption row based on the above variable.



	//Climate Strikes Photo Essay

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerElement: "#essayDiv4",
            triggerHook: "onLeave",
        }
    });
        
    var duration = $("#essayCaptionBox4").height(); //Sets the height of the duration based on the size of caption rows
    

    // Pins the essay div to the screen to prepare for scrolling divs to come through.
    var scene1 = new ScrollMagic.Scene({
            duration: duration
        })
        .setPin("#essayDiv4", {pushFollowers: false})
        .addTo(controller);

    //Brings in the first photo in the essay.
    var scene2 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 1*(duration/5)
        })
        .on("enter", function(){
            $(".essay4").hide();
            $("#essayPic4-2").fadeTo(50, 1.0);
        })
        .on("start",function(event){
            if (event.scrollDirection == "REVERSE") {
                $("#essayPic4-2").fadeTo(50, 0.0);
                $("#essayPic4-1").fadeTo(0, 1.0);
            }
        })
        .addTo(controller);

    //Brings in the second photo in the essay.
    var scene3 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 2*(duration/5)
        })
        .on("enter", function(){
            $(".essay4").hide();
            $("#essayPic4-3").fadeTo(50, 1.0);
        })
        .addTo(controller);

    //Brings in the third photo in the essay.
    var scene4 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 3*(duration/5)
        })
        .on("enter", function(){
            $(".essay4").hide();
            $("#essayPic4-4").fadeTo(50, 1.0);
        })
        .addTo(controller);

    //Brings in the fourth photo in the essay.
    var scene5 = new ScrollMagic.Scene({
            duration:duration/5,
            offset: 4*(duration/5)
        })
        .on("enter", function(){
            $(".essay4").hide();
            $("#essayPic4-5").fadeTo(50, 1.0);
        })
        .addTo(controller);





//GND Photo Essay

    var controller = new ScrollMagic.Controller(
        {globalSceneOptions:{
            triggerElement: "#essayDiv2",
            triggerHook: "onLeave",
    }
    });
    
    var duration = $("#essayCaptionBox2").height();
    
    var scene1 = new ScrollMagic.Scene({
            duration: duration
        })
        .setPin("#essayDiv2", {pushFollowers: false})
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 1*(duration/5)
        })
        .on("enter", function(){
            $(".essay2").hide();
            $("#essayPic2-2").fadeTo(50, 1.0);
        })
        .on("start",function(event){
            if (event.scrollDirection == "REVERSE") {
                $("#essayPic2-2").fadeTo(0, 0.0);
                $("#essayPic2-1").fadeTo(50, 1.0);
            }
        })
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 2*(duration/5)
        })
        .on("enter", function(){
            $(".essay2").hide();
            $("#essayPic2-3").fadeTo(50, 1.0);
        })
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 3*(duration/5)
        })
        .on("enter", function(){
            $(".essay2").hide();
            $("#essayPic2-4").fadeTo(50, 1.0);
        })
        .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
            duration: duration/5,
            offset: 4*(duration/5)
        })
        .on("enter", function(){
            $(".essay2").hide();
            $("#essayPic2-5").fadeTo(50, 1.0);
        })
        .addTo(controller);






//Copenhill Photo Essay

    var controller = new ScrollMagic.Controller({
        globalSceneOptions:{
                triggerElement: "#essayDiv3",
                triggerHook: "onLeave",
    }});
        
    var duration = $("#essayCaptionBox3").height();
    
    var scene1 = new ScrollMagic.Scene({
            duration: duration
        })
        .setPin("#essayDiv3", {pushFollowers: false})
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({
            duration: duration/4,
            offset: 1*(duration/4)
        })
        .on("enter", function(){
            $(".essay3").hide();
            $("#essayPic3-2").fadeTo(50, 1.0);
        })
        .on("start",function(event){
            if (event.scrollDirection == "REVERSE") {
                $("#essayPic3-2").fadeTo(0, 0.0);
                $("#essayPic3-1").fadeTo(50, 1.0);
            }
        })
        .addTo(controller);

    var scene3 = new ScrollMagic.Scene({
            duration: duration/4,
            offset: 2*(duration/4)
        })
        .on("enter", function(){
            $(".essay3").hide();
            $("#essayPic3-3").fadeTo(50, 1.0);
        })
        .addTo(controller);

    var scene4 = new ScrollMagic.Scene({
            duration: duration/4,
            offset: 3*(duration/4)
        })
        .on("enter", function(){
            $(".essay3").hide();
            $("#essayPic3-4").fadeTo(50, 1.0);
        })
        .addTo(controller);
});


