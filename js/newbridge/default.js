function getScrollAmountForStickyHeader() {
    return void 0 !== qodeGlobalVars.vars.page_scroll_amount_for_sticky && "" !== qodeGlobalVars.vars.page_scroll_amount_for_sticky ? amount = qodeGlobalVars.vars.page_scroll_amount_for_sticky : $j(".carousel.full_screen").length ? amount = $j(".carousel").height() : amount = scroll_amount_for_sticky, amount
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
    if ($j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && ($j("header.page_header").hasClass("fixed") || $j("header.page_header").hasClass("fixed_hiding")) && (e >= 0 && e <= 34 ? ($j("header.page_header").css("top", -e), $j("header.page_header").css("margin-top", 0), $j(".header_top").show()) : e > 34 && ($j("header.page_header").css("top", "-34px"), $j("header.page_header").css("margin-top", 34), $j(".header_top").hide())), sticky_amount = getScrollAmountForStickyHeader(), $j("header").hasClass("regular") && (header_height - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(header_height - 10), $j(".q_logo a img").css("height", "100%")), $j("header.page_header").hasClass("fixed") && ($top_header_height = $j("header.page_header").hasClass("scroll_top") ? 34 : 0, header_height - e + $top_header_height >= min_header_height_scroll && e >= $top_header_height ? ($j("header.page_header").removeClass("scrolled"), $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height - e + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height - e + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height - e + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", header_height - e + $top_header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height - e + $top_header_height + "px"), header_height - logo_height > 0 ? $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - e + $top_header_height - 10 + "px")) : e < $top_header_height ? ($j("header.page_header").removeClass("scrolled"), $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", header_height + "px"), $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", header_height + "px"), header_height - logo_height > 0 ? $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", header_height - 10 + "px")) : header_height - e + $top_header_height < min_header_height_scroll && ($j("header.page_header").addClass("scrolled"), $j("header:not(.centered_logo.centered_logo_animate) nav.main_menu > ul > li > a").css("line-height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .side_menu_button").css("height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .shopping_cart_inner").css("height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .header_bottom .qode-login-register-widget.qode-user-logged-in .qode-logged-in-user").css("height", min_header_height_scroll + "px"), $j("header:not(.centered_logo.centered_logo_animate) .logo_wrapper").css("height", min_header_height_scroll + "px"), min_header_height_scroll - logo_height > 0 ? $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", logo_height + "px") : $j("header:not(.centered_logo.centered_logo_animate) .q_logo a").css("height", min_header_height_scroll - 10 + "px")), $j("header.page_header").hasClass("centered_logo") && $j("header.page_header").hasClass("centered_logo_animate") ? header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e >= $top_header_height ? $j(".q_logo a").height(header_height - e + $top_header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height >= min_header_height_scroll && logo_height > min_header_height_scroll - 10 && e < $top_header_height ? $j(".q_logo a").height(header_height - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height > min_header_height_scroll - 10 ? $j(".q_logo a").height(min_header_height_scroll - 10) : header_height - e + $top_header_height < logo_height && header_height - e + $top_header_height < min_header_height_scroll && logo_height < min_header_height_scroll - 10 ? $j(".q_logo a").height(logo_height) : (e + $top_header_height === 0 && header_height, $j(".q_logo a").height(logo_height)) : $j("header.page_header").hasClass("centered_logo") ? ($j(".q_logo a").height(logo_height), $j(".q_logo img").height("auto")) : $j(".q_logo img").height("100%"), setLeftPostionedMenuPadding()), $j("header.page_header").hasClass("fixed_hiding") && (e < scroll_amount_for_fixed_hiding ? $j("header.page_header").removeClass("scrolled") : $j("header.page_header").addClass("scrolled"), $j(".q_logo a").height(logo_height / 2), $j(".q_logo img").height("100%")), $j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu")) {
        if (e > sticky_amount) {
            if (!$j("header.page_header").hasClass("sticky")) {
                $top_header_height = $j("header.page_header").hasClass("has_top") ? 34 : 0;
                var t = $j("header.page_header").hasClass("centered_logo") ? $j("header.page_header").height() : header_height + $top_header_height;
                $j("header.page_header").hasClass("menu_bottom") && (t = header_height + 60), $j("header.page_header").addClass("sticky"), $j(".content").css("padding-top", t), window.clearTimeout(sticky_animate), sticky_animate = window.setTimeout(function() {
                    $j("header.page_header").addClass("sticky_animate")
                }, 100), min_header_height_sticky - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(min_header_height_sticky - 10), $j("header.page_header").hasClass("menu_bottom") && initDropDownMenu()
            }
            min_header_height_sticky - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(min_header_height_sticky - 10)
        } else $j("header.page_header").hasClass("sticky") && ($j("header").removeClass("sticky_animate"), $j("header").removeClass("sticky"), $j(".content").css("padding-top", "0px"), $j("header.page_header").hasClass("menu_bottom") && initDropDownMenu()), setMargingsForLeftAndRightMenu(), $j("header.page_header").hasClass("centered_logo") ? ($j(".q_logo a").height(logo_height), $j(".q_logo img").height("auto")) : header_height - logo_height >= 10 ? $j(".q_logo a").height(logo_height) : $j(".q_logo a").height(header_height - 10), $j(".q_logo a img").css("height", "100%");
        setLeftPostionedMenuPadding()
    }
}

function qodeMobileHeaderBehavior() {
    if ($j("header").hasClass("sticky_mobile")) {
        var e = $j(".page_header"),
            t = (e.find(".mobile_menu_button"), e.outerHeight()),
            o = $j("#wpadminbar").length ? $j("#wpadminbar").height() : 0,
            n = t,
            i = $scroll,
            a = function() {
                if (e.find(".header_inner").css("padding-top", 0), $window_width < 1e3) {
                    var a = $scroll;
                    a > n ? (e.addClass("qode-animate-mobile-header"), $j(".content").css("padding-top", t)) : (e.removeClass("qode-animate-mobile-header"), $j(".content").css("padding-top", 0)), a > i && a >= n || a <= n ? (e.removeClass("mobile-header-appear"), e.find(".header_inner").css("padding-top", 0)) : (e.addClass("mobile-header-appear"), e.find(".header_inner").css("padding-top", o)), i = $scroll
                }
            };
        qode_window.on("scroll resize", function() {
            a()
        })
    }
}

function setMargingsForLeftAndRightMenu() {
    "use strict";
    if ($j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("header.page_header").hasClass("left_right_margin_set")) {
        var e = $j(".q_logo a img").width() / 2;
        0 == $scroll && 0 != e && $j("header.page_header").addClass("left_right_margin_set"), $j(".logo_wrapper").width(2 * e), $j("nav.main_menu.left_side > ul > li:last-child").css("margin-right", e), $j("nav.main_menu.right_side > ul > li:first-child").css("margin-left", e), $j(".rtl nav.main_menu.left_side > ul > li:first-child").css("margin-right", e), $j(".rtl nav.main_menu.left_side > ul > li:last-child").css("margin-right", 0), $j(".rtl nav.main_menu.right_side > ul > li:last-child").css("margin-left", e), $j(".rtl nav.main_menu.right_side > ul > li:first-child").css("margin-left", 0)
    }
}

function setLeftPostionedMenuPadding() {
    "use strict";
    var e = $j("header:not(.centered_logo) nav.main_menu");
    if (e.length && e.hasClass("left")) {
        var t = $j(".q_logo a img").filter(function() {
            return "1" == $j(this).css("opacity")
        });
        e.css("left", t.width())
    }
}

function logoSizeOnSmallScreens() {
    "use strict";
    80 < logo_height ? $j(".q_logo a").height(80) : $j(".q_logo a").height(logo_height), $j(".q_logo a img").css("height", "100%"), $j("header.page_header").removeClass("sticky_animate sticky"), $j(".content").css("padding-top", "0px")
}

function contentMinHeight() {
    "use strict";
    if ($j("header .header_bottom").length || $j("header .bottom_header").length) {
        if ($j("header .header_bottom").length) var e = $j("header .header_bottom").css("background-color");
        if ($j("header .bottom_header").length) var e = $j("header .bottom_header").css("background-color");
        var t = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")).split(/,\s*/)[3],
            o = void 0 != t || $j("header.page_header").hasClass("transparent") ? 0 : $j("header.page_header").height();
        $j("body .content").css("min-height", $window_height - o - $j("footer:not(.uncover)").height())
    }
}

function contentMinHeightWithPaspartu() {
    "use strict";
    if ($j(".paspartu_enabled").length) {
        var e, t = 0,
            o = $window_width * paspartu_width,
            n = $j("footer").height();
        if ($j(".disable_footer").length && (n = 0), $j(".vertical_menu_enabled").length ? $j(".paspartu_top").length && $j(".paspartu_middle_inner").length && (t += o) : $j(".paspartu_top").length && (t += o), !$j(".paspartu_bottom").length && $j(".disable_bottom_paspartu").length || (t += o), $j(".vertical_menu_enabled").length) e = $window_height - t - n;
        else {
            if ($j("header .header_bottom").length) var i = $j("header .header_bottom").css("background-color");
            if ($j("header .bottom_header").length) var i = $j("header .bottom_header").css("background-color");
            if (void 0 !== i) var a = i.substring(i.indexOf("(") + 1, i.lastIndexOf(")")).split(/,\s*/)[3];
            var r = void 0 != a || $j("header.page_header").hasClass("transparent") ? 0 : $j("header.page_header").height();
            e = $window_height - r - t - n
        }
        $j(".content").length && $j(".content").css("min-height", e)
    }
}

function initQodeSlider() {
    "use strict";
    var e = /url\(["']?([^'")]+)['"]?\)/;
    if (default_header_style = "", $j("header.page_header").hasClass("light") && (default_header_style = "light"), $j("header.page_header").hasClass("dark") && (default_header_style = "dark"), $j(".carousel").length) {
        var t = {
            zoom_center: "1.2, 0, 0, 1.2, 0, 0",
            zoom_top_left: "1.2, 0, 0, 1.2, -150, -150",
            zoom_top_right: "1.2, 0, 0, 1.2, 150, -150",
            zoom_bottom_left: "1.2, 0, 0, 1.2, -150, 150",
            zoom_bottom_right: "1.2, 0, 0, 1.2, 150, 150"
        };
        ! function(e) {
            var t = /\([0-9epx\.\, \t\-]+/gi,
                o = function(e) {
                    return e.match(t)[0].substr(1).split(",").map(function(e) {
                        return parseFloat(e)
                    })
                },
                n = ["transform", "-webkit-transform"],
                i = function(e) {
                    var t = null;
                    return n.some(function(o) {
                        return null !== (t = e.css(o)) && "" !== t
                    }), t = t && "none" !== t ? t : "matrix(1,0,0,1,0,0)", o(t)
                },
                a = function(e, t) {
                    for (var o = "matrix(" + t.join(",") + ")", i = n.length - 1; i >= 0; --i) e.css(n[i], o + " rotate(0.01deg)")
                },
                r = function(e, t, o) {
                    return e + o / 100 * (t - e)
                };
            e.fn.transformAnimate = function(t) {
                var n = {
                    transform: "matrix(1,0,0,1,0,0)"
                };
                e.extend(n, t), this.css("percentAnim", 0);
                var s = i(this),
                    d = o(n.transform);
                return n.step = function(o, n) {
                    var i = e(this),
                        l = s.map(function(e, t) {
                            return r(e, d[t], o)
                        });
                    a(i, l), t.step && t.step.apply(this, [l, n])
                }, this.stop().animate({
                    percentAnim: 100
                }, n)
            }
        }(jQuery), $j(".carousel").each(function() {
            function o(e, t) {
                var o = t;
                e.hasClass("advanced_responsiveness") ? $window_width > j[0] ? o = t : $window_width > j[1] ? o = .75 * t : $window_width > j[2] ? o = .6 * t : $window_width > j[3] ? o = .55 * t : $window_width <= j[3] && (o = .45 * t) : $window_width > j[0] ? o = t : $window_width > j[1] ? o = .8 * t : $window_width > j[2] ? o = .7 * t : $window_width <= j[2] && (o = 1 * t), e.css({
                    height: o + "px"
                }), e.find(".qode_slider_preloader").css({
                    height: o + "px"
                }), e.find(".qode_slider_preloader .ajax_loader").css({
                    display: "block"
                }), e.find(".item").css({
                    height: o + "px"
                })
            }

            function n(e) {
                p.css({
                    height: e + "px"
                }), p.find(".qode_slider_preloader").css({
                    height: e + "px"
                }), p.find(".qode_slider_preloader .ajax_loader").css({
                    display: "block"
                }), p.find(".item").css({
                    height: e + "px"
                })
            }

            function i(e, t) {
                window["slider_graphic_width_" + t] = [], window["slider_graphic_height_" + t] = [], window["slider_svg_width_" + t] = [], window["slider_svg_height_" + t] = [], window["slider_title_" + t] = [], window["slider_subtitle_" + t] = [], window["slider_text_" + t] = [], window["slider_button1_" + t] = [], window["slider_button2_" + t] = [], window["slider_separator_" + t] = [], window["slider_graphic_width_" + t].push(parseFloat(e.find(".thumb img").data("width"))), window["slider_graphic_height_" + t].push(parseFloat(e.find(".thumb img").data("height"))), window["slider_svg_width_" + t].push(parseFloat(e.find(".qode_slide-svg-holder svg").attr("width"))), window["slider_svg_height_" + t].push(parseFloat(e.find(".qode_slide-svg-holder svg").attr("height"))), window["slider_title_" + t].push(parseFloat(e.find(".q_slide_title").css("font-size"))), window["slider_subtitle_" + t].push(parseFloat(e.find(".q_slide_subtitle").css("font-size"))), window["slider_text_" + t].push(parseFloat(e.find(".q_slide_text").css("font-size"))), window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("font-size"))), window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("font-size"))), window["slider_title_" + t].push(parseFloat(e.find(".q_slide_title").css("line-height"))), window["slider_subtitle_" + t].push(parseFloat(e.find(".q_slide_subtitle").css("line-height"))), window["slider_text_" + t].push(parseFloat(e.find(".q_slide_text").css("line-height"))), window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("line-height"))), window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("line-height"))), window["slider_title_" + t].push(parseFloat(e.find(".q_slide_title").css("letter-spacing"))), window["slider_subtitle_" + t].push(parseFloat(e.find(".q_slide_subtitle").css("letter-spacing"))), window["slider_text_" + t].push(parseFloat(e.find(".q_slide_text").css("letter-spacing"))), window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("letter-spacing"))), window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("letter-spacing"))), window["slider_title_" + t].push(parseFloat(e.find(".q_slide_title").css("margin-bottom"))), window["slider_subtitle_" + t].push(parseFloat(e.find(".q_slide_subtitle").css("margin-bottom"))), window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("height"))), window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("height"))), 0 != parseFloat(e.find(".qbutton:eq(0)").css("width")) ? window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("width"))) : window["slider_button1_" + t].push(0), 0 != parseFloat(e.find(".qbutton:eq(1)").css("width")) ? window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("width"))) : window["slider_button2_" + t].push(0), window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("padding-left"))), window["slider_button1_" + t].push(parseFloat(e.find(".qbutton:eq(0)").css("padding-right"))), window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("padding-left"))), window["slider_button2_" + t].push(parseFloat(e.find(".qbutton:eq(1)").css("padding-right"))), window["slider_separator_" + t].push(parseFloat(e.find(".separator").css("margin-top"))), window["slider_separator_" + t].push(parseFloat(e.find(".separator").css("margin-bottom")))
            }

            function a(e, t) {
                $window_width > j[0] ? (c = $[0], h = w[0], u = b[0], f = q[0], _ = y[0]) : $window_width > j[1] ? (c = $[1], h = w[1], u = b[1], f = q[1], _ = y[1]) : $window_width > j[2] ? (c = $[2], h = w[2], u = b[2], f = q[2], _ = y[2]) : $window_width > j[3] ? (c = $[3], h = w[3], u = b[3], f = q[3], _ = y[3]) : $window_width > j[4] ? (c = $[4], h = w[4], u = b[4], f = q[4], _ = y[4]) : $window_width > j[5] ? (c = $[5], h = w[5], u = b[5], f = q[5], _ = y[5]) : (c = $[6], h = w[6], u = b[6], f = q[6], _ = y[6]);
                var o = h,
                    n = u,
                    i = f;
                $window_width <= j[0] && (o = h / 2, n = u / 2, i = f / 2), e.find(".thumb").css({
                    width: Math.round(window["slider_graphic_width_" + t][0] * c) + "px"
                }).css({
                    height: Math.round(window["slider_graphic_height_" + t][0] * c) + "px"
                }), e.find(".qode_slide-svg-holder svg").css({
                    width: Math.round(window["slider_svg_width_" + t][0] * c) + "px"
                }).css({
                    height: Math.round(window["slider_svg_height_" + t][0] * c) + "px"
                }), e.find(".q_slide_title").css({
                    "font-size": Math.round(window["slider_title_" + t][0] * h) + "px"
                }), e.find(".q_slide_title").css({
                    "line-height": Math.round(window["slider_title_" + t][1] * h) + "px"
                }), e.find(".q_slide_title").css({
                    "letter-spacing": Math.round(window["slider_title_" + t][2] * o) + "px"
                }), e.find(".q_slide_title").css({
                    "margin-bottom": Math.round(window["slider_title_" + t][3] * h) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "font-size": Math.round(window["slider_subtitle_" + t][0] * u) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "line-height": Math.round(window["slider_subtitle_" + t][1] * u) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "letter-spacing": Math.round(window["slider_subtitle_" + t][2] * n) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "margin-bottom": Math.round(window["slider_subtitle_" + t][3] * u) + "px"
                }), e.find(".q_slide_text").css({
                    "font-size": Math.round(window["slider_text_" + t][0] * f) + "px"
                }), e.find(".q_slide_text").css({
                    "line-height": Math.round(window["slider_text_" + t][1] * f) + "px"
                }), e.find(".q_slide_text").css({
                    "letter-spacing": Math.round(window["slider_text_" + t][2] * i) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "font-size": Math.round(window["slider_button1_" + t][0] * _) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "font-size": Math.round(window["slider_button2_" + t][0] * _) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "line-height": Math.round(window["slider_button1_" + t][1] * _) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "line-height": Math.round(window["slider_button2_" + t][1] * _) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "letter-spacing": Math.round(window["slider_button1_" + t][2] * _) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "letter-spacing": Math.round(window["slider_button2_" + t][2] * _) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    height: Math.round(window["slider_button1_" + t][3] * _) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    height: Math.round(window["slider_button2_" + t][3] * _) + "px"
                }), 0 != window["slider_button1_" + t][4] ? e.find(".qbutton:eq(0)").css({
                    width: Math.round(window["slider_button1_" + t][4] * _) + "px"
                }) : e.find(".qbutton:eq(0)").css({
                    width: "auto"
                }), 0 != window["slider_button2_" + t][4] ? e.find(".qbutton:eq(1)").css({
                    width: Math.round(window["slider_button2_" + t][4] * _) + "px"
                }) : e.find(".qbutton:eq(1)").css({
                    width: "auto"
                }), e.find(".qbutton:eq(0)").css({
                    "padding-left": Math.round(window["slider_button1_" + t][5] * _) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "padding-left": Math.round(window["slider_button2_" + t][5] * _) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "padding-right": Math.round(window["slider_button1_" + t][6] * _) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "padding-right": Math.round(window["slider_button2_" + t][6] * _) + "px"
                }), e.find(".separator").css({
                    "margin-top": Math.round(window["slider_separator_" + t][0] * h) + "px"
                }), e.find(".separator").css({
                    "margin-bottom": Math.round(window["slider_separator_" + t][1] * h) + "px"
                })
            }

            function r(e, t) {
                e.find(".thumb").css({
                    width: Math.round(window["slider_graphic_width_" + t][0]) + "px"
                }).css({
                    height: Math.round(window["slider_graphic_height_" + t][0]) + "px"
                }), e.find(".qode_slide-svg-holder svg").css({
                    width: Math.round(window["slider_svg_width_" + t][0]) + "px"
                }).css({
                    height: Math.round(window["slider_svg_height_" + t][0]) + "px"
                }), e.find(".q_slide_title").css({
                    "font-size": Math.round(window["slider_title_" + t][0]) + "px"
                }), e.find(".q_slide_title").css({
                    "line-height": Math.round(window["slider_title_" + t][1]) + "px"
                }), e.find(".q_slide_title").css({
                    "letter-spacing": Math.round(window["slider_title_" + t][2]) + "px"
                }), e.find(".q_slide_title").css({
                    "margin-bottom": Math.round(window["slider_title_" + t][3]) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "font-size": Math.round(window["slider_subtitle_" + t][0]) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "line-height": Math.round(window["slider_subtitle_" + t][1]) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "letter-spacing": Math.round(window["slider_subtitle_" + t][2]) + "px"
                }), e.find(".q_slide_subtitle").css({
                    "margin-bottom": Math.round(window["slider_subtitle_" + t][3]) + "px"
                }), e.find(".q_slide_text").css({
                    "font-size": Math.round(window["slider_text_" + t][0]) + "px"
                }), e.find(".q_slide_text").css({
                    "line-height": Math.round(window["slider_text_" + t][1]) + "px"
                }), e.find(".q_slide_text").css({
                    "letter-spacing": Math.round(window["slider_text_" + t][2]) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "font-size": Math.round(window["slider_button1_" + t][0]) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "font-size": Math.round(window["slider_button2_" + t][0]) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "line-height": Math.round(window["slider_button1_" + t][1]) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "line-height": Math.round(window["slider_button2_" + t][1]) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "letter-spacing": Math.round(window["slider_button1_" + t][2]) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "letter-spacing": Math.round(window["slider_button2_" + t][2]) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    height: Math.round(window["slider_button1_" + t][3]) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    height: Math.round(window["slider_button2_" + t][3]) + "px"
                }), 0 != window["slider_button1_" + t][4] ? e.find(".qbutton:eq(0)").css({
                    width: Math.round(window["slider_button1_" + t][4]) + "px"
                }) : e.find(".qbutton:eq(0)").css({
                    width: "auto"
                }), 0 != window["slider_button2_" + t][4] ? e.find(".qbutton:eq(1)").css({
                    width: Math.round(window["slider_button2_" + t][4]) + "px"
                }) : e.find(".qbutton:eq(1)").css({
                    width: "auto"
                }), e.find(".qbutton:eq(0)").css({
                    "padding-left": Math.round(window["slider_button1_" + t][5]) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "padding-left": Math.round(window["slider_button2_" + t][5]) + "px"
                }), e.find(".qbutton:eq(0)").css({
                    "padding-right": Math.round(window["slider_button1_" + t][6]) + "px"
                }), e.find(".qbutton:eq(1)").css({
                    "padding-right": Math.round(window["slider_button2_" + t][6]) + "px"
                }), e.find(".separator").css({
                    "margin-top": Math.round(window["slider_separator_" + t][0]) + "px"
                }), e.find(".separator").css({
                    "margin-bottom": Math.round(window["slider_separator_" + t][1]) + "px"
                })
            }

            function s(e, t) {
                1 == e ? (p.find(".left.carousel-control .prev").html(t), p.find(".right.carousel-control .next").html(e + 1)) : e == t ? (p.find(".left.carousel-control .prev").html(e - 1), p.find(".right.carousel-control .next").html(1)) : (p.find(".left.carousel-control .prev").html(e - 1), p.find(".right.carousel-control .next").html(e + 1))
            }

            function d() {
                p.find(".carousel-inner .item:first-child").addClass("active"), checkSliderForHeaderStyle($j(".carousel .active"), p.hasClass("header_effect")), p.hasClass("slider_thumbs") && (s(1, I), p.find(".active").next("div").find(".image").length ? (src = e.exec(p.find(".active").next("div").find(".image").attr("style")), next_image = new Image, next_image.src = src[1]) : (next_image = p.find(".active").next("div").find("> .video").clone(), next_image.find(".video-overlay").remove(), next_image.find(".video-wrap").width(170).height(95), next_image.find(".mejs-container").width(170).height(95), next_image.find("video").width(170).height(95)), p.find(".right.carousel-control .img").html(next_image).find("img, div.video").addClass("old"), p.find(".carousel-inner .item:last-child .image").length ? (src = e.exec(p.find(".carousel-inner .item:last-child .image").attr("style")), prev_image = new Image, prev_image.src = src[1]) : (prev_image = p.find(".carousel-inner .item:last-child > .video").clone(), prev_image.find(".video-overlay").remove(), prev_image.find(".video-wrap").width(170).height(95), prev_image.find(".mejs-container").width(170).height(95), prev_image.find("video").width(170).height(95)), p.find(".left.carousel-control .img").html(prev_image).find("img, div.video").addClass("old")), p.hasClass("q_auto_start") ? p.carousel({
                    interval: k,
                    pause: !1
                }) : p.carousel({
                    interval: 0,
                    pause: !1
                }), p.find(".item video").length && initVideoBackgroundSize(), p.hasClass("advanced_responsiveness") && (p.hasClass("responsive_height") || p.hasClass("full_screen")) && p.find(".item").each(function(e) {
                    i($j(this), e), a($j(this), e)
                }), $j(".carousel-inner .item:first-child").hasClass("animate_image") && $window_width > 1e3 && p.find(".carousel-inner .item.animate_image:first-child .image").transformAnimate({
                    transform: "matrix(" + t[$j(".carousel-inner .item:first-child").data("animate_image")] + ")",
                    duration: 3e4
                })
            }
            var l, c, h, u, f, _, p = $j(this),
                l = $j(window).width() < 1e3 ? $j("header.page_header").height() : 0,
                m = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") && 0 == $j("body.paspartu_on_top_fixed").length ? $j("header.page_header").height() : 0,
                g = $j(".paspartu_outer:not(.disable_top_paspartu)").length > 0 ? Math.round($window_width * paspartu_width + m) : 0,
                v = $j(".paspartu_outer.paspartu_on_bottom_slider").length > 0 ? Math.round($window_width * paspartu_width) : 0,
                j = [1300, 1e3, 768];
            if (p.hasClass("advanced_responsiveness")) {
                j = [1600, 1200, 900, 650, 500, 320], p.data("q_responsive_breakpoints") && "set2" == p.data("q_responsive_breakpoints") && (j = [1600, 1300, 1e3, 768, 567, 320]);
                var $ = p.data("q_responsive_graphic_coefficients").split(","),
                    w = p.data("q_responsive_title_coefficients").split(","),
                    b = p.data("q_responsive_subtitle_coefficients").split(","),
                    q = p.data("q_responsive_text_coefficients").split(","),
                    y = p.data("q_responsive_button_coefficients").split(",")
            }
            if (p.hasClass("full_screen")) p.css({
                height: $j(window).height() - l - g - v + "px"
            }), p.find(".qode_slider_preloader").css({
                height: $j(window).height() - l - g - v + "px"
            }), p.find(".qode_slider_preloader .ajax_loader").css({
                display: "block"
            }), p.find(".item").css({
                height: $j(window).height() - l - g - v + "px"
            }), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(m + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), $j(window).resize(function() {
                l = $j(window).width() < 1e3 ? $j("header.page_header").height() : 0, m = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") && 0 == $j("body.paspartu_on_top_fixed").length ? $j("header.page_header").height() : 0, g = $j(".paspartu_outer:not(.disable_top_paspartu)").length > 0 ? Math.round($window_width * paspartu_width + m) : 0, v = $j(".paspartu_outer.paspartu_on_bottom_slider").length > 0 ? Math.round($window_width * paspartu_width) : 0, p.css({
                    height: $j(window).height() - l - g - v + "px"
                }), p.find(".qode_slider_preloader .ajax_loader").css({
                    display: "block"
                }), p.find(".item").css({
                    height: $j(window).height() - l - g - v + "px"
                }), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(m + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), p.hasClass("advanced_responsiveness") && p.find(".item").each(function(e) {
                    a($j(this), e)
                })
            });
            else if (p.hasClass("responsive_height")) {
                var C = p.data("height");
                p.find(".qode_slider_preloader").css({
                    height: p.height() - l - g - v + "px",
                    display: "block"
                }), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(m + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), o(p, C), $j(window).resize(function() {
                    $j(".paspartu_outer:not(.disable_top_paspartu)").length && (m = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0, $j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(m + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), o(p, C), p.hasClass("advanced_responsiveness") && p.find(".item").each(function(e) {
                        a($j(this), e)
                    })
                })
            } else p.find(".qode_slider_preloader").css({
                height: p.height() - l + "px",
                display: "block"
            }), p.find(".qode_slider_preloader .ajax_loader").css({
                display: "block"
            }), $j(".paspartu_outer:not(.disable_top_paspartu)").length && ($j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(m + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), p.hasClass("advanced_responsiveness") && p.find(".item").each(function(e) {
                i($j(this), e), a($j(this), e)
            }), $window_width < 1e3 ? o(p, C) : n(C), $j(window).resize(function() {
                $j(".paspartu_outer:not(.disable_top_paspartu)").length && (m = $window_width > 1e3 && !$j("header.page_header").hasClass("transparent") ? $j("header.page_header").height() : 0, $j("body").hasClass("paspartu_on_top_fixed") || p.closest(".q_slider").css("padding-top", Math.round(m + $window_width * paspartu_width))), $j(".paspartu_outer.paspartu_on_bottom_slider").length && p.closest(".q_slider").css("padding-bottom", Math.round($window_width * paspartu_width)), $window_width < 1e3 ? (o(p, C), p.hasClass("advanced_responsiveness") && p.find(".item").each(function(e) {
                    a($j(this), e)
                })) : (n(C), p.hasClass("advanced_responsiveness") && p.find(".item").each(function(e) {
                    r($j(this), e)
                }))
            });
            if ($j("body:not(.boxed):not(.vertical_menu_transparency):not(.vertical_menu_hidden):not(.page-template-landing_page-php)").hasClass("vertical_menu_enabled") && $j(window).width() > 1e3) {
                var x = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
                p.find(".carousel-inner").width($window_width - 260 - x), $j(window).resize(function() {
                    $j(window).width() > 1e3 ? (x = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0, p.find(".carousel-inner").width($window_width - 260 - x)) : p.find(".carousel-inner").css("width", "100%")
                })
            }
            if ($j("body:not(.boxed):not(.vertical_menu_transparency):not(.page-template-landing_page-php)").hasClass("vertical_menu_hidden") && $window_width > 1e3) {
                var x = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0;
                p.find(".carousel-inner").width($window_width - 40 - x), $j(window).resize(function() {
                    $j(window).width() > 1e3 ? (x = $j("body").hasClass("paspartu_enabled") ? 2 * Math.round($window_width * paspartu_width) : 0, p.find(".carousel-inner").width($window_width - 40 - x)) : p.find(".carousel-inner").css("width", "100%")
                })
            }
            $j(window).scroll(function() {
                $scroll > p.height() + $j("header.page_header").height() && $j(window).width() > 1e3 ? p.find(".carousel-inner, .carousel-indicators, button").hide() : p.find(".carousel-inner, .carousel-indicators, button").show()
            });
            var k = p.data("slide_animation");
            "" === k && (k = 6e3);
            var I = $j("div.item").length;
            if ($j("html").hasClass("touch")) {
                if (p.find(".item:first-child .mobile-video-image").length > 0) {
                    if (src = e.exec(p.find(".item:first-child .mobile-video-image").attr("style"))) {
                        var S = new Image;
                        S.src = src[1], $j(S).on("load", function() {
                            $j(".qode_slider_preloader").fadeOut(500), d(), checkSVG(p)
                        })
                    }
                } else if (src = e.exec(p.find(".item:first-child .image").attr("style"))) {
                    var S = new Image;
                    S.src = src[1], $j(S).on("load", function() {
                        $j(".qode_slider_preloader").fadeOut(500), d(), checkSVG(p)
                    })
                }
            } else if (p.find(".item:first-child video").length > 0) p.find(".item:first-child video").get(0).addEventListener("loadeddata", function() {
                $j(".qode_slider_preloader").fadeOut(500), d(), checkSVG(p)
            });
            else if (src = e.exec(p.find(".item:first-child .image").attr("style"))) {
                var S = new Image;
                S.src = src[1], $j(S).on("load", function() {
                    $j(".qode_slider_preloader").fadeOut(500), d(), checkSVG(p)
                })
            }
            p.on("slide.bs.carousel", function() {
                p.addClass("in_progress"), p.find(".active .slider_content_outer").fadeTo(800, 0)
            }), p.on("slid.bs.carousel", function() {
                if (p.removeClass("in_progress"), p.find(".active .slider_content_outer").fadeTo(0, 1), checkSVG(p), $j("div.item.animate_image .image").stop().css({
                        transform: "",
                        "-webkit-transform": ""
                    }), $j("div.item.active").hasClass("animate_image") && $window_width > 1e3 && $j("div.item.animate_image.active .image").transformAnimate({
                        transform: "matrix(" + t[$j("div.item.animate_image.active").data("animate_image")] + ")",
                        duration: 3e4
                    }), p.hasClass("slider_thumbs")) {
                    s($j("div.item").index($j("div.item.active")[0]) + 1, I), p.find(".active").prev("div.item").length ? (p.find(".active").prev("div").find(".image").length ? (src = e.exec(p.find(".active").prev("div").find(".image").attr("style")), prev_image = new Image, prev_image.src = src[1]) : (prev_image = p.find(".active").prev("div").find("> .video").clone(), prev_image.find(".video-overlay").remove(), prev_image.find(".video-wrap").width(170).height(95), prev_image.find(".mejs-container").width(170).height(95), prev_image.find("video").width(170).height(95)), p.find(".left.carousel-control .img .old").fadeOut(300, function() {
                        $j(this).remove()
                    }), p.find(".left.carousel-control .img").append(prev_image).find("img, div.video").fadeIn(300).addClass("old")) : (p.find(".carousel-inner .item:last-child .image").length ? (src = e.exec(p.find(".carousel-inner .item:last-child .image").attr("style")), prev_image = new Image, prev_image.src = src[1]) : (prev_image = p.find(".carousel-inner .item:last-child > .video").clone(), prev_image.find(".video-overlay").remove(), prev_image.find(".video-wrap").width(170).height(95), prev_image.find(".mejs-container").width(170).height(95), prev_image.find("video").width(170).height(95)), p.find(".left.carousel-control .img .old").fadeOut(300, function() {
                        $j(this).remove()
                    }), p.find(".left.carousel-control .img").append(prev_image).find("img, div.video").fadeIn(300).addClass("old")), p.find(".active").next("div.item").length ? (p.find(".active").next("div").find(".image").length ? (src = e.exec(p.find(".active").next("div").find(".image").attr("style")), next_image = new Image, next_image.src = src[1]) : (next_image = p.find(".active").next("div").find("> .video").clone(), next_image.find(".video-overlay").remove(), next_image.find(".video-wrap").width(170).height(95), next_image.find(".mejs-container").width(170).height(95), next_image.find("video").width(170).height(95)), p.find(".right.carousel-control .img .old").fadeOut(300, function() {
                        $j(this).remove()
                    }), p.find(".right.carousel-control .img").append(next_image).find("img, div.video").fadeIn(300).addClass("old")) : (p.find(".carousel-inner .item:first-child .image").length ? (src = e.exec(p.find(".carousel-inner .item:first-child .image").attr("style")), next_image = new Image, next_image.src = src[1]) : (next_image = p.find(".carousel-inner .item:first-child > .video").clone(), next_image.find(".video-overlay").remove(), next_image.find(".video-wrap").width(170).height(95), next_image.find(".mejs-container").width(170).height(95), next_image.find("video").width(170).height(95)), p.find(".right.carousel-control .img .old").fadeOut(300, function() {
                        $j(this).remove()
                    }), p.find(".right.carousel-control .img").append(next_image).find("img, div.video").fadeIn(300).addClass("old"))
                }
            }), p.swipe({
                swipeLeft: function(e, t, o, n, i) {
                    p.carousel("next")
                },
                swipeRight: function(e, t, o, n, i) {
                    p.carousel("prev")
                },
                threshold: 20
            })
        }), $j(".no-touchevents .carousel").length && (skrollr_slider = skrollr.init({
            edgeStrategy: "set",
            smoothScrolling: !0,
            forceHeight: !1
        }), skrollr_slider.refresh())
    }
}

function checkSliderForHeaderStyle(e, t) {
    "use strict";
    var o = "",
        n = e.data("navigation-color");
    e.hasClass("light") && (o = "light"), e.hasClass("dark") && (o = "dark"), "" !== o ? (t && ($j("header.page_header").removeClass("dark light").addClass(o), $j("aside.vertical_menu_area").removeClass("dark light").addClass(o)), $j(".carousel .carousel-control, .carousel .carousel-indicators").removeClass("dark light").addClass(o)) : (t && ($j("header.page_header").removeClass("dark light").addClass(default_header_style), $j("aside.vertical_menu_area").removeClass("dark light").addClass(default_header_style)), $j(".carousel .carousel-control, .carousel .carousel-indicators").removeClass("dark light").addClass(default_header_style)), void 0 !== n ? ($j(".carousel-control .thumb_holder .thumb_top, .carousel-indicators li").css("background-color", n), $j(".carousel-control .prev_nav, .carousel-control .next_nav").css("border-color", n), $j(".carousel-control .prev_nav i, .carousel-control .next_nav i").css("color", n)) : ($j(".carousel-control .thumb_holder .thumb_top, .carousel-indicators li").css("background-color", ""), $j(".carousel-control .prev_nav, .carousel-control .next_nav").css("border-color", ""), $j(".carousel-control .prev_nav i, .carousel-control .next_nav i").css("color", ""))
}

function calculateHeights() {
    $j(".portfolio_slides").length && $j(".portfolio_slides").each(function() {
        $j(this).parents(".caroufredsel_wrapper").css({
            height: $j(this).find("li.item").outerHeight() - 3 + "px"
        })
    }), $j(".qode_carousels .slides").length && $j(".qode_carousels .slides").each(function() {
        $j(this).parents(".caroufredsel_wrapper").css({
            height: $j(this).find("li.item").outerHeight() + "px"
        })
    }), $j(".blog_slides").length && $j(".blog_slides").each(function() {
        $j(this).parents(".caroufredsel_wrapper").css({
            height: $j(this).find("li.item").outerHeight() - 3 + "px"
        })
    }), $j(".qode-bct-posts").length && $j(".qode-bct-posts").each(function() {
        $j(this).parents(".caroufredsel_wrapper").css({
            height: $j(this).find(".qode-bct-post").outerHeight() + "px"
        })
    })
}

