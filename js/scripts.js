$(document).ready(function () {
    const tabs = document.querySelector('.tabs');
    if (tabs) {
        isTabs();
    }
    function isTabs() {

        const tabs_items = document.querySelectorAll('.tabs__item');
        const tabs_wraps = document.querySelectorAll('.tabs__wrap');
        tabs_items.forEach((item, index) => {
            item.addEventListener('click', function () {
                resetTabsItemsActive();
                resetTabsContentActive();
                item.classList.add('active');
                setTabsWrapActive(index);
            })
        })
        function resetTabsItemsActive() {
            tabs_items.forEach((item, index) => {
                item.classList.remove('active');
            })
        }
        function resetTabsContentActive() {
            tabs_wraps.forEach((item, index) => {
                item.classList.remove('active');
            })
        }
        function setTabsWrapActive(index) {
            tabs_wraps[index].classList.add('active');
        }
    }
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
    const slider = $(".studies__wrap")

    if (slider) {
        studiesSlider()
    }

    function studiesSlider() {
        slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1000,
            arrows: false,
            dots: false,
            variableWidth: true
        })
        const studies__arrow_prev = $('.studies__arrow--prev')
        const studies__arrow_next = $('.studies__arrow--next')
        studies__arrow_prev.on('click', function () {
            slider.slick('slickPrev')
        })
        studies__arrow_next.on('click', function () {
            slider.slick('slickNext')
        })
    }

});

