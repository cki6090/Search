
//북마크 on_off
$('.Bookmark').click(function () {
    $(this).toggleClass("on");
});

//서마리 슬라이드 
$(".summary_position>div.on .sm_list").slideDown();
$('.summary_position .sm_tit').click(function () {
    if ($(this).parent().hasClass("on")) {
        $(this).parent().removeClass("on");
        $(this).next(".sm_list").slideUp();
    } else {
        $(this).parent().addClass("on");
        $(this).next(".sm_list").slideDown();
    };
});

//체크박스 체크
$(document).ready(function () {
    $('input[type=checkbox].cnw').change(function () {
        if ($(this).is(':checked')) {
            $(this).parents(".al_list").addClass("on");
        }
        else {
            $(this).parents(".al_list").removeClass("on");
        }
    });
});


//슬라이드 토글
$('.add_info .al_tit').click(function () {
    $(this).next(".alc_wrap").slideToggle(200);
    $(this).toggleClass("on");
});


//인풋
$(document).on('keyup', "[type=text]", function (e) {
    if ($(this).val() > "") {
        $(this).siblings(".input_ck").remove();
        $(this).after("<div class='input_ck'></div>");
    } else {
        $(this).siblings(".input_ck").remove();
    }
});

$(document).on('click', ".input_ck", function (e) {
    $(this).siblings(".input_st, [type=text]").val("");
    $(this).parents(".search_inner").css({ "border": "1px solid #CED4DB" });
    $(this).siblings(".input_st").css({ "border": "none" });
    $(this).remove();
});

$(document).on('focusout', ".input_wrap [type=text], [type=password], [type=number], textarea", function (e) {
    if ($(this).val().length != 0) { // 값이 있을때 
        $(this).css({ "border": "1.5px solid #2C51BF" });
    } else { // 값이 없을때
        $(this).css({ "border": "none" });
    }
});

$(document).on('keyup', ".search .search_inner input", function (e) {
    if ($(this).val() > "") {
        $(this).parents(".search_inner").css({ "border": "1px solid #2C51BF" });
    } else {
        $(this).parents(".search_inner").css({ "border": "1px solid #CED4DB" });
    }
});

