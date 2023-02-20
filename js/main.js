$(".summary_position>div.on .sm_list").slideDown();
$('.summary_position>div').click(function () {
    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $(this).find(".sm_list").slideUp();
    } else {
        $(this).addClass("on");
        $(this).find(".sm_list").slideDown();
    };
});