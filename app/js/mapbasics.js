$(document).ready(function(){
    //==============Карта с фильтром=================
    ymaps.ready(init);
    function init() {
        //Карта в блоке контактов см. скриншот по ссылке https://prnt.sc/r2oup7
        var myMap2 = new ymaps.Map("reviews__contacts__map", {
                center: [55.159897, 61.402554],
                zoom: 10
            });

            var myPlacemark_1_1 = new ymaps.Placemark([ 55.152557, 61.411573],{
                    balloonContentHeader: "Название объекта",
                    balloonContentBody: 'Описание объекта',
                    balloonContentFooter: "",
                    hintContent: "Кликните для более подробной информации"
                });

                myMap2.geoObjects.add(myPlacemark_1_1);
            
    }



//Карта с маркерами
ymaps.ready(['Panel']).then(function () {
    var map = new ymaps.Map("map", {
        center: [55.733, 37.588],
        zoom: 10,
        controls: []
    });


    // Создадим и добавим панель на карту.
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
        float: 'left'
    });


    // Создадим коллекцию геообъектов.
    var nashi = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#3b5998'
    });
    var review = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#3b5998'
    });
    var expertise = new ymaps.GeoObjectCollection(null, {
        // Запретим появление балуна.
        hasBalloon: false,
        iconColor: '#3b5998'
    });


