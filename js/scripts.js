$(document).ready(function () {
    $('.header__lang select').styler();
    $('.home-intro__down').on('click', function (e) {
        e.preventDefault();
        const id = $(this).attr('href');
        console.log(id);
        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);
    });
    $('.accordion__text').eq(0).show();
    $('.accordion__title').each(function () {

        $(this).on('click', function () {
            const title = $(this);
            const item = title.closest('.accordion__item');
            const text = item.find('.accordion__text');
            if (item.hasClass('active')) {
                item.removeClass('active');
                text.slideUp();
            } else {
                removeActive();
                item.addClass('active');
                text.slideDown();
            }
        });
    });
    function removeActive() {
        $('.accordion__item').removeClass('active');
        $('.accordion__text').slideUp();
    }
});
