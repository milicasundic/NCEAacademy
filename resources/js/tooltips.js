$('nav ul li').hover(function () {
    $(this).children(":first").next().show();
}, function () {
    $(this).children(":first").next().hide();
});

$('.tooltip-main').each(function () {

    let eWidth = $(this).outerWidth();
    let pWidth = $(this).parent().outerWidth();

    let left = eWidth > pWidth ? '-' + (eWidth - pWidth) / 2 : (pWidth - eWidth) / 2;

    $(this).css('left', left + 'px');
});