function initQodeCarousel() {
    "use strict";
    $j(".qode_carousels").length && ($j(".qode_carousels").each(function() {
        var e = $j(this),
            t = 6;
        void 0 !== e.data("number-of-visible-items") && "" !== e.data("number-of-visible-items") && (4 === e.data("number-of-visible-items") ? t = 4 : 5 === e.data("number-of-visible-items") && (t = 5));
        var o = 1 == e.parents(".grid_section").length || 1 == e.parents(".qode_elementor_container_inner").length ? 170 : 315,
            n = 6;
        4 === t ? (o = 1 == e.parents(".grid_section").length || 1 == e.parents(".qode_elementor_container_inner").length ? 255 : 472, n = 4) : 5 === t && (o = 1 == e.parents(".grid_section").length || 1 == e.parents(".qode_elementor_container_inner").length ? 204 : 378, n = 5), e.find(".slides").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: {
                items: 1,
                duration: 1e3,
                pauseOnHover: !1
            },
            items: {
                width: o,
                visible: {
                    min: 1,
                    max: n
                }
            },
            auto: !0,
            mousewheel: !1,
            swipe: {
                onMouse: !0,
                onTouch: !0
            }
        }).animate({
            opacity: 1
        }, 1e3)
    }), calculateHeights())
}

function initPortfolioSlider() {
    "use strict";
    $j(".portfolio_slider").length && ($j(".portfolio_slider").each(function() {
        var e, t;
        switch (e = void 0 !== $j(this).data("number_of_items") ? $j(this).data("number_of_items") : "auto") {
            case 4:
                t = 500;
                break;
            case 5:
                t = 350;
                break;
            default:
                t = 500
        }
        var o = 1 == $j(this).parents(".grid_section").length ? 3 : e,
            n = 1 == $j(this).parents(".grid_section").length ? 353 : t;
        $j(this).find(".portfolio_slides").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: 1,
            prev: {
                button: function() {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-prev")
                }
            },
            next: {
                button: function() {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-next")
                }
            },
            items: {
                width: n,
                visible: {
                    min: 1,
                    max: o
                }
            },
            auto: !1,
            mousewheel: !1,
            swipe: {
                onMouse: !0,
                onTouch: !0
            }
        }).animate({
            opacity: 1
        }, 1e3)
    }), calculateHeights(), $j(".portfolio_slider .flex-direction-nav a").on("click", function(e) {
        e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
    }))
}

function initBlogSlider() {
    "use strict";
    $j(".blog_slider").length && ($j(".blog_slider").each(function() {
        var e, t, o, n = $j(this),
            i = !1;
        if (e = void 0 !== n.data("blogs_shown") ? n.data("blogs_shown") : n.hasClass("simple_slider") ? 1 : "auto", i = n.data("auto_start"), n.hasClass("simple_slider")) t = 1, o = 300;
        else {
            t = 1 == n.parents(".grid_section").length ? 3 : e;
            var a;
            switch (e) {
                case 3:
                    a = 667;
                    break;
                case 4:
                    a = 500;
                    break;
                case 5:
                    a = 400;
                    break;
                case 6:
                    a = 334;
                    break;
                default:
                    a = 500
            }
            o = 1 == n.parents(".grid_section").length ? 353 : a
        }
        n.find(".blog_slides").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: 1,
            prev: {
                button: function() {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-prev")
                }
            },
            next: {
                button: function() {
                    return $j(this).parent().siblings(".caroufredsel-direction-nav").find("#caroufredsel-next")
                }
            },
            items: {
                width: o,
                visible: {
                    min: 1,
                    max: t
                }
            },
            auto: i,
            mousewheel: !1,
            swipe: {
                onMouse: !0,
                onTouch: !0
            }
        }).animate({
            opacity: 1
        }, 1e3)
    }), calculateHeights(), $j(".blog_slider .flex-direction-nav a").on("click", function(e) {
        e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
    }))
}

function qodeInitBlogCarouselTitled() {
    "use strict";
    $j(".qode-blog-carousel-titled").length && ($j(".qode-blog-carousel-titled").each(function() {
        var e, t = $j(this),
            o = 4;
        void 0 !== t.data("posts-shown") && (o = t.data("posts-shown")), $window_width < 769 && o > 2 && (o = 2), $window_width < 601 && o > 1 && (o = 1), e = t.width() / o, t.find(".qode-bct-posts").carouFredSel({
            circular: !0,
            responsive: !0,
            scroll: 1,
            prev: {
                button: function() {
                    return t.find(".qode-bct-caroufredsel-prev")
                }
            },
            next: {
                button: function() {
                    return t.find(".qode-bct-caroufredsel-next")
                }
            },
            items: {
                width: e,
                visible: {
                    min: 1,
                    max: o
                }
            },
            auto: !1,
            mousewheel: !1,
            swipe: {
                onMouse: !0,
                onTouch: !0
            }
        }), t.animate({
            opacity: 1
        }, 1e3)
    }), calculateHeights())
}

function initSideMenu() {
    "use strict";
    $j("body").hasClass("side_area_uncovered_from_content") && $j(".side_menu_button_wrapper a.side_menu_button_link,  a.close_side_menu").on("click", function(e) {
        if (e.preventDefault(), $j(".side_menu").css({
                right: "0"
            }), $j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened")) {
            $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("right_side_menu_opened");
            var t = setTimeout(function() {
                $j(".side_menu").css({
                    visibility: "hidden"
                }), clearTimeout(t)
            }, 400)
        } else $j(".side_menu").css({
            visibility: "visible"
        }), $j(this).addClass("opened"), $j("body").addClass("right_side_menu_opened"), current_scroll = $j(window).scrollTop(), $j(window).scroll(function() {
            if (Math.abs($scroll - current_scroll) > 400) {
                $j("body").removeClass("right_side_menu_opened"), $j(".side_menu_button_wrapper a").removeClass("opened");
                var e = setTimeout(function() {
                    $j(".side_menu").css({
                        visibility: "hidden"
                    }), clearTimeout(e)
                }, 400)
            }
        })
    }), $j("body").hasClass("side_menu_slide_with_content") && $j(".side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu").on("click", function(e) {
        e.preventDefault(), $j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened") ? ($j("body").removeClass("side_menu_open"), $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("side_menu_open")) : ($j(this).addClass("opened"), $j("body").addClass("side_menu_open"), current_scroll = $j(window).scrollTop(), $j(window).scroll(function() {
            Math.abs($scroll - current_scroll) > 400 && ($j("body").removeClass("side_menu_open"), $j(".side_menu_button_wrapper a").removeClass("opened"))
        })), e.stopPropagation(), $j(".wrapper").on("click", function() {
            e.preventDefault(), $j("body").removeClass("side_menu_open"), $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("side_menu_open")
        })
    }), $j("body").hasClass("side_menu_slide_from_right") && ($j(".wrapper").prepend('<div class="cover"/>'), $j(".side_menu_button_wrapper a.side_menu_button_link, a.close_side_menu").on("click", function(e) {
        e.preventDefault(), $j(".side_menu_button_wrapper a.side_menu_button_link").hasClass("opened") ? ($j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("right_side_menu_opened")) : ($j(this).addClass("opened"), $j("body").addClass("right_side_menu_opened"), $j(" .wrapper .cover").on("click", function() {
            $j(".side_menu_button_wrapper a.side_menu_button_link").removeClass("opened"), $j("body").removeClass("right_side_menu_opened"), $j(".side_menu_button_wrapper a").removeClass("opened")
        }), current_scroll = $j(window).scrollTop(), $j(window).scroll(function() {
            Math.abs($scroll - current_scroll) > 400 && ($j("body").removeClass("right_side_menu_opened"), $j(".side_menu_button_wrapper a").removeClass("opened"))
        }))
    }))
}

function setDropDownMenuPosition() {
    "use strict";
    var e = $j(".drop_down > ul > li.narrow");
    e.each(function(t) {
        var o, n = $j(window).width() - 16;
        switch (!0) {
            case qode_body.hasClass("qode_grid_1300"):
                o = 1350;
                break;
            case qode_body.hasClass("qode_grid_1200"):
                o = 1250;
                break;
            default:
                o = 1150
        }
        var i = $j(e[t]).offset().left,
            a = $j(e[t]).find(".second .inner ul").width(),
            r = 0;
        r = $j("body").hasClass("boxed") ? o - (i - (n - o) / 2) + 17 : n - i + 17;
        var s;
        $j(e[t]).find("li.sub").length > 0 && (s = r - a), (r < a || s < a) && ($j(e[t]).find(".second").addClass("right"), $j(e[t]).find(".second .inner ul").addClass("right"))
    })
}

function initDropDownMenu() {
    "use strict";
    var e = $j(".drop_down > ul > li");
    e.each(function(t) {
        if ($j(e[t]).find(".second").length > 0) {
            if ($j(e[t]).hasClass("wide")) {
                var o = $j(this),
                    n = o.find(".inner > ul"),
                    i = parseInt(n.css("padding-left").slice(0, -2)) + parseInt(n.css("padding-right").slice(0, -2)),
                    a = o.find(".second > .inner > ul > li"),
                    r = a.length;
                o.hasClass("left_position") || o.hasClass("right_position") || o.find(".second").css("left", 0);
                var s = 0;
                if (a.each(function() {
                        var e = $j(this).height();
                        e > s && (s = e)
                    }), a.height(s), o.hasClass("full_width_wide_menu")) {
                    var d = 100 / r + "%";
                    a.css("width", d)
                } else {
                    r > 4 && (r = 4);
                    var l = r * a.outerWidth();
                    n.width(l)
                }
                if (o.hasClass("wide_background")) {
                    if (!o.hasClass("left_position") && !o.hasClass("right_position")) {
                        var c = o.find(".second").offset().left;
                        o.find(".second").css("left", -c), o.find(".second").css("width", $j(window).width())
                    }
                } else if (!o.hasClass("left_position") && !o.hasClass("right_position")) {
                    var c = ($j(window).width() - 2 * ($j(window).width() - $j(this).find(".second").offset().left)) / 2 + (l + i) / 2;
                    o.find(".second").css("left", -c)
                }
            }
            if (menu_dropdown_height_set || ($j(e[t]).data("original_height", $j(e[t]).find(".second").height() + "px"), $j(e[t]).find(".second").height(0)), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) $j(e[t]).on("touchstart mouseenter", function() {
                $j(e[t]).find(".second").css({
                    height: $j(e[t]).data("original_height"),
                    overflow: "visible",
                    visibility: "visible",
                    opacity: "1"
                })
            }).on("mouseleave", function() {
                $j(e[t]).find(".second").css({
                    height: "0px",
                    overflow: "hidden",
                    visivility: "hidden",
                    opacity: "0"
                })
            });
            else {
                var h = {
                    interval: 0,
                    over: function() {
                        setTimeout(function() {
                            $j(e[t]).find(".second").addClass("drop_down_start"), $j(e[t]).find(".second").stop().css({
                                height: $j(e[t]).data("original_height")
                            })
                        }, 150)
                    },
                    timeout: 150,
                    out: function() {
                        $j(e[t]).find(".second").stop().css({
                            height: "0px"
                        }), $j(e[t]).find(".second").removeClass("drop_down_start")
                    }
                };
                $j(e[t]).hoverIntent(h)
            }
        }
    }), $j(".drop_down ul li.wide ul li a, .drop_down ul li.narrow ul li a").on("click", function() {
        var e = $j(this);
        e.next("ul").length || "http://#" === e.attr("href") || "#" === e.attr("href") || e.hasClass("no_link") || setTimeout(function() {
            e.mouseleave()
        }, 500)
    }), menu_dropdown_height_set = !0
}

function initVerticalMenu() {
    "use strict";
    if ($j(".no-touchevents .vertical_menu_toggle").length) {
        var e = $j(".no-touchevents .vertical_menu_toggle > ul > li"),
            t = $j(".no-touchevents .vertical_menu_toggle ul li ul li");
        e.each(function(t) {
            if ($j(e[t]).hasClass("has_sub")) {
                var o = $j(e[t]).find(".inner > ul > li").length;
                $j(e[t]).hoverIntent({
                    over: function() {
                        $j(e[t]).addClass("open"), $j(e[t]).find(".second").slideDown(40 * o, "easeInOutSine", function() {
                            $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                        })
                    },
                    out: function() {
                        $j(e[t]).removeClass("open"), $j(e[t]).find(".second").slideUp(40 * o, "easeInOutSine")
                    },
                    timeout: 1e3
                })
            }
        }), t.each(function(e) {
            if ($j(t[e]).hasClass("menu-item-has-children")) {
                var o = $j(t[e]).find("ul > li").length;
                $j(t[e]).hoverIntent({
                    over: function() {
                        $j(t[e]).addClass("open"), $j(t[e]).find("ul").slideDown(40 * o, "easeInOutSine", function() {
                            $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                        })
                    },
                    out: function() {
                        $j(t[e]).removeClass("open"), $j(t[e]).find("ul").slideUp(40 * o, "easeInOutSine")
                    },
                    timeout: 1e3
                })
            }
        })
    } else if ($j(".vertical_menu_on_click").length) {
        var e = $j(".vertical_menu_on_click > ul > li > a"),
            t = $j(".vertical_menu_on_click ul li ul li a");
        e.each(function(t) {
            $j(e[t]).parent().hasClass("has_sub") && $j(e[t]).on("tap click", function(e) {
                return e.preventDefault(), $j(this).parent().hasClass("open") ? ($j(this).parent().removeClass("open"), $j(this).parent().find(".second").slideUp("fast", function() {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })) : ($j(".vertical_menu_on_click > ul > li").removeClass("open"), $j(".vertical_menu_on_click > ul > li").find(".second").slideUp("fast"), $j(this).parent().addClass("open"), $j(this).parent().find(".second").slideDown("slow", function() {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })), !1
            })
        }), t.each(function(e) {
            $j(t[e]).parent().hasClass("menu-item-has-children") && $j(t[e]).on("tap click", function(e) {
                return e.preventDefault(), $j(this).parent().hasClass("open") ? ($j(this).parent().removeClass("open"), $j(this).parent().find("ul").slideUp("fast", function() {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })) : ($j(".vertical_menu_on_click ul li ul li").removeClass("open"), $j(".vertical_menu_on_click ul li ul li").find("ul").slideUp("fast"), $j(this).parent().addClass("open"), $j(this).parent().find("ul").slideDown("slow", function() {
                    $j(".vertical_menu_area.with_scroll").getNiceScroll().resize()
                })), !1
            })
        })
    } else if ($j(".no-touchevents .vertical_menu_float").length) {
        var e = $j(".no-touchevents .vertical_menu_float > ul > li"),
            t = $j(".no-touchevents .vertical_menu_float ul li ul li");
        e.each(function(t) {
            $j(e[t]).hasClass("has_sub") && $j(e[t]).hoverIntent({
                over: function() {
                    $j(e[t]).addClass("open"), $j(e[t]).find(".second").addClass("vertical_menu_start")
                },
                out: function() {
                    $j(e[t]).removeClass("open"), $j(e[t]).find(".second").removeClass("vertical_menu_start")
                },
                timeout: 300
            })
        }), t.each(function(e) {
            if ($j(t[e]).hasClass("menu-item-has-children")) {
                $j(t[e]).find("ul > li").length;
                $j(t[e]).hoverIntent({
                    over: function() {
                        $j(t[e]).addClass("open"), $j(t[e]).find("ul").addClass("vertical_submenu_start")
                    },
                    out: function() {
                        $j(t[e]).removeClass("open"), $j(t[e]).find("ul").removeClass("vertical_submenu_start")
                    },
                    timeout: 300
                })
            }
        })
    }
}

function initVerticalMobileMenu() {
    "use strict";
    $j(".vertical_menu_toggle").length ? ($j(".touchevents .vertical_menu_toggle > ul > li.has_sub > a .plus").on("tap click", function(e) {
        e.stopPropagation(), e.preventDefault(), $j(this).parent().next("div.second").is(":visible") ? ($j(this).parents(".touchevents .vertical_menu_toggle > ul > li.has_sub").removeClass("open"), $j(this).parent().next("div.second").slideUp(200)) : ($j(this).parents(".touchevents .vertical_menu_toggle > ul > li.has_sub").addClass("open"), $j(this).parent().next("div.second").slideDown(200))
    }), $j(".touchevents .vertical_menu_toggle ul li ul li > a .plus").on("tap click", function(e) {
        e.stopPropagation(), e.preventDefault(), $j(this).parent().next("ul").is(":visible") ? ($j(this).parents(".touchevents .vertical_menu_toggle ul li ul li").removeClass("open"), $j(this).parent().next("ul").slideUp(200)) : ($j(this).parents(".touchevents .vertical_menu_toggle ul li ul li").addClass("open"), $j(this).parent().next("ul").slideDown(200))
    })) : $j(".vertical_menu_float").length && ($j(".touchevents .vertical_menu_float > ul > li.has_sub > a .plus").on("tap click", function(e) {
        e.stopPropagation(), e.preventDefault(), $j(this).parent().next("div.second").hasClass("vertical_menu_start") ? ($j(this).parents(".touchevents .vertical_menu_float > ul > li.has_sub").removeClass("open"), $j(this).parents(".touchevents .vertical_menu_float > ul > li.has_sub").find(".second").removeClass("vertical_menu_start")) : ($j(this).parents(".touchevents .vertical_menu_float > ul > li.has_sub").addClass("open"), $j(this).parents(".touchevents .vertical_menu_float > ul > li.has_sub").find(".second").addClass("vertical_menu_start"))
    }), $j(".touchevents .vertical_menu_float ul li ul li > a .plus").on("tap click", function(e) {
        e.stopPropagation(), e.preventDefault(), $j(this).parent().next("ul").hasClass("vertical_submenu_start") ? ($j(this).parents(".touchevents .vertical_menu_float ul li ul li").removeClass("open"), $j(this).parents(".touchevents .vertical_menu_float ul li ul li").find("ul").removeClass("vertical_submenu_start")) : ($j(this).parents(".touchevents .vertical_menu_float ul li ul li").addClass("open"), $j(this).parents(".touchevents .vertical_menu_float ul li ul li").find("ul").addClass("vertical_submenu_start"))
    }))
}

function checkVerticalMenuTransparency() {
    0 !== $scroll ? $j("body.vertical_menu_transparency").removeClass("vertical_menu_transparency_on") : $j("body.vertical_menu_transparency").addClass("vertical_menu_transparency_on")
}

function showHideVerticalMenu() {
    if ($j(".vertical_menu_hidden").length) {
        var e = $j("aside.vertical_menu_area"),
            t = $j(".vertical_menu_area_bottom_logo"),
            o = !0;
        $j(".vertical_menu_hidden_button").on("click", function(n) {
                n.preventDefault(), o ? (o = !1, current_scroll = $j(window).scrollTop(), e.addClass("active"), t.addClass("active")) : (o = !0, e.removeClass("active"), t.removeClass("active"))
            }), $j(window).scroll(function() {
                Math.abs($scroll - current_scroll) > 400 && (o = !0, e.removeClass("active"), t.removeClass("active"))
            }),
            function() {
                var e, t;
                e = function() {
                    function e() {
                        this.objects = []
                    }
                    return e.name = "Outclick", e.prototype.check = function(e, t) {
                        return !e.is(t.target) && 0 === e.has(t.target).length
                    }, e.prototype.trigger = function(e) {
                        var t, o = this;
                        return t = !1, $j.each(this.objects, function(n, i) {
                            if (o.check(i.container, e) && (i.related.length < 1 ? t = !0 : $j.each(i.related, function(n, i) {
                                    return o.check(i, e) ? t = !0 : (t = !1, !1)
                                }), t)) return i.callback.call(i.container)
                        })
                    }, e
                }(), t = new e, $j.fn.outclick = function(e) {
                    var o = this;
                    return null == e && (e = {}), e.related || (e.related = []), e.callback || (e.callback = function() {
                        return o.hide()
                    }), t.objects.push({
                        container: this,
                        related: e.related,
                        callback: e.callback
                    })
                }, $j(document).mouseup(function(e) {
                    return t.trigger(e)
                })
            }.call(this), $j(e).outclick({
                callback: function() {
                    o = !0, e.removeClass("active"), t.removeClass("active")
                }
            })
    }
}

function initToCounter() {
    "use strict";
    $j(".counter.zero").length && $j(".counter.zero").each(function() {
        var e = $j(this).parent(),
            t = 100;
        if (void 0 !== e.data("element-appearance") && !1 !== e.data("element-appearance") && (t = e.data("element-appearance")), !$j(this).hasClass("executed"))
            if ($j(this).addClass("executed"), $j(this).parents(".vertical_split_slider").length) {
                $j(this).parent().css("opacity", "1");
                var o = parseFloat($j(this).text());
                $j(this).countTo({
                    from: 0,
                    to: o,
                    speed: 1500,
                    refreshInterval: 100
                })
            } else $j(this).appear(function() {
                $j(this).parent().css("opacity", "1");
                var e = parseFloat($j(this).text());
                $j(this).countTo({
                    from: 0,
                    to: e,
                    speed: 1500,
                    refreshInterval: 100
                })
            }, {
                accX: 0,
                accY: -t
            })
    })
}

function initCounter() {
    "use strict";
    $j(".counter.random").length && $j(".counter.random").each(function() {
        var e = $j(this).parent(),
            t = 100;
        if (void 0 !== e.data("element-appearance") && !1 !== e.data("element-appearance") && (t = e.data("element-appearance")), $j(this).hasClass("executed")) {
            if ($j(this).parents(".vertical_split_slider_responsive").length) {
                var o = $j(this).find("span");
                o.length && o.remove();
                var n = 0;
                void 0 !== e.data("digit") && "" !== e.data("digit") && (n = e.data("digit")), $j(this).html(n), $j(this).appear(function() {
                    $j(this).absoluteCounter({
                        speed: 2e3,
                        fadeInDelay: 1e3
                    })
                }, {
                    accX: 0,
                    accY: -t
                })
            }
        } else $j(this).addClass("executed"), $j(this).parents(".vertical_split_slider").length ? ($j(this).parent().css("opacity", "1"), $j(this).absoluteCounter({
            speed: 2e3,
            fadeInDelay: 1e3
        })) : $j(this).appear(function() {
            $j(this).parent().css("opacity", "1"), $j(this).absoluteCounter({
                speed: 2e3,
                fadeInDelay: 1e3
            })
        }, {
            accX: 0,
            accY: -t
        })
    })
}

function initCountdown() {
    "use strict";
    $j(".countdown").length && $j(".countdown").each(function() {
        var e, t, o, n, i, a, r, s, d, l, c, h, u, f, _ = $j(this).attr("id"),
            p = $j("#" + _),
            m = 0,
            g = 0,
            v = 0,
            j = 0,
            $ = 0;
        void 0 !== p.data("year") && !1 !== p.data("year") && (m = p.data("year")), void 0 !== p.data("month") && !1 !== p.data("month") && (g = p.data("month")), void 0 !== p.data("day") && !1 !== p.data("day") && (v = p.data("day")), void 0 !== p.data("hour") && !1 !== p.data("hour") && (j = p.data("hour")), void 0 !== p.data("minute") && !1 !== p.data("minute") && ($ = p.data("minute")), void 0 !== p.data("monthslabel") && !1 !== p.data("monthslabel") && (e = p.data("monthslabel")), void 0 !== p.data("monthlabel") && !1 !== p.data("monthlabel") && (t = p.data("monthlabel")), void 0 !== p.data("dayslabel") && !1 !== p.data("dayslabel") && (o = p.data("dayslabel")), void 0 !== p.data("daylabel") && !1 !== p.data("daylabel") && (n = p.data("daylabel")), void 0 !== p.data("hourslabel") && !1 !== p.data("hourslabel") && (i = p.data("hourslabel")), void 0 !== p.data("hourlabel") && !1 !== p.data("hourlabel") && (a = p.data("hourlabel")), void 0 !== p.data("minuteslabel") && !1 !== p.data("minuteslabel") && (r = p.data("minuteslabel")), void 0 !== p.data("minutelabel") && !1 !== p.data("minutelabel") && (s = p.data("minutelabel")), void 0 !== p.data("secondslabel") && !1 !== p.data("secondslabel") && (d = p.data("secondslabel")), void 0 !== p.data("secondlabel") && !1 !== p.data("secondlabel") && (l = p.data("secondlabel")), void 0 !== p.data("tickf") && !1 !== p.data("tickf") && p.data("tickf"), void 0 !== p.data("timezone") && !1 !== p.data("timezone") && (c = p.data("timezone")), void 0 !== p.data("digitfs") && !1 !== p.data("digitfs") && (h = p.data("digitfs")), void 0 !== p.data("labelfs") && !1 !== p.data("labelfs") && (u = p.data("labelfs")), void 0 !== p.data("color") && !1 !== p.data("color") && (f = p.data("color")), p.countdown({
            until: new Date(m, g - 1, v, j, $, 44),
            labels: ["Years", e, "Weeks", o, i, r, d],
            labels1: ["Year", t, "Week", n, a, s, l],
            format: "ODHMS",
            timezone: c,
            padZeroes: !0,
            significant: 0,
            onTick: function() {
                "undefined" !== h && "" !== h && p.find(".countdown-amount").css("font-size", h + "px").css("line-height", h + "px"), "undefined" !== u && "" !== u && p.find(".countdown-period").css("font-size", u + "px"), "undefined" !== f && "" !== f && p.find(".countdown_separator").css("background-color", f)
            }
        })
    })
}

