/******************************************
    Version: 1.0
/****************************************** */

(function ($) {
    "use strict";

    /* ==============================================
    Fixed menu
    =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header_style_01').addClass('fixed-menu');
        } else {
            $('.header_style_01').removeClass('fixed-menu');
        }
    });

    /* ==============================================
    Back top
    =============================================== */
    jQuery(window).on("scroll",function () {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({
                bottom: "75px"
            });
        } else {
            jQuery('.dmtop').css({
                bottom: "-100px"
            });
        }
    });

    /* ==============================================
       Loader -->
        =============================================== */

    $(window).load(function () {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

	/* ==============================================
     Flip Bar -->
     =============================================== */

    $(document).on("ready",function () {
        $(".map-btn").on('click', function () {
            $(".map-box").slideToggle("slow");
        });
    });

	/* ==============================================
		Scroll to top  
	============================================== */

    if ($('#scroll-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#scroll-to-top').addClass('show');
                } else {
                    $('#scroll-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#scroll-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* ==============================================
     Fun Facts -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

	/* ==============================================
     Bootstrap Touch Slider -->
     =============================================== */
    $('#bootstrap-touch-slider').bsTouchSlider();

})(jQuery);