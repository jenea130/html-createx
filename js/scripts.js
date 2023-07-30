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
});