function initProgressBars() {
    "use strict";
    $j(".q_progress_bar").length && $j(".q_progress_bar").each(function() {
        if ($j(this).parents(".vertical_split_slider").length) {
            initToCounterHorizontalProgressBar($j(this));
            var e = $j(this).find(".progress_content").data("percentage");
            $j(this).find(".progress_content").css("width", "0%"), $j(this).find(".progress_content").animate({
                width: e + "%"
            }, 1500), $j(this).find(".progress_number_wrapper").css("width", "0%"), $j(this).find(".progress_number_wrapper").animate({
                width: e + "%"
            }, 1500)
        } else $j(this).appear(function() {
            initToCounterHorizontalProgressBar($j(this));
            var e = $j(this).find(".progress_content").data("percentage");
            $j(this).find(".progress_content").css("width", "0%"), $j(this).find(".progress_content").animate({
                width: e + "%"
            }, 1500), $j(this).find(".progress_number_wrapper").css("width", "0%"), $j(this).find(".progress_number_wrapper").animate({
                width: e + "%"
            }, 1500)
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initToCounterHorizontalProgressBar(e) {
    "use strict";
    var t = parseFloat(e.find(".progress_content").data("percentage"));
    e.find(".progress_number span").length && e.find(".progress_number span").each(function() {
        $j(this).parents(".progress_number_wrapper").css("opacity", "1"), $j(this).countTo({
            from: 0,
            to: t,
            speed: 1500,
            refreshInterval: 50
        })
    })
}

function initListAnimation() {
    "use strict";
    $j(".animate_list").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".animate_list").each(function() {
        $j(this).appear(function() {
            $j(this).find("li").each(function(e) {
                var t = $j(this);
                setTimeout(function() {
                    t.animate({
                        opacity: 1,
                        top: 0
                    }, 1500)
                }, 100 * e)
            })
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initPieChart() {
    "use strict";
    $j(".q_percentage").length && $j(".q_percentage").each(function() {
        var e = piechartcolor;
        void 0 !== $j(this).data("active") && "" !== $j(this).data("active") && (e = $j(this).data("active"));
        var t = "#eeeeee";
        void 0 !== $j(this).data("noactive") && "" !== $j(this).data("noactive") && (t = $j(this).data("noactive"));
        var o = 10;
        void 0 !== $j(this).data("linewidth") && "" !== $j(this).data("linewidth") && (o = $j(this).data("linewidth"));
        var n = 200;
        void 0 !== $j(this).data("element-appearance") && !1 !== $j(this).data("element-appearance") && (n = $j(this).data("element-appearance")), $j(this).appear(function() {
            initToCounterPieChart($j(this)), $j(this).parent().css("opacity", "1"), $j(this).easyPieChart({
                barColor: e,
                trackColor: t,
                scaleColor: !1,
                lineCap: "butt",
                lineWidth: o,
                animate: 1500,
                size: 174
            })
        }, {
            accX: 0,
            accY: -n
        })
    })
}

function initPieChartWithIcon() {
    "use strict";
    $j(".q_percentage_with_icon").length && $j(".q_percentage_with_icon").each(function() {
        var e = piechartcolor;
        "" !== $j(this).data("active") && (e = $j(this).data("active"));
        var t = "#eeeeee";
        "" !== $j(this).data("noactive") && (t = $j(this).data("noactive"));
        var o = 10;
        "" !== $j(this).data("linewidth") && (o = $j(this).data("linewidth"));
        $j(this).appear(function() {
            $j(this).parent().css("opacity", "1"), $j(this).css("opacity", "1"), $j(this).easyPieChart({
                barColor: e,
                trackColor: t,
                scaleColor: !1,
                lineCap: "butt",
                lineWidth: o,
                animate: 1500,
                size: 174
            })
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initToCounterPieChart(e) {
    "use strict";
    $j(e).css("opacity", "1");
    var t = parseFloat($j(e).find(".tocounter").text());
    $j(e).find(".tocounter").countTo({
        from: 0,
        to: t,
        speed: 1500,
        refreshInterval: 50
    })
}

function initPortfolio() {
    "use strict";
    $j(".projects_holder_outer:not(.masonry_with_space, .justified_gallery)").length && $j(".projects_holder_outer").each(function() {
        var e = $j(this).find(".projects_holder");
        if (9 != getIEversion() && 10 != getIEversion() || e.addClass("ie-specific-styles"), $j(".filter_holder .filter").on("click", function() {
                var t = $j(this).text(),
                    o = $j(this).data("filter");
                e.children("article").length && e.children("article").each(function() {
                    var e = $j(this);
                    e.hasClass(o) && "all" !== o ? (e.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery_" + t.toLowerCase() + "]"), e.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery_" + t.toLowerCase() + "]")) : "all" === o && (e.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery]"), e.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery]"))
                }), $j(".filter_holder").find(".label span").each(function() {
                    $j(this).text(t)
                })
            }), e.hasClass("v1")) var t = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25);
        else if (e.hasClass("v2")) var t = new Array(1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20);
        else if (e.hasClass("v3")) var t = new Array(1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7, 8, 7, 8, 9, 8, 9, 10, 9, 10, 11, 10, 11, 12, 11, 12, 13, 12, 13, 14, 13, 14, 15, 14, 15, 16, 15, 16, 17, 16, 17, 18, 17, 18, 19, 18, 19, 20, 19, 20, 21, 20, 21, 22);
        else if (e.hasClass("v4")) var t = new Array(1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 6, 7, 5, 6, 7, 8, 6, 7, 8, 9, 7, 8, 9, 10, 8, 9, 10, 11, 9, 10, 11, 12, 10, 11, 12, 13, 11, 12, 13, 14, 12, 13, 14, 15, 13, 14, 15, 16, 14, 15, 16, 17, 15, 16, 17, 18, 16, 17, 18, 19, 17, 18, 19, 20, 18, 19, 20, 21);
        else if (e.hasClass("v5")) var t = new Array(1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 4, 5, 6, 7, 8, 5, 6, 7, 8, 9, 6, 7, 8, 9, 10, 7, 8, 9, 10, 11, 8, 9, 10, 11, 12, 9, 10, 11, 12, 13, 10, 11, 12, 13, 14, 11, 12, 13, 14, 15, 12, 13, 14, 15, 16, 13, 14, 15, 16, 17, 14, 15, 16, 17, 18, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 17, 18, 19, 20, 21, 18, 19, 20, 21, 22, 19, 20, 21, 22, 23);
        else if (e.hasClass("v6")) var t = new Array(1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 4, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 7, 8, 9, 10, 11, 12, 8, 9, 10, 11, 12, 13, 9, 10, 11, 12, 13, 14, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 16, 12, 13, 14, 15, 16, 17, 13, 14, 15, 16, 17, 18, 14, 15, 16, 17, 18, 19, 15, 16, 17, 18, 19, 20, 16, 17, 18, 19, 20, 21, 17, 18, 19, 20, 21, 22);
        var o;
        o = window.location.hash && 1 == window.location.hash.indexOf("portfolio_category") ? window.location.hash.replace("#", "") : "all", qodeInitPortFilterCounter($j(this)), e.mixitup({
            showOnLoad: o,
            transitionSpeed: 600,
            minHeight: 150,
            onMixLoad: function() {
                $j(".projects_holder").addClass("hideItems"), $j(".projects_holder article").css("visibility", "visible"), e.hasClass("portfolio_one_by_one") && e.find("article").each(function(e) {
                        var t = $j(this);
                        if ($j(".vertical_split_slider").length);
                        else;
                        t.appear(function() {
                            setTimeout(function() {
                                t.addClass("show")
                            }, 100 * e)
                        }, {
                            accX: 0,
                            accY: -150
                        })
                    }),
                    e.hasClass("slide_from_left") && e.find("article").each(function(e) {
                        var t = $j(this);
                        t.appear(function() {
                            setTimeout(function() {
                                t.addClass("show")
                            }, 200 * Math.random())
                        }, {
                            accX: 0,
                            accY: -150
                        })
                    }), e.hasClass("slide_from_top") && e.find("article").each(function(e) {
                        var o = $j(this);
                        o.appear(function() {
                            setTimeout(function() {
                                o.addClass("show")
                            }, 50 * t[e])
                        }, {
                            accX: 0,
                            accY: -150
                        })
                    }), e.hasClass("diagonal_fade") && e.find("article").each(function(e) {
                        var o = $j(this);
                        o.appear(function() {
                            setTimeout(function() {
                                o.addClass("show")
                            }, 50 * t[e])
                        }, {
                            accX: 0,
                            accY: -150
                        })
                    }), initParallax()
            },
            onMixEnd: function() {
                initParallax()
            }
        })
    })
}

function initPortfolioZIndex() {
    "use strict";
    $j(".projects_holder_outer.portfolio_no_space").length && $j(".no_space.hover_text article").each(function(e) {
        $j(this).css("z-index", e + 10)
    })
}

function initPortfolioJustifiedGallery() {
    "use strict";
    var e = $j(".projects_holder_outer.justified_gallery");
    e.each(function() {
        var t = $j(this).find(".filter_holder");
        t.find("li.filter").first().addClass("current"), t.find(".filter").on("click", function() {
            var e = $j(this).text();
            t.find(".label span").each(function() {
                $j(this).text(e)
            });
            var n = $j(this).attr("data-filter"),
                i = o.find("article");
            return i.css("transition", "all 500ms ease"), i.not(n).css({
                transform: "scale(0)"
            }), setTimeout(function() {
                i.filter(n).css({
                    transform: ""
                }), o.css("transition", "height 500ms ease").justifiedGallery({
                    selector: ">article" + ("*" != n ? n : "")
                })
            }, 550), setTimeout(function() {
                i.css("transition", ""), o.css("transition", "")
            }, 1100), $j(".filter").removeClass("current active"), $j(this).addClass("current active"), !1
        }), qodeInitPortFilterCounter(e);
        var o = $j(this).find(".projects_holder"),
            n = void 0 !== o.data("row-height") ? o.data("row-height") : 200,
            i = void 0 !== o.data("spacing") ? o.data("spacing") : 0,
            a = void 0 !== o.data("last-row") ? o.data("last-row") : "nojustify",
            r = void 0 !== o.data("justify-threshold") ? o.data("justify-threshold") : .75;
        o.justifiedGallery({
            captions: !1,
            rowHeight: n,
            margins: i,
            border: 0,
            lastRow: a,
            justifyThreshold: r,
            selector: "> article"
        }).on("jg.complete jg.rowflush", function() {
            $j(this).find("article").addClass("show").each(function() {
                $j(this).height(Math.round($j(this).height()))
            })
        })
    })
}

function initPortfolioMasonryFilter() {
    "use strict";
    var e = $j(".projects_masonry_holder, .masonry_with_space .projects_holder");
    if (e.length) {
        var t = null;
        $j(".filter:first").addClass("current"), $j(".filter").on("click", function() {
            clearTimeout(t), $j(".isotope, .isotope .isotope-item").css("transition-duration", "0.8s"), t = setTimeout(function() {
                $j(".isotope, .isotope .isotope-item").css("transition-duration", "0s")
            }, 700);
            var o = $j(this).attr("data-filter");
            e.isotope({
                filter: o
            }), $j(".filter").removeClass("current"), $j(this).addClass("current");
            var n = $j(this).text();
            return "*" !== o && (o = o.substring(1)), e.children("article").length && e.children("article").each(function() {
                var e = $j(this);
                e.hasClass(o) && "*" !== o ? (e.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery_" + n.toLowerCase() + "]"), e.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery_" + n.toLowerCase() + "]")) : "*" === o && (e.find("a.lightbox").attr("rel", "prettyPhoto[pretty_photo_gallery]"), e.find("a.lightbox").attr("data-rel", "prettyPhoto[pretty_photo_gallery]"))
            }), setTimeout(setPortfolioMasZIndex(), 700), !1
        })
    }
}

function initPortfolioMasonry() {
    "use strict";
    var e = $j(".projects_masonry_holder, .masonry_with_space .projects_holder");
    e.length && e.each(function() {
        var t = $j(this),
            o = t.find(".qode-portfolio-masonry-gallery-grid-sizer").width();
        e.hasClass("projects_masonry_holder") && resizeMasonry(o, t), qodeInitMasonry(t), qodeInitPortFilterCounter(e.parent()), $j(window).resize(function() {
            setPortfolioMasZIndex(), e.hasClass("projects_masonry_holder") && resizeMasonry(o, t), qodeInitMasonry(t)
        })
    })
}

function qodeInitMasonry(e) {
    e.waitForImages(function() {
        e.animate({
            opacity: 1
        }), e.isotope({
            itemSelector: ".portfolio_masonry_item, .masonry_with_space .mix",
            masonry: {
                columnWidth: ".qode-portfolio-masonry-gallery-grid-sizer"
            }
        }), e.hasClass("portfolio_one_by_one") && e.find("article").each(function(e) {
            var t = $j(this);
            setTimeout(function() {
                t.addClass("show")
            }, 100 * e)
        }), e.hasClass("portfolio_fade_from_bottom") && e.find("article").each(function(e) {
            var t = $j(this);
            $j(this).css({
                opacity: "0",
                transform: "translateY(150px)"
            }), $j(this).appear(function() {
                setTimeout(function() {
                    t.css({
                        opacity: "1",
                        transition: "all .8s ease",
                        transform: "translateY(0)"
                    })
                }, 100)
            }, {
                accX: 0,
                accY: -150
            })
        })
    })
}

function resizeMasonry(e, t) {
    var o = jQuery(window);
    if (t.hasClass("portfolio_masonry_gallery_with_space")) {
        var n = t.find(".portfolio_masonry_item.default"),
            i = t.find(".large_width"),
            a = t.find(".large_height"),
            r = t.find(".large_width_height");
        n.css("height", e), a.css("height", Math.round(2 * e)), o.innerWidth() > 480 ? (r.css("height", Math.round(2 * e)), i.css("height", e)) : r.css("height", e)
    } else {
        var s;
        s = t.find('article[class*="default"]:first img').height() ? t.find('article[class*="default"]:first img').height() : t.find('article[class*="large_width"]:not(.large_width_height):first img').height() ? t.find('article[class*="large_width"]:not(.large_width_height):first img').height() : t.find('article[class*="large_width_height"]:first img').height() ? t.find('article[class*="large_width_height"]:first img').height() / 2 : t.find('article[class*="large_height"]:first img').height() / 2;
        var d = o.innerWidth() > 480 ? 2 : 1;
        t.find('article[class*="large_width_height"] img, article[class*="large_height"] img').css("height", s * d)
    }
}

function setPortfolioMasZIndex() {
    var e = {},
        t = {};
    $j(".projects_masonry_holder article").each(function() {
        e[$j(this).index()] = getPortfolioXPos($j(this).css("left"))
    });
    var o = $j.map(e, function(e) {
        return e
    });
    o = cleanPortfolioMasXArray(o), o.sort(function(e, t) {
        return e - t
    });
    for (var n = 0; n < o.length; n++) t[o[n]] = 10 * n;
    $j.each(e, function(e, o) {
        var n, i = o;
        $j.each(t, function(e, t) {
            i == e && (n = t)
        }), $j(".projects_masonry_holder article:eq(" + e + ")").css("z-index", n)
    })
}

function cleanPortfolioMasXArray(e) {
    var t, o = e.length,
        n = [],
        i = {};
    for (t = 0; t < o; t++) i[e[t]] = 0;
    for (t in i) n.push(t);
    return n
}

function getPortfolioXPos(e) {
    return e.substr(0, e.length - 2)
}

function qodeInitPortFilterCounter(e) {
    function t(e, t, o) {
        e.find(t).text(o)
    }
    if (e.hasClass("portfolio_holder_fwn")) {
        var o = e.find("article"),
            n = e.find(".filter_holder ul li");
        n.each(function() {
            var n = $j(this);
            if ("all" == n.data("filter") || "*" == n.data("filter")) t(n, ".filter_number_of_items", o.length);
            else {
                var i = n.attr("data-filter");
                i = i.replace(/\./g, ""), t(n, ".filter_number_of_items", e.find("article." + i).length)
            }
        }), n.css("opacity", "1")
    }
}

function qodeGridWidth() {
    var e = qode_body.attr("class");
    e.match(/grid[\w-]*\b/) && (gridClass = e.match(/grid[\w-]*\b/).toString(), qode_grid_width = parseInt(gridClass.substr(5)))
}

function initServiceAnimation() {
    "use strict";
    $j(".fade_in_circle_holder").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".fade_in_circle_holder").each(function() {
        $j(this).appear(function() {
            $j(this).addClass("animate_circle")
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function checkTitleToShowOrHide() {
    if ($j(".title_outer.animate_title_area").length) {
        var e = $j(".title_outer").data("height");
        $scroll > $j(".title").height() && $j(".title_outer").css({
            height: e,
            opacity: "1",
            overflow: "visible"
        })
    }
}

function initTitleAreaAnimation() {
    if ($j(".title_outer.animate_title_area").length) {
        var e = $j(".title_outer").data("height");
        $j(".title_outer").hasClass("with_image") && (e = $j(".image.responsive").height()), $scroll < $j(".title").height() && $j(".title_outer").animate({
            height: e,
            opacity: 1
        }, 500, function() {
            $j(this).css({
                overflow: "visible"
            }), initPortfolioSingleInfo(), $j("nav.content_menu").length > 0 && (content_menu_position = $j("nav.content_menu").offset().top, contentMenuPosition())
        })
    }
}

function initParallaxTitle() {
    "use strict";
    if ($j(".title").length > 0 && 0 === $j(".touchevents").length) {
        if ($j(".title.has_fixed_background").length) {
            var e = parseInt($j(".title.has_fixed_background").css("background-size").match(/\d+/)),
                t = $j(".title.has_fixed_background").height(),
                o = t / 1e4 * 7,
                n = $scroll - $j(".title.has_fixed_background").offset().top;
            $j(".title.has_fixed_background").css({
                "background-position": "center " + (0 + add_for_admin_bar) + "px"
            }), $j(".title.has_fixed_background").hasClass("zoom_out") && $j(".title.has_fixed_background").css({
                "background-size": e - $scroll + "px auto"
            })
        }
        $j(window).on("scroll", function() {
            if ($j(".title.has_fixed_background").length) {
                var t = $scroll - $j(".title.has_fixed_background").offset().top,
                    n = -t * o;
                $j(".title.has_fixed_background").css({
                    "background-position": "center " + (n + add_for_admin_bar) + "px"
                }), $j(".title.has_fixed_background").hasClass("zoom_out") && $j(".title.has_fixed_background").css({
                    "background-size": e - $scroll + "px auto"
                })
            }
        })
    }
}

function initParallax() {
    "use strict";
    $j(".parallax_section_holder").length && $j(".parallax_section_holder").each(function() {
        var e = $j(this);
        e.hasClass("qode_full_screen_height_parallax") && e.height($window_height);
        var t = .4 * e.data("speed");
        e.parallax("50%", t)
    })
}

function initSideAreaScroll() {
    "use strict";
    $j(".side_menu").length && $j(".side_menu").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 40,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    })
}

function initVerticalAreaMenuScroll() {
    "use strict";
    $j(".vertical_menu_area.with_scroll").length && $j(".vertical_menu_area.with_scroll").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 40,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    })
}

function loadMore() {
    "use strict";
    var e = 1;
    $j(".load_more a").on("click", function(t) {
        t.preventDefault();
        var o = ($j(this), $j(this).closest(".projects_holder_outer")),
            n = $j(this).attr("href"),
            i = ".projects_holder",
            a = ".portfolio_paging .load_more a",
            r = $j(a).attr("href"),
            s = $j(".projects_holder .filler").length,
            d = $j(".portfolio_paging"),
            l = $j(".portfolio_paging_loading");
        d.hide(), l.show(), $j.get(n + "", function(t) {
            if ($j(i).is(".justified-gallery")) {
                var o = $j(i, t).wrapInner("").html();
                r = $j(a, t).attr("href"), $j(i, t).waitForImages(function() {
                    $j(i).find("article:last").after(o), $j(i).find("article").css("visibility", "visible"), $j(i).justifiedGallery("norewind"), prettyPhoto(), $j(".load_more").attr("rel") > e ? $j(".load_more a").attr("href", r) : $j(".load_more").remove(), $j(".projects_holder .portfolio_paging:last").remove(), d.show(), l.hide()
                })
            } else {
                $j(".projects_holder .filler").slice(-s).remove();
                var o = $j(i, t).wrapInner("").html();
                r = $j(a, t).attr("href"), $j(i, t).waitForImages(function() {
                    if ($j("article.mix:last").after(o), $j(".projects_holder article").css("visibility", "visible"), $j("article:not(.show)").each(function(e) {
                            $j(this).addClass("show")
                        }), $j(".masonry_with_space").length) $j(".masonry_with_space .projects_holder").isotope("reloadItems").isotope();
                    else {
                        var t = $j("article.mix:first").height();
                        $j("article.mix").css("min-height", t), $j(".projects_holder").mixitup("remix", "all")
                    }
                    prettyPhoto(), $j(".load_more").attr("rel") > e ? $j(".load_more a").attr("href", r) : $j(".load_more").remove(), $j(".projects_holder .portfolio_paging:last").remove(), $j("article.mix").css("min-height", 0), d.show(), l.hide()
                })
            }
        }).done(function() {
            setTimeout(function() {
                initPortfolioMasonry(), qodeInitPortFilterCounter(o)
            }, 1e3)
        }), e++
    })
}

function prettyPhoto() {
    "use strict";
    $j("a[data-rel]").each(function() {
        $j(this).attr("rel", $j(this).data("rel"))
    }), $j("a[rel^='prettyPhoto']:not(.qode-single-image-pretty-photo)").prettyPhoto({
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: .8,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 650,
        default_height: 400,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        social_tools: !1
    }), $j("a[rel^='prettyPhoto'].qode-single-image-pretty-photo").prettyPhoto({
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: .8,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 650,
        default_height: 400,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        social_tools: !1,
        changepicturecallback: function() {
            $j(".pp_pic_holder").addClass("qode-pretty-photo-hide-navigation")
        }
    })
}

function initMobileMenu() {
    "use strict";
    $j(".mobile_menu_button > span").on("tap click", function(e) {
        e.preventDefault(), $j(".mobile_menu > ul").is(":visible") ? $j(".mobile_menu > ul").slideUp(200) : $j(".mobile_menu > ul").slideDown(200)
    }), initInsideMobileMenu()
}

function initInsideMobileMenu() {
    "use strict";
    $j(".mobile_menu > ul > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > h3, .mobile_menu > ul > li.has_sub > a[href*='#']").on("tap click", function(e) {
        e.preventDefault(), $j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible") ? ($j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200), $j(this).closest("li.has_sub").removeClass("open_sub")) : ($j(this).closest("li.has_sub").addClass("open_sub"), $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200))
    }), $j(".mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > span.mobile_arrow, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > h3, .mobile_menu > ul > li.has_sub > ul.sub_menu > li.has_sub > a[href*='#']").on("tap click", function(e) {
        e.preventDefault(), $j(this).parent().find("ul.sub_menu").is(":visible") ? ($j(this).parent().find("ul.sub_menu").slideUp(200), $j(this).parent().removeClass("open_sub")) : ($j(this).parent().addClass("open_sub"), $j(this).parent().find("ul.sub_menu").slideDown(200))
    }), $j(".mobile_menu ul li > a, .q_logo a").on("click", function() {
        "http://#" !== $j(this).attr("href") && "#" !== $j(this).attr("href") && $j(".mobile_menu > ul").slideUp()
    })
}

function initFlexSlider() {
    "use strict";
    $j(".flexslider").each(function() {
        var e = $j(this),
            t = 8e3;
        void 0 !== e.data("interval") && !1 !== e.data("interval") && (t = 1e3 * parseFloat(e.data("interval")));
        var o = !0;
        void 0 !== e.data("direction") && (o = e.data("direction"));
        var n = !1;
        void 0 !== e.data("control") && (n = e.data("control"));
        var i = !0;
        void 0 !== e.data("pause-on-hover") && (i = e.data("pause-on-hover"));
        var a = !1;
        void 0 !== e.data("drag") && (a = e.data("drag"));
        var r = !0;
        0 === t && (r = !1);
        var s = "slide";
        void 0 !== e.data("flex_fx") && !1 !== e.data("flex_fx") && (s = e.data("flex_fx")), e.flexslider({
            animationLoop: !0,
            controlNav: n,
            directionNav: o,
            useCSS: !1,
            pauseOnAction: i,
            pauseOnHover: i,
            slideshow: r,
            animation: s,
            prevText: "<div><i class='fa fa-angle-left'></i></div>",
            nextText: "<div><i class='fa fa-angle-right'></i></div>",
            animationSpeed: 600,
            slideshowSpeed: t,
            touch: !0,
            start: function() {
                setTimeout(function() {
                    $j(".flexslider").fitVids()
                }, 100)
            }
        }), e.find(".flex-direction-nav a").on("click", function(e) {
            e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
        }), a && e.swipe({
            swipeLeft: function() {
                e.flexslider("next")
            },
            swipeRight: function() {
                e.flexslider("prev")
            },
            threshold: 20
        })
    })
}

function fitVideo() {
    "use strict";
    $j(".portfolio_images").fitVids(), $j(".video_holder").fitVids(), $j(".format-video .post_image").fitVids(), $j(".format-video .q_masonry_blog_post_image").fitVids()
}

function initPortfolioSingleInfo() {
    "use strict";
    var e = $j(".portfolio_single_follow");
    if ($j(".portfolio_single_follow").length > 0) {
        var t = e.offset();
        $scrollHeight = $j(".portfolio_container").height();
        var o = $j(".portfolio_container").offset(),
            n = $j(window),
            i = parseInt($j("header.page_header").css("height"), 10);
        n.scroll(function() {
            n.width() > 960 ? n.scrollTop() + i + 3 > t.top ? n.scrollTop() + i + e.height() + 24 < o.top + $scrollHeight ? e.stop().animate({
                marginTop: n.scrollTop() - t.top + i
            }) : e.stop().animate({
                marginTop: $scrollHeight - e.height() - 24
            }) : e.stop().animate({
                marginTop: 0
            }) : e.css("margin-top", 0)
        })
    }
}

function initTabs() {
    "use strict";
    if ($j(".q_tabs").length) {
        $j(".q_tabs").appear(function() {
            $j(".q_tabs").css("visibility", "visible")
        }, {
            accX: 0,
            accY: -100
        });
        var e = $j(".tabs-nav"),
            t = e.children("li");
        e.each(function() {
            var e = $j(this);
            e.next().children(".tab-content").stop(!0, !0).hide().first().show(), e.children("li").first().addClass("active").stop(!0, !0).show()
        }), t.on("click", function(e) {
            var t = $j(this);
            t.siblings().removeClass("active").end().addClass("active"), t.parent().next().children(".tab-content").stop(!0, !0).hide().siblings(t.find("a").attr("href")).fadeIn(), e.preventDefault()
        })
    }
}

function qodeInitAdvancedTabs() {
    var e = $j(".qode-advanced-tabs");
    e.length && e.each(function() {
        var e = $j(this);
        e.children(".qode-advanced-tab-container").each(function(e) {
            e += 1;
            var t = $j(this),
                o = t.attr("id"),
                n = t.parent().find(".qode-advanced-tabs-nav li:nth-child(" + e + ") a"),
                i = n.attr("href");
            o = "#" + o, o.indexOf(i) > -1 && n.attr("href", o)
        }), e.tabs()
    })
}

function qodeInitAdvancedTabsIcons() {
    var e = $j(".qode-advanced-tab-container");
    e.length && e.each(function() {
        var e = $j(this),
            t = e.attr("id"),
            o = "";
        void 0 === e.data("icon-html") && "false" === e.data("icon-html") || (o = e.data("icon-html"));
        var n = e.parents(".qode-advanced-tabs").find('.qode-advanced-tabs-nav > li a[href="#' + t + '"]');
        void 0 !== n && n.children(".qode-advanced-icon-frame").html(o)
    })
}

function initAccordion() {
    "use strict";
    $j(".q_accordion_holder").length && ($j(".q_accordion_holder").appear(function() {
        $j(".q_accordion_holder").css("visibility", "visible")
    }, {
        accX: 0,
        accY: -100
    }), $j(".accordion").length && ($j(".accordion").accordion({
        animate: "swing",
        collapsible: !0,
        active: !1,
        icons: "",
        heightStyle: "content",
        activate: function(e, t) {
            initParallax()
        }
    }), $j(".accordion").each(function() {
        var e = parseInt($j(this).data("active-tab"));
        "" !== e && (e -= 1, $j(this).accordion("option", "active", e));
        var t = parseInt($j(this).data("border-radius"));
        "" !== t && $j(this).find(".accordion_mark").css("border-radius", t + "px");
        var o = "yes" == $j(this).data("collapsible");
        $j(this).accordion("option", "collapsible", o), $j(this).accordion("option", "collapsible", o)
    })), $j(".toggle").addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset").find(".title-holder").addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom").hover(function() {
        $j(this).toggleClass("ui-state-hover")
    }).on("click", function() {
        return $j(this).toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom").next().toggleClass("ui-accordion-content-active").slideToggle(400), !1
    }).next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), $j(".toggle").each(function() {
        var e = parseInt($j(this).data("active-tab"));
        "" !== e && e >= 1 && (e -= 1, $j(this).find(".ui-accordion-content").eq(e).show(), $j(this).find(".ui-accordion-header").eq(e).addClass("ui-state-active"))
    }))
}

function initAccordionContentLink() {
    "use strict";
    $j(".accordion").length && $j(".accordion_holder .accordion_inner .accordion_content a").on("click", function() {
        return "_blank" === $j(this).attr("target") ? window.open($j(this).attr("href"), "_blank") : window.open($j(this).attr("href"), "_self"), !1
    })
}

function initTestimonials() {
    "use strict";
    $j(".testimonials_carousel").length && $j(".testimonials_carousel").each(function() {
        var e = 5e3,
            t = $j(this);
        void 0 !== t.data("auto-rotate-slides") && !1 !== t.data("auto-rotate-slides") && (e = 1e3 * parseFloat(t.data("auto-rotate-slides")));
        var o = !0;
        0 === e && (o = !1);
        var n = "fade";
        void 0 !== t.data("animation-type") && !1 !== t.data("animation-type") && (n = t.data("animation-type"));
        var i = !0;
        void 0 !== t.data("show-navigation") && (i = "no" != t.data("show-navigation"));
        var a = 600;
        void 0 !== t.data("animation-speed") && !1 !== t.data("animation-speed") && (a = t.data("animation-speed"));
        var r = qodeNumberOfTestimonialsItems(t),
            s = 0,
            d = 0;
        void 0 !== r && 1 !== r && (s = 200, d = 40), t.flexslider({
            animationLoop: !0,
            controlNav: !1,
            directionNav: i,
            useCSS: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            slideshow: o,
            animation: n,
            itemMargin: d,
            minItems: r,
            maxItems: r,
            itemWidth: s,
            animationSpeed: a,
            slideshowSpeed: e,
            start: function(e) {
                initParallax()
            }
        })
    })
}

function qodeNumberOfTestimonialsItems(e) {
    var t = e.data("number-per-slide");
    return $window_width < 768 && t > 1 ? t = 1 : $window_width < 1024 && t > 2 && (t = 2), t
}

function qodeNumberOfTestimonialsItemsResize() {
    var e = $j(".testimonials_carousel, .testimonials_c_carousel");
    e.length && e.each(function() {
        var e = $j(this),
            t = qodeNumberOfTestimonialsItems(e);
        void 0 !== e.data("flexslider") && (e.data("flexslider").vars.minItems = t), void 0 !== e.data("flexslider") && (e.data("flexslider").vars.maxItems = t)
    })
}

function initTestimonialsCarousel() {
    "use strict";
    $j(".testimonials_c_carousel").length && $j(".testimonials_c_carousel").each(function() {
        var e = 5e3,
            t = $j(this);
        void 0 !== t.data("auto-rotate-slides") && !1 !== t.data("auto-rotate-slides") && (e = 1e3 * parseFloat(t.data("auto-rotate-slides")));
        var o = !0;
        0 === e && (o = !1);
        var n = !0;
        void 0 !== t.data("show-navigation") && (n = "no" != t.data("show-navigation"));
        var i = 600;
        void 0 !== t.data("animation-speed") && !1 !== t.data("animation-speed") && (i = t.data("animation-speed"));
        var a = qodeNumberOfTestimonialsItems(t),
            r = 0,
            s = 0;
        void 0 !== a && 1 !== a && (r = 300, s = 30), t.flexslider({
            animationLoop: !0,
            controlNav: n,
            directionNav: !1,
            useCSS: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            slideshow: o,
            animation: "slide",
            itemMargin: s,
            minItems: a,
            maxItems: a,
            itemWidth: r,
            animationSpeed: i,
            slideshowSpeed: e,
            start: function(e) {
                initParallax()
            }
        })
    })
}

function initMessages() {
    "use strict";
    $j(".q_message").length && $j(".q_message").each(function() {
        $j(this).find(".close").on("click", function(e) {
            e.preventDefault(), $j(this).parent().parent().fadeOut(500)
        })
    })
}

function initElementsAnimation() {
    "use strict";
    $j(".element_from_fade").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_fade").each(function() {
        var e = $j(this);
        e.appear(function() {
            e.addClass("element_from_fade_on")
        }, {
            accX: 0,
            accY: -100
        })
    }), $j(".element_from_left").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_left").each(function() {
        var e = $j(this);
        e.appear(function() {
            e.addClass("element_from_left_on")
        }, {
            accX: 0,
            accY: -100
        })
    }), $j(".element_from_right").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_right").each(function() {
        var e = $j(this);
        e.appear(function() {
            e.addClass("element_from_right_on")
        }, {
            accX: 0,
            accY: -100
        })
    }), $j(".element_from_top").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_top").each(function() {
        var e = $j(this);
        e.appear(function() {
            e.addClass("element_from_top_on")
        }, {
            accX: 0,
            accY: -100
        })
    }), $j(".element_from_bottom").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_from_bottom").each(function() {
        var e = $j(this);
        e.appear(function() {
            e.addClass("element_from_bottom_on")
        }, {
            accX: 0,
            accY: -100
        })
    }), $j(".element_transform").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".element_transform").each(function() {
        var e = $j(this);
        e.appear(function() {
            e.addClass("element_transform_on")
        }, {
            accX: 0,
            accY: -100
        })
    })
}

function fitAudio() {
    "use strict";
    $j("audio.blog_audio").mediaelementplayer({
        audioWidth: "100%"
    })
}

function initBlog() {
    "use strict";
    if ($j(".blog_holder.masonry, .blog_holder.blog_pinterest").length) {
        var e = $j(this).closest(".container_inner").width(),
            t = $j(".filter"),
            o = $j(".filter_holder ul > .filter:first-of-type");
        $j(".blog_holder").closest(".column_inner").length && (e = $j(".blog_holder").closest(".column_inner").width()), $j(".blog_holder").width(e);
        var n = $j(".blog_holder");
        n.waitForImages(function() {
            setTimeout(function() {
                n.isotope({
                    itemSelector: "article",
                    resizable: !1,
                    masonry: {
                        columnWidth: ".blog_holder_grid_sizer",
                        gutter: ".blog_holder_grid_gutter"
                    }
                }), $j(".blog_holder.masonry, .blog_holder.blog_pinterest").animate({
                    opacity: "1"
                }, 500)
            }, 400)
        }), o.addClass("active"), t.on("click", function() {
            t.removeClass("active"), $j(this).addClass("active");
            var e = $j(this).attr("data-filter");
            return n.isotope({
                filter: e
            }), !1
        });
        var i = $j(".qode-infinite-scroll-loading-label"),
            a = $j(".qode-infinite-scroll-finished-label");
        if (n.hasClass("masonry_infinite_scroll")) n.infiniteScroll({
            path: ".blog_infinite_scroll_button a",
            append: ".post",
            history: !1
        }), n.on("request.infiniteScroll", function(e, t) {
            i.fadeIn("fast")
        }), n.on("load.infiniteScroll", function(e, t, o) {
            i.fadeOut("fast")
        }), n.on("append.infiniteScroll", function(e, t, o, i) {
            n.isotope("appended", i), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function() {
                $j(".blog_holder.masonry, .blog_holder.blog_pinterest").isotope("layout")
            }, 400)
        }), n.on("last.infiniteScroll", function(e, t, o) {
            a.fadeIn("fast")
        });
        else if (n.hasClass("masonry_load_more")) {
            var r = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function(e) {
                e.preventDefault();
                var t = $j(".blog_load_more_button"),
                    o = $j(".blog_load_more_button_loading");
                t.hide(), o.show();
                var i = $j(this).attr("href"),
                    a = ".blog_load_more_button a",
                    s = $j(a).attr("href");
                $j.get(i + "", function(e) {
                    var i = $j(".masonry_load_more", e).wrapInner("").html();
                    s = $j(a, e).attr("href"), n.append($j(i)).isotope("reloadItems").isotope({
                        sortBy: "original-order"
                    }), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function() {
                        $j(".blog_holder.masonry, .blog_holder.blog_pinterest").isotope("layout")
                    }, 400), t.show(), o.hide(), $j(".blog_load_more_button span").attr("rel") > r ? $j(".blog_load_more_button a").attr("href", s) : $j(".blog_load_more_button").remove()
                }), r++
            })
        }
    }
}

function initBlogMasonryFullWidth() {
    "use strict";
    if ($j(".masonry_full_width").length) {
        var e = $j(".full_width_inner").width();
        $j(".masonry_full_width").width(e);
        var t = $j(".masonry_full_width");
        $j(".filter").on("click", function() {
            var e = $j(this).attr("data-filter");
            return t.isotope({
                filter: e
            }), !1
        });
        var o = $j(".qode-infinite-scroll-loading-label"),
            n = $j(".qode-infinite-scroll-finished-label");
        if (t.hasClass("masonry_infinite_scroll")) t.infiniteScroll({
            path: ".blog_infinite_scroll_button a",
            append: ".post",
            history: !1
        }), t.on("request.infiniteScroll", function(e, t) {
            o.fadeIn("fast")
        }), t.on("load.infiniteScroll", function(e, t, n) {
            o.fadeOut("fast")
        }), t.on("append.infiniteScroll", function(e, o, n, i) {
            t.isotope("appended", i), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function() {
                $j(".blog_holder.masonry_full_width").isotope("layout")
            }, 400)
        }), t.on("last.infiniteScroll", function(e, t, o) {
            n.fadeIn("fast")
        });
        else if (t.hasClass("masonry_load_more")) {
            var i = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function(e) {
                e.preventDefault();
                var o = $j(this).attr("href"),
                    n = ".blog_load_more_button a",
                    a = $j(n).attr("href");
                $j.get(o + "", function(e) {
                    var o = $j(".masonry_load_more", e).wrapInner("").html();
                    a = $j(n, e).attr("href"), t.append($j(o)).isotope("reloadItems").isotope({
                        sortBy: "original-order"
                    }), fitVideo(), fitAudio(), initFlexSlider(), setTimeout(function() {
                        $j(".blog_holder.masonry_full_width").isotope("layout")
                    }, 400), $j(".blog_load_more_button span").attr("rel") > i ? $j(".blog_load_more_button a").attr("href", a) : $j(".blog_load_more_button").remove()
                }), i++
            })
        }
        t.waitForImages(function() {
            setTimeout(function() {
                t.isotope({
                    itemSelector: "article",
                    resizable: !1,
                    masonry: {
                        columnWidth: ".blog_holder_grid_sizer",
                        gutter: ".blog_holder_grid_gutter"
                    }
                }), $j(".masonry_full_width").animate({
                    opacity: "1"
                }, 500)
            }, 400)
        })
    }
}

function initBlogMasonryGallery() {
    "use strict";
    if ($j(".blog_holder.masonry_gallery").length) {
        qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width());
        var e = $j(".blog_holder.masonry_gallery");
        e.width(Math.round(e.parent().width())), e.isotope({
            itemSelector: "article",
            resizable: !1,
            masonry: {
                columnWidth: ".blog_holder_grid_sizer",
                gutter: ".blog_holder_grid_gutter"
            }
        }), e.waitForImages(function() {
            e.animate({
                opacity: "1"
            }, 300, function() {
                e.isotope().isotope("layout")
            })
        });
        var t = $j(".qode-infinite-scroll-loading-label"),
            o = $j(".qode-infinite-scroll-finished-label");
        if (e.hasClass("masonry_infinite_scroll")) e.infiniteScroll({
            path: ".blog_infinite_scroll_button a",
            append: ".post",
            history: !1
        }), e.on("request.infiniteScroll", function(e, o) {
            t.fadeIn("fast")
        }), e.on("load.infiniteScroll", function(e, o, n) {
            t.fadeOut("fast")
        }), e.on("append.infiniteScroll", function(t, o, n, i) {
            e.isotope("appended", i), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function() {
                e.isotope("layout")
            }, 300)
        }), e.on("last.infiniteScroll", function(e, t, n) {
            o.fadeIn("fast")
        });
        else if (e.hasClass("masonry_load_more")) {
            var n = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function(t) {
                t.preventDefault();
                var o = $j(this).attr("href"),
                    i = ".blog_load_more_button a",
                    a = $j(i).attr("href");
                $j.get(o + "", function(t) {
                    var o = $j(".masonry_load_more", t).wrapInner("").html();
                    a = $j(i, t).attr("href"), e.append($j(o)).isotope("reloadItems").isotope({
                        sortBy: "original-order"
                    }), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function() {
                        e.isotope("layout")
                    }, 300), $j(".blog_load_more_button span").attr("rel") > n ? $j(".blog_load_more_button a").attr("href", a) : $j(".blog_load_more_button").remove()
                }), n++
            })
        }
        $j(window).resize(function() {
            qodeResizeBlogMasonryGallery($j(".blog_holder_grid_sizer").width()), e.isotope().isotope("layout"), e.width(Math.round(e.parent().width()))
        })
    }
}

function initBlogGallery() {
    "use strict";
    if ($j(".blog_holder.blog_gallery, .blog_holder.blog_chequered").length) {
        qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width());
        var e = $j(".blog_holder.blog_gallery, .blog_holder.blog_chequered");
        e.width(Math.round(e.parent().width())), e.isotope({
            itemSelector: "article",
            resizable: !1,
            masonry: {
                columnWidth: ".blog_holder_grid_sizer",
                gutter: ".blog_holder_grid_gutter"
            }
        }), e.waitForImages(function() {
            e.animate({
                opacity: "1"
            }, 300, function() {
                e.isotope().isotope("layout")
            })
        });
        var t = $j(".qode-infinite-scroll-loading-label"),
            o = $j(".qode-infinite-scroll-finished-label");
        if (e.hasClass("masonry_infinite_scroll")) e.infiniteScroll({
            path: ".blog_infinite_scroll_button a",
            append: ".post",
            history: !1
        }), e.on("request.infiniteScroll", function(e, o) {
            t.fadeIn("fast")
        }), e.on("load.infiniteScroll", function(e, o, n) {
            t.fadeOut("fast")
        }), e.on("append.infiniteScroll", function(t, o, n, i) {
            e.isotope("appended", i), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function() {
                e.isotope("layout")
            }, 300)
        }), e.on("last.infiniteScroll", function(e, t, n) {
            o.fadeIn("fast")
        });
        else if (e.hasClass("masonry_load_more")) {
            var n = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function(t) {
                t.preventDefault();
                var o = $j(this).attr("href"),
                    i = ".blog_load_more_button a",
                    a = $j(i).attr("href");
                $j.get(o + "", function(t) {
                    var o = $j(".masonry_load_more", t).wrapInner("").html();
                    a = $j(i, t).attr("href"), e.append($j(o)).isotope("reloadItems").isotope({
                        sortBy: "original-order"
                    }), fitVideo(), fitAudio(), initFlexSlider(), qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width()), setTimeout(function() {
                        e.isotope("layout")
                    }, 300), $j(".blog_load_more_button span").attr("rel") > n ? $j(".blog_load_more_button a").attr("href", a) : $j(".blog_load_more_button").remove(), qodeBlogGalleryAnimation()
                }), n++
            })
        }
        $j(window).resize(function() {
            qodeResizeBlogGallery($j(".blog_holder_grid_sizer").width()), e.isotope().isotope("layout"), e.width(Math.round(e.parent().width()))
        })
    }
}

function qodeResizeBlogMasonryGallery(e) {
    var t = $j(".blog_holder.masonry_gallery .large-height"),
        o = $j(".blog_holder.masonry_gallery .large-width"),
        n = $j(".blog_holder.masonry_gallery .large-width-height"),
        i = $j(".blog_holder.masonry_gallery .default");
    t.css("height", 2 * e), o.css("height", e), n.css("height", 2 * e), n.width() < 600 && n.css("height", n.width()), $window_width < 600 && t.css("height", t.width()), i.css("height", e)
}

function qodeResizeBlogGallery(e) {
    $j(".blog_holder.blog_chequered .default").css("height", e)
}

function initSmallImageBlogHeight() {
    "use strict";
    $j(".blog_small_image").length && $j("article").each(function() {
        $j(this).find(".post_text_inner").css("min-height", $j(this).find(".post_image").height() - 46)
    })
}

function initQBlog() {
    "use strict";
    $j(".q_masonry_blog").length && $j(".q_masonry_blog").each(function() {
        var e = $j(this);
        e.waitForImages(function() {
            setTimeout(function() {
                e.isotope({
                    itemSelector: "article",
                    resizable: !1,
                    masonry: {
                        columnWidth: ".q_masonry_blog_grid_sizer",
                        gutter: ".q_masonry_blog_grid_gutter"
                    }
                }), e.animate({
                    opacity: "1"
                }, 500)
            }, 400)
        })
    })
}

function qodeBlogCompundMasonryGallery() {
    var e = $j(".qode_blog_masonry_gallery"),
        t = e.find(".qode_blog_gallery_sizer").outerWidth(),
        o = t + 8,
        n = function() {
            t = e.find(".qode_blog_gallery_sizer").outerWidth(), o = t + 8;
            var n = e.find(".qode_blog_gallery_item.default"),
                i = e.find(".qode_blog_img_large_height"),
                a = e.find(".qode_blog_img_large_height_width");
            n.css("height", o), i.css("height", Math.round(2 * o)), $window_width > 600 ? a.css("height", Math.round(2 * o)) : a.css("height", o)
        },
        i = function() {
            e.isotope({
                itemSelector: ".qode_blog_gallery_item",
                masonry: {
                    columnWidth: ".qode_blog_gallery_sizer",
                    gutter: ".qode_blog_gallery_gutter"
                }
            })
        };
    return {
        init: function() {
            e.length && (n(), i(), $j(window).resize(function() {
                n()
            }))
        }
    }
}

function qodeBlogHeadlines() {
    "use strict";
    if ($j(".blog_headlines").length) {
        var e = $j(".blog_headlines"),
            t = function() {
                e.bigtext({
                    childSelector: "> article > h2",
                    minfontsize: 20
                }), e.find("h2").appear(function() {
                    $j(this).addClass("show")
                }, {
                    accX: 0,
                    accY: -100
                })
            };
        t();
        var o = $j(".qode-infinite-scroll-loading-label"),
            n = $j(".qode-infinite-scroll-finished-label");
        if (e.hasClass("blog_infinite_scroll")) e.infiniteScroll({
            path: ".blog_infinite_scroll_button a",
            append: ".post",
            history: !1
        }), e.on("request.infiniteScroll", function(e, t) {
            o.fadeIn("fast")
        }), e.on("load.infiniteScroll", function(e, t, n) {
            o.fadeOut("fast")
        }), e.on("append.infiniteScroll", function(e, o, n, i) {
            t()
        }), e.on("last.infiniteScroll", function(e, t, o) {
            n.fadeIn("fast")
        });
        else if (e.hasClass("blog_load_more")) {
            var i = 1;
            $j(".blog_load_more_button a").off("click tap").on("click tap", function(o) {
                o.preventDefault();
                var n = $j(this).attr("href"),
                    a = ".blog_load_more_button a",
                    r = $j(a).attr("href");
                $j.get(n + "", function(o) {
                    var n = $j(".blog_load_more", o).wrapInner("").html();
                    r = $j(a, o).attr("href"), e.append($j(n)), t(), $j(".blog_load_more_button span").attr("rel") > i ? $j(".blog_load_more_button a").attr("href", r) : $j(".blog_load_more_button").remove()
                }), i++
            })
        }
    }
}

function initProgressBarsIcon() {
    "use strict";
    $j(".q_progress_bars_icons_holder").length && $j(".q_progress_bars_icons_holder").each(function() {
        var e = $j(this),
            t = 200;
        void 0 !== e.data("element-appearance") && !1 !== e.data("element-appearance") && (t = e.data("element-appearance")), e.appear(function() {
            e.find(".q_progress_bars_icons").css("opacity", "1"), e.find(".q_progress_bars_icons").each(function() {
                var e = $j(this).find(".q_progress_bars_icons_inner").data("number"),
                    t = $j(this).find(".q_progress_bars_icons_inner").data("size");
                "" !== t && ($j(this).find(".q_progress_bars_icons_inner.custom_size .bar").css({
                    width: t + "px",
                    height: t + "px"
                }), $j(this).find(".q_progress_bars_icons_inner.custom_size .bar .fa-stack").css({
                    "font-size": t / 2 + "px"
                }));
                var o = $j(this).find(".bar");
                o.each(function(t) {
                    if (t < e) {
                        var n = 150 * (t + 1);
                        timeOuts[t] = setTimeout(function() {
                            $j(o[t]).addClass("active")
                        }, n)
                    }
                })
            })
        }, {
            accX: 0,
            accY: -t
        })
    })
}

function initMasonryGallery() {
    "use strict";
    resizeMasonryGallery($j(".grid-sizer").width()), $j(".masonry_gallery_holder").length && ($j(".masonry_gallery_holder").each(function() {
        var e = $j(this);
        e.waitForImages(function() {
            e.animate({
                opacity: 1
            }), e.isotope({
                itemSelector: ".masonry_gallery_item",
                masonry: {
                    columnWidth: ".grid-sizer"
                }
            }), e.find(".masonry_gallery_item.parallax_item").each(function(t) {
                $j(this).masonryParallax(e.data("parallax_item_speed"), !0, e.data("parallax_item_offset"))
            })
        })
    }), $j(window).resize(function() {
        resizeMasonryGallery($j(".grid-sizer").width()), $j(".masonry_gallery_holder").isotope("reloadItems")
    }))
}

