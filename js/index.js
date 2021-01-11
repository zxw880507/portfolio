$(function() {
    let topbar = $('.top_wrap');
    let bg1 = $('.bg1');
    let bg2 = $('.bg2');
    let bg3 = $('.bg3');
    let nav = $('.selection > li');



    function init(obj) {
        return Number(obj.css('backgroundPosition').split(' ')[1].match(/\d+\.?\d*/g)[0]);
    }
    let init1 = init(bg1);
    let init2 = init(bg2);
    let init3 = init(bg3);


    $(window).scroll(function() {
        let related1 = $(window).scrollTop() + $(window).height() - bg1.offset().top;
        let related2 = $(window).scrollTop() + $(window).height() - bg2.offset().top;
        let related3 = $(window).scrollTop() + $(window).height() - bg3.offset().top;

        $(window).scrollTop() > 778 ? topbar.addClass('fixed') : topbar.removeClass('fixed');
        $(window).scrollTop() > 778 && $(window).scrollTop() <= 2064 ? topbar.addClass('pink') : topbar.removeClass('pink');
        $(window).scrollTop() > 2064 && $(window).scrollTop() <= 3248 ? topbar.addClass('green') : topbar.removeClass('green');
        $(window).scrollTop() > 3248 ? topbar.addClass('blue') : topbar.removeClass('blue');
        if (related1 > 0) {
            bg1.css('backgroundPosition', `50% ${-related1/50+init1}px`);
        }
        if (related2 > 0) {
            bg2.css('backgroundPosition', `50% ${-related2/50+init2}px`);
        }
        if (related3 > 0) {
            bg3.css('backgroundPosition', `50% ${-related3/50+init3}px`);
        }

    });
    $('.selection>li').hover(function() {
        $(this).siblings().stop().removeClass('current');
        $(this).addClass('current');
    }, function() {
        $(this).siblings().stop();
        $(this).removeClass('current');
    });

    $('.plat li').hover(function() {
        $(this).siblings().stop().removeClass('contact');
        $(this).addClass('contact');
    }, function() {
        $(this).siblings().stop();
        $(this).removeClass('contact');
    });
    
    bg1.on('click', function() {
        console.log($(this).offset().top);
    });


    $(nav[0]).on('click', function(){
        $(window).scrollTop(0);
    });
    $(nav[1]).on('click', function(){
        $(window).scrollTop(880);
    });
    $(nav[2]).on('click', function(){
        $(window).scrollTop(3993);
    });

})