//=============================================Вывод самих меток на карту =============================================//

    //Наши
    nashi
        .add(new ymaps.Placemark([55.733838, 37.588100], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Звукоизоляция потолка (детский плач)</div> <div class="mappanel__content1"> <div class="mappanel__content1__left"> <div class="mappanel__content1__text"> <p>Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги</p> </div> <div class="mappanel__content1__footer"> <div class="mappanel__content1__readall">Читать полностью</div> <ul class="mappanel__content1__persone"> <li class="mappanel__content1__persone__name">Иван Иваныч</li> <li class="mappanel__content1__persone__loc">ЖК Ньютон</li> </ul> </div> </div> <div class="mappanel__content1__right"> <div class="mappanel__content1__right__slider owl-carousel"> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> </div> </div> <div class="mappanel__content1__audio"> <audio controls preload="metadata"> <source src="audio/audio.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. </audio> </div> </div> </div> '
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__red.png',
            iconImageSize: [32, 53],
        }))
        .add(new ymaps.Placemark([55.758240, 37.678523], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Звукоизоляция потолка (детский плач)</div> <div class="mappanel__content1"> <div class="mappanel__content1__left"> <div class="mappanel__content1__text"> <p>Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги</p> </div> <div class="mappanel__content1__footer"> <div class="mappanel__content1__readall">Читать полностью</div> <ul class="mappanel__content1__persone"> <li class="mappanel__content1__persone__name">Иван Иваныч</li> <li class="mappanel__content1__persone__loc">ЖК Ньютон</li> </ul> </div> </div> <div class="mappanel__content1__right"> <div class="mappanel__content1__right__slider owl-carousel"> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> </div> </div> <div class="mappanel__content1__audio"> <audio controls preload="metadata"> <source src="audio/audio.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. </audio> </div> </div> </div> '
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__red.png',
            iconImageSize: [32, 53],
        }))
        .add(new ymaps.Placemark([55.693784, 37.564942], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Звукоизоляция потолка (детский плач)</div> <div class="mappanel__content1"> <div class="mappanel__content1__left"> <div class="mappanel__content1__text"> <p>Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги Купили квартиру в Екатеринбурге и решили сделать звукоизоляцию смежных с соседями стен, так как устал слушать их разговор. Промониторил несколько компаний и выбрал Тихо74. Сделали всё просто отлично.В Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги.Екатеринбурге у них есть представители, никаких нареканий по качеству нет, хотя изначально цель была сэкономить деньги</p> </div> <div class="mappanel__content1__footer"> <div class="mappanel__content1__readall">Читать полностью</div> <ul class="mappanel__content1__persone"> <li class="mappanel__content1__persone__name">Иван Иваныч</li> <li class="mappanel__content1__persone__loc">ЖК Ньютон</li> </ul> </div> </div> <div class="mappanel__content1__right"> <div class="mappanel__content1__right__slider owl-carousel"> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> <!-- mappanel__content1__right__slider__item --> <div class="mappanel__content1__right__slider__item"> <div class="mappanel__content1__right__slider__item__text"> Изоляция всех стен </div> </div> <!-- mappanel__content1__right__slider__item --> </div> </div> <div class="mappanel__content1__audio"> <audio controls preload="metadata"> <source src="audio/audio.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. </audio> </div> </div> </div> '
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__red.png',
            iconImageSize: [32, 53],
        }));
    
    //С отзывом
    review
        .add(new ymaps.Placemark([55.793153, 37.686612], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Звукоизоляция потолка (детский плач)</div> <div class="mappanel__content2"> <div class="mappanel__content2__audio"> <audio controls preload="metadata"> <source src="audio/audio.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. </audio> </div> <ul class="mappanel__content2__persone"> <li class="mappanel__content2__persone__name">Иван Иваныч</li> <li class="mappanel__content2__persone__loc">ЖК Ньютон</li> </ul> </div> </div>'
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__yellow.png',
            iconImageSize: [32, 53],
        }))
        .add(new ymaps.Placemark([55.779962, 37.698546], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Звукоизоляция потолка (детский плач)</div> <div class="mappanel__content2"> <div class="mappanel__content2__audio"> <audio controls preload="metadata"> <source src="audio/audio.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. </audio> </div> <ul class="mappanel__content2__persone"> <li class="mappanel__content2__persone__name">Иван Иваныч</li> <li class="mappanel__content2__persone__loc">ЖК Ньютон</li> </ul> </div> </div>'
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__yellow.png',
            iconImageSize: [32, 53],
        }))
        .add(new ymaps.Placemark([55.743631, 37.704506], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Звукоизоляция потолка (детский плач)</div> <div class="mappanel__content2"> <div class="mappanel__content2__audio"> <audio controls preload="metadata"> <source src="audio/audio.mp3" type="audio/mpeg"> Тег audio не поддерживается вашим браузером. </audio> </div> <ul class="mappanel__content2__persone"> <li class="mappanel__content2__persone__name">Иван Иваныч</li> <li class="mappanel__content2__persone__loc">ЖК Ньютон</li> </ul> </div> </div>'
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__yellow.png',
            iconImageSize: [32, 53],
        }));

    //Проведена экспертиза
    expertise
        .add(new ymaps.Placemark([55.736524, 37.475559], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Защита от шумных соседей</div> <div class="mappanel__content3"> <div class="mappanel__content3__title">Изолировано поверхности: <span>62 м2</span></div> <div class="mappanel__content3__items"> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> </div> </div> </div> '
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__blue.png',
            iconImageSize: [32, 53],
        }))
        .add(new ymaps.Placemark([55.723921, 37.479193], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Защита от шумных соседей</div> <div class="mappanel__content3"> <div class="mappanel__content3__title">Изолировано поверхности: <span>62 м2</span></div> <div class="mappanel__content3__items"> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> </div> </div> </div> '
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__blue.png',
            iconImageSize: [32, 53],
        }))
        .add(new ymaps.Placemark([55.702490, 37.490982], {
            balloonContent: '<div class="mappanel"> <div class="mappanel__title">Защита от шумных соседей</div> <div class="mappanel__content3"> <div class="mappanel__content3__title">Изолировано поверхности: <span>62 м2</span></div> <div class="mappanel__content3__items"> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> <!-- mappanel__content3__item --> <div class="mappanel__content3__item"> <div class="mappanel__content3__item__label">Изоляция всех стен</div> </div> <!--END mappanel__content3__item --> </div> </div> </div> '
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/map__marker__blue.png',
            iconImageSize: [32, 53],
        }));