function resizeMasonryGallery(e) {
    "use strict";
    var t = $j(".masonry_gallery_holder .rectangle_portrait"),
        o = $j(".masonry_gallery_holder .rectangle_landscape"),
        n = $j(".masonry_gallery_holder .square_big"),
        i = $j(".masonry_gallery_holder .square_small");
    t.css("height", 2 * e), window.innerWidth < 600 ? o.css("height", e / 2) : o.css("height", e), n.css("height", 2 * e), window.innerWidth < 600 && n.css("height", n.width() + 20), i.css("height", e)
}

function initMoreFacts() {
    "use strict";
    $j(".more_facts_holder").length && $j(".more_facts_holder").each(function() {
        var e = $j(this),
            t = "More Facts";
        "" !== $j(this).find(".more_facts_button").data("morefacts") && (t = $j(this).find(".more_facts_button").data("morefacts"));
        var o = "Less Facts";
        "" !== $j(this).find(".more_facts_button").data("lessfacts") && (o = $j(this).find(".more_facts_button").data("lessfacts")), e.find(".more_facts_button").on("mouseenter", function() {
            $j(this).css("color", $j(this).data("hovercolor"))
        }).on("mouseleave", function() {
            0 == e.find(".more_facts_outer").height() && $j(this).css("color", $j(this).data("color"))
        });
        var n = 70;
        "" !== e.find(".more_facts_inner").data("expandable_content_top_padding") && (n = e.find(".more_facts_inner").data("expandable_content_top_padding"), e.find(".more_facts_inner").css({
            "padding-top": n
        }));
        var i = 0,
            a = 600;
        e.find(".more_facts_button").on("click", function() {
            i = e.find(".more_facts_inner").height() + n, a = i > 0 && i < 601 ? 800 : i > 600 && i < 1201 ? 1500 : 2100, e.hasClass("more_fact_opened") ? (e.find(".more_facts_fake_arrow").fadeOut(a), e.find(".more_facts_outer").stop().animate({
                height: "0px"
            }, a, function() {
                e.find(".more_facts_button").is(":hover") || e.find(".more_facts_button").css("color", e.find(".more_facts_button").data("color")), e.removeClass("more_fact_opened"), $j(".parallax_section_holder").length && initParallax()
            }), $j(this).find(".more_facts_button_text").text(t), $j(this).find(".more_facts_button_arrow").removeClass("rotate_arrow")) : (e.addClass("more_fact_opened"), e.find(".more_facts_fake_arrow").fadeIn(a), e.find(".more_facts_outer").stop().animate({
                height: i
            }, a, function() {
                $j(".parallax_section_holder").length && initParallax()
            }), $j(this).find(".more_facts_button_text").text(o), $j(this).find(".more_facts_button_arrow").addClass("rotate_arrow"))
        })
    })
}

function placeholderReplace() {
    "use strict";
    $j("#contact-form [placeholder]").focus(function() {
        var e = $j(this);
        e.val() === e.attr("placeholder") && (this.originalType && (this.type = this.originalType, delete this.originalType), e.val(""), e.removeClass("placeholder"))
    }).blur(function() {
        var e = $j(this);
        "" === e.val() && ("password" === this.type && (this.originalType = this.type, this.type = "text"), e.addClass("placeholder"), e.val(e.attr("placeholder")))
    }).blur(), $j("#contact-form [placeholder]").parents("form").submit(function() {
        $j(this).find("[placeholder]").each(function() {
            var e = $j(this);
            e.val() === e.attr("placeholder") && e.val("")
        })
    })
}

function totop_button(e) {
    "use strict";
    var t = $j("#back_to_top");
    t.removeClass("off on"), "on" === e ? t.addClass("on") : t.addClass("off")
}

function backButtonShowHide() {
    "use strict";
    $j(window).scroll(function() {
        var e, t = $j(this).scrollTop(),
            o = $j(this).height();
        e = t > 0 ? t + o / 2 : 1, totop_button(e < 1e3 ? "off" : "on")
    })
}

function backToTop() {
    "use strict";
    $j(document).on("click", "#back_to_top", function(e) {
        e.preventDefault(), $j("body,html").animate({
            scrollTop: 0
        }, $j(window).scrollTop() / 3, "linear")
    })
}

