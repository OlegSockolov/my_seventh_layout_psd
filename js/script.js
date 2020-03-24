$('document').ready(function(){

    $('.sorting__item').on('click', f_check);

    $('.header__burger').on('click', f_burger);

});

function f_check(){
    $(this).toggleClass('active');
}

function f_burger(){
    $('.header__logo, .header__burger, .header__nav').toggleClass('active');
    $('body').toggleClass('lock');
}