$(function() {      

    var home         = $("#home"),
        resume       = $("#resume"),
        project      = $("project"),
        about        = $("#about"),
        contact      = $("contact"),
        homeLayer    = $("#home-layer"),
        resumeLayer  = $("#resume-layer"),
        projectLayer = $("#project-layer"),
        contactLayer = $("#contact-layer"),
        aboutLayer   = $("#about-layer"),

        wrapper      = $("#wrapper"),
        navButton    = $(".nav-button"),
        topButton    = $("#top-button"),
        preLayer     = homeLayer,
        clikedToken  = null,
        currLayer    = null;

    navButton.click(function(){
        $("html, body").animate({ scrollTop: wrapper.offset().top }, 300, "swing");

        clikedToken = $(this).attr("id")
        if (clikedToken === "home")
            currLayer = homeLayer;
        else if (clikedToken === "resume")
            currLayer = resumeLayer;
        else if (clikedToken === "project")
            currLayer = projectLayer;
        else if (clikedToken === "about")
            currLayer = aboutLayer;
        else if (clikedToken === "contact")
            currLayer = contactLayer;

        if (currLayer.css("display") == "none") {
            preLayer.hide();
            preLayer = currLayer;
            currLayer.fadeIn();
        }
    });

    topButton.click(function(){
        $("html, body").animate({ scrollTop: wrapper.offset().top }, 250, "swing");
    });

});