//=============================================END Вывод самих меток на карту =============================================//
    

    // Добавим все объекты на карту
    map.geoObjects.add(nashi);
    map.geoObjects.add(review);
    map.geoObjects.add(expertise);


    
    $('#objects__filter__select').on('change', function(){
        var val = $(this).val();
        //Все
        if(val === '1') {
            //Удаляем все метки
            map.geoObjects.remove(nashi);
            map.geoObjects.remove(review);
            map.geoObjects.remove(expertise);

            //Показываем все метки
            map.geoObjects.add(nashi);
            map.geoObjects.add(review);
            map.geoObjects.add(expertise);
        }
        //Наши объекты
        if(val === '2') {
            //Удаляем все метки
            map.geoObjects.remove(nashi);
            map.geoObjects.remove(review);
            map.geoObjects.remove(expertise);
            //Показываем нужные метки
            map.geoObjects.add(nashi);
        }
        //С отзывом
        if(val === '3') {
            //Удаляем все метки
            map.geoObjects.remove(nashi);
            map.geoObjects.remove(review);
            map.geoObjects.remove(expertise);
            //Показываем нужные метки
            map.geoObjects.add(review);
        }
        //Проведена экспертиза
        if(val === '4') {
            //Удаляем все метки
            map.geoObjects.remove(nashi);
            map.geoObjects.remove(review);
            map.geoObjects.remove(expertise);
            //Показываем нужные метки
            map.geoObjects.add(expertise);
        }
    });



    // Подпишемся на событие клика по коллекции.
    nashi.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});

        $(".mappanel__content1__right__slider ").owlCarousel({
            items: 1,
            autoplay: true,
        });
        $('.mappanel__content1__readall').click(function(){
            var index = $(this).index();
            $('.mappanel__content1__text').eq(index).toggleClass('mappanel__content1__text__all');
            $(this).css('opacity','0');
        });

        setInterval(function(){
            var myElement = document.getElementById('mappannel');
            new SimpleBar(myElement, { autoHide: true });
            console.log('работает');
        }, 1000);
    });
    // Подпишемся на событие клика по коллекции.
    review.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});

        $(".mappanel__content1__right__slider ").owlCarousel({
            items: 1,
            autoplay: true,
        });
        $('.mappanel__content1__readall').click(function(){
            var index = $(this).index();
            $('.mappanel__content1__text').eq(index).toggleClass('mappanel__content1__text__all');
            $(this).css('opacity','0');
        });
    });
    // Подпишемся на событие клика по коллекции.
    expertise.events.add('click', function (e) {
        // Получим ссылку на геообъект, по которому кликнул пользователь.
        var target = e.get('target');
        // Зададим контент боковой панели.
        panel.setContent(target.properties.get('balloonContent'));
        // Переместим центр карты по координатам метки с учётом заданных отступов.
        map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});

        $(".mappanel__content1__right__slider ").owlCarousel({
            items: 1,
            autoplay: true,
        });
        $('.mappanel__content1__readall').click(function(){
            var index = $(this).index();
            $('.mappanel__content1__text').eq(index).toggleClass('mappanel__content1__text__all');
            $(this).css('opacity','0');
        });
    });
});




// Пример реализации боковой панели на основе наследования от collection.Item.
// Боковая панель отображает информацию, которую мы ей передали.
ymaps.modules.define('Panel', [
    'util.augment',
    'collection.Item'
], function (provide, augment, item) {
    // Создаем собственный класс.
    var Panel = function (options) {
        Panel.superclass.constructor.call(this, options);
    };

    // И наследуем его от collection.Item.
    augment(Panel, item, {
        onAddToMap: function (map) {
            Panel.superclass.onAddToMap.call(this, map);
            this.getParent().getChildElement(this).then(this._onGetChildElement, this);
            // Добавим отступы на карту.
            // Отступы могут учитываться при установке текущей видимой области карты,
            // чтобы добиться наилучшего отображения данных на карте.
            map.margin.addArea({
                top: 0,
                right: 400,
                width: '100%',
                height: '100%'
            })
        },

        onRemoveFromMap: function (oldMap) {
            if (this._$control) {
                this._$control.remove();
            }
            Panel.superclass.onRemoveFromMap.call(this, oldMap);
        },

        _onGetChildElement: function (parentDomContainer) {
            // Создаем HTML-элемент с текстом.
            // По-умолчанию HTML-элемент скрыт.
            this._$control = $('<div  class="customControl"><div class="content"></div><div class="closeButton"></div></div>').appendTo(parentDomContainer);
            this._$content = $('.content');
            // При клике по крестику будем скрывать панель.
            $('.closeButton').on('click', this._onClose);
        },
        _onClose: function () {
            $('.customControl').css('display', 'none');
        },
        // Метод задания контента панели.
        setContent: function (text) {
            // При задании контента будем показывать панель.
            this._$control.css('display', 'flex');
            this._$content.html(text);
        }
    });

    provide(Panel);
});




});