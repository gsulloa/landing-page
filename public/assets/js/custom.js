/* eslint-disable */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var resizeId;
var marqueeInitialized = 0;


$(document).ready(onChange);
$(document).change(onChange);

function onChange($) {
    "use strict";
    console.log("change")

	$('.navbar-nav .nav-link').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

//  Background

    $("[data-bg-color], [data-bg-image]").each(function() {
        var $this = $(this);

        if( $this.hasClass("ts-separate-bg-element") ){
            $this.append('<div class="ts-background">');

            // Background Color

            if( $("[data-bg-color]") ){
                $this.find(".ts-background").css("background-color", $this.attr("data-bg-color") );
            }

            // Background Image

            if( $this.attr("data-bg-image") !== undefined ){
                $this.find(".ts-background").append('<div class="ts-background-image">');
                $this.find(".ts-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                $this.find(".ts-background-image").css("opacity", $this.attr("data-bg-image-opacity") );

                $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                $this.find(".ts-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                $this.find(".ts-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
            }

            // Parallax effect

            if( $this.attr("data-bg-parallax") !== undefined ){
                $this.find(".ts-background-image").addClass("ts-parallax-element");
            }
        }
        else {

            if(  $this.attr("data-bg-color") !== undefined ){
                $this.css("background-color", $this.attr("data-bg-color") );
                if( $this.hasClass("btn") ) {
                    $this.css("border-color", $this.attr("data-bg-color"));
                }
            }

            if( $this.attr("data-bg-image") !== undefined ){
                $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );

                $this.css("background-size", $this.attr("data-bg-size") );
                $this.css("background-repeat", $this.attr("data-bg-repeat") );
                $this.css("background-position", $this.attr("data-bg-position") );
                $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
            }

        }
    });


    $("[data-mask-top-nw-color]").each(function() {
        var bgColor = $(this).attr("data-mask-top-nw-color").replace("#", "%23");
        $(this).prepend(
            "<div class='ts-mask-top-nw'></div>"
        );
        $(this).find(".ts-mask-top-nw").css("background-image", "url(\"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20%20width=\'1923.947\'%20height=\'180.528\'%3E%3cpath%20fill=\'"+bgColor+"\'%20d=\'M0%200v7.15c0%2022.048%2018.018%2040.97%2040.04%2042.048l1843.869%2090.284c22.021%201.079%2040.039%2019.549%2040.039%2041.046V0H0z\'/%3E%3c/svg%3E\")" );
    });

    $("[data-mask-bottom-nw-color]").each(function() {
        var bgColor = $(this).attr("data-mask-top-nw-color").replace("#", "%23");
        $(this).prepend(
            "<div class='ts-mask-bottom-nw'></div>"
        );
        $(this).find(".ts-mask-bottom-nw").css("background-image", "url(\"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20%20width=\'1923.947\'%20height=\'180.528\'%3E%3cpath%20fill=\'"+bgColor+"\'%20d=\'M0%200v7.15c0%2022.048%2018.018%2040.97%2040.04%2042.048l1843.869%2090.284c22.021%201.079%2040.039%2019.549%2040.039%2041.046V0H0z\'/%3E%3c/svg%3E\")" );
    });

    $("[data-mask-top-wn-color]").each(function() {
        var bgColor = $(this).attr("data-mask-top-wn-color").replace("#", "%23");
        $(this).prepend(
            "<div class='ts-mask-top-wn'></div>"
        );
        $(this).find(".ts-mask-top-wn").css("background-image", "url(\"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20%20width=\'1923.946\'%20height=\'180.528\'%3E%3cpath%20fill=\'"+bgColor+"\'%20d=\'M1923.946,182v-7.13c0-21.983-18.018-40.849-40.039-41.925L40.039,42.925C18.018,41.85,0,23.434,0,2v180H1923.946z\'/%3E%3c/svg%3E\")" );
    });

    $("[data-mask-bottom-wn-color]").each(function() {
        var bgColor = $(this).attr("data-mask-bottom-wn-color").replace("#", "%23");
        $(this).prepend(
            "<div class='ts-mask-bottom-wn'></div>"
        );
        $(this).find(".ts-mask-bottom-wn").css("background-image", "url(\"data:image/svg+xml,%3csvg%20xmlns=\'http://www.w3.org/2000/svg\'%20%20width=\'1923.946\'%20height=\'180.528\'%3E%3cpath%20fill=\'"+bgColor+"\'%20d=\'M1923.946,182v-7.13c0-21.983-18.018-40.849-40.039-41.925L40.039,42.925C18.018,41.85,0,23.434,0,2v180H1923.946z\'/%3E%3c/svg%3E\")" );
    });


//  Parallax Background Image

    $("[data-bg-parallax='scroll']").each(function() {
        var speed = $(this).attr("data-bg-parallax-speed");
        var $this = $(this);
        var isVisible;
        var backgroundPosition;

        $this.isInViewport(function(status) {
            if (status === "entered") {
                isVisible = 1;
                var position;

                $(window).scroll(function () {
                    if( isVisible === 1 ){
                        position = $(window).scrollTop() - $this.offset().top;
                        backgroundPosition = (100 - (Math.abs((-$(window).height()) - position) / ($(window).height()+$this.height()))*100);
                        if( $this.find(".ts-parallax-element").hasClass("ts-background-image") ){
                            $this.find(".ts-background-image.ts-parallax-element").css("background-position-y", (position/speed) + "px");
                        }
                        else {
                            $this.find(".ts-parallax-element").css("transform", "translateY(" +(position/speed)+ "px)");
                        }
                    }
                });
            }
            if (status === "leaved"){
                isVisible = 0;
            }
        });
    });


//  Responsive Video Scaling

    if ($(".ts-video-bg").length > 0) {
        $(this).fitVids();
    }

    $(".ts-labels-inside-input input, .ts-labels-inside-input textarea").focusin(function() {
        $(this).parent().find("label").addClass("focused");
        })
        .focusout(function() {
            if( $(this).val().length === 0 ){
                $(this).parent().find("label").removeClass("focused")
        }
    });

    $("select").each(function(){
        $(this).wrap('<div class="select-wrapper"></div>');
    });

    // Owl Carousel

    var $owlCarousel = $(".owl-carousel");

    if( $owlCarousel.length ){
        $owlCarousel.each(function() {

            var items = parseInt( $(this).attr("data-owl-items"), 10);
            if( !items ) items = 1;

            var nav = parseInt( $(this).attr("data-owl-nav"), 2);
            if( !nav ) nav = 0;

            var dots = parseInt( $(this).attr("data-owl-dots"), 2);
            if( !dots ) dots = 0;

            var center = parseInt( $(this).attr("data-owl-center"), 2);
            if( !center ) center = 0;

            var loop = parseInt( $(this).attr("data-owl-loop"), 2);
            if( !loop ) loop = 0;

            var margin = parseInt( $(this).attr("data-owl-margin"), 2);
            if( !margin ) margin = 0;

            var autoWidth = parseInt( $(this).attr("data-owl-auto-width"), 2);
            if( !autoWidth ) autoWidth = 0;

            var navContainer = $(this).attr("data-owl-nav-container");
            if( !navContainer ) navContainer = 0;

            var autoplay = parseInt( $(this).attr("data-owl-autoplay"), 2);
            if( !autoplay ) autoplay = 0;

            var autoplayTimeOut = parseInt( $(this).attr("data-owl-autoplay-timeout"), 10);
            if( !autoplayTimeOut ) autoplayTimeOut = 5000;

            var autoHeight = parseInt( $(this).attr("data-owl-auto-height"), 2);
            if( !autoHeight ) autoHeight = 0;

            var fadeOut = $(this).attr("data-owl-fadeout");
            if( !fadeOut ) fadeOut = 0;
            else fadeOut = "fadeOut";

            if( $("body").hasClass("rtl") ) var rtl = true;
            else rtl = false;

            if( items === 1 ){
                $(this).owlCarousel({
                    navContainer: navContainer,
                    animateOut: fadeOut,
                    autoplayTimeout: autoplayTimeOut,
                    autoplay: 1,
                    autoheight: autoHeight,
                    center: center,
                    loop: loop,
                    margin: margin,
                    autoWidth: autoWidth,
                    items: 1,
                    nav: nav,
                    dots: dots,
                    rtl: rtl,
                    navText: []
                });
            }
            else {
                $(this).owlCarousel({
                    navContainer: navContainer,
                    animateOut: fadeOut,
                    autoplayTimeout: autoplayTimeOut,
                    autoplay: autoplay,
                    autoHeight: autoHeight,
                    center: center,
                    loop: loop,
                    margin: margin,
                    autoWidth: autoWidth,
                    items: 1,
                    nav: nav,
                    dots: dots,
                    rtl: rtl,
                    navText: [],
                    responsive: {
                        1199: {
                            items: items
                        },
                        992: {
                            items: 3
                        },
                        768: {
                            items: 2
                        },
                        0: {
                            items: 1
                        }
                    }
                });
            }

            if( $(this).find(".owl-item").length === 1 ){
                $(this).find(".owl-nav").css( { "opacity": 0,"pointer-events": "none"} );
            }

        });
    }

    $(".ts-count-down").each(function(){
        var date = $(this).attr("data-date");
        $(this).countdown({
            date: date,
            render: function(data) {
                var el = $(this.el);
                el.empty()
                .append("<div>" + this.leadingZeros(data.days, 3) + " <span>Days</span></div>")
                    .append("<figure class='divider'>:</figure>")
                .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>Hours</span></div>")
                    .append("<figure class='divider'>:</figure>")
                .append("<div>" + this.leadingZeros(data.min, 2) + " <span>Minutes</span></div>")
                    .append("<figure class='divider'>:</figure>")
                .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>Seconds</span></div>");
            }
        });
    });

    // Magnific Popup

    var $popupImage = $(".popup-popup");

    if ( $popupImage.length > 0 ) {
        $popupImage.magnificPopup({
            type:'image',
            fixedContentPos: false,
            gallery: { enabled:true },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            callbacks: {
                // This prevents pushing the entire page to the right after opening Magnific popup image
                open: function() {
                    $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
                },
                close: function() {
                    $(".page-wrapper, .navbar-nav").css("margin-right", 0);
                }
            }
        });
    }

    var $videoPopup = $(".video-popup");

    if ( $videoPopup.length > 0 ) {
        $videoPopup.magnificPopup({
            type: "iframe",
            removalDelay: 300,
            mainClass: "mfp-fade",
            overflowY: "hidden",
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src'
            }
        });
    }

    $(".ts-form-email [type='submit']").each(function(){
        var text = $(this).text();
        $(this).html("").append("<span>"+ text +"</span>").prepend("<div class='status'><i class='fas fa-circle-notch fa-spin spinner'></i></div>");
    });

    $(".ts-form-email .btn[type='submit']").on("click", function(e){
        var $button = $(this);
        var $form = $(this).closest("form");
        var pathToPhp = $(this).closest("form").attr("data-php-path");
        $form.validate({
            submitHandler: function() {
                $button.addClass("processing");
                $.post( pathToPhp, $form.serialize(),  function(response) {
                    $button.addClass("done").find(".status").append(response).prop("disabled", true);
                });
                return false;
            }
        });
    });

    $("form:not(.ts-form-email)").each(function(){
        $(this).validate();
    });

    $("[data-animate]").scrolla({
        mobile: true
    });

// On RESIZE actions

    $(window).on("resize", function(){
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 250);
    });

// On SCROLL actions

    $(window).on("scroll", function(){
        if ( $(window).scrollTop() > $(window).height() ) {
            $(".navbar").addClass("in");
        }
        else {
            $(".navbar").removeClass("in");
        }
    });

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Do after resize

function doneResizing(){
    $(".owl-carousel").trigger('next.owl.carousel');
}

// Set Hero height



// Smooth Scroll





// Return scrollbar width

function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
}

function simpleMap(latitude, longitude, markerImage, mapStyle, mapElement, markerDrag){
    if (!markerDrag){
        markerDrag = false;
    }
    var mapCenter = new google.maps.LatLng(latitude,longitude);
    var mapOptions = {
        zoom: 13,
        center: mapCenter,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: mapStyle
    };
    var element = document.getElementById(mapElement);
    var map = new google.maps.Map(element, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude,longitude),
        map: map,
        icon: markerImage,
        draggable: markerDrag
    });
}