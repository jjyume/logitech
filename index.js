
$('link').click(function(){return false;});



$(document).ready(function () {



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡgnb 아코디언ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    $('#header .gnb li').click(function () {
        $('#header .gnb li').not(this).removeClass('active').find('.sub').slideUp();
        $(this).toggleClass('active').find('.sub').stop().slideToggle();
    });


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ gnb 토글 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    $('#header .gnb .close').on('click', function() {
        $('.gnb').animate({ left: '-25%' }, 500, function() {
        });
    });
    $('#header .top_menu .menu').on('click', function() {
        $('.gnb').animate({ left: '0%' }, 500, function() {
        });
    });



// ㅡㅡㅡㅡㅡㅡㅡㅡ메인 페이지 캐러셀 ㅡㅡㅡㅡㅡㅡㅡㅡ

let currentIndex = 0;
const totalSlides = $('#section .main > div > div').length;

function showSlide(index) {
    const translateValue = -index * 100 + '%';
    $('#section .main > div > div').css('transform', 'translateX(' + translateValue + ')');
}

$('.next').click(function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
});

$('.prev').click(function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡ텝메뉴ㅡㅡㅡㅡㅡㅡㅡㅡㅡ

$('.tab_content:first').addClass('active');

$('.tab_link').click(function (e) {
    e.preventDefault();

    $('.tab_link').parent().removeClass('select');
    $('.tab_content').removeClass('active');

    $(this).parent().addClass('select');

    var tabId = $(this).data('tab');
    $('.' + tabId).addClass('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab_link');
    const tabContents = document.querySelectorAll('.tab_content');

});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡ시리즈ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const cover = $('#section .cover');
const btn = $('#section .btn li');
let slide = 0;

function updateSlide(index) {
    const translateValue = -index * 19.6 + '%';
    cover.css({
        'transform': 'translateX(' + translateValue + ')',
        'transition': 'transform 0.5s ease-in-out'
    });
    btn.removeClass('select');
    btn.eq(index).addClass('select');
}

function autoSlide() {
    slide = (slide + 1) % btn.length;
    updateSlide(slide);
}

btn.on('click', function () {
    const index = btn.index(this);
    slide = index;
    updateSlide(index);
});

setInterval(autoSlide, 3000);

    });












