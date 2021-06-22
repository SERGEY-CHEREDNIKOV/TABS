window.addEventListener('load', function () {

    "use strict";


    // ---------- slider ------------    


    $('.slider-tab').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slider-tab__slider-btn  slider-tab__slider-btnprev"><img src="images/slider-btn-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button class="slider-tab__slider-btn  slider-tab__slider-btnnext"><img src="images/slider-btn-right.svg" alt="стрелка вправо"></button>',
        responsive: [
            {
                breakpoint: 881,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],
    });



    // ---------- tabs ------------   

    const toSwitchTabs = (triggerBtn, content, activeBtn, activeContent) => {
        const tabTrigger = document.querySelectorAll(triggerBtn);
        const tabContent = document.querySelectorAll(content);

        tabTrigger.forEach((item) => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                const id = e.target.getAttribute('href').replace('#', '');

                tabTrigger.forEach((child) => child.classList.remove(activeBtn));
                tabContent.forEach((child) => child.classList.remove(activeContent));

                item.classList.add(activeBtn);
                document.getElementById(id).classList.add(activeContent);
            });
        });
    };

    toSwitchTabs('.tabs__triggers-item', '.tabs__content-item', 'tabs__triggers-item--active', 'tabs__content-item--active');
});




