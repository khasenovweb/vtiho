$(document).ready(function () {
    $("img").Lazy();
    $(".hero__slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        lazyLoad: true,
        mouseDrag: false,
    });

    $(".product__content__galery ").owlCarousel({
        items: 1,
        autoplay: true,
        lazyLoad: true,
    });

    $(".comand__slider").owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        loop: true,
        navText: [
            '<img src="img/comand__slider__prev.svg">',
            '<img src="img/comand__slider__next.svg" >',
        ],
        responsive: {
            0: {
                items: 1,
            },
            900: {
                items: 4,
            },
        },
    });

    $(".section-5__tabs__content__zamer__galery").owlCarousel({
        items: 1,
    });
    //Выбор города
    $('[data-click="select_city"]').click(function () {
        $(".hero__city__select__arrow").toggleClass(
            "hero__city__select__arrow__active"
        );
        $(".hero__city__select__submenu").toggleClass(
            "hero__city__select__submenu__active"
        );
        $(".hero__city__working").toggleClass("hero__city__working__hide");
    });
    //END Выбор города

    //Миниатюры галереи
    $(".section-5__tabs__content__zamer__galery__big").each(function (i, el) {
        console.log($(el).attr("data-thumb"));
        $(".section-5__tabs__content__zamer__galery .owl-dot")
            .eq(i)
            .css("background-image", "url(" + $(el).attr("data-thumb") + ")");
    });
    //END Миниатюры галереи

    //Миниатюры галереи в карточке товара
    $(".product__content__galery__item").each(function (i, el) {
        console.log($(el).attr("data-thumb"));
        $(".product__content__galery .owl-dot")
            .eq(i)
            .css("background-image", "url(" + $(el).attr("data-thumb") + ")");
    });
    //END Миниатюры галереи в карточке товара

    //tabs
    $(".section-5__tab__wrapper").click(function () {
        var id = $(this).attr("data-tab-link");
        $(".section-5__tabs__content__item").hide();
        $('[data-tab="' + id + '"]').show();

        $(".section-5__tab__wrapper").removeClass(
            "section-5__tab__wrapper__active"
        );
        $(this).addClass("section-5__tab__wrapper__active");
    });
    //END tabs

    //Modal
    $("[data-modal-link]").click(function () {
        var data__modal = $(this).attr("data-modal");
        $('[data-modal="' + data__modal + '"').show();
    });
    $(".modal__close").click(function () {
        $(".modal__wrapper").hide();
    });
    //END Modal

    //Calc
    function calc() {
        var type__build = $('.calc__form select[name="type__build"]').val();
        var remont = $('.calc__form select[name="remont"]').val();
        var type__sound = $('.calc__form select[name="type__sound"]').val();
        var type__priority = $(
            '.calc__form select[name="type__priority"]'
        ).val();
        var type__problem = $('.calc__form select[name="type__problem"]').val();
        var s = $('.calc__form input[name="s"]').val();
        var k = $('.calc__form input[name="k"]').val();
        //var sum = type__build * remont * type__sound * type__priority * type__problem * s * k;
        var sum =
            Number(type__build) *
            Number(remont) *
            Number(type__sound) *
            Number(type__priority) *
            Number(type__problem) *
            Number(s) *
            Number(k);
        if ($('.calc__form input[name="montazh"]').prop("checked") === true) {
            var percent = $('.calc__form input[name="montazh"]').attr(
                "data-percent"
            );
            var alert_id = $('.calc__form input[name="montazh"]').attr(
                "data-change-alert"
            );
            var sum = sum - (sum * percent) / 100;
            $('[data-alert="' + alert_id + '"]').show();
        }
        if ($('.calc__form input[name="montazh"]').prop("checked") === false) {
            var alert_id = $('.calc__form input[name="montazh"]').attr(
                "data-change-alert"
            );
            $('[data-alert="' + alert_id + '"]').hide();
        }
        console.log(sum);
        $("[data-calc-result]").text(
            String(Math.round(parseInt(sum) / 1000) * 1000).replace(
                /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                "$1" + " "
            ) + " P"
        );
    }

    calc();

    $(".calc__form select").on("change", function () {
        calc();
    });

    $(".calc__form input").on("input", function () {
        calc();
    });

    //END Calc

    $(".mobile__head__hamburger").click(function () {
        $(this).toggleClass("mobile__head__hamburger__active");
        $(".mobile__nav").toggleClass("mobile__nav__show");
    });

    $(".mobile__head__sity").click(function () {
        $(".mobile__select__city").toggleClass("mobile__select__city__show");
    });

    $.validator.addMethod(
        "phone",
        function (value) {
            return value.replace(/\D+/g, "").length >= 11;
        },
        "Введите номер телефона полностью"
    );

    $("form[data-validate]").each(function (i, el) {
        $(el).validate({
            rules: {
                phone: "phone",
            },
        });
    });

    $.validator.addMethod(
        "s",
        function (value) {
            return Number(value) > 0;
        },
        "Площадь квартиры должна быть больше 0"
    );

    $("form[data-validate-calc]").validate({
        rules: {
            phone: "phone",
            s: "s",
        },
    });

    $("input[data-mask='phone']").mask("+7 (999) 999-9999", {
        autoclear: false,
    });

    $("[data-click-alert-close]").click(function () {
        var id = $(this).attr("data-click-alert-close");
        $('[data-alert="' + id + '"]').hide();
    });

    $(".popup__form__wrapper").click(function () {
        if ($(event.target).closest(".popup__form").length) return;
        $(this).hide();
    });

    setInterval(function () {
        var phone_clone = $(".footer__phone").attr("href");
        $(".mobile__head__phone").attr("href", phone_clone);
    }, 5000);

    $("[data-timeout-hide]").each(function (i, el) {
        var time = $(el).attr("data-timeout-hide");
        setTimeout(function () {
            $(el).hide();
        }, time);
    });

    function hero() {
        if ($(window).width() > 900) {
            var bg = $(".hero_2").attr("data-bg-desktop");
            $(".hero_2").css("background-image", "url(" + bg + ")");
            console.log(bg);
        }
        if ($(window).width() <= 900) {
            var bg = $(".hero_2").attr("data-bg-mobile");
            $(".hero_2").css("background-image", "url(" + bg + ")");
        }
    }
    hero();
    $(window).resize(function () {
        hero();
    });
});
