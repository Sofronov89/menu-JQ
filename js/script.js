
$(function () {
    $('div.burger').click(function () {
        $('div.mobile-tab').toggleClass("action");
    })
})

$(function() {                                     //функция активного состояния и отмены активного
    $('li').click(function() {             //состояния других кнопок при нажатии другой
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $('li').removeClass("active");
            $(this).toggleClass("active");
            barActive = true;
        }
    })
});


var insert_cnt = 0;

$( window ).resize(function(widthWindow) { // задаем функцию при срабатывании события "resize" на объекте window
    var widthWindow = $(window).width();// ширина области просмотра браузера

    var widthList = 0;

    var widthList = $('div.bar li').innerWidth();
//    console.log(widthList);

    var sizeCount = $('div.bar li').length;
//    console.log(sizeCount, 'qwrwqq');


    var dsaasdasdadlsjhfjl = Math.floor((widthWindow - 70) / widthList);
//    console.log(dsaasdasdadlsjhfjl);

    while ((dsaasdasdadlsjhfjl < $('div.bar li').length) && (($('div.bar li').length)>1)) {
        console.log($('div.bar li').length, '<');
        if ($('div.bar li:last').hasClass('active')) {
            var w = $('div.bar li').eq($('div.bar li').length - 2).detach();//вырезаем предпоследний элемент 1-го списка
            $('div.mobile-tab ul:first').prepend(w);               //вставляем его перед первым элементом 2-го списка
            insert_cnt++;
            console.log(insert_cnt);
        } else {
            var q = $('div.bar li:last').detach();
            $('div.mobile-tab ul:first').prepend(q);
        }
    }

    while ((dsaasdasdadlsjhfjl > $('div.bar li').length) && ($('div.mobile-tab li').length)>0) {
        console.log($('div.bar li').length, '>=');
        var eqw = $('div.mobile-tab li:first').detach();
        if (insert_cnt > 0) {
            var q1 = $('div.bar li:last').detach();
            $('div.bar ul:last').append(eqw);
            $('div.bar ul:last').append(q1);
            insert_cnt--;
        } else {
            $('div.bar ul:last').append(eqw);
        }
    }

});


