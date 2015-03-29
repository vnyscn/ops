




/*
 FILE ARCHIVED ON 7:57:21 Apr 24, 2014 AND RETRIEVED FROM THE
 INTERNET ARCHIVE ON 8:55:56 Aug 30, 2014.
 JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.
 
 ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
 SECTION 108(a)(3)).
 */
//Main Function
var Main = function () {
//    function topmenu_dropdown_hover() {
//        if ($(window).width() >= 768) {
//            $('body').on('mouseover', '.dropdown-toggle', function (e) {
//                $(e.currentTarget).trigger('click')
//            })
//        }
//    }
    function sidebar_leftmenu() {
        $(document).ready(function () {
            $('[data-toggle=offcanvas]').click(function () {
                $('.row-offcanvas').toggleClass('active');
            });
            $('#sidebar li').hover(
                    function () {
                        $(this).addClass('hover')
                    },
                    function () {
                        $(this).removeClass('hover')
                    }
            )
        });
    }
    var hide_divContent = function () {
        $(document).ready(function () {

            $('.btn-minimize').bind('click', function (e) {
                var n = $(this).parent().parent().next(".box-content");
                if (n.is(":visible")) {
                    n.hide('500');
                    $("i", $(this)).removeClass("fa fa-chevron-up").addClass("fa fa-chevron-down");
                } else {
                    n.show('500');
                    $("i", $(this)).removeClass("fa fa-chevron-down").addClass("fa fa-chevron-up");
                }
            });
        });
    };
    var runContainerHeight = function () {
        mainContainer = $('.main-content > .container');
        mainNavigation = $('.main-navigation');
        if (mainContainer.outerHeight() < mainNavigation.outerHeight()) {
            mainContainer.css('min-height', mainNavigation.outerHeight());
        } else {
            mainContainer.css('min-height', '760px');
        }
        ;
    };

    //function to activate the 3rd and 4th level menus
    var runNavigationMenu = function () {
        $('.left_menu li.active').addClass('open');
        $('.left_menu > li a').bind('click', function () {
            if ($(this).parent().children('ul').hasClass('sub-menu') && (!$('body').hasClass('navigation-small') || !$(this).parent().parent().hasClass('left_menu'))) {
                if (!$(this).parent().hasClass('open')) {
                    $(this).parent().addClass('open');
                    $(this).parent().parent().children('li.open').not($(this).parent()).not($('.left_menu > li.active')).removeClass('open').children('ul').slideUp(500);
                    $(this).parent().children('ul').slideDown(500, function () {
                        runContainerHeight();
                    });
                } else {
                    if (!$(this).parent().hasClass('active')) {
                        $(this).parent().parent().children('li.open').not($('.left_menu > li.active')).removeClass('open').children('ul').slideUp(500, function () {
                            runContainerHeight();
                        });
                    } else {
                        $(this).parent().parent().children('li.open').removeClass('open').children('ul').slideUp(500, function () {
                            runContainerHeight();
                        });
                    }
                }
            }
        });
    };
    //function to activate the Go-Top button
    var runGoTop = function () {
        $('.go-top').bind('click', function (e) {
            $("html, body").animate({scrollTop: 0}, "slow");
            e.preventDefault();
        });
    };
    return {
        //main function to initiate template pages
        init: function () {
           // topmenu_dropdown_hover();
            hide_divContent();
            sidebar_leftmenu();
            runNavigationMenu();
            runGoTop();
        }
    };
}();