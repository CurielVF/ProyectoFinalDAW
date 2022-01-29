$(".clickable-row").click(function () {
    window.location.href = "/";
});

$('.clickable-row').css('cursor', 'pointer');

$(".clickable-row").hover(function () {
    $(this).css("background-color", "rgb(204, 204, 204)");
}, function () {
    $(this).css("background-color", "white");
});