$(function() {

    $(window).load(function(){
        $("#loading-page").fadeOut("slow");
    });

    var homeLayer    = $("#home-layer"),
        resumeLayer  = $("#resume-layer"),
        projectLayer = $("#project-layer"),
        contactLayer = $("#contact-layer"),
        blogLayer   = $("#blog-layer"),

        wrapper      = $("#wrapper"),
        navButton    = $(".nav-button"),
        topButton    = $("#top-button"),
        preLayer     = homeLayer,
        clikedToken  = null,
        currLayer    = null;

    navButton.click(function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: wrapper.offset().top }, 300, "swing");

        clikedToken = $(this).attr("id");

        // var headerName = document.getElementById("title-layer");
        // if (clikedToken === "home") {
        //     headerName.style.color = "rgb(0,0,0)";
        // }
        // else {
        //     headerName.style.color = "140014";
        // }

        if (clikedToken === "home")
            currLayer = homeLayer;
        else if (clikedToken === "resume")
            currLayer = resumeLayer;
        else if (clikedToken === "project")
            currLayer = projectLayer;
        else if (clikedToken === "blog")
            currLayer = blogLayer;
        else if (clikedToken === "contact")
            currLayer = contactLayer;

        if (currLayer.css("display") == "none") {
            preLayer.hide();
            currLayer.fadeIn();
            preLayer = currLayer;
        }
    });

    topButton.click(function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: wrapper.offset().top }, 250, "swing");
    });

});
