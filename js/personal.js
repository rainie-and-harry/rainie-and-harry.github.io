
	// start header
	function getScrollAmountForStickyHeader() {
		return void 0 !== qodeGlobalVars.vars.page_scroll_amount_for_sticky && "" !== qodeGlobalVars.vars.page_scroll_amount_for_sticky ? amount = qodeGlobalVars.vars.page_scroll_amount_for_sticky : $(".carousel.full_screen").length ? amount = $(".carousel").height() : amount = scroll_amount_for_sticky, amount
	}
	
	function qodeBrowserDetection() {
		var e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
			t = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
			o = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
			n = window.navigator.userAgent.indexOf("MSIE ");
		e && qode_body.addClass("qode-chrome"), t && qode_body.addClass("qode-safari"), o && qode_body.addClass("qode-firefox"), (n > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && qode_body.addClass("qode-ms-explorer"), /Edge\/\d./i.test(navigator.userAgent) && qode_body.addClass("qode-edge")
	}
	
	function headerSize(e) {
		"use strict";
		//if ($("header.page_header").hasClass("scroll_top") && $("header.page_header").hasClass("has_top") && ($("header.page_header").hasClass("fixed") || $("header.page_header").hasClass("fixed_hiding")) && (e >= 0 && e <= 34 ? ($("header.page_header").css("top", -e), $("header.page_header").css("margin-top", 0), $(".header_top").show()) : e > 34 && ($("header.page_header").css("top", "-34px"), $("header.page_header").css("margin-top", 34), $(".header_top").hide())), sticky_amount = getScrollAmountForStickyHeader(), $("header").hasClass("regular") && (header_height - logo_height >= 10 ? $(".q_logo a").height(logo_height) : $(".q_logo a").height(header_height - 10), $(".q_logo a img").css("height", "100%")), $("header.page_header").hasClass("fixed") && ($top_header_height = $("header.page_header").hasClass("scroll_top") ? 34 : 0, header_height - e + $top_header_height >= min_header_height_scroll && e >= $top_header_height ? ($("header.page_header").removeClass("scrolled"), $("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height - e + $top_header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height - e + $top_header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height - e + $top_header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", header_height - e + $top_header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height - e + $top_header_height + "px"), header_height - logo_height > 0 ? $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - e + $top_header_height - 10 + "px")) : e < $top_header_height ? ($("header.page_header").removeClass("scrolled"), $("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", header_height + "px"), $("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height + "px"), header_height - logo_height > 0 ? $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - 10 + "px")) : header_height - e + $top_header_height < min_header_height_scroll && ($("header.page_header").addClass("scrolled"), $("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", min_header_height_scroll + "px"), $("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", min_header_height_scroll + "px"), $("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", min_header_height_scroll + "px"), $("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", min_header_height_scroll + "px"), $("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", min_header_height_scroll + "px"), min_header_height_scroll - logo_height > 0 ? $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", min_header_height_scroll - 10 + "px")), $("header.page_header").hasClass("centered_logo") && $("header.page_header").hasClass("centered_logo_animate") ? header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e >= $top_header_height ? $(".q_logo a").height(header_height - e + $top_header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e < $top_header_height ? $(".q_logo a").height(header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height > min_header_height_scroll - 10 ? $(".q_logo a").height(min_header_height_scroll - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height < min_header_height_scroll - 10 ? $(".q_logo a").height(logo_height) : (e + $top_header_height === 0 && header_height, $(".q_logo a").height(logo_height)) : $("header.page_header").hasClass("centered_logo") ? ($(".q_logo a").height(logo_height), $(".q_logo img").height("auto")) : $(".q_logo img").height("100%"), setLeftPostionedMenuPadding()), $("header.page_header").hasClass("fixed_hiding") && (e < scroll_amount_for_fixed_hiding ? $("header.page_header").removeClass("scrolled") : $("header.page_header").addClass("scrolled"), $(".q_logo a").height(logo_height / 2), $(".q_logo img").height("100%")), $("header.page_header").hasClass("stick") || $("header.page_header").hasClass("stick_with_left_right_menu")) {
        if ($("header.page_header").hasClass("scroll_top") && $("header.page_header").hasClass("has_top") && ($("header.page_header").hasClass("fixed") || $("header.page_header").hasClass("fixed_hiding")) && (e >= 0 && e <= 34 ? ($("header.page_header").css("top", -e),
        $("header.page_header").css("margin-top", 0),
        $(".header_top").show()) : e > 34 && ($("header.page_header").css("top", "-34px"),
        $("header.page_header").css("margin-top", 34),
        $(".header_top").hide())),
        sticky_amount = getScrollAmountForStickyHeader(),
        $("header").hasClass("regular") && (header_height - logo_height >= 10 ? $(".q_logo a").height(logo_height) : $(".q_logo a").height(header_height - 10),
        $(".q_logo a img").css("height", "100%")),
        $("header.page_header").hasClass("fixed") && ($top_header_height = $("header.page_header").hasClass("scroll_top") ? 34 : 0,
        header_height - e + $top_header_height >= min_header_height_scroll && e >= $top_header_height ? ($("header.page_header").removeClass("scrolled"),
        $("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height - e + $top_header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height - e + $top_header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height - e + $top_header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", header_height - e + $top_header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height - e + $top_header_height + "px"), header_height - logo_height > 0 ? $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - e + $top_header_height - 10 + "px")) : e < $top_header_height ? ($("header.page_header").removeClass("scrolled"),
        $("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", header_height + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height + "px"),
        header_height - logo_height > 0 ? $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - 10 + "px")) : header_height - e + $top_header_height < min_header_height_scroll && ($("header.page_header").addClass("scrolled"),
        $("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", min_header_height_scroll + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", min_header_height_scroll + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", min_header_height_scroll + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", min_header_height_scroll + "px"),
        $("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", min_header_height_scroll + "px"), min_header_height_scroll - logo_height > 0 ? $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", min_header_height_scroll - 10 + "px")),
        $("header.page_header").hasClass("centered_logo") && $("header.page_header").hasClass("centered_logo_animate") ? header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e >= $top_header_height ? $(".q_logo a").height(header_height - e + $top_header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e < $top_header_height ? $(".q_logo a").height(header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height > min_header_height_scroll - 10 ? $(".q_logo a").height(min_header_height_scroll - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height < min_header_height_scroll - 10 ? $(".q_logo a").height(logo_height) : (e + $top_header_height === 0 && header_height,
        $(".q_logo a").height(logo_height)) : $("header.page_header").hasClass("centered_logo") ? ($(".q_logo a").height(logo_height),
        $(".q_logo img").height("auto")) : $(".q_logo img").height("100%"),
        setLeftPostionedMenuPadding()),
        $("header.page_header").hasClass("fixed_hiding") && (e < scroll_amount_for_fixed_hiding ? $("header.page_header").removeClass("scrolled") : $("header.page_header").addClass("scrolled"),
        $(".q_logo a").height(logo_height / 2),
        $(".q_logo img").height("100%")),
        $("header.page_header").hasClass("stick") || $("header.page_header").hasClass("stick_with_left_right_menu")) {    
			if (e > sticky_amount) {
				if (!$("header.page_header").hasClass("sticky")) {
					$top_header_height = $("header.page_header").hasClass("has_top") ? 34 : 0;
					var t = $("header.page_header").hasClass("centered_logo") ? $("header.page_header").height() : header_height + $top_header_height;
					$("header.page_header").hasClass("menu_bottom") && (t = header_height + 60), $("header.page_header").addClass("sticky"), $(".content").css("padding-top", t), window.clearTimeout(sticky_animate), sticky_animate = window.setTimeout(function() {
						$("header.page_header").addClass("sticky_animate")
					}, 100), min_header_height_sticky - logo_height >= 10 ? $(".q_logo a").height(logo_height) : $(".q_logo a").height(min_header_height_sticky - 10), $("header.page_header").hasClass("menu_bottom") && initDropDownMenu()
				}
				min_header_height_sticky - logo_height >= 10 ? $(".q_logo a").height(logo_height) : $(".q_logo a").height(min_header_height_sticky - 10)
			} else $("header.page_header").hasClass("sticky") && ($("header").removeClass("sticky_animate"), $("header").removeClass("sticky"), $(".content").css("padding-top", "0px"), $("header.page_header").hasClass("menu_bottom") && initDropDownMenu()), setMargingsForLeftAndRightMenu(), $("header.page_header").hasClass("centered_logo") ? ($(".q_logo a").height(logo_height), $(".q_logo img").height("auto")) : header_height - logo_height >= 10 ? $(".q_logo a").height(logo_height) : $(".q_logo a").height(header_height - 10), $(".q_logo a img").css("height", "100%");
			setLeftPostionedMenuPadding()
		}
	}
	
	function qodeMobileHeaderBehavior() {
		if ($("header").hasClass("sticky_mobile")) {
			var e = $(".page_header"),
				t = (e.find(".mobile_menu_button"), e.outerHeight()),
				o = $("#wpadminbar").length ? $("#wpadminbar").height() : 0,
				n = t,
				i = $scroll,
				a = function() {
					if (e.find(".header_inner").css("padding-top", 0), $window_width < 1e3) {
						var a = $scroll;
						a > n ? (e.addClass("qode-animate-mobile-header"), $(".content").css("padding-top", t)) : (e.removeClass("qode-animate-mobile-header"), $(".content").css("padding-top", 0)), a > i && a >= n || a <= n ? (e.removeClass("mobile-header-appear"), e.find(".header_inner").css("padding-top", 0)) : (e.addClass("mobile-header-appear"), e.find(".header_inner").css("padding-top", o)), i = $scroll
					}
				};
			qode_window.on("scroll resize", function() {
				a()
			})
		}
	}
	
	function setMargingsForLeftAndRightMenu() {
		"use strict";
		if ($("header.page_header").hasClass("stick_with_left_right_menu") && !$("header.page_header").hasClass("left_right_margin_set")) {
			var e = $(".q_logo a img").width() / 2;
			0 == $scroll && 0 != e && $("header.page_header").addClass("left_right_margin_set"), $(".logo_wrapper").width(2 * e), $("nav.main_menu.left_side > ul > li:last-child").css("margin-right", e), $("nav.main_menu.right_side > ul > li:first-child").css("margin-left", e), $(".rtl nav.main_menu.left_side > ul > li:first-child").css("margin-right", e), $(".rtl nav.main_menu.left_side > ul > li:last-child").css("margin-right", 0), $(".rtl nav.main_menu.right_side > ul > li:last-child").css("margin-left", e), $(".rtl nav.main_menu.right_side > ul > li:first-child").css("margin-left", 0)
		}
	}
	
	function setLeftPostionedMenuPadding() {
		"use strict";
		var e = $("header:not(.centered_logo) nav.main_menu");
		if (e.length && e.hasClass("left")) {
			var t = $(".q_logo a img").filter(function() {
				return "1" == $(this).css("opacity")
			});
			e.css("left", t.width())
		}
	}
	
	function logoSizeOnSmallScreens() {
		"use strict";
		80 < logo_height ? $(".q_logo a").height(80) : $(".q_logo a").height(logo_height), $(".q_logo a img").css("height", "100%"), $("header.page_header").removeClass("sticky_animate sticky"), $(".content").css("padding-top", "0px")
	}
	
	function contentMinHeight() {
		"use strict";
		if ($("header .header_bottom").length || $("header .bottom_header").length) {
			if ($("header .header_bottom").length) var e = $("header .header_bottom").css("background-color");
			if ($("header .bottom_header").length) var e = $("header .bottom_header").css("background-color");
			var t = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")).split(/,\s*/)[3],
				o = void 0 != t || $("header.page_header").hasClass("transparent") ? 0 : $("header.page_header").height();
			$("body .content").css("min-height", $window_height - o - $("footer:not(.uncover)").height())
		}
	}

    function contentMinHeightWithPaspartu() {
        "use strict";
        if ($(".paspartu_enabled").length) {
            var e, t = 0,
                o = $window_width * paspartu_width,
                n = $("footer").height();
            if ($(".disable_footer").length && (n = 0), $(".vertical_menu_enabled").length ? $(".paspartu_top").length && $(".paspartu_middle_inner").length && (t += o) : $(".paspartu_top").length && (t += o), !$(".paspartu_bottom").length && $(".disable_bottom_paspartu").length || (t += o), $(".vertical_menu_enabled").length) e = $window_height - t - n;
            else {
                if ($("header .header_bottom").length) var i = $("header .header_bottom").css("background-color");
                if ($("header .bottom_header").length) var i = $("header .bottom_header").css("background-color");
                if (void 0 !== i) var a = i.substring(i.indexOf("(") + 1, i.lastIndexOf(")")).split(/,\s*/)[3];
                var r = void 0 != a || $("header.page_header").hasClass("transparent") ? 0 : $("header.page_header").height();
                e = $window_height - r - t - n
            }
            $(".content").length && $(".content").css("min-height", e)
        }
    }

    function checkTitleToShowOrHide() {
        if ($(".title_outer.animate_title_area").length) {
            var e = $(".title_outer").data("height");
            $scroll > $(".title").height() && $(".title_outer").css({
                height: e,
                opacity: "1",
                overflow: "visible"
            })
        }
    }

    function contentMenuPosition() {
        "use strict";
        if ($("nav.content_menu").length) {
            if (content_menu_position > sticky_amount) var e = min_header_height_sticky;
            else var e = 0;
            content_menu_position - e - content_menu_top_add - $scroll <= 0 && ($("header").hasClass("stick") || $("header").hasClass("stick_with_left_right_menu")) ? (content_menu_position < sticky_amount ? $scroll > sticky_amount ? $("nav.content_menu").css({
                position: "fixed",
                top: min_header_height_sticky + content_menu_top_add
            }).addClass("fixed") : $("nav.content_menu").css({
                position: "fixed",
                top: 0,
                transition: "none"
            }).addClass("fixed") : $("nav.content_menu").css({
                position: "fixed",
                top: min_header_height_sticky + content_menu_top_add
            }).addClass("fixed"), $("header.sticky").addClass("no_shadow"), $(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : content_menu_position - content_menu_top - content_menu_top_add - $scroll <= 0 && !$("header").hasClass("stick") ? ($("nav.content_menu").css({
                position: "fixed",
                top: content_menu_top + content_menu_top_add
            }).addClass("fixed"), $(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : ($("nav.content_menu").css({
                position: "relative",
                top: "0px"
            }).removeClass("fixed"), $("header.sticky").removeClass("no_shadow"), $(".content > .content_inner > .container > .container_inner").css("margin-top", "0px"), $(".content > .content_inner > .full_width").css("margin-top", "0px")), $(".content .in_content_menu").waypoint(function(e) {
                var t = $(this),
                    o = t.data("q_id");
                $("nav.content_menu.fixed li a").each(function() {
                    $(this).attr("href") === o ? $(this).parent().addClass("active") : $(this).parent().removeClass("active")
                })
            }, {
                offset: "150"
            })
        }
    }

    function initMobileMenu() {
        "use strict";
        $(".mobile_menu_button > span").on("tap click", function(e) {
            e.preventDefault(), $(".mobile_menu > ul").is(":visible") ? $(".mobile_menu > ul").slideUp(200) : $(".mobile_menu > ul").slideDown(200)
        }), initInsideMobileMenu()
    }
    
    function initInsideMobileMenu() {
        "use strict";
        $(".mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*='#']").on("tap click", function(e) {
            e.preventDefault(), $(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible") ? ($(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200), $(this).closest("li.has_sub").removeClass("open_sub")) : ($(this).closest("li.has_sub").addClass("open_sub"), $(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200))
        }), $(".mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*='#']").on("tap click", function(e) {
            e.preventDefault(), $(this).parent().find("ul.sub_menu").is(":visible") ? ($(this).parent().find("ul.sub_menu").slideUp(200), $(this).parent().removeClass("open_sub")) : ($(this).parent().addClass("open_sub"), $(this).parent().find("ul.sub_menu").slideDown(200))
        }), $(".mobile_menu ul li > a, .q_logo a").on("click", function() {
            "http://#" !== $(this).attr("href") && "#" !== $(this).attr("href") && $(".mobile_menu > ul").slideUp()
        })
    }

	//var $ = jQuery.noConflict();
window.qode = {}, qode.modules = {};
var common = {};
qode.modules.common = common;
var $scroll = 0,
    qode_body = $("body"),
    qode_document = $("document"),
    qode_window = $(window),
    $window_width = $(window).width();
qode.windowWidth = $window_width;
var $window_height = $(window).height();
qode.windowHeight = $window_height;
var logo_height, menu_dropdown_height_set = !1,
    sticky_amount = 0,
    qode_grid_width = 1100,
    content_menu_position, content_menu_top, content_menu_top_add = 0,
    src, next_image, prev_image, $top_header_height, min_w = 1500,
    video_width_original = 1280,
    video_height_original = 720,
    vid_ratio = 1280 / 720,
    skrollr_slider, paspartu_width;
if (void 0 === paspartu_width_init) var paspartu_width_init = .02;
var min_header_height_fixed_hidden = 50;
var scroll_amount_for_sticky = 85;
var scroll_amount_for_fixed_hiding = 200;
var qodeGlobalVars = {"vars":{"page_scroll_amount_for_sticky":""}};
//common.getLoadMoreData = getLoadMoreData, common.setLoadMoreAjaxData = setLoadMoreAjaxData, common.qodeOwlSlider = qodeOwlSlider, qode.animationEnd = animationEventEnd(), qode.transitionEnd = transitionEventEnd(), 
$(document).ready(function() {
    "use strict";
    if ($("header").hasClass("regular") && (content_menu_top = 0), $("header").hasClass("fixed_top_header") && (content_menu_top = header_height), $("header").hasClass("fixed") && (content_menu_top = min_header_height_scroll), $("header").hasClass("fixed_hiding") && (content_menu_top = min_header_height_fixed_hidden + 40), ($("header").hasClass("stick") || $("header").hasClass("stick_with_left_right_menu")) && (content_menu_top = 0), !$("header.page_header").hasClass("scroll_top") && $("header.page_header").hasClass("has_top") && $("header.page_header").hasClass("fixed") && (content_menu_top_add = 34), $("body").hasClass("vertical_menu_enabled")) {
        content_menu_top = 0, content_menu_top_add = 0
    }
    paspartu_width = $window_width < 1024 ? .02 : paspartu_width_init, contentMinHeight(), contentMinHeightWithPaspartu(),
    initMobileMenu()
    //qodeGridWidth(), setDropDownMenuPosition(), initDropDownMenu(), initVerticalMenu(), initVerticalMobileMenu(), initQodeSlider(), initSideMenu(), initPopupMenu(), initMessageHeight(), initToCounter(), initCounter(), $(".vertical_split_slider").length || initCountdown(), initProgressBars(), initListAnimation(), initPieChart(), initPieChartWithIcon(), initServiceAnimation(), initParallaxTitle(), initSideAreaScroll(), initVerticalAreaMenuScroll(), loadMore(), prettyPhoto(), initFlexSlider(), fitVideo(), fitAudio(), initAccordion(), initAccordionContentLink(), qodeInitAccordions(), initMessages(), initProgressBarsIcon(), initMoreFacts(), placeholderReplace(), backButtonShowHide(), backToTop(), initSteps(), showGoogleMap(), initProgressBarsVertical(), initElementsAnimation(), updateShoppingCart(), initHashClick(), initIconWithTextAnimation(), initVideoBackground(), initCheckSafariBrowser(), initSearchButton(), initCoverBoxes(), createContentMenu(), contentMenuScrollTo(), createSelectContentMenu(), initButtonHover(), initEnlargeButton(), initSocialIconHover(), initPageTitleAnimation(), initIconShortcodeHover(), qodeIcon().init(), initIconWithTextHover(), parallaxLayers(), initHorizontalMarquee(), qodeHorizontalMarqueeLoop(), initTextMarquee(), initExpandingImages(), qodeLazyImages(), initItemShowcase(), qodeCTASection().init(), qodeInitInteractiveIconShowcase(), qodeInitSendContactForm(), qodeWorkflow(), qodeCustomFontTypeOut(), qodeMobileHeaderBehavior(), initElementsHolderResponsiveStyle(), 
    $(".widget #searchform").mousedown(function() {
        $(this).addClass("form_focus")
    }).focusout(function() {
        $(this).removeClass("form_focus")
    }), $scroll = $(window).scrollTop(), checkTitleToShowOrHide()
    //, checkVerticalMenuTransparency(), 
    $(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens()
    , $(window).width() > 768 && contentMenuPosition()
    //, contentMenuCheckLastSection(), $("header:not(.stick_with_left_right_menu) .q_logo a").css("visibility", "visible"), initFullScreenTemplate(), showHideVerticalMenu(), initMasonryGallery(), initLoadNextPostOnBottom(), initBlogMasonryGallery(), initBlogGallery(), qodeV2Button().init(), qodeCardsSlider().init(), qodeCardsGallery(), qodeInitEllipticalSlider(), qodeInitPricingCalculator(), qodeSlidingImageHolder(), qodeOwlSlider(), qodeScrollingImage()
}), $(window).on("load", function() {
    "use strict";
    // qodeBrowserDetection(), $(".touchevents .main_menu li:has(div.second)").doubleTapToGo(), setLeftPostionedMenuPadding(), initSmallImageBlogHeight(), setDropDownMenuPosition(), initDropDownMenu(), initPortfolio(), initPortfolioZIndex(), initPortfolioSingleInfo(), initTestimonials(), initTestimonialsCarousel(), initVideoBackgroundSize(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), initPortfolioJustifiedGallery(), initPortfolioMasonry(), initPortfolioMasonryFilter(), initTabs(), qodeInitAdvancedTabs(), qodeInitAdvancedTabsIcons(), countClientsPerRow(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initTitleAreaAnimation(), setContentBottomMargin(), footerWidth(), $("nav.content_menu").length > 0 && (content_menu_position = $("nav.content_menu").offset().top, contentMenuPosition()), contentMenuCheckLastSection(), initQodeCarousel(), initPortfolioSlider(), initBlogSlider(), qodeInitBlogCarouselTitled(), initPreviewSlider(), initInDeviceSlider(), initTabsActiveBorder(), setActiveTabBorder(), initImageHover(), $("header.stick_with_left_right_menu .q_logo a").css("visibility", "visible"), setMargingsForLeftAndRightMenu(), initImageGallerySliderNoSpace(), initVerticalSplitSlider(), initParallax(), initQodeElementAnimationSkrollr(), qodeBlogCompundMasonryGallery().init(), qodeInitStickyWidget(), qodeBlogHeadlines(), qodeCardsSlider().load(), initContentSlider(), qodePageTransitionEffect(), qodeContactPageAcceptance(), setTimeout(function() {
    //     checkAnchorOnScroll(), qodeBlogGalleryAnimation(), checkAnchorOnLoad(), checkHeaderStyleOnScroll(), $(".no-touchevents .carousel").length && skrollr_slider.refresh()
    // }, 700), qodePanelArea(), initDropDownAfterWPMLReplaceMenu()
}), $(window).scroll(function() {
    "use strict";
    $scroll = $(window).scrollTop(), $(window).width() > 1e3 && headerSize($scroll)
    , $(window).width() > 768 && contentMenuPosition()
    //, contentMenuCheckLastSection(), checkVerticalMenuTransparency(), qodeLazyImages(), $(".touchevents .drop_down > ul > li").mouseleave(), $(".touchevents .drop_down > ul > li").blur()
}), $(window).resize(function() {
    "use strict";
    $(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens()
    //$window_width = $(window).width(), $window_height = $(window).height(), paspartu_width = $window_width < 1024 ? .02 : paspartu_width_init, $(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), initMessageHeight(), qodeNumberOfTestimonialsItemsResize(), fitAudio(), initSmallImageBlogHeight(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initVideoBackgroundSize(), countClientsPerRow(), setContentBottomMargin(), footerWidth(), calculateHeights(), $(".vertical_split_slider").height($window_height), initMasonryGallery(), initPortfolioMasonry(), contentMinHeight(), contentMinHeightWithPaspartu(), qodeInitStickyWidget()
});
	// end header


    /* function bridgeQodeAjaxSubmitCommentForm() {
        "use strict";
        var options = {
            success: function() {
                $("#commentform textarea").val("");
                $("#commentform .success p").text("Comment has been sent!");
            }
        };
        $('#commentform').submit(function() {
            $(this).find('input[type="submit"]').next('.success').remove();
            $(this).find('input[type="submit"]').after('<div class="success"><p></p></div>');
            $(this).ajaxSubmit(options);
            return false;
        });
    }
    var header_height = 100;
    var min_header_height_scroll = 57;
    var min_header_height_fixed_hidden = 50;
    var min_header_height_sticky = 60;
    var scroll_amount_for_sticky = 85;
    var content_line_height = 60;
    var header_bottom_border_weight = 1;
    var scroll_amount_for_fixed_hiding = 200;
    var paspartu_width_init = 0.02;
    var add_for_admin_bar = jQuery('body').hasClass('admin-bar') ? 32 : 0;
    min_header_height_fixed_hidden = 50;
    paspartu_width_init = 0.02;
    var logo_height = 130;
    var logo_width = 280;
    logo_height = 138;
    logo_width = 478;
    header_top_height = 0;
    var loading_text;
    loading_text = 'Loading new posts...';
    var finished_text;
    finished_text = 'No more posts';
    var piechartcolor;
    piechartcolor = "#1abc9c";
    piechartcolor = "#000000";
    var geocoder;
    var map;
    
    function initialize() {
        "use strict";
        var mapStyles = [{
            stylers: [{
                hue: "#324156"
            }, {
                saturation: "-60"
            }, {
                lightness: "-20"
            }, {
                gamma: 1.51
            }]
        }];
        var qodeMapType = new google.maps.StyledMapType(mapStyles, {
            name: "Qode Map"
        });
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var myOptions = {
            zoom: 12,
            scrollwheel: false,
            center: latlng,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            scaleControl: false,
            scaleControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            streetViewControl: false,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: false,
            panControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeControl: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'qode_style'],
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            mapTypeId: 'qode_style'
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        map.mapTypes.set('qode_style', qodeMapType);
    }
    
    function codeAddress(data) {
        "use strict";
        if (data === '')
            return;
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<div id="bodyContent">' +
            '<p>' + data + '</p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        geocoder.geocode({
            'address': data
        }, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: 'https://bridge358.qodeinteractive.com/wp-content/themes/bridge/img/pin.png',
                    title: data['store_title']
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
            }
        });
    }
    var $ = jQuery.noConflict();
    $(document).ready(function() {
        "use strict";
        showContactMap();
    });
    
    function showContactMap() {
        "use strict";
        if ($("#map_canvas").length > 0) {
            initialize();
            codeAddress("");
            codeAddress("");
            codeAddress("");
            codeAddress("");
            codeAddress("");
        }
    }
    var no_ajax_pages = [];
    var qode_root = 'https://bridge358.qodeinteractive.com/';
    var theme_root = 'https://bridge358.qodeinteractive.com/wp-content/themes/bridge/';
    var header_style_admin = "";
    if (typeof no_ajax_obj !== 'undefined') {
        no_ajax_pages = no_ajax_obj.no_ajax_pages;
    } */