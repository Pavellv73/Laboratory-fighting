$(document).ready(function () {

    $('.fancybox').fancybox();

    $(".phone").mask("+7 (999) 999-99-99");

    $('input').change(function () {
        $('input').removeClass('incorrect correct');
    });

    //Меню-гамбургер
    $('.menu-hamburger').click(function () {
        openHabmenu();
        return false
    });

    function openHabmenu() {
        $('.habmenu').slideToggle();
        $('.line1').toggleClass("block1-click");
        $('.line2').toggleClass("block2-click");
        $('.line3').toggleClass("block3-click");
        $('body').toggleClass('no-scroll');
        $('.menu').slideToggle(300);
    };

    // плавный скролинг по ссылкам
    $('.scroll-to').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 100}, 500);
        }
        return false;
    });

    $('.block4-slider .slick-slider').slick({
        dots: true,
        dotsClass: "dots",
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.block7 .tabs-block button').on('click', function () {
        $('button-red-tab').removeClass('button-red-tab');
        $(this).addClass('button-red-tab');
        $('.button-red-tab').removeClass('button-red-tab');
        $(this).addClass('button-red-tab');
    });

    $('.tabs-block #tab-1').click(function () {
       $('.tabs-info #1').addClass("tab-info-active");
       $('.tabs-info #2').removeClass("tab-info-active");
       $('.tabs-info #3').removeClass("tab-info-active");
       $('.tabs-info #4').removeClass("tab-info-active");
       $('.tabs-info #5').removeClass("tab-info-active");
       $('.tabs-info #6').removeClass("tab-info-active");
       $('.tabs-info #7').removeClass("tab-info-active");
    });
    $('.tabs-block #tab-2').click(function () {
        $('.tabs-info #2').addClass("tab-info-active");
        $('.tabs-info #1').removeClass("tab-info-active");
        $('.tabs-info #3').removeClass("tab-info-active");
        $('.tabs-info #4').removeClass("tab-info-active");
        $('.tabs-info #5').removeClass("tab-info-active");
        $('.tabs-info #6').removeClass("tab-info-active");
        $('.tabs-info #7').removeClass("tab-info-active");
    });
    $('.tabs-block #tab-3').click(function () {
        $('.tabs-info #3').addClass("tab-info-active");
        $('.tabs-info #2').removeClass("tab-info-active");
        $('.tabs-info #1').removeClass("tab-info-active");
        $('.tabs-info #4').removeClass("tab-info-active");
        $('.tabs-info #5').removeClass("tab-info-active");
        $('.tabs-info #6').removeClass("tab-info-active");
        $('.tabs-info #7').removeClass("tab-info-active");
    });
    $('.tabs-block #tab-4').click(function () {
        $('.tabs-info #4').addClass("tab-info-active");
        $('.tabs-info #2').removeClass("tab-info-active");
        $('.tabs-info #3').removeClass("tab-info-active");
        $('.tabs-info #1').removeClass("tab-info-active");
        $('.tabs-info #5').removeClass("tab-info-active");
        $('.tabs-info #6').removeClass("tab-info-active");
        $('.tabs-info #7').removeClass("tab-info-active");
    });
    $('.tabs-block #tab-5').click(function () {
        $('.tabs-info #5').addClass("tab-info-active");
        $('.tabs-info #2').removeClass("tab-info-active");
        $('.tabs-info #3').removeClass("tab-info-active");
        $('.tabs-info #4').removeClass("tab-info-active");
        $('.tabs-info #1').removeClass("tab-info-active");
        $('.tabs-info #6').removeClass("tab-info-active");
        $('.tabs-info #7').removeClass("tab-info-active");
    });
    $('.tabs-block #tab-6').click(function () {
        $('.tabs-info #6').addClass("tab-info-active");
        $('.tabs-info #2').removeClass("tab-info-active");
        $('.tabs-info #3').removeClass("tab-info-active");
        $('.tabs-info #4').removeClass("tab-info-active");
        $('.tabs-info #5').removeClass("tab-info-active");
        $('.tabs-info #1').removeClass("tab-info-active");
        $('.tabs-info #7').removeClass("tab-info-active");
    });
    $('.tabs-block #tab-7').click(function () {
        $('.tabs-info #7').addClass("tab-info-active");
        $('.tabs-info #2').removeClass("tab-info-active");
        $('.tabs-info #3').removeClass("tab-info-active");
        $('.tabs-info #4').removeClass("tab-info-active");
        $('.tabs-info #5').removeClass("tab-info-active");
        $('.tabs-info #6').removeClass("tab-info-active");
        $('.tabs-info #1').removeClass("tab-info-active");
    });

    $('.maps').click(function () {
        $('.maps iframe').css("pointer-events", "auto");
    });

    $(".maps").mouseleave(function() {
        $('.maps iframe').css("pointer-events", "none");
    });





    var _download = false;
    var _target='';
    $('form').ajaxForm({
        beforeSubmit: function(d, $e){
            $('input').removeClass('incorrect');

            var emailReg = new RegExp("^[-0-9a-z\._]+\@[-0-9a-z\.]+\.[a-z]{2,4}$", "i"),
                phoneReg = '';

            for (var j in d) {
                /*телефон*/
                if(d[j].name == 'phone' && d[j].value == '') {
                    $e.find('input[name="phone"]').addClass('incorrect');
                    return false;
                }

                if(d[j].name == 'phone' && d[j].value != '') {
                    for (var i = 0; i <= 9; i++) {
                        phoneReg = new RegExp(i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString() + i.toString());

                        if (phoneReg.test(d[j].value)) {
                            $e.find('input[name="phone"]').addClass('incorrect');
                            return false;
                        }
                    }
                }

                $e.find('input[name="phone"]').addClass('correct');

                /*имя*/
                if(d[j].name == 'name' && d[j].value == '') {
                    $e.find('input[name="name"]').addClass('incorrect');
                    return false;
                }

                $e.find('input[name="name"]').addClass('correct');

                /*email*/
                if(d[j].name == 'email' && d[j].value == '') {
                    $e.find('input[name="email"]').addClass('incorrect');
                    return false;
                }

                if (d[j].name == 'email' && d[j].value != "") {
                    if (!emailReg.test(d[j].value)) {
                        $e.find('input[name="email"]').addClass('incorrect');
                        return false;
                    }
                }

                $e.find('input[name="email"]').addClass('correct');

                /*цель*/
                if (d[j].name == 'target') {
                    _target = d[j].value;
                }

                if (d[j].name == 'download') {
                    _download = true;
                }
            }

            return true;
        },

        success: function(data){
            if (_download == true) {

                var link = document.createElement('a');
                link.setAttribute('href','/price.pdf');
                link.setAttribute('download','download');
                onload=link.click();

                _download = false;
            }
            console.info(data);
            $('input').removeClass('incorrect correct');
            $.fancybox($('.thnx'));
        }
    });

});
