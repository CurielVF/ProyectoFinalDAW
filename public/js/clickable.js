$(".clickable-row").click(function () {
    window.location.href = "/";
});

$('.clickable-row').css('cursor', 'pointer');

$(".clickable-row").hover(function () {
    $(this).css("background-color", "#b8dbf0");
}, function () {
    $(this).css("background-color", "white");
});