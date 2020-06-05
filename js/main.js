playAlert = setInterval(function() {
    $(window).resize(function() {
        location.reload();
    });
}, 1000);
/*
 $(window).resize(function() {
  clearTimeout(app.resize.timer)
  app.resize.timer = setTimeout(function(){
     var window_changed = $(window).width() != app.size.window_width
     if(window_changed) console.log('Window size changed! resize site')
  }, 500)               
})
 */
window.onload = function() {
    var filter = "win16|win32|win64|mac";
    if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
            var outerHeightWrapS = $(".main_box_li").outerHeight(true);
            $(".main_box_li").css("height", outerHeightWrapS);
        }
    }
    var mstartX = 0,
        mendX = 0,
        mstartY = 0,
        mendY = 0;
    $("body").on('mousedown', function(event) {
        mstartX = event.pageX;
        mstartY = event.pageY;
    });
    $("body").on('mouseup', function(event) {
        mendX = event.pageX;
        mendY = event.pageY;
        if (mstartY - mendY > 50) {} else if (mendY - mstartY > 50) {} else if (mstartY - mendY < 50 || mendY - mstartY < 50) {}
        if (mstartX - mendX > 50) {} else if (mendX - mstartX > 50) {} else if (mstartX - mendX < 50 || mendX - mstartX < 50) {}
    });
    var startX, startY, endX, endY;
    var page = 1;
    var outerHeightWrap = $(".main_box_li").outerHeight(true);
    var outerHeightWrap02 = outerHeightWrap + outerHeightWrap;
    var outerHeightWrap03 = outerHeightWrap02 + outerHeightWrap;
    var outerHeightWrap04 = outerHeightWrap03 + outerHeightWrap;
    var outerHeightWrap05 = outerHeightWrap04 + outerHeightWrap;
    var outerHeightWrap06 = outerHeightWrap05 + outerHeightWrap;
    var outerHeightWrap07 = outerHeightWrap06 + outerHeightWrap;
    $("body").on('touchstart', function(event) {
        startX = event.originalEvent.changedTouches[0].screenX;
        startY = event.originalEvent.changedTouches[0].screenY;
    });
    $("body").on('touchend', function(event) {
        endX = event.originalEvent.changedTouches[0].screenX;
        endY = event.originalEvent.changedTouches[0].screenY;
        var widthTrue = 0;
        if ($(window).width() > 768) {
            widthTrue = 1;
        } else {
            widthTrue = 0;
        }
        var widthTrue02 = 0;
        if ($(window).width() > 1200) {
            widthTrue02 = 1;
        } else {
            widthTrue02 = 0;
        }
        var widthTrue03 = 0;
        if ($(window).width() > 1200) {
            widthTrue03 = 1;
        } else {
            widthTrue03 = 0;
        }

        if (page == 4) {
            if (startY - endY > 50) {
                //아래에서 위
                var scrollTop = $(".main_box_li04").scrollTop();
                var innerHeight = $(".main_box_li04").innerHeight();
                var scrollHeight = $(".main_box_li04").prop('scrollHeight');

                if (scrollTop + innerHeight >= scrollHeight) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 5;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent05();
                    }
                }
            } else if (endY - startY > 50) {
                //위에서 아래
                var scrollTop = $(".main_box_li04").scrollTop();
                if (scrollTop <= 0) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 3;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent03();
                    }
                }
            }
        } else if (page == 6 && widthTrue == 0) {
            if (startY - endY > 50) {
                //아래에서 위
                var scrollTop = $(".main_box_li06").scrollTop();
                var innerHeight = $(".main_box_li06").innerHeight();
                var scrollHeight = $(".main_box_li06").prop('scrollHeight');

                if (scrollTop + innerHeight >= scrollHeight) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 7;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent07();
                    }
                }
            } else if (endY - startY > 50) {
                //위에서 아래
                var scrollTop = $(".main_box_li06").scrollTop();
                if (scrollTop <= 0) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 5;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent05();
                    }
                }
            }
        } else if (page == 7 && widthTrue02 == 0) {
            if (startY - endY > 50) {
                //아래에서 위

            } else if (endY - startY > 50) {
                //위에서 아래
                var scrollTop = $(".main_box_li07").scrollTop();
                if (scrollTop <= 0) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 6;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent06();
                    }
                }
            }
        } else if (page == 5 && widthTrue03 == 0) {
            if (startY - endY > 50) {
                //아래에서 위
                var scrollTop03S = $(".main_box_li05").scrollTop();
                var scrollTop03 = Math.ceil(scrollTop03S);
                var innerHeight03 = $(".main_box_li05").innerHeight();
                var scrollHeight03 = $(".main_box_li05").prop('scrollHeight');
                if (scrollTop03 + innerHeight03 >= scrollHeight03) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 6;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent06();
                    }
                }
            } else if (endY - startY > 50) {
                //위에서 아래
                var scrollTop = $(".main_box_li05").scrollTop();
                if (scrollTop <= 0) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150)

                    function mousewheelCntDown() {
                        page = 4;
                        $(".main_boxWrap").css({
                            "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
                        });
                        mainEventNo();
                        mainEvent04();
                    }
                }
            }
        } else {
            if (startY - endY > 50) {
                //위에서 아래
                page++;
                if (page == 1) {
                    document.getElementById("main_boxWrap").style.transform = "translate3d(0px, 0px, 0px)";
                    mainEventNo();
                    mainEvent01();
                }
                if (page == 2) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent02();
                }
                if (page == 3) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent03();
                }
                if (page == 4) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent04();
                }
                if (page == 5) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent05();
                }
                if (page > 5) {
                    page = 5;
                }
            } else if (endY - startY > 50) {
                //아래에서 위
                page--;
                if (page == 0) {
                    page = 1;
                }
                if (page == 1) {
                    document.getElementById("main_boxWrap").style.transform = "translate3d(0px, 0px, 0px)";
                    mainEventNo();
                    mainEvent01();
                }
                if (page == 2) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent02();
                }
                if (page == 3) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent03();
                }
                if (page == 4) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent04();
                }
                if (page == 5) {
                    $(".main_boxWrap").css({
                        "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                    });
                    mainEventNo();
                    mainEvent05();
                }
            }
        }

    });


    setTimeout(function() {
        $('.smile_line').attr('d', "M1,5.2 Q 5,8.5 9,5.2");
    }, 1000);
    $(".footer_scroll").on("click", function() {
        $(".main_box_li").scrollTop(0);
        if (page == 1) {
            mainEventNo();
            mainEvent02();
            $(".main_boxWrap").css({
                "transform": "translate3d(0px, -" + outerHeightWrap + "px, 0px)"
            });
        } else if (page == 2) {
            mainEventNo();
            mainEvent03();
            $(".main_boxWrap").css({
                "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
            });
        } else if (page == 3) {
            mainEventNo();
            mainEvent04();
            $(".main_boxWrap").css({
                "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
            });
        } else if (page == 4) {
            mainEventNo();
            mainEvent05();
            $(".main_boxWrap").css({
                "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
            });
        } else if (page == 5) {
            mainEventNo();
            mainEvent06();
            $(".main_boxWrap").css({
                "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
            });
        } else if (page == 6) {
            mainEventNo();
            mainEvent07();
            $(".main_boxWrap").css({
                "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
            });
        } else if (page == 7) {
            mainEventNo();
            mainEvent01();
            document.getElementById("main_boxWrap").style.transform = "translate3d(0px, 0px, 0px)";
        }
    });
    var height = $("body").height();
    $(".main_boxWrap").css("height", "" + height + "px");

    $(".main_header_menu_m").on("click", function() {
        $(".main_header_menu_m_bgWrap").addClass("main_header_menu_m_bgWrap_on");
        $(".main_header_menu_m_bg").addClass("main_header_menu_m_bg_on");
    });
    $(".main_header_menu_m_bg .close").on("click", function() {
        $(".main_header_menu_m_bgWrap").removeClass("main_header_menu_m_bgWrap_on");
        $(".main_header_menu_m_bg").removeClass("main_header_menu_m_bg_on");
    });
    $(".logo_btn").on("click", function() {
        mainEventNo();
        mainEvent01();
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, 0px, 0px)"
        });
    });
    $(".main_header_menu01").on("click", function() {
        mainEventNo();
        mainEvent05();
        $(".main_header_menu_m_bgWrap").removeClass("main_header_menu_m_bgWrap_on");
        $(".main_header_menu_m_bg").removeClass("main_header_menu_m_bg_on");
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
        });
        $(".main_box_li").scrollTop(0);
    });
    $(".main_header_menu02").on("click", function() {
        mainEventNo();
        mainEvent04();
        $(".main_header_menu_m_bgWrap").removeClass("main_header_menu_m_bgWrap_on");
        $(".main_header_menu_m_bg").removeClass("main_header_menu_m_bg_on");
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
        });
        $(".main_box_li").scrollTop(0);
    });
    $(".main_header_menu03").on("click", function() {
        mainEventNo();
        mainEvent06();
        $(".main_header_menu_m_bgWrap").removeClass("main_header_menu_m_bgWrap_on");
        $(".main_header_menu_m_bg").removeClass("main_header_menu_m_bg_on");
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
        });
        $(".main_box_li").scrollTop(0);
    });
    $(".main_header_menu04").on("click", function() {
        mainEventNo();
        mainEvent07();
        $(".main_header_menu_m_bgWrap").removeClass("main_header_menu_m_bgWrap_on");
        $(".main_header_menu_m_bg").removeClass("main_header_menu_m_bg_on");
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
        });
        $(".main_box_li").scrollTop(0);
    });
    $(".main_box_li_01_box01_btn").on("click", function() {
        mainEventNo();
        mainEvent06();
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
        });
    });

    $(".main_box_li_01_box02_btn").on("click", function() {
        mainEventNo();
        mainEvent06();
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
        });
    });
    $(".main_box02_left_btn").on("click", function() {
        mainEventNo();
        mainEvent06();
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
        });
    });

    $(".main_box02_right_btn ").on("click", function() {
        mainEventNo();
        mainEvent06();
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
        });
    });

    $(".header_btn_float").on("click", function() {
        mainEventNo();
        mainEvent06();
        $(".main_boxWrap").css({
            "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
        });
        $(".tablink").removeClass("tab_btn_on");
        $(".tablink03").addClass("tab_btn_on");
        $("#London").css("display", "none");
        $("#Paris").css("display", "none");
        $("#Tokyo").css("display", "block");
    });

    $(".popupWrapForm_btn01").on("click", function() {
        $(".popupWrapForm01").css("display", "block");
    });
    $(".popupWrapForm_btn02").on("click", function() {
        $(".popupWrapForm02").css("display", "block");
    });
    $(".popupWrapForm_btn03").on("click", function() {
        $(".popupWrapForm03").css("display", "block");
    });
    $(".link01").on("click", function() {
        $(".popupWrap01").css("display", "block");
    });
    $(".link02").on("click", function() {
        $(".popupWrap02").css("display", "block");
    });
    $(".link03").on("click", function() {
        $(".popupWrap03").css("display", "block");
    });
    $(".popup_box_close").on("click", function() {
        $(".popupWrap").css("display", "none");
        $('.input_text').val('');
    });
    $(".main_box_li_01_box01").on("click", function() {
        $box1.stop();
        $box2.stop();
        document.getElementById("main_box_li_01_box01").style.zIndex = 3;
        document.getElementById("main_box_li_01_box02").style.zIndex = 1;
        loopBoat();
        loopBoat02();

    });
    $(".main_box_li_01_box02").on("click", function() {
        $box1.stop();
        $box2.stop();
        document.getElementById("main_box_li_01_box01").style.zIndex = 1;
        document.getElementById("main_box_li_01_box02").style.zIndex = 3;
        loopBoat();
        loopBoat02();

    });

    var mainEvent01 = function mainEvent01() {
        page = 1;
        $(".main_header").removeClass("main_header_white");
        $(".footer_scroll .text").html("SCROLL DOWN");
        $(".footer_scroll .text").addClass("text_eng");
    }
    var mainEvent02 = function mainEvent02() {
        page = 2;
        $(".footer_scroll .text").html("서비스 안내");
        $(".footer_scroll .text").removeClass("text_eng");

        $(".main_header").addClass("main_header_white");
        $(".main_box li:nth-child(2) .main_box_li_sub_title").addClass("title_eff");
        $(".main_box li:nth-child(2) .main_box_li_02_box").addClass("main_box_li_02_box_eff");
        $(".main_box li:nth-child(2) .main_box_li_02_box_text").addClass("main_box_li_02_box_text_eff");
    }
    var mainEvent03 = function mainEvent03() {
        page = 3;
        $(".footer_scroll .text").html("이용절차 및 비용안내");
        $(".footer_scroll .text").removeClass("text_eng");

        $(".main_header").removeClass("main_header_white");
        $(".main_box li:nth-child(3) .main_box_li_sub_title").addClass("title_eff");
        $(".main_box li:nth-child(3) .main_box_li_02_box").addClass("main_box_li_02_box_eff");
        $(".main_box li:nth-child(3) .main_box_li_02_box_text").addClass("main_box_li_02_box_text_eff");
    }
    var mainEvent04 = function mainEvent04() {
        page = 4;
        $("body").addClass("body_overflow");

        $(".footer_scroll .text").html("법률사무소 화윤 소개");
        $(".footer_scroll .text").removeClass("text_eng");

        $(".main_header").addClass("main_header_white");
        $(".main_box li:nth-child(4) .main_box_li_sub_title").addClass("title_eff");

        $(".main_box li:nth-child(4) .main_box_li_list01 .title").addClass("title_eff");
        $(".main_box li:nth-child(4) .main_box_li_list01 .list li").addClass("main_box_li_list01_list01_eff");
        $(".main_box li:nth-child(4) .main_box_li_list01 .line_arrowWrap").addClass("line_arrowWrap_eff");
        $(".main_box li:nth-child(4) .main_box_li_list01 .list li .step").addClass("main_box_li_list01_list01_top");
        $(".main_box li:nth-child(4) .main_box_li_list01 .list li img").addClass("main_box_li_list01_list01_top");
        $(".main_box li:nth-child(4) .main_box_li_list01 .list li .text").addClass("main_box_li_list01_list01_top");

        $(".main_box li:nth-child(4) .main_box_li_list02 .title").addClass("title_eff");
        $(".main_box li:nth-child(4) .main_box_li_list02 .list li").addClass("main_box_li_list02_list01_eff");
        $(".main_box li:nth-child(4) .main_box_li_list02 .line_arrowWrap").addClass("line_arrowWrap_eff");
        $(".main_box li:nth-child(4) .main_box_li_list02 .list li .step").addClass("main_box_li_list02_list01_top");
        $(".main_box li:nth-child(4) .main_box_li_list02 .list li img").addClass("main_box_li_list02_list01_top");
        $(".main_box li:nth-child(4) .main_box_li_list02 .list li .text").addClass("main_box_li_list02_list01_top");
    }
    var mainEvent05 = function mainEvent05() {
        page = 5;

        $(".footer_scroll .text").html("신청서 작성");
        $(".footer_scroll .text").removeClass("text_eng");

        $(".main_header").removeClass("main_header_white");
        $(".main_box li:nth-child(5) .main_box_li_sub_title").addClass("title_eff");

        $(".main_box li:nth-child(5) .main_box_li04_bg").addClass("main_box_li04_bg_eff");
        $(".main_box li:nth-child(5) .main_box_li04_img01").addClass("main_box_li04_img01_eff");
        $(".main_box li:nth-child(5) .main_box_li04_img02").addClass("main_box_li04_img02_eff");
        $(".main_box li:nth-child(5) .main_box_li04_text01").addClass("main_box_li04_text01_eff");
        $(".main_box li:nth-child(5) .main_box_li04_text02").addClass("main_box_li04_text02_eff");
        $(".main_box li:nth-child(5) .main_box_li04_btn").addClass("main_box_li04_btn_eff");
    }

    var mainEvent06 = function mainEvent06() {
        page = 6;
        $(".footer_scroll .text").html("상담 문의");
        $(".footer_scroll .text").removeClass("text_eng");

        $(".main_header").addClass("main_header_white");
        $(".main_box li:nth-child(6) .main_box_li_sub_title").addClass("title_eff");
    }
    var mainEvent07 = function mainEvent07() {
        page = 7;
        $(".footer_scroll .text").html("맨위로");
        $(".footer_scroll .text").removeClass("text_eng");

        $(".main_header").removeClass("main_header_white");
        $(".main_box li:nth-child(7) .main_box_li_sub_title").addClass("title_eff");
    }
    var mainEventNo = function mainEventNo() {
        $(".main_box li:nth-child(2) .main_box_li_sub_title").removeClass("title_eff");
        $(".main_box li:nth-child(2) .main_box_li_02_box").removeClass("main_box_li_02_box_eff");
        $(".main_box li:nth-child(2) .main_box_li_02_box_text").removeClass("main_box_li_02_box_text_eff");

        $(".main_box li:nth-child(3) .main_box_li_sub_title").removeClass("title_eff");
        $(".main_box li:nth-child(3) .main_box_li_list01 .title").removeClass("title_eff");
        $(".main_box li:nth-child(3) .main_box_li_list01 .list li").removeClass("main_box_li_list01_list01_eff");
        $(".main_box li:nth-child(3) .main_box_li_list01 .line_arrowWrap").removeClass("line_arrowWrap_eff");
        $(".main_box li:nth-child(3) .main_box_li_list01 .list li .step").removeClass("main_box_li_list01_list01_top");
        $(".main_box li:nth-child(3) .main_box_li_list01 .list li img").removeClass("main_box_li_list01_list01_top");
        $(".main_box li:nth-child(3) .main_box_li_list01 .list li .text").removeClass("main_box_li_list01_list01_top");

        $(".main_box li:nth-child(3) .main_box_li_list02 .title").removeClass("title_eff");
        $(".main_box li:nth-child(3) .main_box_li_list02 .list li").removeClass("main_box_li_list02_list01_eff");
        $(".main_box li:nth-child(3) .main_box_li_list02 .line_arrowWrap").removeClass("line_arrowWrap_eff");
        $(".main_box li:nth-child(3) .main_box_li_list02 .list li .step").removeClass("main_box_li_list02_list01_top");
        $(".main_box li:nth-child(3) .main_box_li_list02 .list li img").removeClass("main_box_li_list02_list01_top");
        $(".main_box li:nth-child(3) .main_box_li_list02 .list li .text").removeClass("main_box_li_list02_list01_top");

        $(".main_box li:nth-child(4) .main_box_li_sub_title").removeClass("title_eff");
        $(".main_box li:nth-child(4) .main_box_li04_bg").removeClass("main_box_li04_bg_eff");
        $(".main_box li:nth-child(4) .main_box_li04_img01").removeClass("main_box_li04_img01_eff");
        $(".main_box li:nth-child(4) .main_box_li04_img02").removeClass("main_box_li04_img02_eff");
        $(".main_box li:nth-child(4) .main_box_li04_text01").removeClass("main_box_li04_text01_eff");
        $(".main_box li:nth-child(4) .main_box_li04_text02").removeClass("main_box_li04_text02_eff");
        $(".main_box li:nth-child(4) .main_box_li04_img01").removeClass("main_box_li04_img01_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_img02").removeClass("main_box_li04_img02_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_text01").removeClass("main_box_li04_text01_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_text02").removeClass("main_box_li04_text02_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_btn").removeClass("main_box_li04_btn_eff");

        $(".main_box li:nth-child(5) .main_box_li_sub_title").removeClass("title_eff");
        $(".main_box li:nth-child(6) .main_box_li_list02 .title").removeClass("title_eff");
        $(".main_box li:nth-child(7) .main_box_li_list02 .title").removeClass("title_eff");
    }

    /* menu_color03 스크롤 할때 마다 효과 재실행 방지 */
    var deltaScroll = 150, //스크롤 끝나고 재실행하는 지연 시간 설정
        timer = null;
    $(window).on('scroll', function() { // 스크롤 실행시 시간 설정으로 중복 효과 차단
        clearTimeout(timer);
        timer = setTimeout(scrollDone, deltaScroll);
    });
    window.addEventListener('scroll', function() {
        clearTimeout(timer);
        timer = setTimeout(scrollDone, deltaScroll);
    }, false);

    var elm = ".main_box_li";
    $(elm).each(function(index) {
        $(this).on("mousewheel DOMMouseScroll", function(e) {
            var scrollTop = $(".main_box_li04").scrollTop();
            var widthTrue = 0;
            if ($(window).width() > 768) {
                widthTrue = 1;
            } else {
                widthTrue = 0;
            }
            var widthTrue02 = 0;
            if ($(window).width() > 1200) {
                widthTrue02 = 1;
            } else {
                widthTrue02 = 0;
            }
            var widthTrue03 = 0;
            if ($(window).width() > 1200) {
                widthTrue03 = 1;
            } else {
                widthTrue03 = 0;
            }

            if (page == 4) {
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                var outerHeight = $(".main_box_li").outerHeight(true);
                var elmSelecterLength = $(elm).length;
                var mousewheel = outerHeight * elmSelecterLength;
                if (delta > 0) {
                    var scrollTop = $(".main_box_li04").scrollTop();
                    if (scrollTop == 0) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 3;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent03();
                        }
                    }
                } else {
                    var scrollTop = $(".main_box_li04").scrollTop();
                    var innerHeight = $(".main_box_li04").innerHeight();
                    var scrollHeight = $(".main_box_li04").prop('scrollHeight');
                    if (scrollTop + innerHeight >= scrollHeight) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 5;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent05();
                        }
                    }
                }
            } else if (page == 6 && widthTrue == 0) {
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                var outerHeight = $(".main_box_li").outerHeight(true);
                var elmSelecterLength = $(elm).length;
                var mousewheel = outerHeight * elmSelecterLength;
                if (delta > 0) {
                    var scrollTop = $(".main_box_li06").scrollTop();
                    if (scrollTop == 0) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 5;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent05();
                        }
                    }
                } else {
                    var scrollTop = $(".main_box_li06").scrollTop();
                    var innerHeight = $(".main_box_li06").innerHeight();
                    var scrollHeight = $(".main_box_li06").prop('scrollHeight');

                    if (scrollTop + innerHeight >= scrollHeight) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 7;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent07();
                        }
                    }
                }
            } else if (page == 7 && widthTrue02 == 0) {
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                var outerHeight = $(".main_box_li").outerHeight(true);
                var elmSelecterLength = $(elm).length;
                var mousewheel = outerHeight * elmSelecterLength;
                if (delta > 0) {
                    var scrollTop = $(".main_box_li07").scrollTop();
                    if (scrollTop == 0) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 6;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent06();
                        }
                    }
                } else {
                    var scrollTop02 = $(".main_box_li07").scrollTop();
                    var innerHeight02 = $(".main_box_li07").innerHeight();
                    var scrollHeight02 = $(".main_box_li07").prop('scrollHeight');

                    if (scrollTop02 + innerHeight02 >= scrollHeight02) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 7;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent07();
                        }
                    }
                }
            } else if (page == 5 && widthTrue03 == 0) {
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                var outerHeight = $(".main_box_li").outerHeight(true);
                var elmSelecterLength = $(elm).length;
                var mousewheel = outerHeight * elmSelecterLength;
                if (delta > 0) {
                    var scrollTop = $(".main_box_li05").scrollTop();
                    if (scrollTop == 0) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 4;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent04();
                        }
                    }
                } else {
                    var scrollTop03 = $(".main_box_li05").scrollTop();
                    var innerHeight03 = $(".main_box_li05").innerHeight();
                    var scrollHeight03 = $(".main_box_li05").prop('scrollHeight');

                    if (scrollTop03 + innerHeight03 >= scrollHeight03) {
                        clearTimeout(timer);
                        timer = setTimeout(mousewheelCntDown, 150)

                        function mousewheelCntDown() {
                            page = 6;
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent06();
                        }
                    }
                }
            } else {
                e.preventDefault();
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                    if (window.opera) delta = -delta;
                } else if (event.detail)
                    delta = -event.detail / 3;
                var moveTop = $(window).scrollTop();
                var elmSelecter = $(elm).eq(index);
                var outerHeight = $(".main_box_li").outerHeight(true);
                var elmSelecterLength = $(elm).length;
                var mousewheel = outerHeight * elmSelecterLength;
                if (delta < 0) {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150);

                    function mousewheelCntDown() {
                        page++;
                        if (page == 1) {
                            document.getElementById("main_boxWrap").style.transform = "translate3d(0px, 0px, 0px)";
                            mainEventNo();
                            mainEvent01();
                        }
                        if (page == 2) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent02();
                        }
                        if (page == 3) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent03();
                        }
                        if (page == 4) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent04();
                        }
                        if (page == 5) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent05();
                        }
                        if (page == 6) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent06();
                        }
                        if (page == 7) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent07();
                        }
                        if (page > 7) {
                            page = 7;
                        }
                    }
                } else {
                    clearTimeout(timer);
                    timer = setTimeout(mousewheelCntDown, 150);

                    function mousewheelCntDown() {
                        page--;
                        if (page == 1) {
                            document.getElementById("main_boxWrap").style.transform = "translate3d(0px, 0px, 0px)";
                            mainEventNo();
                            mainEvent01();
                        }
                        if (page == 2) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent02();
                        }
                        if (page == 3) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap02 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent03();
                        }
                        if (page == 4) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap03 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent04();
                        }
                        if (page == 5) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap04 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent05();
                        }
                        if (page == 6) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap05 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent06();
                        }
                        if (page == 7) {
                            $(".main_boxWrap").css({
                                "transform": "translate3d(0px, -" + outerHeightWrap06 + "px, 0px)"
                            });
                            mainEventNo();
                            mainEvent07();
                        }
                        if (page < 1) {
                            page = 1;
                        }
                    }
                }
            }
        });
    });


    var main_box_li04_btn = 0;
    $(".main_box_li04_btn").on("click", function() {
        $(".main_box li:nth-child(4) .main_box_li04_img01").addClass("main_box_li04_img01_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_img02").addClass("main_box_li04_img02_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_text01").addClass("main_box_li04_text01_eff_delay");
        $(".main_box li:nth-child(4) .main_box_li04_text02").addClass("main_box_li04_text02_eff_delay");
        if (main_box_li04_btn == 0) {
            $(".main_box_li04_img01").hide();
            $(".main_box_li04_text01").hide();
            $(".main_box_li04_img02").show();
            $(".main_box_li04_text02").show();
            main_box_li04_btn = 1;
        } else if (main_box_li04_btn == 1) {
            $(".main_box_li04_img02").hide();
            $(".main_box_li04_text02").hide();
            $(".main_box_li04_img01").show();
            $(".main_box_li04_text01").show();
            main_box_li04_btn = 0;
        }
    });

    var mainBoxLiList01 = 0;
    $(".arrow_right01").on("click", function() {
        var scrollBoxWidth = $(".scroll_box").width();
        if (scrollBoxWidth == 710) {
            mainBoxLiList01++;
            if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 > 2) {
                mainBoxLiList01 = 2;
            }
        } else if (scrollBoxWidth == 570) {
            mainBoxLiList01++;
            if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 3) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 > 3) {
                mainBoxLiList01 = 3;
            }
        } else if (scrollBoxWidth == 430) {
            mainBoxLiList01++;
            if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 3) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 4) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 > 4) {
                mainBoxLiList01 = 4;
            }
        } else if (scrollBoxWidth == 290) {
            mainBoxLiList01++;
            if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 3) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 4) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 5) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-700px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 > 5) {
                mainBoxLiList01 = 5;
            }
        }

    });
    $(".arrow_left01").on("click", function() {
        var scrollBoxWidth = $(".scroll_box").width();
        if (scrollBoxWidth == 710) {
            if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 < 1) {
                mainBoxLiList01 = 1;
            }
            mainBoxLiList01--;
        } else if (scrollBoxWidth == 570) {
            if (mainBoxLiList01 == 3) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 < 1) {
                mainBoxLiList01 = 1;
            }
            mainBoxLiList01--;
        } else if (scrollBoxWidth == 430) {
            if (mainBoxLiList01 == 4) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 3) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 < 1) {
                mainBoxLiList01 = 1;
            }
            mainBoxLiList01--;
        } else if (scrollBoxWidth == 290) {
            if (mainBoxLiList01 == 5) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 4) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 3) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 2) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 == 1) {
                $(".main_box_li_list01 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList01 < 1) {
                mainBoxLiList01 = 1;
            }
            mainBoxLiList01--;
        }
    });


    var mainBoxLiList02 = 0;
    $(".arrow_right02").on("click", function() {
        var scrollBoxWidth = $(".scroll_box").width();
        if (scrollBoxWidth == 710) {
            mainBoxLiList02++;
            if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 > 3) {
                mainBoxLiList02 = 3;
            }
        } else if (scrollBoxWidth == 570) {
            mainBoxLiList02++;
            if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 4) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 > 4) {
                mainBoxLiList02 = 4;
            }
        } else if (scrollBoxWidth == 430) {
            mainBoxLiList02++;
            if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 4) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 5) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-700px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 > 5) {
                mainBoxLiList02 = 5;
            }
        } else if (scrollBoxWidth == 290) {
            mainBoxLiList02++;
            if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 4) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 5) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-700px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 6) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-840px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 > 6) {
                mainBoxLiList02 = 6;
            }
        }

    });
    $(".arrow_left02").on("click", function() {
        var scrollBoxWidth = $(".scroll_box").width();
        if (scrollBoxWidth == 710) {
            if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 < 1) {
                mainBoxLiList02 = 1;
            }
            mainBoxLiList02--;
        } else if (scrollBoxWidth == 570) {
            if (mainBoxLiList02 == 4) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 < 1) {
                mainBoxLiList02 = 1;
            }
            mainBoxLiList02--;
        } else if (scrollBoxWidth == 430) {
            if (mainBoxLiList02 == 5) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 4) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 < 1) {
                mainBoxLiList02 = 1;
            }
            mainBoxLiList02--;
        } else if (scrollBoxWidth == 290) {
            if (mainBoxLiList02 == 6) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-700px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 5) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-560px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 4) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-420px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 3) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-280px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 2) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(-140px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 == 1) {
                $(".main_box_li_list02 .list").css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });
            } else if (mainBoxLiList02 < 1) {
                mainBoxLiList02 = 1;
            }
            mainBoxLiList02--;
        }
    });

    $(".radio_input").on("click", function() {
        if ($('input:radio[id=radio01_01]').is(':checked')) {
            $('.radio01_02_text').hide();
            $('.radio01_03_text').hide();
            $('.radio01_04_text').hide();
            $('.radio01_01_text').show();
        } else if ($('input:radio[id=radio01_02]').is(':checked')) {
            $('.radio01_01_text').hide();
            $('.radio01_03_text').hide();
            $('.radio01_04_text').hide();
            $('.radio01_02_text').show();
        } else if ($('input:radio[id=radio01_03]').is(':checked')) {
            $('.radio01_01_text').hide();
            $('.radio01_02_text').hide();
            $('.radio01_04_text').hide();
            $('.radio01_03_text').show();
        } else if ($('input:radio[id=radio01_04]').is(':checked')) {
            $('.radio01_01_text').hide();
            $('.radio01_02_text').hide();
            $('.radio01_03_text').hide();
            $('.radio01_04_text').show();
        }

        if ($('input:radio[id=radio02_01]').is(':checked')) {
            $('.radio02_02_text').hide();
            $('.radio02_03_text').hide();
            $('.radio02_01_text').show();
            $('.radio02_04_text').hide();
        } else if ($('input:radio[id=radio02_02]').is(':checked')) {
            $('.radio02_01_text').hide();
            $('.radio02_03_text').hide();
            $('.radio02_02_text').show();
            $('.radio02_04_text').hide();
        } else if ($('input:radio[id=radio02_03]').is(':checked')) {
            $('.radio02_01_text').hide();
            $('.radio02_02_text').hide();
            $('.radio02_03_text').show();
            $('.radio02_04_text').hide();
        } else if ($('input:radio[id=radio02_04]').is(':checked')) {
            $('.radio02_01_text').hide();
            $('.radio02_02_text').hide();
            $('.radio02_03_text').hide();
            $('.radio02_04_text').show();
        }
    });
    var fileTarget01 = $('.filebox #ex_filename01');
    fileTarget01.on('change', function() {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name01').val(filename);
    });

    var fileTarget02 = $('.filebox #ex_filename02');
    fileTarget02.on('change', function() {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name02').val(filename);
    });

    var fileTarget03 = $('.filebox #ex_filename03');
    fileTarget03.on('change', function() {
        if (window.FileReader) {
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload-name03').val(filename);
    });


}