function initSteps() {
    "use strict";
    $j(".q_steps_holder").length && $j(".q_steps_holder").each(function() {
        $j(this).appear(function() {
            $j(this).addClass("show")
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initMessageHeight() {
    "use strict";
    $j(".q_message.with_icon").length && $j(".q_message.with_icon").each(function() {
        $j(this).find(".message_text_holder").height() > $j(this).find(".q_message_icon_holder").height() ? $j(this).find(".q_message_icon_holder").height($j(this).find(".message_text").height()) : $j(this).find(".message_text").height($j(this).find(".q_message_icon_holder").height())
    })
}

function initImageHover() {
    "use strict";
    $j(".image_hover").length && $j(".image_hover").each(function() {
        $j(this).appear(function() {
            var e = $j(this).attr("data-transition-delay"),
                t = 300 + parseFloat(e),
                o = $j(this);
            setTimeout(function() {
                o.addClass("show")
            }, parseFloat(e)), setTimeout(function() {
                o.removeClass("show")
            }, t)
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initProgressBarsVertical() {
    "use strict";
    $j(".q_progress_bars_vertical").length && $j(".q_progress_bars_vertical").each(function() {
        $j(this).appear(function() {
            initToCounterVerticalProgressBar($j(this));
            var e = $j(this).find(".progress_content").data("percentage");
            $j(this).find(".progress_content").css("height", "0%"), $j(this).find(".progress_content").animate({
                height: e + "%"
            }, 1500)
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initToCounterVerticalProgressBar(e) {
    "use strict";
    e.find(".progress_number span").length && e.find(".progress_number span").each(function() {
        var e = parseFloat($j(this).text());
        $j(this).countTo({
            from: 0,
            to: e,
            speed: 1500,
            refreshInterval: 50
        })
    })
}

function checkAnchorOnLoad() {
    "use strict";
    var e, t, o = window.location.hash,
        n = encodeURI(window.location.hash.split("#")[1]),
        i = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
    if ("" !== o && $j('[data-q_id="#' + n + '"]').length > 0) {
        if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled"))
            if (t = $j("header.page_header").hasClass("scroll_top") ? header_top_height : 0, !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent"))
                if (header_height - ($j('[data-q_id="' + o + '"]').offset().top + t) / 4 >= min_header_height_scroll) {
                    var a = $j('[data-q_id="' + o + '"]').offset().top - header_height - i;
                    e = a + a / 4 + a / 16 + a / 64 + 1
                } else e = $j("header.page_header").hasClass("centered_logo") ? $j('[data-q_id="' + o + '"]').offset().top - min_header_height_scroll - logo_height - 30 - i : $j('[data-q_id="' + o + '"]').offset().top - min_header_height_scroll - i;
        else e = $j('[data-q_id="' + o + '"]').offset().top - i;
        else e = $j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + o + '"]').offset().top - header_top_height - i : $j('[data-q_id="' + o + '"]').offset().top - i : $j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + o + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding ? $j('[data-q_id="' + o + '"]').offset().top - header_height - logo_height / 2 - 40 - i : $j('[data-q_id="' + o + '"]').offset().top - min_header_height_fixed_hidden - 40 - i : $j('[data-q_id="' + o + '"]').offset().top - i : ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) && (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) ? sticky_amount >= $j('[data-q_id="' + o + '"]').offset().top ? $j('[data-q_id="' + o + '"]').offset().top + 1 - i : $j('[data-q_id="' + o + '"]').offset().top - min_header_height_sticky - i : $j('[data-q_id="' + o + '"]').offset().top - i;
        $j("html, body").animate({
            scrollTop: Math.round(e)
        }, 1500, function() {})
    }
    $j(".main_menu a, .vertical_menu a, .mobile_menu a").each(function() {
        var e = $j(this).prop("hash");
        "" !== e && $j('[data-q_id="' + e + '"]').length > 0 && $j('[data-q_id="' + e + '"]').offset().top >= $window_height && 0 === $scroll && ($j(this).parent().removeClass("active current-menu-item"), $j(this).removeClass("current"))
    })
}

function changeActiveState(e) {
    "use strict";
    $j(".main_menu a[href*='#']").length && $j(".main_menu a").parent().removeClass("active"), $j(".main_menu a").each(function() {
        $j(this).prop("hash") === e && (0 === $j(this).closest(".second").length ? $j(this).parent().addClass("active") : $j(this).closest(".second").parent().addClass("active"), $j(".main_menu a").removeClass("current"), $j(this).addClass("current"))
    }), $j(".vertical_menu a[href*='#']").length && $j(".vertical_menu a").parent().removeClass("active"), $j(".vertical_menu a").each(function() {
        $j(this).prop("hash") === e && (0 === $j(this).closest(".second").length ? $j(this).parent().addClass("active") : $j(this).closest(".second").parent().addClass("active"), $j(".vertical_menu a").removeClass("current"), $j(this).addClass("current"))
    }), $j(".mobile_menu a[href*='#']").length && $j(".mobile_menu a").parent().removeClass("active"), $j(".mobile_menu a").each(function() {
        $j(this).prop("hash") === e && (0 === $j(this).closest(".sub_menu").length ? $j(this).parent().addClass("active") : $j(this).closest(".sub_menu").parent().addClass("active"), $j(".mobile_menu a").removeClass("current"), $j(this).addClass("current"))
    })
}

function checkAnchorOnScroll() {
    "use strict";
    $j("[data-q_id]").length && !$j("header.page_header").hasClass("regular") && ($j("[data-q_id]").waypoint(function(e) {
        if ("down" === e) {
            changeActiveState($j(this)[0].adapter.$element.data("q_id"))
        }
    }, {
        offset: "50%"
    }), $j("[data-q_id]").waypoint(function(e) {
        if ("up" === e) {
            changeActiveState($j(this)[0].adapter.$element.data("q_id"))
        }
    }, {
        offset: function() {
            return -($j(this)[0].adapter.$element.outerHeight() - 150)
        }
    }))
}

function initHashClick() {
    "use strict";
    var e, t = $j("html, body"),
        o = $j("body").hasClass("paspartu_on_top_fixed") ? $window_width * paspartu_width : 0;
    $j(document).on("click", ".main_menu a, .vertical_menu a, .qbutton:not(.contact_form_button, .qode-archive-submit-button, .qode-listing-archive-load-more, .qode-rating-form-trigger, .qode-lms-actions-buttons, .qode-tours-search-submit), .anchor, .widget li.anchor a", function() {
        var n, i = $j(this),
            a = $j(this).prop("hash");
        if ("" !== a && "" === $j(this).attr("href").split("#")[0] || "" !== a && "" !== $j(this).attr("href").split("#")[0] && a === window.location.hash || "" !== a && $j(this).attr("href").split("#")[0] === window.location.href.split("#")[0]) {
            if ($j("header.page_header").hasClass("fixed") && !$j("body").hasClass("vertical_menu_enabled"))
                if (n = $j("header.page_header").hasClass("scroll_top") ? header_top_height : 0, !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent"))
                    if (header_height - ($j('[data-q_id="' + a + '"]').offset().top + n) / 4 >= min_header_height_scroll) {
                        var r = $j('[data-q_id="' + a + '"]').offset().top - header_height - o;
                        e = r + r / 4 + r / 16 + r / 64 + 1
                    } else e = $j("header.page_header").hasClass("centered_logo") ? $j('[data-q_id="' + a + '"]').offset().top - min_header_height_scroll - logo_height - o - 30 : $j('[data-q_id="' + a + '"]').offset().top - min_header_height_scroll - o;
            else e = $j('[data-q_id="' + a + '"]').offset().top - o;
            else e = $j("header.page_header").hasClass("fixed_top_header") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + a + '"]').offset().top - header_top_height - o : $j('[data-q_id="' + a + '"]').offset().top - o : $j("header.page_header").hasClass("fixed_hiding") && !$j("body").hasClass("vertical_menu_enabled") ? !$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent") ? $j('[data-q_id="' + a + '"]').offset().top - (header_height + logo_height / 2 + 40) <= scroll_amount_for_fixed_hiding ? $j('[data-q_id="' + a + '"]').offset().top - header_height - logo_height / 2 - 40 - o : $j('[data-q_id="' + a + '"]').offset().top - min_header_height_fixed_hidden - 40 - o : $j('[data-q_id="' + a + '"]').offset().top - o : ($j("header.page_header").hasClass("stick") || $j("header.page_header").hasClass("stick_with_left_right_menu") && !$j("body").hasClass("vertical_menu_enabled")) && (!$j("header.page_header").hasClass("transparent") || $j("header.page_header").hasClass("scrolled_not_transparent")) ? sticky_amount >= $j('[data-q_id="' + a + '"]').offset().top ? $j('[data-q_id="' + a + '"]').offset().top + 2 - o : $j('[data-q_id="' + a + '"]').offset().top - min_header_height_sticky - o : $j('[data-q_id="' + a + '"]').offset().top - o;
            return $j('[data-q_id="' + a + '"]').length > 0 && t.stop().animate({
                scrollTop: Math.round(e)
            }, 1500, function() {
                anchorActiveState(i)
            }), history.pushState && history.pushState(null, null, a), !1
        }
    }), $j(document).on("click", ".mobile_menu a", function() {
        var e = $j(this),
            o = $j(this).prop("hash");
        if ("" !== o && "" === $j(this).attr("href").split("#")[0] || "" !== o && "" !== $j(this).attr("href").split("#")[0] && o === window.location.hash || "" !== o && $j(this).attr("href").split("#")[0] === window.location.href.split("#")[0]) return $j('[data-q_id="' + o + '"]').length > 0 && t.animate({
            scrollTop: Math.round($j('[data-q_id="' + o + '"]').offset().top - $j(".mobile_menu").height())
        }, 500, function() {
            anchorActiveState(e)
        }), history.pushState && history.pushState(null, null, o), !1
    })
}

function countClientsPerRow() {
    "use strict";
    $j(".qode_clients").length && $j(".qode_clients").each(function() {
        var e, t = $j(this),
            o = t.height(),
            n = t.width(),
            i = t.find(".qode_client_holder").width(),
            a = t.find(".qode_client_holder").length;
        t.find(".qode_client_holder").each(function() {
            e = e > $j(this).height() ? e : $j(this).height()
        }), e += 35;
        var r = (Math.ceil(o / e), Math.ceil(n / i)),
            s = Math.floor(a / r),
            d = a - r * s;
        0 === d && (d = r), t.find(".qode_client_holder").removeClass("border-bottom-none");
        var l = a - d - 1;
        t.find(".qode_client_holder:gt(" + l + ")").addClass("border-bottom-none")
    })
}

function animatedTextIconHeight() {
    "use strict";
    if ($j(".animated_icons_with_text").length) {
        var e, t = $j(".animated_icons_with_text");
        t.find(".animated_text p").each(function() {
            e = e > $j(this).height() ? e : $j(this).height()
        }), e < 155 && (e = 155), t.find(".animated_icon_with_text_inner").height(e)
    }
}

function countAnimatedTextIconPerRow() {
    "use strict";
    $j(".animated_icons_with_text").length && $j(".animated_icons_with_text").each(function() {
        var e, t = $j(this),
            o = (t.height(), t.width()),
            n = t.find(".animated_icon_with_text_holder").width() + 1,
            i = t.find(".animated_icon_with_text_holder").length;
        t.find(".animated_icon_with_text_holder").each(function() {
            e = e > $j(this).height() ? e : $j(this).height()
        }), e += 30;
        var a = Math.ceil(o / n),
            r = Math.floor(i / a),
            s = i - a * r;
        0 === s && (s = a), t.find(".animated_icon_with_text_holder").removeClass("border-bottom-none");
        var d = i - s - 1;
        t.find(".animated_icon_with_text_holder:gt(" + d + ")").addClass("border-bottom-none")
    })
}

function anchorActiveState(e) {
    e.closest(".main_menu").length > 0 && $j(".main_menu a").parent().removeClass("active"), e.closest(".vertical_menu").length > 0 && $j(".vertical_menu a").parent().removeClass("active"), 0 === e.closest(".second").length ? e.parent().addClass("active") : e.closest(".second").parent().addClass("active"), e.closest(".mobile_menu").length > 0 && ($j(".mobile_menu a").parent().removeClass("active"), e.parent().addClass("active")), $j(".mobile_menu a, .main_menu a, .vertical_menu a").removeClass("current"), e.addClass("current")
}

function initVideoBackground() {
    "use strict";
    $j(".video-wrap .video").mediaelementplayer({
        enableKeyboard: !1,
        iPadUseNativeControls: !1,
        pauseOtherPlayers: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1
    }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (initVideoBackgroundSize(), $j(".mobile-video-image").show(), $j(".video-wrap").remove())
}

function initVideoBackgroundSize() {
    "use strict";
    $j(".section .video-wrap").each(function(e) {
        var t = $j(this).closest(".section").outerWidth();
        $j(this).width(t);
        var o = $j(this).closest(".section").outerHeight();
        min_w = vid_ratio * (o + 20), $j(this).height(o);
        var n = t / video_width_original,
            i = (o - header_height) / video_height_original,
            a = i;
        n > i && (a = n), a * video_width_original < min_w && (a = min_w / video_width_original), $j(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(a * video_width_original + 2)), $j(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(a * video_height_original + 2)), $j(this).scrollLeft(($j(this).find("video").width() - t) / 2), $j(this).find(".mejs-overlay, .mejs-poster").scrollTop(($j(this).find("video").height() - o) / 2), $j(this).scrollTop(($j(this).find("video").height() - o) / 2), $j(this).css("opacity", 1), $j(".no-touchevents .section .mobile-video-image ").css("display", "none")
    }), $j(".carousel .item .video .video-wrap").each(function(e) {
        var t = $j(window).width();
        $j(this).width(t);
        var o = $j(window).width() < 1e3 ? $j("header.page_header").height() - 6 : 0,
            n = $j(this).closest(".carousel.slide").height() - o;
        min_w = vid_ratio * (n + 20), $j(this).height(n);
        var i = t / video_width_original,
            a = (n - header_height) / video_height_original,
            r = a;
        i > a && (r = i), r * video_width_original < min_w && (r = min_w / video_width_original), $j(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(r * video_width_original + 2)), $j(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(r * video_height_original + 2)), $j(this).scrollLeft(($j(this).find("video").width() - t) / 2), $j(this).find(".mejs-overlay, .mejs-poster").scrollTop(($j(this).find("video").height() - n) / 2), $j(this).scrollTop(($j(this).find("video").height() - n) / 2)
    }), $j(".portfolio_single .video .video-wrap, .blog_holder .video .video-wrap").each(function(e) {
        var t = $j(this),
            o = $j(this).closest(".video").outerWidth();
        $j(this).width(o);
        var n = 9 * o / 16;
        navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && (t.parent().width(o), t.parent().height(n)), min_w = vid_ratio * (n + 20), $j(this).height(n);
        var i = o / video_width_original,
            a = (n - header_height) / video_height_original,
            r = a;
        i > a && (r = i), r * video_width_original < min_w && (r = min_w / video_width_original), $j(this).find("video, .mejs-overlay, .mejs-poster").width(Math.ceil(r * video_width_original + 2)), $j(this).find("video, .mejs-overlay, .mejs-poster").height(Math.ceil(r * video_height_original + 2)), $j(this).scrollLeft(($j(this).find("video").width() - o) / 2), $j(this).find(".mejs-overlay, .mejs-poster").scrollTop(($j(this).find("video").height() - n) / 2), $j(this).scrollTop(($j(this).find("video").height() - n) / 2)
    })
}

function initIconWithTextAnimation() {
    "use strict";
    $j(".q_icon_animation").length > 0 && 0 === $j(".no_animation_on_touch").length && $j(".q_icon_animation").each(function() {
        $j(this).appear(function() {
            $j(this).addClass("q_show_animation")
        }, {
            accX: 0,
            accY: -200
        })
    })
}

function initCheckSafariBrowser() {
    "use strict"; - 1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && $j("body").addClass("safari_browser")
}

function initSearchButton() {
    $j(".search_slides_from_window_top").length && $j(".search_slides_from_window_top").on("click", function(e) {
        if (e.preventDefault(), $j("html").hasClass("touch")) "0" == $j(".qode_search_form").height() ? ($j('.qode_search_form input[type="text"]').onfocus = function() {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }, $j('.qode_search_form input[type="text"]').onclick = function() {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }, $j(".header_top_bottom_holder").css("top", "50px"), $j(".qode_search_form").css("height", "50px"), $j(".content_inner").css("margin-top", "50px"), $scroll < 34 && $j("header.page_header").css("top", "0")) : ($j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"), $scroll < 34 && $j("header.page_header").css("top", -$scroll)), $j(window).scroll(function() {
            "0" != $j(".qode_search_form").height() && $scroll > 50 && ($j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"))
        }), $j(".qode_search_close").on("click", function(e) {
            e.preventDefault(), $j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"), $scroll < 34 && $j("header.page_header").css("top", -$scroll)
        });
        else {
            if ($j(".title").hasClass("has_fixed_background")) var t = parseInt($j(".title.has_fixed_background").css("backgroundPosition").split(" ")[1]);
            else var t = 0;
            "0" == $j(".qode_search_form").height() ? ($j('.qode_search_form input[type="text"]').focus(), $j("body").addClass("qode-search-slides-from-top-opened"), $scroll < 34 && $j("header.page_header").stop().animate({
                top: 0
            }, 150), $j(".title.has_fixed_background").animate({
                "background-position-y": t + 50 + "px"
            }, 150)) : ($j("body").removeClass("qode-search-slides-from-top-opened"), $scroll < 34 && $j("header.page_header").stop().animate({
                top: -$scroll
            }, 150), $j(".title.has_fixed_background").animate({
                "background-position-y": t - 50 + "px"
            }, 150)), $j(window).scroll(function() {
                "0" != $j(".qode_search_form").height() && $scroll > 50 && ($j("body").removeClass("qode-search-slides-from-top-opened"), $j(".title.has_fixed_background").css("backgroundPosition", "center " + t + "px"))
            }), $j(".qode_search_close").on("click", function(e) {
                e.preventDefault(), $j("body").removeClass("qode-search-slides-from-top-opened"), $scroll < 34 && $j("header.page_header").stop().animate({
                    top: -$scroll
                }, 150), $j(".title.has_fixed_background").animate({
                    "background-position-y": t + "px"
                }, 150)
            })
        }
    }), $j(".search_slides_from_header_bottom").length && $j(".search_slides_from_header_bottom").on("click", function(e) {
        if (e.preventDefault(), $j(".qode_search_form_2").hasClass("animated")) $j(".qode_search_form_2").removeClass("animated"), $j(".qode_search_form_2").css("bottom", "0");
        else {
            $j('.qode_search_form input[type="text"]').focus(), $j(".qode_search_form_2").addClass("animated");
            var t = $j(".qode_search_form_2").height();
            $j(".qode_search_form_2").css("bottom", -t)
        }
        $j(".qode_search_form_2").addClass("disabled"), $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled"), "" !== $j(".qode_search_form_2 .qode_search_field").val() && " " !== $j(".qode_search_form_2 .qode_search_field").val() ? ($j('.qode_search_form_2 input[type="submit"]').removeAttr("disabled"), $j(".qode_search_form_2").removeClass("disabled")) : ($j(".qode_search_form_2").addClass("disabled"), $j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled")), $j(".qode_search_form_2 .qode_search_field").keyup(function() {
            "" !== $j(this).val() && " " != $j(this).val() ? ($j('.qode_search_form_2 input[type="submit"]').removeAttr("disabled"), $j(".qode_search_form_2").removeClass("disabled")) : ($j('.qode_search_form_2 input[type="submit"]').attr("disabled", "disabled"), $j(".qode_search_form_2").addClass("disabled"))
        }), $j(".content, footer").on("click", function(e) {
            $j(".qode_search_form_2").removeClass("animated"), $j(".qode_search_form_2").css("bottom", "0")
        })
    }), $j(".search_covers_header").length && $j(".search_covers_header").on("click", function(e) {
        if (e.preventDefault(), $j(".search_covers_only_bottom").length) var t = $j(".header_bottom").height();
        else if ($j(".fixed_top_header").length) var t = $j(".top_header").height();
        else var t = $j(".header_top_bottom_holder").height();
        $j(".qode_search_form_3 .form_holder_outer").height(t), $j(".search_covers_only_bottom").length && ($j(".qode_search_form_3").css("bottom", 0), $j(".qode_search_form_3").css("top", "auto")), $j(".qode_search_form_3").stop(!0).fadeIn(600, "easeOutExpo"), $j('.qode_search_form_3 input[type="text"]').focus(), $j(window).scroll(function() {
            if ($j(".search_covers_only_bottom").length) var e = $j(".header_bottom").height();
            else if ($j(".fixed_top_header").length) var e = $j(".top_header").height();
            else var e = $j(".header_top_bottom_holder").height();
            $j(".qode_search_form_3 .form_holder_outer").height(e)
        }), $j(".qode_search_close, .content, footer").on("click", function(e) {
            e.preventDefault(), $j(".qode_search_form_3").stop(!0).fadeOut(450, "easeOutExpo")
        }), $j(".qode_search_form_3").blur(function(e) {
            $j(".qode_search_form_3").stop(!0).fadeOut(450, "easeOutExpo")
        })
    }), $j(".fullscreen_search").length && ($j(".fullscreen_search_holder.from_circle").length && ($j(".fullscreen_search").on("click", function(e) {
        e.preventDefault(), $j(".fullscreen_search_overlay").hasClass("animate") ? ($j(".fullscreen_search_overlay").removeClass("animate"), $j(".fullscreen_search_holder").css("opacity", "0"), $j(".fullscreen_search_close").css("opacity", "0"), $j(".fullscreen_search_close").css("visibility", "hidden"), $j(".fullscreen_search").css("opacity", "1"), $j(".fullscreen_search_holder").css("display", "none")) : ($j(".fullscreen_search_overlay").addClass("animate"), $j(".fullscreen_search_holder").css("display", "block"), setTimeout(function() {
            $j(".fullscreen_search_holder").css("opacity", "1"), $j(".fullscreen_search_close").css("opacity", "1"), $j(".fullscreen_search_close").css("visibility", "visible"), $j(".fullscreen_search").css("opacity", "0")
        }, 200))
    }), $j(".fullscreen_search_close").on("click", function(e) {
        e.preventDefault(), $j(".fullscreen_search_overlay").removeClass("animate"), $j(".fullscreen_search_holder").css("opacity", "0"), $j(".fullscreen_search_close").css("opacity", "0"), $j(".fullscreen_search_close").css("visibility", "hidden"), $j(".fullscreen_search").css("opacity", "1"), $j(".fullscreen_search_holder").css("display", "none")
    })), $j(".fullscreen_search_holder.fade").length && ($j(".fullscreen_search").on("click", function(e) {
        e.preventDefault(), $j(".fullscreen_search_holder").hasClass("animate") ? ($j("body").removeClass("fullscreen_search_opened"), $j(".fullscreen_search_holder").removeClass("animate"), $j("body").removeClass("search_fade_out"), $j("body").removeClass("search_fade_in")) : ($j("body").addClass("fullscreen_search_opened"), $j("body").removeClass("search_fade_out"), $j("body").addClass("search_fade_in"), $j(".fullscreen_search_holder").addClass("animate"))
    }), $j(".fullscreen_search_close").on("click", function(e) {
        e.preventDefault(), $j("body").removeClass("fullscreen_search_opened"), $j(".fullscreen_search_holder").removeClass("animate"), $j("body").removeClass("search_fade_in"), $j("body").addClass("search_fade_out")
    })), $j(".fullscreen_search_holder .search_field").focus(function() {
        $j(".fullscreen_search_holder .field_holder .line").css("width", "100%")
    }), $j(".fullscreen_search_holder .search_field").blur(function() {
        $j(".fullscreen_search_holder .field_holder .line").css("width", "0")
    }), $j(window).scroll(function() {
        var e = $j(".page_header .header_bottom").height();
        $j(".page_header").hasClass("sticky") ? ($j(".fullscreen_search_holder .side_menu_button").css("height", e), $j(".fullscreen_search_holder .close_container").css("top", "0")) : $j(".page_header").hasClass("fixed") ? $j(".fullscreen_search_holder .side_menu_button").css("height", e) : ($j(".fullscreen_search_holder .side_menu_button").css("height", ""), $j(".fullscreen_search_holder .close_container").css("top", ""))
    })), $j(".qode_search_submit").length && $j(".qode_search_submit").on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), $j(this).parents("form").first().submit()
    })
}

function updateShoppingCart() {
    "use strict";

    function e(e, t, o) {
        var n = $j(".shopping_cart_header");
        if (t["div.widget_shopping_cart_content"]) {
            var i = jQuery(t["div.widget_shopping_cart_content"]),
                a = i.find(".cart_list"),
                r = i.find(".total").contents(":not(strong)").text();
            n.find(".shopping_cart_dropdown_inner").html("").append(a), n.find(".total span").html("").append(r)
        }
    }
    $j("body").bind("added_to_cart", e)
}

function setContentBottomMargin() {
    $j(".uncover").length && $j(".content").css("margin-bottom", $j("footer").height())
}

function footerWidth() {
    "use strict";
    $j(".uncover").length && $j("body").hasClass("vertical_menu_enabled") && $window_width > 1e3 ? $j(".uncover").width($window_width - $j(".vertical_menu_area").width()) : $j(".uncover").css("width", "100%")
}

function initCoverBoxes() {
    $j(".cover_boxes").length && $j(".cover_boxes").each(function() {
        var e = 0,
            t = 1;
        void 0 !== $j(this).data("active-element") && !1 !== $j(this).data("active-element") && (t = parseFloat($j(this).data("active-element")), e = t - 1);
        e = t > 3 ? 0 : e, $j(this).find("li").eq(e).addClass("act");
        var o = $j(this);
        $j(this).find("li").each(function() {
            $j(this).on("mouseenter", function() {
                $j(o).find("li").removeClass("act"), $j(this).addClass("act")
            })
        })
    })
}

function createContentMenu() {
    "use strict";
    $j(".content_menu").each(function() {
        if (0 === $j(this).find("ul").length) {
            if ("" !== $j(this).css("background-color")) var e = $j(this).css("background-color");
            var t = $j("<ul class='menu'></ul>");
            t.appendTo($j(this));
            var o = $j(this).siblings(".in_content_menu");
            o.length && o.each(function() {
                var o, n = $j(this).data("q_id"),
                    i = $j(this).data("q_title"),
                    a = $j(this).data("q_icon"),
                    r = $j("<li />"),
                    s = $j("<i />", {
                        class: "fa " + a
                    }),
                    d = $j("<a />", {
                        href: n,
                        html: "<span>" + i + "</span>"
                    });
                o = "" !== e ? $j("<div />", {
                    class: "arrow",
                    style: "border-color: " + e + " transparent transparent transparent"
                }) : $j("<div />", {
                    class: "arrow"
                }), s.prependTo(d), d.appendTo(r), o.appendTo(r), r.appendTo(t)
            })
        }
    })
}

function createSelectContentMenu() {
    "use strict";
    $j(".content_menu").each(function() {
        var e = $j(this),
            t = $j("<ul></ul>");
        t.appendTo($j(this).find(".nav_select_menu")), $j(this).find("ul.menu li a").each(function() {
            var e = $j(this).attr("href"),
                o = $j(this).text(),
                n = $j(this).find("i").clone();
            2 === $j(this).parents("li").length && (o = "&nbsp;&nbsp;&nbsp;" + o), 3 === $j(this).parents("li").length && (o = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + o), $j(this).parents("li").length > 3 && (o = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + o);
            var i = $j("<li />"),
                a = $j("<a />", {
                    href: e,
                    html: o
                });
            n.prependTo(a), a.appendTo(i), i.appendTo(t)
        }), e.find(".nav_select_button").on("click", function() {
            return e.find(".nav_select_menu ul").is(":visible") ? e.find(".nav_select_menu ul").slideUp() : e.find(".nav_select_menu ul").slideDown(), !1
        }), e.find(".nav_select_menu ul li a").on("click", function() {
            e.find(".nav_select_menu ul").slideUp();
            var t = $j(this),
                o = t.attr("href"),
                n = $j("div.wpb_row[data-q_id='" + o + "'],section.parallax_section_holder[data-q_id='" + o + "'],.qode-elementor-content-menu-item[data-q_id='" + o + "']").offset().top;
            return $j("html,body").stop().animate({
                scrollTop: n
            }, 500, "swing", function() {
                $j("nav.content_menu ul li").removeClass("active"), t.parent().addClass("active")
            }), !1
        })
    })
}

function contentMenuPosition() {
    "use strict";
    if ($j("nav.content_menu").length) {
        if (content_menu_position > sticky_amount) var e = min_header_height_sticky;
        else var e = 0;
        content_menu_position - e - content_menu_top_add - $scroll <= 0 && ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) ? (content_menu_position < sticky_amount ? $scroll > sticky_amount ? $j("nav.content_menu").css({
            position: "fixed",
            top: min_header_height_sticky + content_menu_top_add
        }).addClass("fixed") : $j("nav.content_menu").css({
            position: "fixed",
            top: 0,
            transition: "none"
        }).addClass("fixed") : $j("nav.content_menu").css({
            position: "fixed",
            top: min_header_height_sticky + content_menu_top_add
        }).addClass("fixed"), $j("header.sticky").addClass("no_shadow"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $j(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : content_menu_position - content_menu_top - content_menu_top_add - $scroll <= 0 && !$j("header").hasClass("stick") ? ($j("nav.content_menu").css({
            position: "fixed",
            top: content_menu_top + content_menu_top_add
        }).addClass("fixed"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $j(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : ($j("nav.content_menu").css({
            position: "relative",
            top: "0px"
        }).removeClass("fixed"), $j("header.sticky").removeClass("no_shadow"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", "0px"), $j(".content > .content_inner > .full_width").css("margin-top", "0px")), $j(".content .in_content_menu").waypoint(function(e) {
            var t = $j(this),
                o = t.data("q_id");
            $j("nav.content_menu.fixed li a").each(function() {
                $j(this).attr("href") === o ? $j(this).parent().addClass("active") : $j(this).parent().removeClass("active")
            })
        }, {
            offset: "150"
        })
    }
}

function contentMenuCheckLastSection() {
    "use strict";
    if ($j("nav.content_menu").length && $j(".content .in_content_menu").length) {
        var e = $j(".content .in_content_menu:last").offset().top + $j(".content .in_content_menu:last").height(),
            t = $j(".content .in_content_menu:first").offset().top - content_menu_top - content_menu_top_add - 100;
        e < $scroll && $j("nav.content_menu.fixed li").removeClass("active"), t > $scroll && $j("nav.content_menu li:first, nav.content_menu ul.menu li:first").removeClass("active")
    }
}

function contentMenuScrollTo() {
    "use strict";
    $j("nav.content_menu").length && $j("nav.content_menu ul.menu li a").on("click", function(e) {
        e.preventDefault();
        var t = $j(this);
        if ($j(this).parent().hasClass("active")) return !1;
        var o = t.attr("href"),
            n = $j("div.wpb_row[data-q_id='" + o + "'],section.parallax_section_holder[data-q_id='" + o + "'],.qode-elementor-content-menu-item[data-q_id='" + o + "']").offset().top - content_line_height - content_menu_top - content_menu_top_add;
        return $j("html,body").stop().animate({
            scrollTop: n
        }, 500, "swing", function() {
            $j("nav.content_menu ul li").removeClass("active"), t.parent().addClass("active")
        }), !1
    })
}

function initButtonHover() {
    $j(".qbutton").length && $j(".qbutton").each(function() {
        if (void 0 !== $j(this).data("hover-background-color") && !1 !== $j(this).data("hover-background-color")) {
            var e = $j(this).data("hover-background-color"),
                t = $j(this).css("background-color");
            if (e.startsWith("#") && 9 === e.length) {
                var o = e.replace("#", ""),
                    n = parseInt(o.substring(0, 2), 16),
                    i = parseInt(o.substring(2, 4), 16),
                    a = parseInt(o.substring(4, 6), 16),
                    r = parseFloat(parseInt(parseInt(o.substring(6, 8), 16) / 255 * 100) / 100);
                e = "rgba(" + n + "," + i + "," + a + "," + r + ")"
            }
            $j(this).hover(function() {
                $j(this).css("background-color", e)
            }, function() {
                $j(this).css("background-color", t)
            })
        }
        if (void 0 !== $j(this).data("hover-border-color") && !1 !== $j(this).data("hover-border-color")) {
            var s = $j(this).data("hover-border-color"),
                d = $j(this).css("border-top-color");
            $j(this).hover(function() {
                $j(this).css("border-color", s)
            }, function() {
                $j(this).css("border-color", d)
            })
        }
        if (void 0 !== $j(this).data("hover-color") && !1 !== $j(this).data("hover-color")) {
            var l = $j(this).data("hover-color"),
                c = $j(this).css("color");
            $j(this).hover(function() {
                $j(this).css("color", l)
            }, function() {
                $j(this).css("color", c)
            })
        }
    })
}

function initEnlargeButton() {
    $j(".qbutton.enlarge").length && $j(".qbutton.enlarge").each(function() {
        var e = $j(this),
            t = parseInt(e.css("padding-left")),
            o = Math.floor(t / 100 * 20);
        e.mouseenter(function() {
            e.css({
                "padding-left": t + o
            }), e.css({
                "padding-right": t + o
            })
        }), e.mouseleave(function() {
            e.css({
                "padding-left": t
            }), e.css({
                "padding-right": t
            })
        })
    })
}

function initSocialIconHover() {
    $j(".q_social_icon_holder").length && $j(".q_social_icon_holder").each(function() {
        if (void 0 !== $j(this).data("hover-background-color") && !1 !== $j(this).data("hover-background-color")) {
            var e = $j(this).data("hover-background-color"),
                t = $j(this).find(".fa-stack").css("background-color");
            $j(this).find(".fa-stack").hover(function() {
                $j(this).css("background-color", e)
            }, function() {
                $j(this).css("background-color", t)
            })
        }
        if (void 0 !== $j(this).data("hover-border-color") && !1 !== $j(this).data("hover-border-color")) {
            var o = $j(this).data("hover-border-color"),
                n = $j(this).find(".fa-stack").css("border-top-color");
            $j(this).find(".fa-stack").hover(function() {
                $j(this).css("border-color", o)
            }, function() {
                $j(this).css("border-color", n)
            })
        }
        if (void 0 !== $j(this).data("hover-color") && !1 !== $j(this).data("hover-color")) {
            var i, a, r = $j(this).data("hover-color");
            $j(this).find(".fa-stack i, .fa-stack span").length ? (i = void 0 !== $j(this).data("color") ? $j(this).data("color") : $j(this).find(".fa-stack i, .fa-stack span").css("color"), a = $j(this).find(".fa-stack i, .fa-stack span").attr("style")) : $j(this).find(".simple_social").length && (i = void 0 !== $j(this).data("color") ? $j(this).data("color") : $j(this).find(".simple_social").css("color"), a = $j(this).find(".simple_social").attr("style")), $j(this).find(".fa-stack").length ? $j(this).find(".fa-stack").hover(function() {
                $j(this).find("i, span").attr("style", function(e, t) {
                    return a + "color: " + r + "!important;"
                })
            }, function() {
                $j(this).find("i, span").attr("style", function(e, t) {
                    return a + "color: " + i + ";"
                })
            }) : $j(this).find(".simple_social").length && $j(this).find(".simple_social").hover(function() {
                $j(this).attr("style", function(e, t) {
                    return a + "color: " + r + "!important;"
                })
            }, function() {
                $j(this).attr("style", function(e, t) {
                    return a + "color: " + i + ";"
                })
            })
        }
    })
}

function initTabsActiveBorder() {
    $j(".q_tabs.vertical, .q_tabs.boxed").length && $j(".q_tabs.vertical, .q_tabs.boxed").each(function() {
        var e = getParentBackgroundColor($j(this)),
            t = $j(this).find("li.active a");
        $j(this).hasClass("boxed") && t.css("border-bottom-color", e), $j(this).hasClass("left") && t.css("border-right-color", e), $j(this).hasClass("right") && t.css("border-left-color", e)
    })
}

function getParentBackgroundColor(e) {
    return e.parents().filter(function() {
        var e = $j(this).css("background-color");
        return "transparent" != e && "rgba(0, 0, 0, 0)" != e
    }).eq(0).css("background-color")
}

function setActiveTabBorder() {
    $j(".q_tabs li.active").length && $j(this).on("click", function() {
        initTabsActiveBorder()
    })
}

function initPopupMenu() {
    "use strict";
    $j("a.popup_menu").length && ($j(".popup_menu_holder_outer").height($window_height).niceScroll({
        scrollspeed: 30,
        mousescrollstep: 20,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    }), ($j("body").hasClass("qode_popup_menu_push_text_right") || $j("body").hasClass("qode_popup_menu_push_text_top")) && ($j(".popup_menu_holder_outer nav > ul > li > a").each(function(e) {
        $j(this).css({
            "-webkit-animation-delay": 70 * e + "ms",
            "animation-delay": 70 * e + "ms"
        })
    }), $j(".popup_menu_widget_holder > div").css({
        "-webkit-animation-delay": 70 * ($j(".popup_menu_holder_outer nav > ul > li > a").length + 1) + "ms",
        "animation-delay": 70 * ($j(".popup_menu_holder_outer nav > ul > li > a").length + 1) + "ms"
    })), $j(window).resize(function() {
        $j(".popup_menu_holder_outer").height($window_height)
    }), initPopupMenuHolderOpening(), initPopupMenuItemsOpening())
}

function initPopupMenuHolderOpening() {
    $j("a.popup_menu").on("click", function(e) {
        e.preventDefault(), $j(this).hasClass("opened") ? ($j(this).removeClass("opened"), $j("body").removeClass("popup_menu_opened"), ($j(this).hasClass("qode_popup_menu_push_text_right") || $j(this).hasClass("qode_popup_menu_push_text_top") || $j(this).hasClass("qode_popup_menu_text_scaledown")) && $j("body").removeClass("qode_popup_menu_fade_in").addClass("qode_popup_menu_fade_out"), $j(this).hasClass("qode_popup_menu_push_text_right") ? $j("body").addClass("qode_popup_menu_push_nav_right") : $j(this).hasClass("qode_popup_menu_push_text_top") && $j("body").addClass("qode_popup_menu_push_nav_top"), setTimeout(function() {
            $j("body").hasClass("page-template-full_screen-php") || $j("body").css("overflow", "visible"), $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
                $j("nav.popup_menu").getNiceScroll().resize()
            })
        }, 400)) : ($j(this).addClass("opened"), $j("body").addClass("popup_menu_opened"), $j(this).hasClass("qode_popup_menu_push_text_right") ? ($j("body").addClass("qode_popup_menu_fade_in").removeClass("qode_popup_menu_fade_out"), $j("body").removeClass("qode_popup_menu_push_nav_right")) : $j(this).hasClass("qode_popup_menu_push_text_top") ? ($j("body").addClass("qode_popup_menu_fade_in").removeClass("qode_popup_menu_fade_out"), $j("body").removeClass("qode_popup_menu_push_nav_top")) : $j(this).hasClass("qode_popup_menu_text_scaledown") && $j("body").addClass("qode_popup_menu_fade_in").removeClass("qode_popup_menu_fade_out"), setTimeout(function() {
            $j("body").hasClass("page-template-full_screen-php") || $j("body").css("overflow", "hidden")
        }, 400))
    })
}

function initPopupMenuItemsOpening() {
    $j(".popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6").on("tap click", function(e) {
        return e.preventDefault(), $j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible") ? ($j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200, function() {
            $j(".popup_menu_holder_outer").getNiceScroll().resize()
        }), $j(this).closest("li.has_sub").removeClass("open_sub")) : ($j(this).closest("li.has_sub").addClass("open_sub"), $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200, function() {
            $j(".popup_menu_holder_outer").getNiceScroll().resize()
        })), !1
    }), $j(".popup_menu ul li:not(.has_sub) a").on("click", function() {
        if ("http://#" === $j(this).attr("href") || "#" === $j(this).attr("href")) return !1;
        $j("a.popup_menu").removeClass("opened"), $j("body").removeClass("popup_menu_opened").css("overflow", "visible"), $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
            $j("nav.popup_menu").getNiceScroll().resize()
        })
    })
}

function initFullScreenTemplate() {
    "use strict";
    if ($j(".full_screen_holder").length && $window_width > 600) {
        var e = "";
        e = $j("header.page_header").hasClass("light") ? "light" : $j("header.page_header").hasClass("dark") ? "dark" : header_style_admin, $j(".full_screen_preloader").css("height", $window_height), $j("#up_fs_button").on("click", function() {
            return $j.fn.fullpage.moveSectionUp(), !1
        }), $j("#down_fs_button").on("click", function() {
            return $j.fn.fullpage.moveSectionDown(), !1
        });
        var t = $j(".full_screen_inner > .full_screen_section").length;
        $j("html").hasClass("qode-initialized-fss") && $j.fn.fullpage.destroy("all"), $j(".full_screen_inner").fullpage({
            sectionSelector: ".full_screen_section",
            scrollOverflow: !0,
            afterLoad: function(o, n) {
                checkActiveArrowsOnFullScrrenTemplate(t, n), checkFullScreenSectionsForHeaderStyle(n, e)
            },
            afterRender: function() {
                $j("html").addClass("qode-initialized-fss"), $j(this).addClass("qode-initialized"), checkActiveArrowsOnFullScrrenTemplate(t, 1), checkFullScreenSectionsForHeaderStyle(1, e), 1 !== t && $j(".full_screen_holder").find(".full_screen_navigation_holder").css("visibility", "visible"), $j(".full_screen_holder").find(".full_screen_inner").css("visibility", "visible"), $j(".full_screen_preloader").hide(), $j(".full_screen_holder video.full_screen_sections_video").length && $j(".full_screen_holder video.full_screen_sections_video").each(function() {
                    $j(this).get(0).play()
                })
            }
        })
    }
}

function checkActiveArrowsOnFullScrrenTemplate(e, t) {
    "use strict";
    1 === t ? ($j(".full_screen_navigation_holder #up_fs_button").hide(), t != e && $j(".full_screen_navigation_holder #down_fs_button").show()) : t === e ? (2 === e && $j(".full_screen_navigation_holder #up_fs_button").show(), $j(".full_screen_navigation_holder #down_fs_button").hide()) : ($j(".full_screen_navigation_holder #up_fs_button").show(), $j(".full_screen_navigation_holder #down_fs_button").show())
}

function checkFullScreenSectionsForHeaderStyle(e, t) {
    "use strict";
    if ($j("[data-q_header_style]").length > 0 && $j("header").hasClass("header_style_on_scroll"))
        if (void 0 !== $j($j(".full_screen_holder .full_screen_inner .full_screen_section")[e - 1]).data("q_header_style")) {
            var o = $j($j(".full_screen_holder .full_screen_inner .full_screen_section")[e - 1]).data("q_header_style");
            $j("header").removeClass("dark light").addClass(o)
        } else $j("header").removeClass("dark light").addClass(t)
}

function checkHeaderStyleOnScroll() {
    "use strict";
    if ($j("[data-q_header_style]").length > 0 && $j("header").hasClass("header_style_on_scroll")) {
        var e = "";
        e = $j("header.page_header").hasClass("light") ? "light" : $j("header.page_header").hasClass("dark") ? "dark" : header_style_admin;
        var t = $j("body").hasClass("paspartu_on_top_fixed") ? Math.round($window_width * paspartu_width) : 0,
            o = $j("body").hasClass("paspartu_on_bottom_fixed") ? Math.round($window_width * paspartu_width) : 0;
        $j(".full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section").waypoint(function(t) {
            if ("down" === t) {
                var o = $j(this)[0].adapter.$element;
                if (void 0 !== o.data("q_header_style")) {
                    var n = o.data("q_header_style");
                    $j("header").removeClass("dark light").addClass(n)
                } else $j("header").removeClass("dark light").addClass(e)
            }
        }, {
            offset: 0 + t
        }), $j(".title, .full_width_inner > .wpb_row.section, .full_width_inner > .parallax_section_holder, .container_inner > .wpb_row.section, .container_inner > .parallax_section_holder, .portfolio_single > .wpb_row.section, .q_slider").waypoint(function(t) {
            if ("up" === t) {
                var o = $j(this)[0].adapter.$element;
                if (void 0 !== o.data("q_header_style")) {
                    var n = o.data("q_header_style");
                    $j("header").removeClass("dark light").addClass(n)
                } else $j("header").removeClass("dark light").addClass(e)
            }
        }, {
            offset: function() {
                return -$j(this)[0].adapter.$element.outerHeight() + o
            }
        })
    }
}

function initImageGallerySliderNoSpace() {
    $j(".qode_image_gallery_no_space").length && ($j(".qode_image_gallery_no_space").each(function() {
        $j(this).animate({
            opacity: 1
        }, 1e3), $j(this).find(".qode_image_gallery_holder").lemmonSlider({
            infinite: !0
        })
    }), $j(".qode_image_gallery_no_space").on("click", "li:not(.active) a", function() {
        return !(window.innerWidth > 800)
    }))
}

function initVerticalSplitSlider() {
    "use strict";
    if ($j("html").hasClass("vertical_split_screen_initalized") && ($j("html").removeClass("vertical_split_screen_initalized"), $j.fn.multiscroll.destroy(), $j("#multiscroll-nav").remove()), $j(".vertical_split_slider").length) {
        var e = "";
        e = $j("header.page_header").hasClass("light") ? "light" : $j("header.page_header").hasClass("dark") ? "dark" : header_style_admin;
        var t = $j(".vertical_split_slider").data("disable-header-skin-change");
        if ($j(".vertical_split_slider").height($window_height).animate({
                opacity: 1
            }, 300), $j(".vertical_split_slider").multiscroll({
                scrollingSpeed: 500,
                navigation: !0,
                afterRender: function() {
                    checkVerticalSplitSectionsForHeaderStyle($j(".ms-right .ms-section:last-child").data("header_style"), e, t), $j("html").addClass("vertical_split_screen_initalized"), initButtonHover();
                    var o = $j("div.wpcf7 > form");
                    if (o.length && o.each(function() {
                            var e = $j(this);
                            e.find(".wpcf7-submit").off().on("click", function(t) {
                                t.preventDefault(), wpcf7.submit(e)
                            })
                        }), $j("body").hasClass("vss_responsive_adv")) {
                        var n = $j("<div class='vertical_split_slider_responsive' />");
                        $j(".vertical_split_slider").after(n);
                        for (var i = $j(".vertical_split_slider .ms-left > div"), a = $j(".vertical_split_slider .ms-right > div"), r = 0; r < i.length; r++) n.append($j(i[r]).clone(!0)), n.append($j(a[i.length - 1 - r]).clone(!0));
                        $j(".vertical_split_slider_responsive .qode_google_map").length && $j(".vertical_split_slider_responsive .qode_google_map").each(function() {
                            var e = $j(this);
                            e.empty();
                            var t = Math.floor(1e5 * Math.random() + 1);
                            e.attr("id", "map_canvas_" + t), e.data("unique-id", t)
                        }), $j(".vertical_split_slider_responsive .counter.random").length && initCounter()
                    }
                    initProgressBars(), initCountdown(), showGoogleMap(), initAccordion(), initAccordionContentLink(), qodeInitAccordions()
                },
                onLeave: function(o, n, i) {
                    checkVerticalSplitSectionsForHeaderStyle($j($j(".ms-right .ms-section")[$j(".ms-right .ms-section").length - n]).data("header_style"), e, t)
                }
            }), $j("body").hasClass("vss_responsive_adv")) {
            var o = 768;
            $j("body").hasClass("vss_width_1000") && (o = 1e3), $j("body").hasClass("vss_width_600") && (o = 600), $window_width < o ? ($j.fn.multiscroll.destroy(), $j("html,body").css("height", "auto").css("overflow", "auto")) : ($j.fn.multiscroll.build(), $j("html,body").css("height", "100%").css("overflow", "hidden")), $j(window).resize(function() {
                $window_width < o ? ($j.fn.multiscroll.destroy(), $j("html,body").css("height", "auto").css("overflow", "auto")) : ($j.fn.multiscroll.build(), $j("html,body").css("height", "100%").css("overflow", "hidden"))
            })
        }
    } else $j(".full_screen_holder").length || $j("html,body").css("height", "auto").css("overflow", "auto")
}

function checkVerticalSplitSectionsForHeaderStyle(e, t, o) {
    "use strict";
    "" != e ? ("no" == o && $j("header.page_header").removeClass("dark light").addClass(e), $j("#multiscroll-nav").removeClass("dark light").addClass(e)) : ("no" == o && $j("header.page_header").removeClass("dark light").addClass(t), $j("#multiscroll-nav").removeClass("dark light").addClass(t))
}

function showGoogleMap() {
    "use strict";
    $j(".qode_google_map").length && $j(".qode_google_map").each(function() {
        var e = !1,
            t = "";
        if (void 0 !== $j(this).data("snazzy-map-style") && "yes" === $j(this).data("snazzy-map-style")) {
            e = !0;
            var o = $j(this).parent().find(".qode-snazzy-map"),
                n = o.val();
            o.length && n.length && (t = JSON.parse(n.replace(/`{`/g, "[").replace(/`}`/g, "]").replace(/``/g, '"').replace(/`/g, "")))
        }
        var i;
        void 0 !== $j(this).data("custom-map-style") && (i = $j(this).data("custom-map-style"));
        var a;
        void 0 !== $j(this).data("color-overlay") && !1 !== $j(this).data("color-overlay") && (a = $j(this).data("color-overlay"));
        var r;
        void 0 !== $j(this).data("saturation") && !1 !== $j(this).data("saturation") && (r = $j(this).data("saturation"));
        var s;
        void 0 !== $j(this).data("lightness") && !1 !== $j(this).data("lightness") && (s = $j(this).data("lightness"));
        var d;
        void 0 !== $j(this).data("zoom") && !1 !== $j(this).data("zoom") && (d = $j(this).data("zoom"));
        var l;
        void 0 !== $j(this).data("pin") && !1 !== $j(this).data("pin") && (l = $j(this).data("pin"));
        var c;
        void 0 !== $j(this).data("map-height") && !1 !== $j(this).data("map-height") && (c = $j(this).data("map-height"));
        var h;
        void 0 !== $j(this).data("unique-id") && !1 !== $j(this).data("unique-id") && (h = $j(this).data("unique-id"));
        var u;
        void 0 !== $j(this).data("google-maps-scroll-wheel") && (u = $j(this).data("google-maps-scroll-wheel"));
        var f;
        void 0 !== $j(this).data("addresses") && !1 !== $j(this).data("addresses") && (f = $j(this).data("addresses")), initializeGoogleMap(e, t, i, a, r, s, u, d, "map_canvas_" + h, c, l, "map_" + h, "geocoder_" + h, f)
    })
}

function initializeGoogleMap(e, t, o, n, i, a, r, s, d, l, c, h, u, f) {
    "use strict";
    if ("undefined" != typeof google) {
        var _ = [];
        _ = e && t.length ? t : [{
            stylers: [{
                hue: n
            }, {
                saturation: i
            }, {
                lightness: a
            }, {
                gamma: 1
            }]
        }];
        var p;
        p = e || o ? "qode_style" : google.maps.MapTypeId.ROADMAP;
        var m = new google.maps.StyledMapType(_, {
            name: "Qode Google Map"
        });
        u = new google.maps.Geocoder;
        var g = new google.maps.LatLng(-34.397, 150.644),
            v = {
                zoom: s,
                scrollwheel: r,
                center: g,
                zoomControl: !0,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.RIGHT_CENTER
                },
                scaleControl: !1,
                scaleControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                streetViewControl: !1,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                panControl: !1,
                panControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeControl: !1,
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "qode_style"],
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                mapTypeId: p
            };
        h = new google.maps.Map(document.getElementById(d), v), h.mapTypes.set("qode_style", m);
        var j;
        for (j = 0; j < f.length; ++j) initializeGoogleAddress(f[j], c, h, u);
        document.getElementById(d).style.height = l, isNaN(l) || (l += "px")
    }
}

function initializeGoogleAddress(e, t, o, n) {
    "use strict";
    if ("" !== e) {
        var i = '<div class="content_map"><div class="site_notice_map"></div><div class="body_content_map"><p>' + e + "</p></div></div>",
            a = new google.maps.InfoWindow({
                content: i
            });
        n.geocode({
            address: e
        }, function(n, i) {
            if (i === google.maps.GeocoderStatus.OK) {
                o.setCenter(n[0].geometry.location);
                var r = new google.maps.Marker({
                    map: o,
                    position: n[0].geometry.location,
                    icon: t,
                    title: e.store_title
                });
                google.maps.event.addListener(r, "click", function() {
                    a.open(o, r)
                }), google.maps.event.addDomListener(window, "resize", function() {
                    o.setCenter(n[0].geometry.location)
                })
            }
        })
    }
}

function initHorizontalMarquee() {
    "use strict";
    $j(".qode-horizontal-marquee").each(function() {
        var e, t, o, n, i = function() {
                n = d.width(), o = 0, h.find("> .qode-hm-item").css("margin", 0), d.height(Math.min($window_height, c)), h.find("> .qode-hm-item").each(function() {
                    $j(this).css("max-width", n), o += $j(this).outerWidth() + l
                }), o -= l, h.width(o).css("left", 0), h.find("> .qode-hm-item").css("margin-right", l + "px")
            },
            a = function(o) {
                o = void 0 !== o.originalEvent ? o.originalEvent : o, o = "touchstart" == o.type ? o.touches[0] : o, e = {
                    x: o.clientX,
                    y: o.clientY
                }, t = parseInt(h.css("left"), 10), h.addClass("qode-dragged")
            },
            r = function(e) {
                h.removeClass("qode-dragged")
            },
            s = function(i) {
                i = void 0 !== i.originalEvent ? i.originalEvent : i;
                var a = i.type;
                i = "touchmove" == a ? i.touches[0] : i;
                var r = {
                    x: i.clientX,
                    y: i.clientY
                };
                ("touchmove" == a || "mousemove" == a && h.is(".qode-dragged")) && h.css({
                    left: Math.max(-o + n, Math.min(t + (r.x - e.x), 0)) + "px"
                })
            },
            d = $j(this),
            l = void 0 !== d.data("spacing") ? d.data("spacing") : 0,
            c = void 0 !== d.data("height") ? d.data("height") : 0,
            h = d.find(".qode-horizontal-marquee-inner");
        i(), $j(window).resize(i), h.find("img").on("dragstart", function(e) {
            e.preventDefault()
        }), d.hasClass("qode-loop") || (h.on("mousedown touchstart", a), h.on("mousemove touchmove", s), h.on("mouseup touchend mouseleave", r))
    })
}

function qodeHorizontalMarqueeLoop() {
    var e = $j(".qode-horizontal-marquee.qode-loop");
    e.length && e.each(function() {
        var e = $j(this);
        e.find(".qode-horizontal-marquee-inner").clone().appendTo(e);
        var t = e.find(".qode-horizontal-marquee-inner"),
            o = t.first(),
            n = t.last(),
            i = function() {
                var i, a, r = "" !== e.data("spacing") ? e.data("spacing") : 0,
                    s = function() {
                        a = o.width() + r, i = 0, o.css({
                            left: 0
                        }), n.css({
                            width: a,
                            left: a
                        })
                    };
                s(), qodeRequestAnimationFrame(), e.hasClass("qode-appear-fx") && e.addClass("qode-appeared"), t.each(function(e) {
                    var t = $j(this),
                        r = function() {
                            i -= 1, t.position().left <= -a && (t.css("left", parseInt(a - 1)), i = 0), t.css({
                                transform: "translate3d(" + 1 * i + "px,0,0)"
                            }), Math.abs(o.position().left - n.position().left) < a - 1 && s(), requestNextAnimationFrame(r)
                        };
                    r()
                }), $j(window).resize(function() {
                    setTimeout(function() {
                        s()
                    }, 200)
                })
            };
        e.waitForImages(function() {
            i()
        })
    })
}

function initTextMarquee() {
    "use strict";
    var e = $j(".qode-text-marquee");
    e.length && e.each(function() {
        var e = $j(this);
        if (!e.hasClass("qode-text-marquee-initialized")) {
            $j("html").hasClass("touch") || e.find(".qode-text-marquee-wrapper").clone().appendTo(e);
            var t = e.find(".qode-text-marquee-wrapper"),
                o = e.find(".qode-text-marquee-title");
            $j("html").hasClass("touch") || t.each(function() {
                for (var e = $j(this), t = e.find(".qode-text-marquee-title"), o = t.html().split(" "), n = o.length, i = [], a = 0; a < n; a++) i[a] = '<span class="qode-inner-text">' + o[a] + "</span>";
                t.html(i.join("")), t.find(".qode-inner-text").css({
                    display: "inline-block",
                    "margin-right": "40px"
                })
            }), o.stretch(), t.eq(1).addClass("qode-marquee-additional-title"), o.css("visibility", "visible");
            var n = function() {
                o.unwrap(".stretch--resizer"), o.unwrap(".stretch--handle"), o.stretch()
            };
            if ($j("html").hasClass("touch")) $j(window).resize(function() {
                n()
            });
            else {
                qodeRequestAnimationFrame();
                var i = t.first(),
                    a = i.offset().left,
                    r = t.last(),
                    s = !1;
                r.offset({
                    left: a - $j(window).width()
                }), t.each(function() {
                    var e = $j(this),
                        t = e.offset().left,
                        i = 0,
                        a = function() {
                            s = !1, i += 2, e.offset().left > $j(window).width() && (i = -($j(window).width() + t)), e.css("transform", "translate3d(" + i + "px,0,0)"), requestAnimFrame(a), $j(window).resize(function() {
                                s || (n(), i = 0, r.offset({
                                    left: -o.first().width()
                                }), s = !0)
                            })
                        };
                    a()
                })
            }
            e.addClass("qode-text-marquee-initialized")
        }
    })
}

function qodeRequestAnimationFrame() {
    $j("html").hasClass("touch") || window.requestAnimFrame || (window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
            window.setTimeout(e, 1e3 / 60)
        }
    }())
}

function initExpandingImages() {
    var e = $j(".qode-expanding-images");
    e.length && e.each(function() {
        var e = $j(this);
        (getIEversion() > 0 && e.addClass("qode-ie-specific"), $j("html").hasClass("touch")) || skrollr.init({
            edgeStrategy: "set",
            smoothScrolling: !1,
            forceHeight: !1
        }).refresh()
    })
}

function initItemShowcase() {
    var e = $j(".qode-item-showcase");
    e.length && e.each(function() {
        function e(e) {
            t.find(e).each(function(e) {
                var t = $j(this);
                setTimeout(function() {
                    t.addClass("qode-appeared")
                }, 150 * e)
            })
        }
        var t = $j(this),
            o = t.find(".qode-item-left"),
            n = t.find(".qode-item-right"),
            i = t.find(".qode-item-image");
        o.wrapAll("<div class='qode-item-showcase-holder qode-holder-left' />"), n.wrapAll("<div class='qode-item-showcase-holder qode-holder-right' />"), t.find(".qode-item-showcase-holder").append("<span class='qode-item-line'></span>");
        var a = $j(".qode-item-line");
        $j("html").hasClass("touch") ? a.each(function() {
            var e = $j(this),
                t = e.closest(".qode-item-showcase-holder"),
                o = t.height() - t.find(".qode-item").last().height();
            e.css("height", o), e.css("opacity", 1)
        }) : (t.animate({
            opacity: 1
        }, 200), setTimeout(function() {
            t.appear(function() {
                i.addClass("qode-appeared"), a.each(function() {
                    var e = $j(this),
                        t = e.closest(".qode-item-showcase-holder"),
                        o = t.height() - t.find(".qode-item").last().height();
                    e.css("height", o), e.css("opacity", 1)
                }), t.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(t) {
                    $window_width > 1200 ? (e(".qode-holder-left .qode-item"), e(".qode-holder-right .qode-item")) : e(".qode-item")
                })
            })
        }, 100))
    })
}

function initPreviewSlider() {
    "use strict";
    $j(".qode-preview-slider").each(function() {
        var e = $j(this),
            t = e.find(".qode-presl-main-slider"),
            o = e.find(".qode-presl-small-slider-holder"),
            n = o.find(".qode-presl-small-slider");
        t.find(".qode-presl-link.small").each(function(e) {
            $j('<li><div class="qode-presl-small-item"><div class="qode-presl-main-item-inner"></div></div></li>').appendTo(n.find("> .slides")).find(".qode-presl-main-item-inner").append($j(this))
        }), t.flexslider({
            animation: "slide",
            animationSpeed: 700,
            slideshow: !0,
            slideshowSpeed: 5e3,
            useCSS: !0,
            touch: !0,
            autostart: !1,
            directionNav: !0,
            controlNav: !0,
            prevText: '<i class="icon-arrows-left"></i>',
            nextText: '<i class="icon-arrows-right"></i>',
            start: function(e) {
                e.find(".qode-presl-main-item").css({
                    opacity: "1",
                    filter: "alpha(opacity=100)"
                }).find("img").addClass("visible")
            },
            before: function(e) {
                var t = e.animatingTo,
                    o = e.currentSlide;
                0 == t ? e.find(".slides li:first-child").next().next().clone().appendTo(e.find(".slides")).removeClass("clone").addClass("clone_end") : t == e.count - 1 && e.find(".slides li:last-child").prev().prev().clone().appendTo(e.find(".slides")).removeClass("clone").addClass("clone_start"), 0 == t && o == e.count - 1 && "next" == e.direction ? n.flexslider("next") : t == e.count - 1 && 0 == o && "prev" == e.direction ? n.flexslider("prev") : n.find(".flex-control-nav a").eq(t).trigger("click"), e.find(".flex-direction-nav").addClass("moving")
            },
            after: function(e) {
                e.removeClass("control-initiated direction-initiated"), e.find(".clone_start, .clone_end").remove(), e.find(".flex-direction-nav").removeClass("moving")
            }
        }), n.flexslider({
            animation: "slide",
            animationSpeed: 700,
            animationLoop: !0,
            useCSS: !0,
            touch: !1,
            slideshow: !1,
            directionNav: !1,
            controlNav: !0,
            start: function(e) {
                e.find("img").addClass("visible"), e.closest(".qode-presl-small-slider-holder").find(".qode-presl-phone").addClass("visible")
            }
        })
    })
}

function initInDeviceSlider() {
    "use strict";
    $j(".qode-in-device-slider").each(function() {
        var e = $j(this).find(".qode-ids-slider"),
            t = "yes" == e.data("navigation"),
            o = "yes" == e.data("auto-start"),
            n = o ? e.data("timeout") : 0,
            i = !!e.closest(".qode-horizontal-marquee").length;
        if (getIEversion() > 0 && e.addClass("qode-ids-ie-specific"), e.flexslider({
                animation: "slide",
                animationSpeed: 700,
                animationLoop: !0,
                useCSS: !0,
                touch: !i,
                slideshow: o,
                slideshowSpeed: n,
                directionNav: t,
                controlNav: !1,
                prevText: '<i class="icon-arrows-left"></i>',
                nextText: '<i class="icon-arrows-right"></i>',
                start: function(e) {
                    e.find("img").addClass("visible"), e.closest(".qode-ids-slider-holder").find(".qode-ids-frame").addClass("visible"), e.is(".qode-ids-titles-on-hover") && e.hover(function() {
                        $j(this).find(".qode-ids-link").addClass("hovered")
                    }, function() {
                        $j(this).find(".qode-ids-link").removeClass("hovered")
                    })
                }
            }), i) {
            var a, r = !1,
                s = function(e) {
                    e = void 0 !== e.originalEvent ? e.originalEvent : e, e = "touchstart" == e.type ? e.touches[0] : e, a = {
                        x: e.clientX,
                        y: e.clientY
                    }
                },
                d = function(e) {
                    e = void 0 !== e.originalEvent ? e.originalEvent : e, e = "touchend" == e.type ? e.changedTouches[0] : e;
                    var t = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    Math.abs(t.x - a.x) < 10 && (r = !0)
                },
                l = function(e) {
                    r ? r = !1 : e.preventDefault()
                };
            e.find(".qode-ids-link").on("dragstart", function(e) {
                e.preventDefault()
            }).on("click", l).on("mousedown touchstart", s).on("mouseup touchend", d)
        }
    })
}

function checkSVG(e) {
    "use strict";
    var t = e.find(".active .qode_slide-svg-holder");
    "yes" === t.data("svg-drawing") && drawSVG(t)
}

function drawSVG(e) {
    "use strict";
    var t = Array.prototype.slice.call(e.find("svg")),
        o = [];
    t.forEach(function(e, t) {
        var n = new SVGEl(e);
        o[t] = n, setTimeout(function(e) {
            return function() {
                n.render()
            }
        }(), 0)
    })
}

function SVGEl(e) {
    this.el = e;
    var t = $j(this.el).closest(".qode_slide-svg-holder").data("svg-frames");
    this.image = this.el.previousElementSibling, this.current_frame = 0, this.total_frames = t, this.path = [], this.length = [], this.handle = 0, this.init()
}

function initPageTitleAnimation() {
    "use strict";
    if ("yes" === $j(".title_outer").data("animation") && $j(".no-touchevents .title_outer").length > 0) {
        skrollr.init({
            edgeStrategy: "set",
            smoothScrolling: !1,
            forceHeight: !1
        }).refresh()
    }
}

function initElementsHolderResponsiveStyle() {
    var e = $j(".q_elements_holder");
    e.length && e.each(function() {
        var e = $j(this),
            t = e.children(".q_elements_item"),
            o = "",
            n = "";
        t.each(function() {
            var e = $j(this),
                t = "",
                o = "",
                i = "",
                a = "",
                r = "",
                s = "",
                d = "";
            void 0 !== e.data("item-class") && !1 !== e.data("item-class") && (t = e.data("item-class")), void 0 !== e.data("1280-1440") && !1 !== e.data("1280-1440") && (o = e.data("1280-1440")), void 0 !== e.data("1024-1280") && !1 !== e.data("1024-1280") && (i = e.data("1024-1280")), void 0 !== e.data("768-1024") && !1 !== e.data("768-1024") && (a = e.data("768-1024")), void 0 !== e.data("600-768") && !1 !== e.data("600-768") && (r = e.data("600-768")), void 0 !== e.data("480-600") && !1 !== e.data("480-600") && (s = e.data("480-600")), void 0 !== e.data("480") && !1 !== e.data("480") && (d = e.data("480")), (o.length || i.length || a.length || r.length || s.length || d.length) && (o.length && (n += "@media only screen and (min-width: 1280px) and (max-width: 1440px) {.q_elements_item_content." + t + " { padding: " + o + " !important; } }"), i.length && (n += "@media only screen and (min-width: 1024px) and (max-width: 1280px) {.q_elements_item_content." + t + " { padding: " + i + " !important; } }"), a.length && (n += "@media only screen and (min-width: 768px) and (max-width: 1024px) {.q_elements_item_content." + t + " { padding: " + a + " !important; } }"), r.length && (n += "@media only screen and (min-width: 680px) and (max-width: 768px) {.q_elements_item_content." + t + " { padding: " + r + " !important; } }"), s.length && (n += "@media only screen and (min-width: 480px) and (max-width: 680px) {.q_elements_item_content." + t + " { padding: " + s + " !important; } }"), d.length && (n += "@media only screen and (max-width: 480px) {.q_elements_item_content." + t + " { padding: " + d + " !important; } }"))
        }), n.length && (o = '<style type="text/css">' + n + "</style>"), o.length && $j("head").append(o)
    })
}

function initQodeElementAnimationSkrollr() {
    "use strict";
    if (0 === $j(".no-touchevents .carousel").length) {
        $j(".no-touchevents .q_elements_holder > .q_elements_item").each(function() {
            if ((void 0 !== $j(this).data("animation") || void 0 !== $j(".title_outer").data("animation")) && "yes" === $j(this).data("animation")) {
                skrollr.init({
                    edgeStrategy: "set",
                    smoothScrolling: !1,
                    forceHeight: !1
                }).refresh()
            }
        })
    }
}

function initIconShortcodeHover() {
    "use strict";
    $j(".qode_icon_shortcode").length && $j(".qode_icon_shortcode").each(function() {
        if (void 0 !== $j(this).data("type") && -1 != ["circle", "square"].indexOf($j(this).data("type")) && void 0 !== $j(this).data("hover-bg-color"))
            if ("circle" == $j(this).data("type")) {
                var e = $j(this).find("i").first(),
                    t = $j(this).data("hover-bg-color"),
                    o = e.attr("style");
                $j(this).hover(function() {
                    e.attr("style", o + "color: " + t + "!important")
                }, function() {
                    e.attr("style", o)
                })
            } else {
                var t = $j(this).data("hover-bg-color"),
                    n = $j(this).css("background-color");
                $j(this).hover(function() {
                    $j(this).css("background-color", t)
                }, function() {
                    $j(this).css("background-color", n)
                })
            } if (void 0 !== $j(this).data("hover-icon-color")) {
            var i = $j(this).data("hover-icon-color"),
                a = $j(this).find(".qode_icon_element ").css("color");
            $j(this).hover(function() {
                $j(this).find(".qode_icon_element ").css("color", i)
            }, function() {
                $j(this).find(".qode_icon_element ").css("color", a)
            })
        }
    })
}

function initIconWithTextHover() {
    "use strict";
    $j(".qode_iwt_icon_holder").length && $j(".qode_iwt_icon_holder").each(function() {
        if (void 0 !== $j(this).data("icon-hover-bg-color")) {
            var e = $j(this).data("icon-hover-bg-color"),
                t = $j(this).css("background-color");
            $j(this).hover(function() {
                $j(this).css("background-color", e)
            }, function() {
                $j(this).css("background-color", t)
            })
        }
        if (void 0 !== $j(this).data("icon-hover-color")) {
            var o = $j(this).find(".qode_iwt_icon_element"),
                n = $j(this).data("icon-hover-color"),
                i = o.css("color");
            $j(this).hover(function() {
                o.css("color", n)
            }, function() {
                o.css("color", i)
            })
        }
    })
}

function initLoadNextPostOnBottom() {
    "use strict";
    if ($j(".blog_vertical_loop").length) {
        var e, t, o = $j("body").hasClass("paspartu_enabled") ? Math.round($window_width * paspartu_width) : 0;
        t = $j("header.page_header").hasClass("transparent") ? 0 : header_height;
        var n = !0,
            i = $j(".blog_vertical_loop .blog_holder");
        $j(document).on("click", ".blog_vertical_loop_button a", function(a) {
            if (a.preventDefault(), !n) return !1;
            n = !1;
            var r = $j(this),
                s = r.attr("href"),
                d = ".blog_vertical_loop_button_holder a",
                l = $j(d).attr("href");
            e = $window_width < 1e3 ? $j("header.page_header").height() : t;
            var c = $j(window).scrollTop(),
                h = r.closest("article").offset().top,
                u = h - c - e - o;
            i.find("article:eq(1)").addClass("fade_out"), r.closest("article").addClass("move_up").removeClass("next_post").css("transform", "translateY(-" + u + "px)"), setTimeout(function() {
                $j(window).scrollTop(0), i.find("article:eq(0)").remove(), i.find("article:eq(0)").addClass("previous_post"), r.closest("article").removeAttr("style").removeClass("move_up")
            }, 450), $j.get(s + "", function(e) {
                var t = $j(e).find("article").addClass("next_post");
                l = $j(d, e).attr("href"), i.append($j(t)), n = !0
            })
        }), $j(document).on("click", ".blog_vertical_loop_back_button a", function(e) {
            if (e.preventDefault(), !n) return !1;
            n = !1;
            var t = $j(this),
                o = t.attr("href"),
                a = ".blog_vertical_loop_button_holder.prev_post a",
                r = $j(a).attr("href");
            i.find("article:eq(0)").removeClass("fade_out").addClass("fade_in"), t.closest("article").addClass("move_up").css("transform", "translateY(" + $window_height + "px)"), setTimeout(function() {
                i.find("article:last-child").remove(), i.find("article:eq(0)").removeClass("previous_post fade_in"), t.closest("article").addClass("next_post").removeAttr("style").removeClass("move_up"), $j.get(o + "", function(e) {
                    var t = $j(e).find("article").removeClass("next_post").addClass("previous_post");
                    r = $j(a, e).attr("href"), i.prepend($j(t)), n = !0
                })
            }, 450)
        }), $j.get($j(".blog_vertical_loop_button_holder .last_page a").attr("href") + "", function(e) {
            var t = $j(e).find("article").removeClass("next_post").addClass("previous_post");
            i.prepend($j(t))
        }), $j.get($j(".blog_vertical_loop_button a").attr("href") + "", function(e) {
            var t = $j(e).find("article").addClass("next_post");
            i.append($j(t))
        })
    }
}

function setParallaxLayersHeight(e, t) {
    "use strict";
    var o = t,
        n = [1600, 1300, 1e3, 768, 567, 320];
    $window_width > n[0] ? o = t : $window_width > n[1] ? o = .75 * t : $window_width > n[2] ? o = .6 * t : $window_width > n[3] ? o = .55 * t : $window_width <= n[3] && (o = .45 * t), e.css({
        height: o + "px"
    })
}

function parallaxLayers() {
    "use strict";
    $j(".qode_parallax_layers").length && $j(".qode_parallax_layers").each(function() {
        var e = $j(this);
        if ($j(this).hasClass("full_screen_height")) e.height($window_height), $j(window).resize(function() {
            e.height($window_height)
        });
        else {
            var t = $j(this).data("height");
            setParallaxLayersHeight(e, t), $j(window).resize(function() {
                setParallaxLayersHeight(e, t)
            })
        }
        var o = e.find(".qode_parallax_layers_holder"),
            n = 0,
            i = e.find(".image").length;
        e.find(".image").each(function() {
            var e = $j(this);
            if ("" != e.css("background-image") && "none" != e.css("background-image")) {
                var t = e.attr("style");
                if (t = t.match(/url\(["']?([^'")]+)['"]?\)/), t = t ? t[1] : "") {
                    var a = new Image;
                    a.src = t, $j(a).on("load", function() {
                        ++n == i && (o.removeClass("preload_parallax_layers"), $j("html").hasClass("no-touch") && o.mouseParallax())
                    })
                }
            }
        })
    })
}

function initDropDownAfterWPMLReplaceMenu() {
    "use strict";
    if (qode_body.hasClass("qode-wpml-enabled") && qode_body.hasClass("qode-page-transition-enabled")) {
        var e = {
            attributes: !0,
            childList: !0,
            characterData: !0
        };
        if ($j("nav.main_menu").length) {
            var t = document.querySelector(".main_menu");
            new MutationObserver(function(e) {
                initDropDownMenu(), initInsideMobileMenu()
            }).observe(t, e)
        }
        if ($j("nav.vertical_menu").length) {
            var o = document.querySelector(".vertical_menu");
            new MutationObserver(function(e) {
                initVerticalMenu(), initInsideMobileMenu()
            }).observe(o, e)
        }
        if ($j("nav.popup_menu").length) {
            var n = document.querySelector("nav.popup_menu");
            new MutationObserver(function(e) {
                initPopupMenuItemsOpening()
            }).observe(n, e)
        }
    }
}

function initContentSlider() {
    "use strict";
    $j(".qode_content_slider").each(function() {
        var e = $j(this),
            t = 8e3;
        void 0 !== e.data("interval") && !1 !== e.data("interval") && (t = 1e3 * parseFloat(e.data("interval")));
        var o = !1;
        void 0 !== e.data("direction") && (o = e.data("direction"));
        var n = !1;
        void 0 !== e.data("control") && (n = e.data("control"));
        var i = !1;
        void 0 !== e.data("pause-on-hover") && (i = e.data("pause-on-hover"));
        var a = !1;
        void 0 !== e.data("drag") && (a = e.data("drag"));
        var r = !0;
        0 === t && (r = !1);
        var s = "slide";
        void 0 !== e.data("flex_fx") && !1 !== e.data("flex_fx") && (s = e.data("flex_fx"));
        var d = !1;
        e.find(".qode-lazy-image").length && (d = !0), e.flexslider({
            selector: ".qode_content_slider_inner > .qode_content_slider_item",
            animationLoop: !0,
            controlNav: n,
            directionNav: o,
            useCSS: !1,
            pauseOnAction: i,
            pauseOnHover: i,
            slideshow: r,
            animation: s,
            prevText: "<div><i class='fa fa-angle-left'></i></div>",
            nextText: "<div><i class='fa fa-angle-right'></i></div>",
            animationSpeed: 600,
            slideshowSpeed: t,
            touch: !0,
            smoothHeight: d,
            start: function() {
                l(e)
            },
            after: function() {
                l(e)
            }
        });
        var l = function(t) {
            e.find(".qode-lazy-image").length && qodeLazyImages()
        };
        if (e.find(".flex-direction-nav a").on("click", function(e) {
                e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation()
            }), a && e.swipe({
                swipeLeft: function() {
                    e.flexslider("next")
                },
                swipeRight: function() {
                    e.flexslider("prev")
                },
                threshold: 20
            }), e.hasClass("control_nav_justified")) {
            var c = function(t) {
                var o = e.find("ol");
                o.addClass("qode-type1-gradient-left-to-right-after"), $window_width > 1440 ? o.css("max-width", qode_grid_width) : o.css("max-width", Math.round(.8 * e.outerWidth()));
                var n = o.find("li"),
                    i = n.outerWidth(),
                    a = parseInt(o.css("max-width")),
                    r = a - i * n.length,
                    s = Math.floor(r / n.length);
                n.css("margin-right", s), n.last().css("margin-right", 0)
            };
            c(), $j(window).resize(function() {
                c()
            })
        }
    })
}

function qodeInitStickyWidget() {
    var e = $j(".qode-widget-sticky-sidebar");
    if (e.length && $window_width > 1e3) {
        var t = $j("header.page_header");
        sticky_amount = getScrollAmountForStickyHeader(), e.each(function() {
            var e = $j(this),
                o = 0,
                n = e.offset().top;
            if (e.parent("aside.sidebar").length) var i = e.parents("aside.sidebar");
            else if (e.parents(".wpb_widgetised_column").length) {
                var i = e.parents(".wpb_widgetised_column");
                e.closest(".wpb_column").css("position", "static")
            } else if (e.parents(".elementor-widget.elementor-widget-sidebar").length) var i = e.parents(".elementor-widget.elementor-widget-sidebar");
            var a = i.offset().top;
            o = sticky_amount < a && (t.hasClass("stick") || t.hasClass("stick_with_left_right_menu")) ? min_header_height_sticky : t.hasClass("fixed") ? min_header_height_scroll + content_menu_top_add : t.hasClass("fixed_top_header") ? header_top_height : t.hasClass("fixed_hiding") ? min_header_height_fixed_hidden + 40 : (qode_window < 1e3 || $j(".vertical_menu_enabled").length, 0);
            var r = -(n - a - o - 10);
            i.stick_in_parent({
                parent: ".full_section_inner, .section_inner, .two_columns_75_25, .two_columns_25_75, .two_columns_66_33, .two_columns_33_66, .elementor-row, .elementor-section",
                sticky_class: "qode-sticky-sidebar",
                inner_scrolling: !1,
                offset_top: r
            }).on("sticky_kit:bottom", function() {
                i.addClass("qode-sticky-sidebar-on-bottom")
            }).on("sticky_kit:unbottom", function() {
                i.removeClass("qode-sticky-sidebar-on-bottom")
            }), $j(window).scroll(function() {
                $window_width >= 1e3 && (sticky_amount > a && t.hasClass("sticky") && i.hasClass("qode-sticky-sidebar") && !i.hasClass("qode-sticky-sidebar-on-bottom") ? (i.css("-webkit-transform", "translateY(" + min_header_height_sticky + "px)"), i.css("transform", "translateY(" + min_header_height_sticky + "px)")) : (i.css("-webkit-transform", "translateY(0px)"), i.css("transform", "translateY(0px)")))
            })
        })
    }
}

function qodeBlogGalleryAnimation() {
    var e = $j(".blog_holder.blog_gallery");
    e.length && e.each(function() {
        $j(this).find("article").each(function() {
            var e = $j(this),
                t = e.find(".post_excerpt"),
                o = parseInt(t.outerHeight(!0)),
                n = e.find(".post_category"),
                i = e.find(".entry_title");
            n.css({
                transform: "translateY(" + o + "px)"
            }), i.css({
                transform: "translateY(" + o + "px)"
            }), e.mouseenter(function() {
                n.css({
                    transform: "translateY(0px)"
                }), i.css({
                    transform: "translateY(0px)"
                }), t.css({
                    visibility: "visible",
                    opacity: "1"
                })
            }), e.mouseleave(function() {
                n.css({
                    transform: "translateY(" + o + "px)"
                }), i.css({
                    transform: "translateY(" + o + "px)"
                }), t.css({
                    visibility: "hidden",
                    opacity: "0"
                })
            })
        })
    })
}

function qodeLazyImages() {
    $j.fn.preloader = function(e, t) {
        if (e && "destroy" == e) this.find(".qode-lazy-preloader").remove();
        else {
            var o = $j('<div class="qode-lazy-preloader"></div>');
            $j('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle stroke-linecap="round" cx="37.5" cy="37.5" r="33.5" stroke-width="4"/></svg>').appendTo(o), o.appendTo(this), "function" == typeof t && t()
        }
        return this
    }, $j('.qode-lazy-image[data-image][data-lazy="true"]:not(.lazyLoading)').each(function(e, t) {
        t = $j(t), t.attr("data-ratio") && t.height(t.width() * t.data("ratio"));
        var o = t[0].getBoundingClientRect(),
            n = $window_height || document.documentElement.clientHeight,
            i = $window_width || document.documentElement.clientWidth,
            a = t.outerHeight(),
            r = t.outerWidth();
        if ((0 != o.top || 0 != o.right || 0 != o.bottom || 0 != o.left) && (o.top >= 0 || o.top + a >= 0) && o.bottom >= 0 && o.bottom - a - n <= 0 && (o.left >= 0 || o.left + r >= 0) && o.right >= 0 && o.right - r - i <= 0) {
            var s = null;
            s = "IMG" == t.prop("tagName") ? t.parent() : t, s && s.preloader("init"), t.addClass("lazyLoading");
            var d = new Image;
            $j(d).on("load", function() {
                switch (s.preloader("destroy"), t.removeAttr("data-image").removeData("image").removeAttr("data-lazy").removeData("lazy").removeClass("lazyLoading"), t.prop("tagName")) {
                    case "IMG":
                        t.attr("src", $j(this).attr("src")), t.height("auto");
                        break;
                    case "DIV":
                    default:
                        t.css("background-image", "url(" + $j(this).attr("src") + ")")
                }
            }).attr("src", t.data("image"))
        }
    })
}

function qodeCardsGallery() {
    $j(".qode-cards-gallery-holder").length && $j(".qode-cards-gallery-holder").each(function() {
        var e, t = $j(this),
            o = t.find(".card"),
            n = t.data("side");
        switch (n) {
            case "left":
                e = "0 0 0 20%";
                break;
            case "right":
                e = "0 20% 0 0";
                break;
            case "top":
                e = "20% 0 0 0";
                break;
            case "bottom":
                e = "0 0 20% 0"
        }
        o.each(function() {
            var n = $j(this);
            n.on("click", function() {
                if (!o.last().is(n)) return n.addClass("out").animate({
                    opacity: 0,
                    margin: e
                }, 200, function() {
                    n.detach(), n.insertAfter(o.last()).animate({
                        opacity: 1,
                        margin: "0"
                    }, 500, function() {
                        n.removeClass("out")
                    }), o = t.find(".card")
                }), !1
            })
        })
    })
}

function qodeInitEllipticalSlider() {
    var e = $j(".qode-elliptical-slider");
    e.length && e.each(function() {
        var e = $j(this),
            t = $j(".qode-elliptical-slider > .qode-elliptical-slider-slides"),
            o = 600,
            n = !1;
        void 0 !== t.data("animation-speed") && !1 !== t.data("animation-speed") && (o = t.data("animation-speed")), "yes" == t.data("autoplay") && (n = !0), e.flexslider({
            selector: ".qode-elliptical-slider-slides > .qode-elliptical-slide",
            animationLoop: !0,
            controlNav: !0,
            directionNav: !1,
            useCSS: !1,
            pauseOnAction: !0,
            pauseOnHover: !0,
            slideshow: n,
            animationSpeed: o,
            slideshowSpeed: 5e3,
            touch: !0
        })
    })
}

function qodeInitPricingCalculator() {
    var e = $j(".qode-pricing-calculator");
    e.length && e.each(function() {
        var e = $j(this),
            t = $j(this).find(".qode-pricing-calculator-item"),
            o = 0;
        t.each(function() {
            var t = $j(this),
                n = t.data("price"),
                i = t.find("input");
            i.prop("checked") && (o += n), t.on("change", function(t) {
                i.prop("checked") ? o += n : o -= n, e.find(".qode-pricing-calculator-total-price").text(o)
            })
        })
    })
}

function qodeSlidingImageHolder() {
    var e = $j(".qode-sliding-image-holder");
    e.length && e.each(function() {
        var e = $j(this);
        if (!$j("html").hasClass("touch")) {
            qodeRequestAnimationFrame();
            var t = e.find(".qode-sliding-image-background-image"),
                o = Math.round(t.width());
            0 == o && (o = 1920), e.find(".qode-aux-background-image").css("left", o), t.each(function(e) {
                var t = $j(this),
                    n = 0,
                    i = function() {
                        n -= 1, Math.round(t.offset().left) <= -o && (t.css("left", parseInt(o - 2)), n = 0), t.css("transform", "translate3d(" + n + "px,0,0)"), requestNextAnimationFrame(i)
                    };
                $j(window).on("load", function() {
                    i(), $j("html").addClass("qode-sliding-image-holder-initialized")
                }), $j("html").hasClass("qode-sliding-image-holder-initialized") || i()
            })
        }
    })
}

function qodeRequestAnimationFrame() {
    window.requestNextAnimationFrame = function() {
        var e = void 0,
            t = void 0,
            o = navigator.userAgent,
            n = 0,
            i = this;
        return window.webkitRequestAnimationFrame && (t = function(e) {
            void 0 === e && (e = +new Date), i.callback(e)
        }, e = window.webkitRequestAnimationFrame, window.webkitRequestAnimationFrame = function(o, n) {
            i.callback = o, e(t, n)
        }), window.mozRequestAnimationFrame && (n = o.indexOf("rv:"), -1 != o.indexOf("Gecko") && "2.0" === o.substr(n + 3, 3) && (window.mozRequestAnimationFrame = void 0)), window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) {
            var o, n;
            window.setTimeout(function() {
                o = +new Date, e(o), n = +new Date, i.timeout = 1e3 / 60 - (n - o)
            }, i.timeout)
        }
    }()
}

function qodePageTransitionEffect() {
    var e = $j("body.qode-page-loading-effect-enabled > .qode-page-loading-effect-holder");
    e.length && (e.fadeOut(500), $j(window).bind("pageshow", function(t) {
        t.originalEvent.persisted && e.fadeOut(500)
    }), $j("a").on("click", function(t) {
        var o = $j(this);
        !(1 == t.which && o.attr("href").indexOf(window.location.host) >= 0 && void 0 === o.data("rel") && void 0 === o.attr("rel")) || o.hasClass("qode-like") || o.parents(".blog_load_more_button") || o.parents(".qode-single-product-images") || void 0 !== o.attr("target") && "_self" !== o.attr("target") || o.attr("href").split("#")[0] === window.location.href.split("#")[0] || (t.preventDefault(), e.addClass("qode-hide-spinner"), e.fadeIn(500, function() {
            window.location = o.attr("href")
        }))
    }))
}

function qodeInitAccordions() {
    "use strict";
    var e = $j(".qode-accordion-holder");
    e.length && e.each(function() {
        var e = $j(this);
        if (e.hasClass("qode-accordion") && e.accordion({
                animate: "easeInOutQuint",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content"
            }), e.hasClass("qode-toggle")) {
            var t = $j(this),
                o = t.find(".qode-title-holder"),
                n = o.next();
            t.addClass("accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"), o.addClass("ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"), n.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), o.each(function() {
                var e = $j(this);
                e.hover(function() {
                    e.toggleClass("ui-state-hover")
                }), e.on("click", function(t) {
                    t.preventDefault(), t.stopImmediatePropagation(), e.toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"), e.next().toggleClass("ui-accordion-content-active").slideToggle(300)
                })
            })
        }
    })
}

function qodeInitInteractiveIconShowcase() {
    var e = $j(".qode-int-icon-showcase"),
        t = $j(".no_animation_on_touch");
    e.length && e.each(function() {
        function e() {
            o = 0;
            setInterval(function() {
                l || (i.removeClass("qode-showcase-active qode-current"), o == h - 1 ? o = 0 : o++, i.eq(o).addClass("qode-showcase-active"))
            }, c)
        }
        var o, n = $j(this),
            i = n.find(".qode-showcase-item-holder"),
            a = n.find(".qode-showcase-icon"),
            r = (n.find(".qode-showcase-content"), n.find(".qode-showcase-item-holder:first-child")),
            s = n.find(".qode-showcase-item-holder.qode-showcase-active"),
            d = !1,
            l = !1,
            c = 3e3,
            h = i.length;
        void 0 !== n.data("interval") && !1 !== n.data("interval") && (c = n.data("interval")), t.length ? (r.addClass("qode-showcase-active"), d = !0) : n.appear(function() {
            setTimeout(function() {
                n.addClass("qode-appeared"), s.length || (d = !0, r.addClass("qode-showcase-active"), n.hasClass("qode-autoplay") && (e(), n.hover(function(e) {
                    l = !0
                }, function(e) {
                    l = !1
                })))
            }, 30)
        }, {
            accX: 0,
            accY: -200
        }), a.each(function() {
            var e = $j(this),
                t = e.parent();
            e.mouseenter(function() {
                1 == d && (t.siblings().removeClass("qode-showcase-active qode-current"), t.addClass("qode-showcase-active qode-current"), o = n.find(".qode-current").index())
            })
        })
    })
}

function qodeInitSendContactForm() {
    "use strict";
    var e = $j(".qode-contact-form-contact-template");
    e.length && e.each(function() {
        var e = $j(this);
        e.on("submit", function(t) {
            t.preventDefault();
            var o = !0;
            if (e.find(".contact-error").remove(), e.parent().find(".contact-success").remove(), e.find(".requiredField").each(function() {
                    var t = $j(this);
                    if ("" == jQuery.trim(t.val()) || jQuery.trim(t.val()) == jQuery.trim(t.attr("placeholder"))) t.parent().append('<strong class="contact-error">' + e.data("required-message") + "</strong>"), t.addClass("inputError"), o = !1;
                    else if (t.hasClass("email")) {
                        var n = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
                        n.test(jQuery.trim(t.val())) || (t.parent().append('<strong class="contact-error">' + e.data("wrong-email-message") + "</strong>"), t.addClass("inputError"), o = !1)
                    }
                }), o) {
                var n = e.serialize(),
                    i = {
                        action: "bridge_core_send_contact_page_form",
                        form_data: n,
                        contact_page_nonce: e.find("#bridge_qode_contact_page_nonce").val()
                    };
                $j.ajax({
                    type: "POST",
                    data: i,
                    url: QodeAdminAjax.ajaxurl,
                    success: function(t) {
                        var o = JSON.parse(t);
                        "success" == o.status ? (e.before('<div class="contact-success"><p>' + o.message + "</p></div>"), e.hide()) : e.before('<div class="contact-success"><p>' + o.message + "</p></div>")
                    }
                })
            }
        })
    })
}

function qodeRecaptchaCallback() {
    "use strict";
    var e = $j("#qode-captcha-element-holder");
    e.length && grecaptcha.render("qode-captcha-element-holder", {
        sitekey: e.data("sitekey")
    })
}

function qodeWorkflow() {
    var e = $j(".qode-workflow");
    e.length && e.each(function() {
        var e = $j(this);
        if (e.hasClass("qode-workflow-animate")) {
            var t = e.find(".qode-workflow-item");
            e.appear(function() {
                e.addClass("qode-appeared"), setTimeout(function() {
                    t.each(function(e) {
                        var t = $j(this);
                        setTimeout(function() {
                            t.addClass("qode-appeared")
                        }, 350 * e)
                    })
                }, 350)
            }, {
                accX: 0,
                accY: -$window_height / 3
            })
        }
    })
}

function getLoadMoreData(e) {
    var t = e.data(),
        o = {};
    for (var n in t) t.hasOwnProperty(n) && void 0 !== t[n] && !1 !== t[n] && (o[n] = t[n]);
    return o
}

function setLoadMoreAjaxData(e, t) {
    var o = {
        action: t
    };
    for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && !1 !== e[n] && (o[n] = e[n]);
    return o
}

function qodeOwlSlider() {
    var e = $j(".qode-owl-slider");
    e.length && e.each(function() {
        var e = $j(this),
            t = e.children().length,
            o = 1,
            n = !0,
            i = !0,
            a = !0,
            r = 5e3,
            s = 600,
            d = 0,
            l = 0,
            c = 0,
            h = !1,
            u = !1,
            f = !1,
            _ = !1,
            p = !1,
            m = !0,
            g = !1,
            v = !!e.hasClass("qode-pl-is-slider"),
            j = v ? e.parent() : e;
        void 0 === e.data("number-of-items") || !1 === e.data("number-of-items") || v || (o = e.data("number-of-items")), void 0 !== j.data("number-of-columns") && !1 !== j.data("number-of-columns") && v && (o = j.data("number-of-columns")), "no" === j.data("enable-loop") && (n = !1), "no" === j.data("enable-autoplay") && (i = !1), "no" === j.data("enable-autoplay-hover-pause") && (a = !1), void 0 !== j.data("slider-speed") && !1 !== j.data("slider-speed") && (r = j.data("slider-speed")), void 0 !== j.data("slider-speed-animation") && !1 !== j.data("slider-speed-animation") && (s = j.data("slider-speed-animation")), void 0 !== j.data("slider-margin") && !1 !== j.data("slider-margin") && (d = j.data("slider-margin")), e.parent().hasClass("qode-huge-space") ? d = 60 : e.parent().hasClass("qode-large-space") ? d = 50 : e.parent().hasClass("qode-medium-space") ? d = 40 : e.parent().hasClass("qode-normal-space") ? d = 30 : e.parent().hasClass("qode-small-space") ? d = 20 : e.parent().hasClass("qode-tiny-space") && (d = 10), "yes" === j.data("slider-padding") && (h = !0, c = parseInt(.28 * e.outerWidth()), d = 50), "yes" === j.data("enable-center") && (u = !0), "yes" === j.data("enable-auto-width") && (f = !0), void 0 !== j.data("slider-animate-in") && !1 !== j.data("slider-animate-in") && (_ = j.data("slider-animate-in")), void 0 !== j.data("slider-animate-out") && !1 !== j.data("slider-animate-out") && (p = j.data("slider-animate-out")), "no" === j.data("enable-navigation") && (m = !1), "yes" === j.data("enable-pagination") && (g = !0), m && g && e.addClass("qode-slider-has-both-nav"), t <= 1 && (n = !1, i = !1, m = !1, g = !1);
        var $ = 2,
            w = 3,
            b = o;
        o < 3 && ($ = o, w = o), o > 4 && (b = 4), (h || d > 0) && (l = 20), e.owlCarousel({
            items: o,
            loop: n,
            autoplay: i,
            autoplayHoverPause: a,
            autoplayTimeout: r,
            smartSpeed: s,
            margin: d,
            stagePadding: c,
            center: u,
            autoWidth: f,
            animateInClass: _,
            animateOut: p,
            dots: g,
            nav: m,
            navText: ['<span class="qode-prev-icon fa fa-angle-left"></span>', '<span class="qode-next-icon fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1,
                    margin: l,
                    stagePadding: 0,
                    center: !1,
                    autoWidth: !1
                },
                681: {
                    items: $
                },
                769: {
                    items: w
                },
                1025: {
                    items: b
                },
                1281: {
                    items: o
                }
            },
            onInitialize: function() {
                e.css("visibility", "visible")
            },
            onChanged: function() {
                e.parent().length && e.parent().hasClass("qode-image-behavior-lightbox") && prettyPhoto()
            }
        })
    })
}

function qodeScrollingImage() {
    var e = $j(".qode-scrolling-image-holder");
    e.length && e.each(function() {
        var e, t, o, n, i = $j(this),
            a = i.find(".qode-si-content-holder"),
            r = i.find(".qode-si-frame"),
            s = i.find(".qode-si-image"),
            d = !1,
            l = function() {
                e = r.height(), t = s.height(), o = Math.round(t - e), n = 2 * Math.round(t / e), t > e && (d = !0)
            },
            c = function() {
                a.mouseenter(function() {
                    s.css("transition-duration", n + "s"), s.css("transform", "translate3d(0px, -" + o + "px, 0px)")
                }), a.mouseleave(function() {
                    d && (s.css("transition-duration", Math.min(n / 3, 3) + "s"), s.css("transform", "translate3d(0px, 0px, 0px)"))
                })
            };
        i.waitForImages(function() {
            i.css("visibility", "visible"), l(), c()
        }), $j(window).resize(function() {
            l()
        })
    })
}

function animationEventEnd() {
    var e = document.createElement("animationDetector"),
        t = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
    for (var o in t)
        if (void 0 !== e.style[o]) return t[o]
}

function transitionEventEnd() {
    var e = document.createElement("transitionDetector"),
        t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            transition: "transitionend"
        };
    for (var o in t)
        if (void 0 !== e.style[o]) return t[o]
}

function qodeCustomFontTypeOut() {
    var e = $j(".qode-cf-typed");
    e.length && e.each(function() {
        var e = $j(this),
            t = e.parent(".qode-cf-typed-wrap"),
            o = t.parent(".custom_font_holder"),
            n = [],
            i = e.find(".qode-cf-typed");
        i.length && i.each(function() {
            n.push($j(this).text())
        }), o.appear(function() {
            e.typed({
                strings: n,
                typeSpeed: 90,
                backDelay: 700,
                loop: !0,
                contentType: "text",
                loopCount: !1,
                cursorChar: "_"
            })
        }, {
            accX: 0,
            accY: 200
        })
    })
}

function qodeContactPageAcceptance() {
    var e = $j(".qode-contact-form-contact-template"),
        t = e.find(".contact_form_acceptance .contact_form_acceptance_value"),
        o = e.find(".contact_form_button");
    t.length && t.each(function() {
        var e = $j(this);
        o.attr("disabled", "disabled"), e.change(function() {
            e.is(":checked") ? o.removeAttr("disabled") : o.attr("disabled", "disabled")
        })
    })
}

function qodePanelArea() {
    var e = $j(".qode-panel-area"),
        t = $j("a.qode_panel_area_opener"),
        o = $j(".qode-close-panel"),
        n = $j(".wrapper");
    e.outerHeight() >= $window_height && e.height($window_height), e.niceScroll({
        scrollspeed: 30,
        mousescrollstep: 20,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    });
    var i = function() {
            qode_body.hasClass("qode-panel-area-opened") && qode_body.removeClass("qode-panel-area-opened")
        },
        a = function() {
            qode_body.hasClass("qode-panel-area-opened") || qode_body.addClass("qode-panel-area-opened")
        };
    t.on("click", function(e) {
        e.preventDefault(), e.stopPropagation(), qode_body.hasClass("qode-panel-area-opened") ? i() : a()
    }), o.on("click", function(e) {
        e.preventDefault(), i()
    }), n.on("click", function(e) {
        qode_body.hasClass("qode-panel-area-opened") && i()
    })
}
var $j = jQuery.noConflict();
window.qode = {}, qode.modules = {};
var common = {};
qode.modules.common = common;
var $scroll = 0,
    qode_body = $j("body"),
    qode_document = $j("document"),
    qode_window = $j(window),
    $window_width = $j(window).width();
qode.windowWidth = $window_width;
var $window_height = $j(window).height();
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
common.getLoadMoreData = getLoadMoreData, common.setLoadMoreAjaxData = setLoadMoreAjaxData, common.qodeOwlSlider = qodeOwlSlider, qode.animationEnd = animationEventEnd(), qode.transitionEnd = transitionEventEnd(), $j(document).ready(function() {
    "use strict";
    if ($j("header").hasClass("regular") && (content_menu_top = 0), $j("header").hasClass("fixed_top_header") && (content_menu_top = header_height), $j("header").hasClass("fixed") && (content_menu_top = min_header_height_scroll), $j("header").hasClass("fixed_hiding") && (content_menu_top = min_header_height_fixed_hidden + 40), ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) && (content_menu_top = 0), !$j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && $j("header.page_header").hasClass("fixed") && (content_menu_top_add = 34), $j("body").hasClass("vertical_menu_enabled")) {
        content_menu_top = 0, content_menu_top_add = 0
    }
    paspartu_width = $window_width < 1024 ? .02 : paspartu_width_init, contentMinHeight(), contentMinHeightWithPaspartu(), qodeGridWidth(), setDropDownMenuPosition(), initDropDownMenu(), initVerticalMenu(), initVerticalMobileMenu(), initQodeSlider(), initSideMenu(), initPopupMenu(), initMessageHeight(), initToCounter(), initCounter(), $j(".vertical_split_slider").length || initCountdown(), initProgressBars(), initListAnimation(), initPieChart(), initPieChartWithIcon(), initServiceAnimation(), initParallaxTitle(), initSideAreaScroll(), initVerticalAreaMenuScroll(), loadMore(), prettyPhoto(), initMobileMenu(), initFlexSlider(), fitVideo(), fitAudio(), initAccordion(), initAccordionContentLink(), qodeInitAccordions(), initMessages(), initProgressBarsIcon(), initMoreFacts(), placeholderReplace(), backButtonShowHide(), backToTop(), initSteps(), showGoogleMap(), initProgressBarsVertical(), initElementsAnimation(), updateShoppingCart(), initHashClick(), initIconWithTextAnimation(), initVideoBackground(), initCheckSafariBrowser(), initSearchButton(), initCoverBoxes(), createContentMenu(), contentMenuScrollTo(), createSelectContentMenu(), initButtonHover(), initEnlargeButton(), initSocialIconHover(), initPageTitleAnimation(), initIconShortcodeHover(), qodeIcon().init(), initIconWithTextHover(), parallaxLayers(), initHorizontalMarquee(), qodeHorizontalMarqueeLoop(), initTextMarquee(), initExpandingImages(), qodeLazyImages(), initItemShowcase(), qodeCTASection().init(), qodeInitInteractiveIconShowcase(), qodeInitSendContactForm(), qodeWorkflow(), qodeCustomFontTypeOut(), qodeMobileHeaderBehavior(), initElementsHolderResponsiveStyle(), $j(".widget #searchform").mousedown(function() {
        $j(this).addClass("form_focus")
    }).focusout(function() {
        $j(this).removeClass("form_focus")
    }), $scroll = $j(window).scrollTop(), checkTitleToShowOrHide(), checkVerticalMenuTransparency(), $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), $j("header:not(.stick_with_left_right_menu) .q_logo a").css("visibility", "visible"), initFullScreenTemplate(), showHideVerticalMenu(), initMasonryGallery(), initLoadNextPostOnBottom(), initBlogMasonryGallery(), initBlogGallery(), qodeV2Button().init(), qodeCardsSlider().init(), qodeCardsGallery(), qodeInitEllipticalSlider(), qodeInitPricingCalculator(), qodeSlidingImageHolder(), qodeOwlSlider(), qodeScrollingImage()
}), $j(window).on("load", function() {
    "use strict";
    qodeBrowserDetection(), $j(".touchevents .main_menu li:has(div.second)").doubleTapToGo(), setLeftPostionedMenuPadding(), initSmallImageBlogHeight(), setDropDownMenuPosition(), initDropDownMenu(), initPortfolio(), initPortfolioZIndex(), initPortfolioSingleInfo(), initTestimonials(), initTestimonialsCarousel(), initVideoBackgroundSize(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), initPortfolioJustifiedGallery(), initPortfolioMasonry(), initPortfolioMasonryFilter(), initTabs(), qodeInitAdvancedTabs(), qodeInitAdvancedTabsIcons(), countClientsPerRow(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initTitleAreaAnimation(), setContentBottomMargin(), footerWidth(), $j("nav.content_menu").length > 0 && (content_menu_position = $j("nav.content_menu").offset().top, contentMenuPosition()), contentMenuCheckLastSection(), initQodeCarousel(), initPortfolioSlider(), initBlogSlider(), qodeInitBlogCarouselTitled(), initPreviewSlider(), initInDeviceSlider(), initTabsActiveBorder(), setActiveTabBorder(), initImageHover(), $j("header.stick_with_left_right_menu .q_logo a").css("visibility", "visible"), setMargingsForLeftAndRightMenu(), initImageGallerySliderNoSpace(), initVerticalSplitSlider(), initParallax(), initQodeElementAnimationSkrollr(), qodeBlogCompundMasonryGallery().init(), qodeInitStickyWidget(), qodeBlogHeadlines(), qodeCardsSlider().load(), initContentSlider(), qodePageTransitionEffect(), qodeContactPageAcceptance(), setTimeout(function() {
        checkAnchorOnScroll(), qodeBlogGalleryAnimation(), checkAnchorOnLoad(), checkHeaderStyleOnScroll(), $j(".no-touchevents .carousel").length && skrollr_slider.refresh()
    }, 700), qodePanelArea(), initDropDownAfterWPMLReplaceMenu()
}), $j(window).scroll(function() {
    "use strict";
    $scroll = $j(window).scrollTop(), $j(window).width() > 1e3 && headerSize($scroll), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), checkVerticalMenuTransparency(), qodeLazyImages(), $j(".touchevents .drop_down > ul > li").mouseleave(), $j(".touchevents .drop_down > ul > li").blur()
}), $j(window).resize(function() {
    "use strict";
    $window_width = $j(window).width(), $window_height = $j(window).height(), paspartu_width = $window_width < 1024 ? .02 : paspartu_width_init, $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), initMessageHeight(), qodeNumberOfTestimonialsItemsResize(), fitAudio(), initSmallImageBlogHeight(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initVideoBackgroundSize(), countClientsPerRow(), setContentBottomMargin(), footerWidth(), calculateHeights(), $j(".vertical_split_slider").height($window_height), initMasonryGallery(), initPortfolioMasonry(), contentMinHeight(), contentMinHeightWithPaspartu(), qodeInitStickyWidget()
});
var sticky_animate, default_header_style, current_scroll;
! function(e) {
    "use strict";
    e.fn.countTo = function(t) {
        t = e.extend({}, e.fn.countTo.defaults, t || {});
        var o = Math.ceil(t.speed / t.refreshInterval),
            n = (t.to - t.from) / o;
        return e(this).each(function() {
            function i() {
                s += n, r++, e(a).html(s.toFixed(t.decimals)), "function" == typeof t.onUpdate && t.onUpdate.call(a, s), r >= o && (clearInterval(d), s = t.to, "function" == typeof t.onComplete && t.onComplete.call(a, s))
            }
            var a = this,
                r = 0,
                s = t.from,
                d = setInterval(i, t.refreshInterval)
        })
    }, e.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
}(jQuery),
function(e) {
    var t = e(window),
        o = t.height();
    t.resize(function() {
        o = t.height()
    }), e.fn.parallax = function(n, i, a) {
        function r() {
            var a = t.scrollTop();
            l.each(function() {
                var t = e(this),
                    r = t.offset().top;
                r + s(t) < a || r > a + o || l.css("backgroundPosition", n + " " + Math.round((d - a) * i) + "px")
            })
        }
        var s, d, l = e(this);
        l.each(function() {
            d = l.offset().top
        }), s = a ? function(e) {
            return e.outerHeight(!0)
        } : function(e) {
            return e.height()
        }, (arguments.length < 1 || null === n) && (n = "50%"), (arguments.length < 2 || null === i) && (i = .1), (arguments.length < 3 || null === a) && (a = !0), t.bind("scroll", r).resize(r), r()
    }
}(jQuery);
var $scrollHeight, timeOuts = [];
! function(e) {
    "use strict";
    var t = e(window);
    e.fn.masonryParallax = function(o, n, i) {
        function a() {
            c + h < $scroll || c > $scroll + $window_height || d.css("transform", "translate3d(0px, " + Math.round((s - h - $scroll) * o + l) + "px, 0px)")
        }
        var r, s, d = e(this),
            l = 0;
        s = d.offset().top, r = n ? function(e) {
            return e.outerHeight(!0)
        } : function(e) {
            return e.height()
        }, 0 != i && (l = i), (arguments.length < 1 || null === o) && (o = .1), (arguments.length < 2 || null === n) && (n = !0);
        var c = d.offset().top,
            h = r(d);
        t.bind("scroll", a).resize(a), a()
    }
}(jQuery);
var qodeV2Button = function() {
        var e = $j(".qode-btn"),
            t = function(e) {
                if (void 0 !== e.data("hover-color")) {
                    var t = function(e) {
                            e.data.button.css("color", e.data.color)
                        },
                        o = e.css("color"),
                        n = e.data("hover-color");
                    e.hasClass("qode-btn-3d-hover") || (e.on("mouseenter", {
                        button: e,
                        color: n
                    }, t), e.on("mouseleave", {
                        button: e,
                        color: o
                    }, t))
                }
            },
            o = function(e) {
                if (void 0 !== e.data("hover-bg-color")) {
                    var t = function(e) {
                            e.data.button.css("background-color", e.data.color)
                        },
                        o = e.css("background-color"),
                        n = e.data("hover-bg-color");
                    e.hasClass("qode-btn-3d-hover") || (e.on("mouseenter", {
                        button: e,
                        color: n
                    }, t), e.on("mouseleave", {
                        button: e,
                        color: o
                    }, t))
                }
            },
            n = function(e) {
                var t = e.find(".qode-button-v2-icon-holder");
                if (void 0 !== t.data("hover-icon-border-color")) {
                    var o = function(e) {
                            e.data.iconHolder.css("border-color", e.data.color)
                        },
                        n = t.css("borderLeftColor"),
                        i = t.data("hover-icon-border-color");
                    e.hasClass("qode-btn-3d-hover") || (e.on("mouseenter", {
                        iconHolder: t,
                        color: i
                    }, o), e.on("mouseleave", {
                        iconHolder: t,
                        color: n
                    }, o))
                }
            },
            i = function(e) {
                var t = e.find(".qode-button-v2-icon-holder");
                if (void 0 !== t.data("hover-icon-bg-color")) {
                    var o = function(e) {
                            e.data.iconHolder.css("background-color", e.data.color)
                        },
                        n = t.css("backgroundColor"),
                        i = t.data("hover-icon-bg-color");
                    e.hasClass("qode-btn-3d-hover") || (e.on("mouseenter", {
                        iconHolder: t,
                        color: i
                    }, o), e.on("mouseleave", {
                        iconHolder: t,
                        color: n
                    }, o))
                }
            },
            a = function(e) {
                if (e.hasClass("qode-btn-3d-hover")) {
                    var t = e.closest(".qode-3d-button-holder"),
                        o = t.find(".qode-btn-3d-hover"),
                        n = o.first(),
                        i = o.last(),
                        a = i.find(".qode-button-v2-icon-holder"),
                        r = t.outerHeight(),
                        s = Math.round(r / 2);
                    if (n.css("transform", "rotateX(0deg) translateZ(" + s + "px)"), i.css("transform", "rotateX(90deg) translateZ(" + s + "px)"), setTimeout(function() {
                            t.css("opacity", "1")
                        }, 200), t.on("mouseenter", function() {
                            n.css("transform", "rotateX(-90deg) translateZ(" + s + "px)"), i.css("transform", "rotateX(0deg) translateZ(" + s + "px)")
                        }), t.on("mouseleave", function() {
                            n.css("transform", "rotateX(0deg) translateZ(" + s + "px)"), i.css("transform", "rotateX(90deg) translateZ(" + s + "px)")
                        }), void 0 !== i.data("hover-color")) {
                        var d = i.data("hover-color");
                        i.css("color", d)
                    }
                    if (void 0 !== i.data("hover-bg-color")) {
                        var l = i.data("hover-bg-color");
                        i.css("background-color", l)
                    }
                    if (void 0 !== i.data("hover-border-color")) {
                        var c = i.data("hover-border-color");
                        i.css("border-color", c)
                    }
                    if (void 0 !== a.data("hover-icon-border-color")) {
                        var h = a.data("hover-icon-border-color");
                        a.css("border-color", h)
                    }
                    if (void 0 !== a.data("hover-icon-bg-color")) {
                        var u = a.data("hover-icon-bg-color");
                        a.css("background-color", u)
                    }
                }
            };
        return {
            init: function() {
                e.length && e.each(function() {
                    t($j(this)), o($j(this)), n($j(this)), i($j(this)), a($j(this))
                })
            }
        }
    },
    qodeCTASection = function() {
        "use strict";
        var e = $j(".qode-cta-section"),
            t = function() {
                e.each(function() {
                    var e = $j(this),
                        t = e.find("img"),
                        o = e.find(".qode-cta-section-text-wrapper");
                    if (!$j("html").hasClass("touch") && e.hasClass("qode-cta-appear-effect")) {
                        var n = function(e) {
                            e.appear(function() {
                                setTimeout(function() {
                                    e.addClass("qode-appeared")
                                }, 30)
                            }, {
                                accX: 0,
                                accY: -$window_height / 3
                            })
                        };
                        n(t), n(o)
                    }
                })
            };
        return {
            init: function() {
                e.length && t()
            }
        }
    },
    getIEversion = function() {
        var e = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var t = navigator.userAgent,
                o = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            null != o.exec(t) && (e = parseFloat(RegExp.$1))
        } else if ("Netscape" == navigator.appName) {
            var t = navigator.userAgent,
                o = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
            null != o.exec(t) && (e = parseFloat(RegExp.$1))
        }
        return e
    },
    docElem = window.document.documentElement;
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}(), window.cancelAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) {
        window.clearTimeout(e)
    }
}(), SVGEl.prototype.init = function() {
    var e = this;
    [].slice.call(this.el.querySelectorAll("path")).forEach(function(t, o) {
        e.path[o] = t;
        var n = e.path[o].getTotalLength();
        e.length[o] = n, e.path[o].style.strokeDasharray = n + " " + n, e.path[o].style.strokeDashoffset = n
    })
}, SVGEl.prototype.render = function() {
    this.rendered || (this.rendered = !0, this.draw())
}, SVGEl.prototype.draw = function() {
    var e = this,
        t = this.current_frame / this.total_frames;
    if (t > 1) window.cancelAnimFrame(this.handle);
    else {
        this.current_frame++;
        for (var o = 0, n = this.path.length; o < n; o++) this.path[o].style.strokeDashoffset = Math.floor(this.length[o] * (1 - t));
        this.handle = window.requestAnimFrame(function() {
            e.draw()
        })
    }
};
var qodeIcon = function() {
    var e = $j(".qode-icon-holder"),
        t = function(e) {
            if (void 0 !== e.data("hover-color")) {
                var t = function(e) {
                        e.data.icon.css("color", e.data.color)
                    },
                    o = e.find(".qode-icon-element"),
                    n = e.data("hover-color"),
                    i = o.css("color");
                "" !== n && (e.parents(".qode-start-icon-hover").length ? (e.parents(".qode-start-icon-hover").on("mouseenter", {
                    icon: o,
                    color: n
                }, t), e.parents(".qode-start-icon-hover").on("mouseleave", {
                    icon: o,
                    color: i
                }, t)) : (e.on("mouseenter", {
                    icon: o,
                    color: n
                }, t), e.on("mouseleave", {
                    icon: o,
                    color: i
                }, t)))
            }
        },
        o = function(e) {
            if (void 0 !== e.data("hover-background-color")) {
                var t = function(e) {
                        e.data.icon.css("background-color", e.data.color)
                    },
                    o = e.data("hover-background-color"),
                    n = e.css("background-color");
                "" !== o && (e.parents(".qode-start-icon-hover").length ? (e.parents(".qode-start-icon-hover").on("mouseenter", {
                    icon: e,
                    color: o
                }, t), e.parents(".qode-start-icon-hover").on("mouseleave", {
                    icon: e,
                    color: n
                }, t)) : (e.on("mouseenter", {
                    icon: e,
                    color: o
                }, t), e.on("mouseleave", {
                    icon: e,
                    color: n
                }, t)))
            }
        };
    return {
        init: function() {
            e.length && e.each(function() {
                t($j(this)), o($j(this))
            })
        }
    }
};
! function(e) {
    "use strict";
    e.fn.extend({
        mouseParallax: function(t) {
            var o = {
                    moveFactor: 1.5,
                    targetContainer: this
                },
                t = e.extend(o, t);
            return this.each(function() {
                var o = t,
                    n = e(o.targetContainer).find(".image, .paralax_layers_content_holder");
                n.each(function(t) {
                    e(this).css("z-index", t)
                });
                var i, a;
                i = e(o.targetContainer).offset().left, a = e(o.targetContainer).offset().top, e(o.targetContainer).on("mouseenter", function(t) {
                    i = t.pageX - e(this).offset().left, a = t.pageY - e(this).offset().top
                }), e(o.targetContainer).on("mousemove", function(t) {
                    var r = e(this).offset().left + i,
                        s = e(this).offset().top + a,
                        d = t.pageX - r,
                        l = t.pageY - s;
                    n.each(function(t) {
                        e(this).css({
                            marginLeft: -d / 100 * o.moveFactor * (t + 1),
                            marginTop: -l / 100 * o.moveFactor * (t + 1)
                        }, 100)
                    })
                });
                var r = {
                    interval: 0,
                    over: function() {},
                    timeout: 500,
                    out: function() {
                        n.each(function(t) {
                            e(this).stop().animate({
                                marginLeft: 0,
                                marginTop: 0
                            }, 300)
                        })
                    }
                };
                e(o.targetContainer).hoverIntent(r)
            })
        }
    })
}(jQuery);
var qodeCardsSlider = function() {
    var e = function(e, t, o, n, i, a) {
            t.data("card-slide", n).attr("data-card-slide", n), t.find(".qode-card-slider").css("margin-left", a ? -i.position().left + $j(t).outerWidth() / 2 - i.outerWidth() / 2 : -i.position().left), setTimeout(function() {
                qodeLazyImages()
            }, 500);
            var r = o < n ? 1 : -1;
            r > 0 && n == e.length ? t.find('.button[data-direction="next"]').addClass("hidden") : t.find('.button[data-direction="next"]').removeClass("hidden"), r < 0 && 1 == n ? t.find('.button[data-direction="prev"]').addClass("hidden") : t.find('.button[data-direction="prev"]').removeClass("hidden")
        },
        t = function(t, o, n) {
            t.each(function(t, i) {
                var a = $j(i).find(".qode-card-slider > .slide"),
                    r = $j(i).find(".dot"),
                    s = Math.round(a.length / 2) - 1;
                o ? (r.length > 0 ? $j(r[s]).trigger("click") : e(a, $j(i), 1, s, $j(a[s]), n), $j(i).data("card-slide", s + 1).attr("data-card-slide", s + 1), $j(i).find(".button").removeClass("hidden")) : r.length > 0 ? $j(r[0]).trigger("click") : e(a, $j(i), 1, 1, $j(a[0]), n)
            })
        },
        o = function(e, t, o) {
            t.find(".qode-card-slider").width(99999), e.each(function() {
                $j(this).css("max-width", t.outerWidth())
            })
        },
        n = function() {
            $j(".cards").each(function() {
                var e = $j(this),
                    t = e.find(".card");
                t.each(function() {
                    var o = $j(this);
                    o.on("click", function() {
                        return t.last().is(o) || (o.detach(), o.insertAfter(t.last()), t = e.find(".card")), !1
                    })
                })
            })
        },
        i = function() {
            $j(".cards").each(function() {
                var e = $j(this),
                    t = e.find(".card").get().reverse();
                e.appear(function() {
                    $j(t).each(function(e) {
                        var t = $j(this);
                        setTimeout(function() {
                            t.addClass("hovered"), setTimeout(function() {
                                t.removeClass("hovered")
                            }, 600)
                        }, 200 * e)
                    })
                }, {
                    accX: 0,
                    accY: -$window_height / 3
                })
            })
        },
        a = function() {
            $j(".qode-cards-holder .card").each(function(e, t) {
                $j(t).on("click", function() {
                    var e = $j("." + $j(t).data("value"));
                    return e.closest(".qode-card-panes").find(".pane").removeClass("active"), e.addClass("active"), qodeLazyImages(), !1
                })
            }), $j(".qode-cards-holder").each(function(e, t) {
                $j(t).find(".qode-card-panes .pane").last().addClass("active"), $j(t).find(".qode-card-panes .pane .card").length ? $j(t).find(".qode-card-panes .pane .card").each(function(e, o) {
                    $j(o).detach(), $j(t).find(".qode-cards-header").append($j(o))
                }) : $j(t).find(".qode-cards-header").remove()
            })
        },
        r = function() {
            $j(".qode-card-panes").each(function() {
                var e = $j(this),
                    t = -1,
                    o = e.find(".pane").height();
                t = t > o ? t : o, e.height(t)
            })
        },
        s = function(e) {
            e.swipe({
                swipeLeft: function() {
                    e.find('.button[data-direction="next"]').trigger("click")
                },
                swipeRight: function() {
                    e.find('.button[data-direction="prev"]').trigger("click")
                },
                threshold: 20
            })
        },
        d = function() {
            $j(".qode-card-slider-holder").each(function(n, i) {
                var a = $j(i).find(".qode-card-slider > .slide"),
                    d = $j(i).data("active-middle-slide"),
                    l = $j(i).data("center");
                $j(i).find(".button").each(function(t, o) {
                    $j(o).on("click", function() {
                        var t = "prev" == $j(o).data("direction") ? -1 : 1,
                            n = $j(i).data("card-slide"),
                            r = $j(i).data("card-slide") + t,
                            s = $j(i).find('.slide[data-card-slide="' + r + '"]');
                        return s.length && (e(a, $j(i), n, r, s, l), $j(i).find(".dot").removeClass("active").filter('[data-card-slide="' + r + '"]').addClass("active")), !1
                    })
                }), $j(i).find(".dot").each(function(t, o) {
                    $j(o).on("click", function() {
                        $j(i).find(".dot").removeClass("active"), $j(o).addClass("active");
                        var t = $j(i).data("card-slide"),
                            n = $j(o).data("card-slide"),
                            r = $j(i).find('.slide[data-card-slide="' + n + '"]');
                        return r.length && e(a, $j(i), t, n, r, l), !1
                    })
                }), o(a, $j(i)), t($j(i), d, l), s($j(i)), $j(window).resize(function() {
                    o(a, $j(i)), t($j(i), d, l), r()
                })
            })
        };
    return {
        init: function() {
            $j(".qode-card-slider-holder").length && (d(), r(), a(), n())
        },
        load: function() {
            $j(".qode-card-slider-holder").length && (r(), i())
        }
    }
};
! function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/global", function() {
                initParallax(), n(), initFullScreenTemplate(), qodeInitStickyWidget()
            })
        })
    }

    function n() {
        var t = e(".parallax_section_holder");
        t.length && t.each(function() {
            var t = e(this),
                o = t.find(".qode-parallax-helper-holder"),
                n = 1;
            o.length && void 0 !== o.data("speed") && "" !== o.data("speed") && (n = o.data("speed")), t.parallax("50%", .4 * n)
        })
    }
    var i = {};
    qode.modules.elementorGlobal = i, i.qodeInitElementorGlobal = o, i.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_action.default", function() {
                initButtonHover()
            })
        }), $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/global", function() {
                initParallax(), n(), initFullScreenTemplate()
            })
        })
    }

    function n() {
        var t = e(".parallax_section_holder");
        t.length && t.each(function() {
            var t = e(this),
                o = t.find(".qode-parallax-helper-holder"),
                n = 1;
            o.length && void 0 !== o.data("speed") && "" !== o.data("speed") && (n = o.data("speed")), t.parallax("50%", .4 * n)
        })
    }
    var i = {};
    qode.modules.elementorAction = i, i.qodeInitElementorAction = o, i.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_animation_holder.default", function() {
                initElementsAnimation()
            })
        })
    }
    var n = {};
    qode.modules.elementorAnimationHolder = n, n.qodeInitElementorAnimationHolder = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_blog_slider.default", function() {
                initBlogSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorBlogSlider = n, n.qodeInitElementorBlogSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_button.default", function() {
                initButtonHover(), initEnlargeButton()
            })
        })
    }
    var n = {};
    qode.modules.elementorButton = n, n.qodeInitElementorButton = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_carousel.default", function() {
                initQodeCarousel(), calculateHeights()
            })
        })
    }
    var n = {};
    qode.modules.elementorCarousel = n, n.qodeInitElementorCarousel = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_content_slider.default", function() {
                initContentSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorContentSlider = n, n.qodeInitElementorContentSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_countdown.default", function() {
                initCountdown()
            })
        })
    }
    var n = {};
    qode.modules.elementorCountdown = n, n.qodeInitElementorCountdown = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_counter.default", function() {
                initToCounter(), initCounter()
            })
        })
    }
    var n = {};
    qode.modules.elementorCounter = n, n.qodeInitElementorCounter = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_cover_boxes.default", function() {
                initCoverBoxes()
            })
        })
    }
    var n = {};
    qode.modules.elementorCoverBoxes = n, n.qodeInitElementorCoverBoxes = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_custom_font.default", function() {
                qodeCustomFontTypeOut()
            })
        })
    }
    var n = {};
    qode.modules.elementorCustomFont = n, n.qodeInitElementorCustomFont = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_expanding_images.default", function() {
                initExpandingImages()
            })
        })
    }
    var n = {};
    qode.modules.elementorExpandingImages = n, n.qodeInitElementorExpandingImages = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_fullscreen_sections.default", function() {
                initFullScreenTemplate()
            })
        })
    }
    var n = {};
    qode.modules.elementorFullscreenSections = n, n.qodeInitElementorFullscreenSections = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_google_map.default", function() {
                showGoogleMap()
            })
        })
    }
    var n = {};
    qode.modules.elementorGoogleMap = n, n.qodeInitElementorGoogleMap = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_horizontal_marquee.default", function() {
                initHorizontalMarquee(), qodeHorizontalMarqueeLoop()
            })
        })
    }
    var n = {};
    qode.modules.elementorHorizontalMarquee = n, n.qodeInitElementorHorizontalMarquee = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_icon.default", function() {
                initIconShortcodeHover(), initIconWithTextAnimation()
            })
        })
    }
    var n = {};
    qode.modules.elementorIcon = n, n.qodeInitElementorIcon = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_icon_text.default", function() {
                initIconWithTextHover(), initIconShortcodeHover(), initIconWithTextAnimation()
            })
        })
    }
    var n = {};
    qode.modules.elementorIconText = n, n.qodeInitElementorIconText = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_image_gallery.default", function() {
                initFlexSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorImageGallery = n, n.qodeInitElementorImageGallery = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_image_hover.default", function() {
                initImageHover()
            })
        })
    }
    var n = {};
    qode.modules.elementorImageHover = n, n.qodeInitElementorImageHover = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_image_slider_no_space.default", function() {
                initImageGallerySliderNoSpace()
            })
        })
    }
    var n = {};
    qode.modules.elementorImageSliderNoSpace = n, n.qodeInitElementorImageSliderNoSpace = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_in_device_slider.default", function() {
                initInDeviceSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorInDeviceSlider = n, n.qodeInitElementorInDeviceSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        e(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_line_graph.default", function() {
                qode.modules.lineGraph.qodeLineGraph()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var t = e(".q_line_graf_holder");
        t.length && t.each(function() {
            var t = e(this).find(".q_line_graf"),
                o = t.find("canvas"),
                n = void 0 !== t.data("scale-step-width") ? t.data("scale-step-width") : {},
                i = void 0 !== t.data("scale-steps") ? t.data("scale-steps") : {},
                a = (void 0 !== t.data("bezier-curve") && t.data("bezier-curve"), void 0 !== t.data("scale-font-color") ? t.data("scale-font-color") : {}),
                r = void 0 !== t.data("scale-font-size") ? t.data("scale-font-size") : {},
                s = void 0 !== t.data("values") ? t.data("values") : {},
                d = void 0 !== t.data("labels") ? t.data("labels") : {},
                l = void 0 !== t.data("background-colors") ? t.data("background-colors") : {},
                c = [];
            s.forEach(function(e, t) {
                var o = {};
                o.data = s[t].split(","), o.borderWidth = 1, o.pointRadius = 0, o.pointBorderWidth = 0, o.backgroundColor = l[t], o.cubicInterpolationMode = "default", o.fill = !0, c.push(o)
            });
            var h = {
                type: "line",
                data: {
                    labels: d,
                    datasets: c
                },
                options: {
                    responsive: !0,
                    hover: {
                        mode: "nearest",
                        intersect: !0
                    },
                    plugins: {
                        legend: {
                            display: !1
                        },
                        tooltips: {
                            enabled: !1
                        }
                    },
                    scales: {
                        x: {
                            display: !0,
                            scaleLabel: {
                                display: !0
                            },
                            gridLines: {
                                zeroLineColor: "#505050",
                                drawOnChartArea: !1
                            },
                            ticks: {
                                color: a,
                                font: {
                                    size: r
                                }
                            }
                        },
                        y: {
                            display: !0,
                            scaleLabel: {
                                display: !0
                            },
                            gridLines: {
                                zeroLineColor: "#505050"
                            },
                            ticks: {
                                color: a,
                                font: {
                                    size: r
                                },
                                stepSize: n
                            },
                            suggestedMax: i * n
                        }
                    },
                    elements: {
                        line: {
                            tension: .4
                        }
                    }
                }
            };
            new Chart(o[0].getContext("2d"), h)
        })
    }
    var n = {};
    qode.modules.lineGraph = n, n.qodeLineGraph = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_masonry_blog.default", function() {
                initQBlog()
            })
        })
    }
    var n = {};
    qode.modules.elementorMasonryBlog = n, n.qodeInitElementorMasonryBlog = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_masonry_gallery.default", function() {
                initMasonryGallery()
            })
        })
    }
    var n = {};
    qode.modules.elementorMasonryGallery = n, n.qodeInitElementorMasonryGallery = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_message.default", function() {
                initMessages(), initMessageHeight()
            })
        })
    }
    var n = {};
    qode.modules.elementorMessage = n, n.qodeInitElementorMessage = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_old_accordion.default", function() {
                initAccordion()
            })
        })
    }
    var n = {};
    qode.modules.elementorOldAccordion = n, n.qodeInitElementorOldAccordion = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_old_tab.default", function() {
                initTabs()
            })
        })
    }
    var n = {};
    qode.modules.elementorOldTab = n, n.qodeInitElementorOldTab = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_parallax_layers.default", function() {
                parallaxLayers()
            })
        })
    }
    var n = {};
    qode.modules.elementorParallaxLayers = n, n.qodeInitElementorParallaxLayers = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_pie_chart.default", function() {
                initPieChart()
            })
        })
    }
    var n = {};
    qode.modules.elementorPieChart = n, n.qodeInitElementorPieChart = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        e(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_pie_chart_doughnut.default", function() {
                qode.modules.pieChartDoughnut.qodePieChartDoughnut()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var t = e(".q-pie-chart-doughnut");
        t.length && t.each(function() {
            var t = e(this).find(".q_pie_graf"),
                o = t.find("canvas"),
                n = void 0 !== t.data("values") ? t.data("values") : [],
                i = void 0 !== t.data("colors") ? t.data("colors") : [],
                a = {
                    datasets: [{
                        data: n,
                        backgroundColor: i,
                        hoverBackgroundColor: i,
                        borderWidth: 0
                    }]
                };
            o.appear(function() {
                new Chart(o[0].getContext("2d"), {
                    type: "doughnut",
                    data: a,
                    options: {
                        responsive: !0,
                        aspectRatio: 1,
                        plugins: {
                            legend: {
                                display: !1
                            },
                            tooltips: {
                                enabled: !1
                            }
                        },
                        animation: {
                            easing: "easeOutBounce",
                            duration: 1500
                        }
                    },
                    segmentStrokeColor: "transparent"
                })
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
    var n = {};
    qode.modules.pieChartDoughnut = n, n.qodePieChartDoughnut = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        e(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_pie_chart_full.default", function() {
                qode.modules.pieChartFull.qodePieChartFull()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var t = e(".q-pie-chart-full");
        t.length && t.each(function() {
            var t = e(this).find(".q_pie_graf"),
                o = t.find("canvas"),
                n = void 0 !== t.data("values") ? t.data("values") : [],
                i = void 0 !== t.data("colors") ? t.data("colors") : [],
                a = void 0 !== t.data("element-appearance") ? t.data("element-appearance") : 200,
                r = {
                    datasets: [{
                        data: n,
                        backgroundColor: i,
                        hoverBackgroundColor: i,
                        borderWidth: 0
                    }]
                };
            o.appear(function() {
                new Chart(o[0].getContext("2d"), {
                    type: "pie",
                    data: r,
                    options: {
                        responsive: !0,
                        aspectRatio: 1,
                        plugins: {
                            legend: {
                                display: !1
                            },
                            tooltips: {
                                enabled: !1
                            }
                        },
                        animation: {
                            easing: "easeOutBounce",
                            duration: 1500
                        }
                    }
                })
            }, {
                accX: 0,
                accY: -a
            })
        })
    }
    var n = {};
    qode.modules.pieChartFull = n, n.qodePieChartFull = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_pie_chart_with_icon.default", function() {
                initPieChartWithIcon()
            })
        })
    }
    var n = {};
    qode.modules.elementorPieChartWithIcon = n, n.qodeInitElementorPieChartWithIcon = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_list.default", function() {
                initPortfolio(), initPortfolioZIndex(), initPortfolioJustifiedGallery(), initPortfolioMasonryFilter(), initPortfolioMasonry()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioList = n, n.qodeInitElementorPortfolioList = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_slider.default", function() {
                initPortfolioSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioSlider = n, n.qodeInitElementorPortfolioSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_preview_slider.default", function() {
                initPreviewSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorPreviewSlider = n, n.qodeInitElementorPreviewSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_product_list_elegant.default", function() {
                initEnlargeButton()
            })
        })
    }
    var n = {};
    qode.modules.elementorProductListElegant = n, n.qodeInitElementorProductListElegant = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_product_list_masonry.default", function() {
                qodeInitProductListMasonryPinterestShortcode()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_product_list_pinterest.default", function() {
                qodeInitProductListMasonryPinterestShortcode()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_progress_bar.default", function() {
                initProgressBars()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_progress_bar_icon.default", function() {
                initProgressBarsIcon()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_progress_bar_vertical.default", function() {
                initProgressBarsVertical()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_social_icons.default", function() {
                initSocialIconHover()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_testimonials.default", function() {
                initTestimonials()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_testimonials_carousel.default", function() {
                initTestimonialsCarousel()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_text_marquee.default", function() {
                initTextMarquee()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_unordered_list.default", function() {
                initListAnimation()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_vertical_split_slider.default", function() {
                initVerticalSplitSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorVerticalSplitSlider = n, n.qodeInitElementorVerticalSplitSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_accordion.default", function() {
                qodeInitAccordions()
            })
        })
    }
    var n = {};
    qode.modules.elementorAccordion = n, n.qodeInitElementorAccordion = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var t = e(".qode-advanced-image-gallery.qode-aig-masonry-type");
        t.length && t.each(function() {
            var t = e(this),
                o = t.find(".qode-aig-masonry");
            n(t.find(".qode-aig-grid-sizer").width(), t), o.waitForImages(function() {
                o.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qode-aig-image",
                    percentPosition: !0,
                    packery: {
                        gutter: ".qode-aig-grid-gutter",
                        columnWidth: ".qode-aig-grid-sizer"
                    }
                }), setTimeout(function() {
                    o.isotope("layout"), initParallax()
                }, 800), o.css("opacity", "1")
            })
        })
    }

    function n(e, t) {
        if (t.hasClass("qode-aig-images-fixed")) {
            var o = parseInt(t.find(".qode-aig-image").css("padding-left")),
                n = t.find(".qode-aig-default-masonry-item"),
                i = t.find(".qode-aig-large-width-masonry-item"),
                a = t.find(".qode-aig-large-height-masonry-item"),
                r = t.find(".qode-aig-large-masonry-item");
            qode.windowWidth > 680 ? (n.css("height", e - 2 * o), a.css("height", Math.round(2 * e) - 2 * o), r.css("height", Math.round(2 * e) - 2 * o), i.css("height", e - 2 * o)) : (n.css("height", e - 2 * o), a.css("height", 2 * e - 2 * o), r.css("height", e - 2 * o), i.css("height", Math.floor(e / 2) - 2 * o))
        }
    }
    var i = {};
    qode.modules.imageGallery = i, i.qodeInitAdvancedImageGalleryMasonry = o, i.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_advanced_image_gallery.default", function() {
                qodeOwlSlider(), qode.modules.imageGallery.qodeInitAdvancedImageGalleryMasonry()
            })
        })
    }
    var n = {};
    qode.modules.elementorImageGallery = n, n.qodeInitElementorAdvancedImageGalleryMasonry = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_tabs.default", function() {
                qodeInitAdvancedTabs(), qodeInitAdvancedTabsIcons()
            })
        })
    }
    var n = {};
    qode.modules.elementorAdvancedTabs = n, n.qodeInitElementorAdvancedTabs = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_blog_carousel_titled.default", function() {
                qodeInitBlogCarouselTitled()
            })
        })
    }
    var n = {};
    qode.modules.elementorBlogCarouselTitled = n, n.qodeInitElementorBlogCarouselTitled = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_button_v2.default", function() {
                qodeV2Button().init()
            })
        })
    }
    var n = {};
    qode.modules.elementorButtonV2 = n, n.qodeInitElementorButtonV2 = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_call_to_action_section.default", function() {
                qodeCTASection().init()
            })
        })
    }
    var n = {};
    qode.modules.elementorCallToActionSection = n, n.qodeInitElementorCallToActionSection = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            qodeCardsGallery(), elementorFrontend.hooks.addAction("frontend/element_ready/bridge_cards_gallery.default", function() {
                qodeCardsGallery()
            })
        })
    }
    var n = {};
    qode.modules.elementorCardsGallery = n, n.qodeInitElementorCardsGallery = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_cards_slider.default", function() {
                qodeCardsSlider().init()
            })
        })
    }
    var n = {};
    qode.modules.elementorCardsSlider = n, n.qodeInitElementorCardsSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var e = $j(".qode-comparison-slider");
        e.length && e.each(function(e) {
            var t = $j(this),
                o = t.data("orientation"),
                n = t.data("offset") / 100;
            t.waitForImages(function() {
                t.css("visibility", "visible"), t.twentytwenty({
                    default_offset_pct: 1.1,
                    orientation: o
                })
            }), t.appear(function() {
                setTimeout(function() {
                    var e = t.height(),
                        i = t.width(),
                        a = e * n,
                        r = i * n,
                        s = t.find(".twentytwenty-handle"),
                        d = t.find("img:first-of-type"),
                        l = function() {
                            "horizontal" == o ? (s.css({
                                left: +r + 1 + "px"
                            }), d.css({
                                clip: "rect(0px " + r + "px " + e + "px 0px)"
                            })) : (s.css({
                                top: +a + 1 + "px"
                            }), d.css({
                                clip: "rect(0px " + i + "px " + a + "px 0px)"
                            }))
                        };
                    d.css("transition", "all 700ms cubic-bezier(0.645, 0.045, 0.355, 1) 100ms"), s.css("transition", "all 700ms cubic-bezier(0.645, 0.045, 0.355, 1) 100ms"), l(), setTimeout(function() {
                        d.css("transition", "none"), s.css("transition", "none")
                    }, 700), $j(window).resize(function() {
                        e = t.height(), i = t.width(), a = e * n, r = i * n, l()
                    })
                }, 100)
            }, {
                accX: 0,
                accY: -200
            })
        })
    }
    var n = {};
    qode.modules.comparisonSlider = n, n.qodeInitComparisonSlider = o, n.qodeOnWindowLoad = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        e(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_comparison_slider.default", function() {
                qode.modules.comparisonSlider.qodeInitComparisonSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorComparisonSlider = n, n.qodeInitElementorComparisonSlider = o, n.qodeOnWindowLoad = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_content_menu.default", function() {
                createContentMenu(), createSelectContentMenu(), contentMenuPosition(), contentMenuCheckLastSection(), contentMenuScrollTo()
            })
        })
    }
    var n = {};
    qode.modules.elementorContentMenu = n, n.qodeInitElementorContentMenu = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_elliptical_slider.default", function() {
                qodeInitEllipticalSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorEllipticalSlider = n, n.qodeInitElementorEllipticalSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_expendable_section.default", function() {
                initMoreFacts()
            })
        })
    }
    var n = {};
    qode.modules.elementorExpendableSection = n, n.qodeInitElementorExpendableSection = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_horizontal_timeline.default", function() {
                qode.modules.timeline.qodeInitHorizontalTimeline()
            })
        })
    }
    var n = {};
    qode.modules.elementorHorizontalTimeline = n, n.qodeInitElementorHorizontalTimeline = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        function t(e, t, o) {
            var n = h(e.eventsWrapper),
                a = Number(e.timelineWrapper.css("width").replace("px", ""));
            "next" === o ? i(e, n - a + j, a - t) : i(e, n + a - j)
        }

        function o(e, t, o) {
            var i = e.eventsContent.find(".selected");
            if (("next" === o ? i.next() : i.prev()).length > 0) {
                var a = e.eventsWrapper.find(".selected"),
                    s = "next" === o ? a.parent("li").next("li").children("a") : a.parent("li").prev("li").children("a");
                r(s, e.fillingLine, t), l(s, e.eventsContent), s.addClass("selected"), a.removeClass("selected"), c(s), n(o, s, e)
            }
        }

        function n(e, t, o) {
            var n = window.getComputedStyle(t.get(0), null),
                a = Number(n.getPropertyValue("left").replace("px", "")),
                r = Number(o.timelineWrapper.css("width").replace("px", "")),
                s = Number(o.eventsWrapper.css("width").replace("px", "")),
                d = h(o.eventsWrapper);
            ("next" === e && a > r - d || "prev" == e && a < -d) && i(o, r / 2 - a, r - s)
        }

        function i(e, t, o) {
            var n = e.eventsWrapper.get(0);
            t = t > 0 ? 0 : t, t = void 0 !== o && t < o ? o : t, u(n, "translateX", t + "px"), 0 === t ? e.timelineNavigation.find(".qode-prev").addClass("inactive") : e.timelineNavigation.find(".qode-prev").removeClass("inactive"), t === o ? e.timelineNavigation.find(".qode-next").addClass("inactive") : e.timelineNavigation.find(".qode-next").removeClass("inactive")
        }

        function a(e) {
            e.timelineNavigation.find(".qode-prev").addClass("inactive"), e.timelineNavigation.find(".qode-next").addClass("inactive")
        }

        function r(e, t, o) {
            var n = window.getComputedStyle(e.get(0), null),
                i = n.getPropertyValue("left"),
                a = n.getPropertyValue("width");
            i = Number(i.replace("px", "")) + Number(a.replace("px", "")) / 2;
            var r = i / o;
            u(t.get(0), "scaleX", r)
        }

        function s(e, t, o) {
            for (var n = !1, i = 0; i < e.timelineDates.length; i++) {
                var r = _(e.timelineDates[0], e.timelineDates[i]),
                    s = Math.round(r / e.eventsMinLapse) + 1;
                e.timelineEvents.eq(i).css("left", s * t - 24 + "px"), n = s * t < o.outerWidth() - 80
            }
            if (n) {
                a(e);
                for (var d = (o.outerWidth() - 80 - 24 * (e.timelineDates.length - 1)) / (e.timelineDates.length + 1), i = 0; i < e.timelineDates.length; i++) e.timelineEvents.eq(i).css("left", (i + 1) * d + "px")
            }
        }

        function d(e, t, o) {
            var i = _(e.timelineDates[0], e.timelineDates[e.timelineDates.length - 1]),
                a = i / e.eventsMinLapse,
                a = Math.round(a) + 2,
                s = a * t;
            return s < o.outerWidth() - 80 && (s = o.outerWidth() - 80), e.eventsWrapper.css("width", s + "px"), r(e.eventsWrapper.find("a.selected"), e.fillingLine, s), n("next", e.eventsWrapper.find("a.selected"), e), s
        }

        function l(e, t) {
            var o = e.data("date"),
                n = t.find(".selected"),
                i = t.find('[data-date="' + o + '"]'),
                a = i.height();
            if (i.index() > n.index()) var r = "selected qode-enter-right",
                s = "qode-leave-left";
            else var r = "selected qode-enter-left",
                s = "qode-leave-right";
            i.attr("class", r), n.attr("class", s).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                n.removeClass("qode-leave-right qode-leave-left"), i.removeClass("qode-enter-left qode-enter-right")
            }), t.css("height", a + "px")
        }

        function c(e) {
            e.parent("li").prevAll("li").children("a").addClass("older-event").end().end().nextAll("li").children("a").removeClass("older-event")
        }

        function h(e) {
            var t = window.getComputedStyle(e.get(0), null),
                o = t.getPropertyValue("-webkit-transform") || t.getPropertyValue("-moz-transform") || t.getPropertyValue("-ms-transform") || t.getPropertyValue("-o-transform") || t.getPropertyValue("transform");
            if (o.indexOf("(") >= 0) {
                var o = o.split("(")[1];
                o = o.split(")")[0], o = o.split(",");
                var n = o[4]
            } else var n = 0;
            return Number(n)
        }

        function u(e, t, o) {
            e.style["-webkit-transform"] = t + "(" + o + ")", e.style["-moz-transform"] = t + "(" + o + ")", e.style["-ms-transform"] = t + "(" + o + ")", e.style["-o-transform"] = t + "(" + o + ")", e.style.transform = t + "(" + o + ")"
        }

        function f(t) {
            var o = [];
            return t.each(function() {
                var t = e(this),
                    n = t.data("date").split("T");
                if (n.length > 1) var i = n[0].split("/"),
                    a = n[1].split(":");
                else if (n[0].indexOf(":") >= 0) var i = ["2000", "0", "0"],
                    a = n[0].split(":");
                else var i = n[0].split("/"),
                    a = ["0", "0"];
                var r = new Date(i[2], i[1] - 1, i[0], a[0], a[1]);
                o.push(r)
            }), o
        }

        function _(e, t) {
            return Math.round(t - e)
        }

        function p(e) {
            for (var t = [], o = 1; o < e.length; o++) {
                var n = _(e[o - 1], e[o]);
                t.push(n)
            }
            return Math.min.apply(null, t)
        }

        function m(e) {
            for (var t = e.offsetTop, o = e.offsetLeft, n = e.offsetWidth, i = e.offsetHeight; e.offsetParent;) e = e.offsetParent, t += e.offsetTop, o += e.offsetLeft;
            return t < window.pageYOffset + window.innerHeight && o < window.pageXOffset + window.innerWidth && t + i > window.pageYOffset && o + n > window.pageXOffset
        }

        function g() {
            return window.getComputedStyle(document.querySelector(".qode-horizontal-timeline"), "::before").getPropertyValue("content").replace(/'/g, "").replace(/"/g, "")
        }
        var v = e(".qode-horizontal-timeline"),
            j = 120;
        qode.windowWidth > 680 && qode.windowWidth <= 1024 ? j = 60 : qode.windowWidth < 680 && (j = 105), v.length && v.each(function() {
            var n = e(this),
                i = {};
            i.timelineWrapper = n.find(".qode-events-wrapper"), i.eventsWrapper = i.timelineWrapper.children(".qode-events"), i.fillingLine = i.eventsWrapper.children(".qode-filling-line"), i.timelineEvents = i.eventsWrapper.find("a"), i.timelineDates = f(i.timelineEvents), i.eventsMinLapse = p(i.timelineDates), i.timelineNavigation = n.find(".qode-timeline-navigation"), i.eventsContent = n.children(".qode-events-content"), i.eventsWrapper.find("ol li:first-child a").addClass("selected"), i.eventsContent.find("ol li:first-child").addClass("selected"), s(i, j, n);
            var a = d(i, j, n);
            n.addClass("loaded"), i.timelineNavigation.on("click", ".qode-next", function(e) {
                e.preventDefault(), t(i, a, "next")
            }), i.timelineNavigation.on("click", ".qode-prev", function(e) {
                e.preventDefault(), t(i, a, "prev")
            }), i.eventsWrapper.on("click", "a", function(t) {
                t.preventDefault(), i.timelineEvents.removeClass("selected"), e(this).addClass("selected"), c(e(this)), r(e(this), i.fillingLine, a), l(e(this), i.eventsContent)
            }), i.eventsContent.on("swipeleft", function() {
                "mobile" == g() && o(i, a, "next")
            }), i.eventsContent.on("swiperight", function() {
                "mobile" == g() && o(i, a, "prev")
            }), e(document).keyup(function(e) {
                "37" === e.which && m(n.get(0)) ? o(i, a, "prev") : "39" === e.which && m(n.get(0)) && o(i, a, "next")
            })
        })
    }
    var n = {};
    qode.modules.timeline = n, n.qodeInitHorizontalTimeline = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_info_card_with_icon.default", function() {
                qodeIcon().init()
            })
        })
    }
    var n = {};
    qode.modules.elementorInfoCardWithIcon = n, n.qodeInitElementorInfoCardWithIcon = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_interactive_icon_showcase.default", function() {
                qodeInitInteractiveIconShowcase()
            })
        })
    }
    var n = {};
    qode.modules.elementorInteractiveIconShowcase = n, n.qodeInitElementorInteractiveIconShowcase = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        n()
    }

    function o() {
        i()
    }

    function n() {
        var t = e(".qode-interactive-links");
        t.length && t.each(function() {
            var t = e(this),
                o = t.find(".qode-il-titles-holder .qode-il-link"),
                n = t.find(".qode-il-image");
            o.length && (o.eq(0).addClass("qode-active"), n.eq(0).addClass("qode-active"), o.each(function() {
                var t = e(this);
                t.on("mouseenter", function() {
                    if (!t.hasClass("qode-active")) {
                        var e = t.data("index");
                        n.removeClass("qode-active"), o.removeClass("qode-active"), t.addClass("qode-active"), n.eq(e).addClass("qode-active")
                    }
                })
            }))
        })
    }

    function i() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/qode_interactive_links.default", function() {
                n()
            })
        })
    }
    var a = {};
    qode.modules.interactiveLinks = a, a.qodeInteractiveLinks = n, a.qodeOnDocumentReady = t, a.qodeOnWindowLoad = o, e(document).ready(t), e(window).on("load", o)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_interactive_project_list.default", function() {
                qode.modules.interactiveProjectList.qodeInitInteractiveProjectList(), qode.modules.interactiveProjectList.qodeInitPortfolioInteractiveLinkShowcase()
            })
        })
    }
    var n = {};
    qode.modules.elementorInteractiveProjectList = n, n.qodeInitElementorInteractiveProjectList = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o(), n(), i()
    }

    function o() {
        var t = e(".qode-interactive-project-list");
        t.length && t.each(function() {
            var t = e(this),
                o = t.find(".qode-ipl-item"),
                n = t.find(".qode-ipl-right"),
                i = n.find(".qode-ipl-image"),
                a = 0,
                r = 0;
            i.each(function() {
                e(this).attr("img-index", a), e(this).data("img-index", a), a++
            }), o.each(function() {
                e(this).attr("data-index", r), e(this).data("data-index", r), r++
            }), o.each(function() {
                var t = e(this),
                    o = t.find(".qode-ipl-title:not(.qode-ipl-responsive-title)"),
                    n = t.find(".qode-pli-link");
                t.find(n).appendTo(o)
            }), o.on("mouseenter", function() {
                var t = e(this).data("data-index");
                i.css("opacity", 0), n.find('.qode-ipl-image[img-index="' + t + '"]').css("opacity", 1)
            }).on("mouseleave", function() {})
        })
    }

    function n() {
        var t = e(".qode-interactive-project-list");
        t.length && t.each(function() {
            var t = e(this),
                o = t.find(".qode-ipl-right .qode-ipl-image"),
                n = t.find(".qode-ipl-left .qode-ipl-item");
            o.eq(0).addClass("qode-active"), n.eq(0).addClass("qode-active"), t.find('.qode-ipl-left .qode-ipl-item[data-index="0"]').addClass("qode-active"), n.children().on("touchstart mouseenter", function() {
                var i = e(this).parent(),
                    a = parseInt(i.data("index"), 10);
                o.removeClass("qode-active").eq(a).addClass("qode-active"), n.removeClass("qode-active"), t.find('.qode-ipl-left .qode-ipl-item[data-index="' + a + '"]').addClass("qode-active")
            })
        })
    }

    function i() {
        var t = e(".qode-interactive-project-list");
        t.length && t.each(function() {
            e(this).find(".qode-ipl-item").each(function() {
                var t = e(this).find(".qode-ipl-title:not(.qode-ipl-responsive-title)"),
                    o = t.text();
                t.attr("data-title", o)
            })
        })
    }
    var a = {};
    qode.modules.interactiveProjectList = a, a.qodeInitInteractiveProjectList = o, a.qodeInitPortfolioInteractiveLinkShowcase = n, a.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_interest_rate_calculator.default", function() {
                qode.modules.interestRateCalculator.qodeInitInterestRateCalculator()
            })
        })
    }
    var n = {};
    qode.modules.elementorInterestRateCalculator = n, n.qodeInitElementorInterestRateCalculator = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        n()
    }

    function n() {
        var t = e(".qode-irc-holder");
        t.length && t.each(function() {
            var t, o = e(this),
                n = o.find(".irc-range-slider");
            "" != o.data("rate") && (t = parseFloat(o.data("rate"))), n.rangeslider({
                polyfill: !1,
                onInit: function(e, n) {
                    if ("" != o.data("active-color")) {
                        var a = o.data("active-color");
                        o.find(".rangeslider__fill").css("background-color", a), o.find(".rangeslider__handle").css("background-color", a)
                    }
                    i(o, t)
                },
                onSlide: function(e, n) {
                    i(o, t)
                }
            })
        })
    }

    function i(e, t) {
        var o, n, i, a, r, s = e.find(".irc-range-slider-loan"),
            d = e.find(".irc-range-slider-period"),
            l = e.find(".qode-irc-borrow-row .qode-irc-value"),
            c = e.find(".qode-irc-interest-row .qode-irc-value"),
            h = e.find(".qode-irc-total-row .qode-irc-value"),
            u = e.find(".qode-irc-slider-loan-value.irc-current .irc-current-value"),
            f = e.find(".qode-irc-slider-period-value.irc-current .irc-current-value");
        o = parseFloat(s.val()), n = parseFloat(d.val()), i = o * t / 100, r = o + i, 0 != n && (a = r / n), l.html(Math.round(100 * a) / 100), c.html(Math.round(100 * i) / 100), h.html(Math.round(100 * r) / 100), u.html(o), f.html(n)
    }
    var a = {};
    qode.modules.interestRateCalculator = a, a.qodeInitInterestRateCalculator = o, a.qodeOnWindowLoad = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_intro_section.default", function() {
                qode.modules.introSection.qodeIntroSection()
            })
        })
    }
    var n = {};
    qode.modules.elementorIntroSection = n, n.qodeInitElementorIntroSection = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var t = e(".qode-intro-section"),
            o = {
                start: 1.3,
                end: 1.5
            },
            r = function() {
                o.y = t.offset().top, o.h = t.outerHeight()
            },
            s = function() {
                e(".qode-is-bg-wrapper").css({
                    height: o.h + "px"
                })
            };
        t.length && (n(t), a(t, o), i(t), t.waitForImages(function() {
            r(), s()
        }), e(window).on("resize", function() {
            r(), s()
        }))
    }

    function n(e) {
        e.closest(".elementor-section").siblings().length && e.closest(".elementor-section").siblings().css({
            position: "relative",
            "z-index": 10
        })
    }

    function i(e) {
        var t = e.find(".qode-is-content");
        t.length && t.addClass("qode--appear")
    }

    function a(t, o) {
        var n = 0,
            i = (e(".qode-is-content-wrapper"), e(".qode-is-content"), e(".qode-is-subtitle"), e(".qode-is-title"), function() {
                return o.downwards = $scroll >= n, n = $scroll, o.downwards
            }),
            a = function() {
                var e = t.outerHeight() / 2.5,
                    o = 1 - $scroll / e + 1.7,
                    n = t.find(".qode-is-title"),
                    i = n.attr("data-color"),
                    a = n.attr("data-color-after-scroll"),
                    r = (t.find(".qode-is-subtitle"), n.attr("data-color")),
                    s = n.attr("data-color-after-scroll"),
                    d = (t.find(".qode-is-content-btm"), n.attr("data-color")),
                    l = n.attr("data-color-after-scroll");
                o > 1 && (o = 1), o < 0 && (o = 0), o >= 1 ? (i, r) : (a, s), t.find(".qode-is-bg-wrapper").css("opacity", o)
            };
        e(window).on("scroll", function() {
            i(), a()
        })
    }
    var r = {};
    qode.modules.introSection = r, r.qodeIntroSection = o, r.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_carousel.default", function() {
                qode.modules.portfolioCarousel.qodePortfolioCarousel(), qode.modules.portfolioCarousel.qodeInitPortfolioCarouselCustomCursor()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioCarousel = n, n.qodeInitElementorPortfolioCarousel = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var e = $j(".qode-inverted-portfolio-slider");
        e.length && e.each(function() {
            var e = void 0 !== $j(this).data("options") ? $j(this).data("options") : {},
                t = void 0 === e.autoplay || "" === e.autoplay || e.autoplay,
                o = void 0 !== e.mousewheel && "" !== e.mousewheel && e.mousewheel,
                n = void 0 !== e.speed && "" !== e.speed ? parseInt(e.speed, 10) : 5e3,
                i = void 0 !== e.speedAnimation && "" !== e.speedAnimation ? parseInt(e.speedAnimation, 10) : 800,
                a = void 0 === e.loop || "" === e.loop || e.loop,
                r = void 0 !== e.enableDrag && "" !== e.enableDrag && "yes" == e.enableDrag ? 1 : 0,
                s = void 0 !== e.slidesPerView && "" !== e.slidesPerView ? e.slidesPerView : "auto",
                d = "0" != r;
            !0 === t && (t = {
                delay: n,
                disableOnInteraction: !1
            });
            new Swiper(".swiper-container", {
                slideEffect: "fade",
                loop: a,
                slidesPerView: s,
                centeredSlides: !1,
                autoplay: t,
                spaceBetween: 0,
                mousewheel: o,
                speed: i,
                touchRatio: r,
                grabCursor: d,
                navigation: {
                    nextEl: ".qode-ips-button-next",
                    prevEl: ".qode-ips-button-prev"
                }
            })
        })
    }
    var n = {};
    qode.modules.invertedPortfolioSlider = n, n.qodeInvertedPortfolioSlider = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_item_showcase.default", function() {
                qodeLazyImages(), initItemShowcase()
            })
        })
    }
    var n = {};
    qode.modules.elementorItemShowcase = n, n.qodeInitElementorItemShowcase = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var t = e("#qode-multi-device-showcase");
        if (t.length) {
            var o = t.height(),
                n = t.offset().top,
                i = o - n,
                a = e("#qode-mds-laptop-slider"),
                r = a.find(".qode-mds-slide"),
                s = e("#qode-mds-tablet-slider"),
                d = s.find(".qode-mds-slide"),
                l = e("#qode-mds-phone-slider"),
                c = l.find(".qode-mds-slide"),
                h = e("#qode-mds-spinner"),
                u = !1,
                f = !1,
                _ = !1,
                p = function() {
                    var e = $window_height - t.offset().top;
                    t.css("height", e)
                },
                m = function(t) {
                    t.find(".qode-mds-slides-inner").each(function() {
                        var t = e(this),
                            o = Math.round(t.parent().height() - 1),
                            n = Math.round(t.parent().width() - 1);
                        t.css({
                            height: o,
                            width: n
                        })
                    })
                },
                g = function(t, o, n, i) {
                    t.first().addClass("qode-active qode-mds-no-animation"), u || i != n || (u = !0, e(document).trigger("qodeMDSSlidePrepped"))
                },
                v = function(e) {
                    e.filter(".qode-active").next().index() > 0 ? (e.removeClass("qode-remove qode-mds-no-animation"), e.filter(".qode-active").removeClass("qode-active").addClass("qode-remove"), e.filter(".qode-remove").next().addClass("qode-active")) : (e.removeClass("qode-active qode-remove qode-mds-no-animation"), e.last().addClass("qode-remove"), e.first().addClass("qode-active"))
                },
                j = function() {
                    var o = a.add(s).add(l),
                        n = o.length,
                        i = t.data("start-delay"),
                        h = t.data("slide-interval");
                    o.each(function(t) {
                        var o = e(this),
                            i = o.find(".qode-mds-slide");
                        i.length;
                        g(i, 0, n, t + 1)
                    }), qodeRequestAnimationFrame(), t.addClass("qode-mds-animating");
                    var u = function() {
                        s.is(":visible") && l.is(":visible") ? (v(r), a.one(qode.animationEnd, function() {
                            v(d), s.one(qode.animationEnd, function() {
                                v(c), l.one(qode.animationEnd, function() {
                                    setTimeout(function() {
                                        requestAnimFrame(u)
                                    }, h)
                                })
                            })
                        })) : (v(r), a.one(qode.animationEnd, function() {
                            setTimeout(function() {
                                requestAnimFrame(u)
                            }, h)
                        }))
                    };
                    setTimeout(function() {
                        u()
                    }, i)
                },
                $ = function() {
                    if (t.hasClass("qode-mds-appear-effect") && !e("html").hasClass("touch")) {
                        var o = t.find(".qode-mds-device-holder"),
                            n = t.find(".qode-mds-content-holder");
                        t.addClass("qode-mds-loading"), h.fadeOut(300, function() {
                            o.addClass("qode-show-device"), t.one(qode.transitionEnd, function() {
                                n.addClass("qode-show-item"), n.last().one(qode.transitionEnd, function() {
                                    _ || (_ = !0, e(document).trigger("qodeMDSReadyToScroll"))
                                })
                            })
                        })
                    } else h.fadeOut(300), _ || (_ = !0, e(document).trigger("qodeMDSReadyToScroll"))
                },
                w = function() {
                    f || (f = !0, e(".qode-demos-filter-holder").length && e(".qode-demos-filter-holder").css("visibility", "visible"))
                },
                b = function() {
                    o = t.height(), n = t.offset().top, i = o - n
                };
            ! function() {
                if (t.hasClass("qode-mds-one-scroll-to-content") && !e("html").hasClass("touch")) {
                    var o = !1,
                        a = !1,
                        r = !1,
                        s = !0,
                        d = !1,
                        l = function() {
                            e(window).scrollTop() < i && (s = !1);
                            var t = function() {
                                w(), a = !0, e("html, body").stop(!0).animate({
                                    scrollTop: i
                                }, 1e3, "easeInOutQuint", function() {
                                    d = !0, d && e(window).scrollTop(i), e(window).scroll(function() {
                                        d && e(window).scrollTop(i)
                                    }), s = !0, r = !1, setTimeout(function() {
                                        a = !1, d = !1, e(document).trigger("qodeMDSScrolled")
                                    }, 200)
                                })
                            };
                            e(window).scroll(function() {
                                $scroll < i && (r = !0, o && (s = !1))
                            }), window.addEventListener("wheel", function(e) {
                                if ($scroll < i) {
                                    var n = e.deltaY;
                                    o = n > 0, a || s ? (s || e.preventDefault(), s && !o && r && (a = !1, s = !1, e.preventDefault())) : o && (e.preventDefault(), t())
                                }
                                a && e.preventDefault()
                            }), e(document).on("mousedown", function(o) {
                                e(window).outerWidth() <= o.pageX && $scroll <= i && (o.preventDefault(), t())
                            })
                        };
                    window.addEventListener("wheel", function(e) {
                        _ && f || e.preventDefault()
                    }), window.addEventListener("scroll", function() {
                        _ && f || e(window).scrollTop(n)
                    }), e(document).on("qodeMDSReadyToScroll", function() {
                        l()
                    })
                }
            }(),
            function() {
                if (t.hasClass("qode-mds-btn-scroll-below")) {
                    t.find(".qode-mds-button-holder .qbutton").on("click", function(t) {
                        return t.preventDefault(), _ && (w(), e("html, body").stop().animate({
                            scrollTop: i
                        }, 1e3, "easeInOutQuint", function() {
                            e(document).trigger("qodeMDSScrolled")
                        })), !1
                    })
                }
            }(), t.imagesLoaded({
                background: !0
            }, function() {
                p(), j()
            }), e(document).on("qodeMDSSlidePrepped", function() {
                $()
            }), e(window).on("load", function() {
                m(a)
            }), e(window).scroll(function() {
                b()
            }), e(window).resize(function() {
                p(), b(), m(a)
            })
        }
    }
    var n = {};
    qode.modules.multiDeviceShowcase = n, n.qodeInitMultiDeviceShowcase = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_numbered_carousel.default", function() {
                qode.modules.numberedCarousel.qodeNumberedCarousel().init()
            })
        })
    }
    var n = {};
    qode.modules.elementorNumberedCarousel = n, n.qodeInitElementorNumberedCarousel = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o().init()
    }

    function o() {
        var t = function(e) {
                var t = new Swiper(e, {
                        speed: 800,
                        centeredSlides: !0,
                        slidesPerView: "auto",
                        allowTouchMove: !1,
                        init: !1
                    }),
                    n = e.closest(".qode-numbered-carousel"),
                    i = n.find(".qode-nc-bg-item"),
                    a = n.find(".qode-nc-indicator"),
                    r = n.find(".qode-nc-grid-line:last-child"),
                    d = qode_body.hasClass("qode-ms-explorer");
                t.on("init", function() {
                    n.data("items", i.length), o(n, e, i, a, e.find(".swiper-wrapper")), s(n, t), e.addClass("qode-show").one(qode.transitionEnd, function() {
                        n.addClass("qode-initialized"), r.one(qode.transitionEnd, function() {
                            n.data("idle", !0)
                        }), d && n.data("idle", !0)
                    })
                }), t.on("slideChangeTransitionEnd", function() {
                    o(n, e, i, a, e.find(".swiper-wrapper")), n.removeClass("qode-mask"), r.one(qode.transitionEnd, function() {
                        n.data("idle", !0)
                    }), d && n.data("idle", !0)
                }), e.waitForImages(t.init())
            },
            o = function(e, t, o, a, s) {
                i(e, t), r(e, o), r(e, a), !qode_body.hasClass("qode-ms-explorer") && n(s)
            },
            n = function(e) {
                var t = Math.round(e.css("transform").split(",")[4]);
                e.css("transform", "matrix(1, 0, 0, 1, " + t + ", 0)")
            },
            i = function(e, t) {
                var o = t.find(".swiper-slide-active").data("index");
                e.data("active-index", o)
            },
            a = function(e, t) {
                e.removeClass("qode-next qode-prev").addClass(t)
            },
            r = function(t, o) {
                var n = o.filter(function() {
                    return e(this).data("index") == t.data("active-index")
                });
                o.removeClass("qode-active"), n.addClass("qode-active")
            },
            s = function(t, o) {
                var n = function(e, t, o) {
                        a(e, "qode-" + o), e.data("idle", !1), e.addClass("qode-mask"), "next" == o ? setTimeout(function() {
                            t.slideNext(800)
                        }, 500) : (e.addClass("qode-fade-prev-content"), setTimeout(function() {
                            e.removeClass("qode-fade-prev-content"), t.slidePrev(800)
                        }, 750))
                    },
                    i = function(i) {
                        var a = e(i.currentTarget);
                        a.hasClass("swiper-slide-next") ? t.data("idle") && n(t, o, "next") : a.hasClass("swiper-slide-prev") && t.data("idle") && n(t, o, "prev")
                    },
                    r = function(e) {
                        if (t.data("idle")) {
                            var i = e.deltaY > 0 ? "next" : "prev",
                                a = t.data("active-index");
                            ("next" == i && a < t.data("items") || "prev" == i && a > 1) && n(t, o, i)
                        }
                    },
                    s = function(e) {
                        t.data("touch-start", parseInt(e.changedTouches[0].clientX))
                    },
                    d = function(e) {
                        t.data("touch-move", parseInt(e.changedTouches[0].clientX));
                        var i = t.data("touch-move") - t.data("touch-start");
                        if (t.data("idle")) {
                            var a = i < 0 ? "next" : "prev",
                                r = t.data("active-index");
                            ("next" == a && r < t.data("items") || "prev" == a && r > 1) && n(t, o, a)
                        }
                    };
                if (t.on("click", ".swiper-slide", i), t.hasClass("qode-change-on-scroll") && (t[0].addEventListener("wheel", r), Modernizr.touch && t[0].addEventListener("touchstart", s), Modernizr.touch && t[0].addEventListener("touchmove", d)), qode.windowWidth < 1025) {
                    var l = {
                            down: "touchstart",
                            up: "touchend",
                            target: "srcElement"
                        },
                        c = function(e) {
                            return e.originalEvent.changedTouches[0].clientX
                        },
                        h = function(e, t) {
                            var o = e.originalEvent.changedTouches[0].clientY,
                                n = t.originalEvent.changedTouches[0].clientY;
                            return Math.abs(n - o) > 100
                        },
                        u = !1;
                    t.on(l.down, function(i) {
                        if (!u && !e(i[l.target]).is("a, span")) {
                            var a = i,
                                r = c(i);
                            u = !0, t.one(l.up, function(e) {
                                var i = c(e);
                                if (Math.abs(r - i) > 10 && !h(a, e)) {
                                    var s = t.data("active-index");
                                    r > i ? s < t.data("items") && n(t, o, "next") : s > 1 && n(t, o, "prev")
                                }
                                u = !1
                            })
                        }
                    })
                }
            };
        return {
            init: function() {
                var o = e(".qode-numbered-carousel");
                o.length && o.each(function() {
                    var o = e(this).find(".swiper-container");
                    t(o)
                })
            }
        }
    }
    var n = {};
    qode.modules.numberedCarousel = n, n.qodeNumberedCarousel = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_carousel.default", function() {
                qode.modules.portfolioCarousel.qodePortfolioCarousel(), qode.modules.portfolioCarousel.qodeInitPortfolioCarouselCustomCursor()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioCarousel = n, n.qodeInitElementorPortfolioCarousel = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        i()
    }

    function o() {
        n()
    }

    function n() {
        var e = $j(".qode-portfolio-carousel");
        e.length && e.each(function() {
            var e = void 0 !== $j(this).data("options") ? $j(this).data("options") : {},
                t = void 0 === e.autoplay || "" === e.autoplay || e.autoplay,
                o = void 0 !== e.mousewheel && "" !== e.mousewheel && e.mousewheel,
                n = void 0 !== e.speed && "" !== e.speed ? parseInt(e.speed, 10) : 5e3,
                i = void 0 !== e.speedAnimation && "" !== e.speedAnimation ? parseInt(e.speedAnimation, 10) : 800,
                a = void 0 === e.loop || "" === e.loop || e.loop,
                r = void 0 !== e.slidesPerView && "" !== e.slidesPerView ? e.slidesPerView : "auto";
            $j(this).find(".swiper-pagination");
            !0 === t && (t = {
                delay: n,
                disableOnInteraction: !1
            });
            new Swiper(".swiper-container", {
                direction: "horizontal",
                loop: a,
                loopedSlides: 2,
                slidesPerView: r,
                centeredSlides: !1,
                autoplay: t,
                spaceBetween: 0,
                mousewheel: o,
                speed: i
            })
        })
    }

    function i() {
        var t = e(".qode-portfolio-carousel"),
            o = e(".qode-pc-custom-cursor");
        t.each(function() {
            var t = e(this);
            t.on("mousemove", function(e) {
                o.css({
                    top: e.clientY - 65,
                    left: e.clientX - 65
                })
            }), t.find(".qode-portfolio-carousel-item").on("mouseenter", function() {
                o.hasClass("qode-is-active") || o.addClass("qode-is-active")
            }).on("mouseleave", function() {
                o.hasClass("qode-is-active") && o.removeClass("qode-is-active")
            }), e(window).scroll(function() {
                o.hasClass("qode-is-active") && (o.offset().top < t.offset().top || o.offset().top > t.offset().top + t.outerHeight()) && o.removeClass("qode-is-active")
            })
        })
    }
    var a = {};
    qode.modules.portfolioCarousel = a, a.qodePortfolioCarousel = n, a.qodeInitPortfolioCarouselCustomCursor = i, a.qodeOnDocumentReady = o, e(document).ready(o), e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_list_stacked.default", function() {
                qode.modules.ptfListStacked.qodeInitPortfolioListStacked().init()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioListStacked = n, n.qodeInitElementorPortfolioListStacked = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        n().init()
    }

    function o() {
        n().resize()
    }

    function n() {
        var t = e("#qode-portfolio-list-stacked");
        t.length && (t.items = t.find(".qode-pls-item"), t.total = t.items.length, t.textItems = t.find(".qode-pls-text-item"), t.imgs = t.find("img"), t.info = e("#qode-pls-info"), t.endOfScrollVisible = !1, t.endOfScroll = t.find(".qode-pls-end-of-scroll"), t.activeIndex = 0, t.activeText = t.textItems.first(), t.direction = null, t.deltaY = 0, t.tilt = 30, t.tX = 0, t.tY = 0, t.items.each(function() {
            e(this).data("move", 0), e(this).data("buffer", 0)
        }));
        var o = function() {
                t.items.each(function() {
                    var o = e(this);
                    o.css({
                        "z-index": t.total - o.data("index")
                    })
                })
            },
            n = function() {
                var o = 1;
                qode.windowWidth <= 1440 && qode.windowWidth > 1024 && (o = .65), qode.windowWidth <= 1024 && qode.windowWidth > 768 && (o = .5), qode.windowWidth <= 768 && qode.windowWidth > 414 && (o = .4), qode.windowWidth <= 414 && qode.windowWidth > 320 && (o = .25), qode.windowWidth <= 320 && (o = .2), t.items.each(function() {
                    var t = e(this),
                        n = (t.find("img")[0].naturalWidth / Math.min(qode.windowWidth, 1920) * 100).toFixed(2),
                        i = (t.find("img")[0].naturalHeight / Math.min(qode.windowHeight, 1080) * 100).toFixed(2),
                        a = {
                            width: n * o + "%",
                            height: i * o + "%"
                        };
                    t.css(a)
                })
            },
            i = function() {
                t.items.each(function() {
                    var t = e(this),
                        o = t.find(".qode-pls-item-inner"),
                        n = qode.windowWidth >= 1200 ? parseInt(t.data("x")) : .88 * parseInt(t.data("x")),
                        i = qode.windowWidth > 1024 ? parseInt(t.data("y")) : parseInt(t.data("y")) + 20,
                        a = {
                            top: (i || 50) + "%",
                            left: (n || 50) + "%"
                        };
                    t.css(a), o.css("transform", "translateX(" + parseInt(isNaN(n) ? -50 : 0) + "%) translateY(" + parseInt(isNaN(i) ? -50 : 0) + "%)")
                })
            },
            a = function(e) {
                return e.offset().top <= .97 * -e.height()
            },
            r = function() {
                t.endOfScrollVisible = !0, t.endOfScroll.addClass("qode-visible"), t.addClass("qode-eos")
            },
            s = function() {
                t.endOfScrollVisible = !1, t.endOfScroll.removeClass("qode-visible"), t.removeClass("qode-eos")
            },
            d = function() {
                return t.items.removeClass("qode-active"), t.items.filter(function() {
                    return e(this).data("index") == t.activeIndex
                })
            },
            l = function() {
                t.textItems.removeClass("qode-active"), t.activeText = t.textItems.filter(function() {
                    return e(this).data("index") == t.activeIndex
                }).addClass("qode-active")
            },
            c = function() {
                var o = t.items.filter(function() {
                    return e(this).data("index") == t.activeIndex
                });
                "next" == t.direction && a(o.find("img")) ? (t.activeIndex++, t.activeIndex == t.total && (t.deltaY = 0), t.activeIndex = Math.min(t.activeIndex, t.total - 1), o = d()) : "prev" == t.direction && 0 == o.data("move") && (t.endOfScrollVisible && s(), t.activeIndex--, t.activeIndex = Math.max(t.activeIndex, 0), o = d()), !t.endOfScrollVisible && "next" == t.direction && t.activeIndex == t.total - 1 && Math.abs(o.data("move")) > .1 * o.find("img").height() && r(), t.activeText.data("index") !== t.activeIndex && l(), o.addClass("qode-active").data("move", Math.min(o.data("move") + t.deltaY, 0)).css("transform", "translate3d(0," + Math.round(o.data("move") - .2 * o.data("buffer")) + "px,0)").data("buffer", Math.abs(o.data("move")))
            },
            h = function() {
                t.items.each(function(o) {
                    var n = e(this).find("img"),
                        i = Math.round(t.tX * t.tilt * (o + 1)),
                        a = Math.round(t.tY * t.tilt * (o + 1));
                    n.css("transform", "translateX(" + i + "px) translateY(" + a + "px)")
                })
            },
            u = function(e) {
                t.direction = -e.deltaY < 0 ? "next" : "prev", t.deltaY = -e.deltaY, 3 == Math.abs(t.deltaY) && (t.deltaY = 10 * t.deltaY), requestAnimationFrame(c)
            },
            f = function(e) {
                t.tX = .5 - e.screenX / qode.windowWidth, t.tY = .5 - e.screenY / qode.windowHeight, requestAnimationFrame(h)
            },
            _ = function(e) {
                t.data("y-start", parseInt(e.changedTouches[0].clientY))
            },
            p = function(e) {
                t.data("y-end", parseInt(e.changedTouches[0].clientY)), t.deltaY = t.data("y-end") - t.data("y-start"), t.direction = t.deltaY < 0 ? "next" : "prev", t.deltaY = Math.min(Math.max(t.deltaY, -20), 100), requestAnimationFrame(c)
            },
            m = function(o) {
                var n = function(e, o) {
                        t.info.css({
                            transform: "translate3d(" + e + "px, " + o + "px, 0)"
                        })
                    },
                    i = function(e) {
                        var t = e.clientX,
                            o = e.clientY;
                        requestAnimationFrame(function() {
                            n(t, o)
                        })
                    },
                    a = function(o) {
                        var n = e(o.currentTarget).closest(t.items).data("index");
                        if (t.info.data("active") !== n) {
                            var i = t.textItems.filter(function() {
                                    return e(this).data("index") == n
                                }),
                                a = i.find(".qode-pls-title-holder").html();
                            t.info.data("active", n).addClass("qode-show"), t.info.find(".qode-pls-title-holder").html(a)
                        }
                        e(".qode-page-header").css("pointer-events", "none")
                    },
                    r = function(o) {
                        t.info.data("active", null).removeClass("qode-show"), e(".qode-page-header").css("pointer-events", "auto")
                    };
                t.on("mousemove", i), t.on("mousemove", "img", a), t.on("mouseleave", "img", r)
            };
        return {
            init: function() {
                t.length && (e("html").addClass("qode-overflow"), t.items.first().addClass("qode-active"), t.textItems.first().addClass("qode-active"), n(), i(), o(), t.waitForImages(function() {
                    t.addClass("qode-loaded"), Modernizr.touch || (document.body.addEventListener("wheel", u), document.body.addEventListener("mousemove", f), m()), Modernizr.touch && (t[0].addEventListener("touchstart", _), t[0].addEventListener("touchmove", p))
                }))
            },
            resize: function() {
                t.length && (i(), n())
            }
        }
    }
    var i = {};
    qode.modules.ptfListStacked = i, i.qodeOnWindowLoad = t, i.qodeOnWindowResize = o, i.qodeInitPortfolioListStacked = n, e(window).on("load", t), e(window).resize(o)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_project_slider.default", function() {
                qode.modules.portfolioProjectSlider.qodePortfolioProjectSlider()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioProjectSlider = n, n.qodeInitElementorPortfolioProjectSlider = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var e = $j(".qode-portfolio-project-slider");
        e.length && (qode_body.addClass("qode-with-portfolio-project-slider"), e.each(function() {
            var e = void 0 !== $j(this).data("options") ? $j(this).data("options") : {},
                t = void 0 === e.autoplay || "" === e.autoplay || e.autoplay,
                o = void 0 !== e.mousewheel && "" !== e.mousewheel && e.mousewheel,
                n = void 0 !== e.speed && "" !== e.speed ? parseInt(e.speed, 10) : 5e3,
                i = void 0 !== e.speedAnimation && "" !== e.speedAnimation ? parseInt(e.speedAnimation, 10) : 800,
                a = void 0 === e.loop || "" === e.loop || e.loop,
                r = $j(this).find(".swiper-pagination");
            !0 === t && (t = {
                delay: n,
                disableOnInteraction: !1
            });
            new Swiper(".swiper-container", {
                direction: "horizontal",
                loop: a,
                loopedSlides: 2,
                slidesPerView: 1.2,
                centeredSlides: !1,
                autoplay: t,
                spaceBetween: 0,
                mousewheel: o,
                speed: i,
                pagination: {
                    el: r,
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '">' + (e + 1 < 10 ? 0 : "") + (e + 1) + "</span>"
                    }
                },
                breakpoints: {
                    1: {
                        slidesPerView: 1
                    },
                    480: {
                        slidesPerView: 1
                    },
                    680: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 1.15
                    },
                    1366: {
                        slidesPerView: 1.2
                    },
                    1440: {
                        slidesPerView: 1.2
                    }
                }
            })
        }))
    }
    var n = {};
    qode.modules.portfolioProjectSlider = n, n.qodePortfolioProjectSlider = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_pricing_calculator.default", function() {
                qodeInitPricingCalculator()
            })
        })
    }
    var n = {};
    qode.modules.elementorPricingCalculator = n, n.qodeInitElementorPricingCalculator = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_product_list.default", function() {
                qodeInitProductListMasonryShortcode()
            })
        })
    }
    e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_scrolling_image.default", function() {
                qodeScrollingImage()
            })
        })
    }
    var n = {};
    qode.modules.elementorScrollingImage = n, n.qodeInitElementorScrollingImage = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_sliding_image_holder.default", function() {
                qodeSlidingImageHolder()
            })
        })
    }
    var n = {};
    qode.modules.elementorSlidingImageHolder = n, n.qodeInitElementorSlidingImageHolder = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";
    e(document).ready(function() {})
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_portfolio_carousel.default", function() {
                qode.modules.portfolioCarousel.qodePortfolioCarousel(), qode.modules.portfolioCarousel.qodeInitPortfolioCarouselCustomCursor()
            })
        })
    }
    var n = {};
    qode.modules.elementorPortfolioCarousel = n, n.qodeInitElementorPortfolioCarousel = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        var e = $j(".qode-vertical-portfolio-slider");
        e.length && e.each(function() {
            var t = void 0 !== $j(this).data("options") ? $j(this).data("options") : {},
                o = void 0 === t.autoplay || "" === t.autoplay || t.autoplay,
                n = void 0 !== t.mousewheel && "" !== t.mousewheel && t.mousewheel,
                i = void 0 !== t.speed && "" !== t.speed ? parseInt(t.speed, 10) : 5e3,
                a = void 0 !== t.speedAnimation && "" !== t.speedAnimation ? parseInt(t.speedAnimation, 10) : 800,
                r = void 0 === t.loop || "" === t.loop || t.loop;
            !0 === o && (o = {
                delay: i,
                disableOnInteraction: !1
            });
            new Swiper(e, {
                direction: "vertical",
                slideEffect: "fade",
                mousewheelControl: !0,
                slidesPerView: "1",
                sliderScroll: !0,
                speed: a,
                loop: r,
                autoplay: o,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '">' + (e + 1) + "</span>"
                    }
                }
            });
            if (n) {
                var s = !1;
                e.on("wheel", function(t) {
                    if (t.preventDefault(), !s) {
                        s = !0;
                        t.originalEvent.deltaY > 0 ? e[0].swiper.slideNext() : e[0].swiper.slidePrev(), setTimeout(function() {
                            s = !1
                        }, 2e3)
                    }
                })
            }
        })
    }
    var n = {};
    qode.modules.verticalPortfolioSlider = n, n.qodeVerticalPortfolioSlider = o, n.qodeOnDocumentReady = t, e(document).ready(t)
}(jQuery),
function(e) {
    "use strict";

    function t() {
        o()
    }

    function o() {
        $j(window).on("elementor/frontend/init", function() {
            elementorFrontend.hooks.addAction("frontend/element_ready/bridge_workflow.default", function() {
                qodeWorkflow()
            })
        })
    }
    var n = {};
    qode.modules.elementorWorkflow = n, n.qodeInitElementorWorkflow = o, n.qodeOnWindowLoad = t, e(window).on("load", t)
}(jQuery);