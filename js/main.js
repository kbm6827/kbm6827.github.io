$(function () {
    //////////////////////////////

    // topBanner 2022.03.17 최종수정 JJAMMIN


    // $('css선택자').on('이벤트',할일)
    $('.topBanner i').on('click', topbannerHandler/* 할일 */);

    function topbannerHandler/* 할일 */() {
        $('.topBanner').slideUp();
    }

    /* 
    $('.topBanner i').on('click', function);
    
    function() {
        $('.topBanner').slideUp();
    }
     */

    /* function 곱하기함수(a,b) {
        console.log(a*b);
    
    곱하기함수(10,20);
    곱하기함수(20*30);
    }
     */

    /* function 오오오(e) {
        e.preventDefault();
        const tg = e.target;
        console.log(tg ,'오오오 클릭했네~~')
    }
    $('.oooooo').on('click',오오오);
     */
    ////////////////////////////


    // 각각의 슬라이드에 애니메이션///////////////////////////
    //////////////////////////////////////////////////////////////////
    $('.mainVisualSlide').on('init reInit afterChange', function () {
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    });


    $('.mainVisualSlide').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, /* 버튼없애기 */
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    // $('.mainVisualSlide figure').eq(1).addClass('on');
    // // 전체 슬라이드에서 class를 빼고 지금 슬라이드에 class를 붙이는일

    // $('.mainVisualSlide').on('afterChange', function (s, i, c) {
    //     // console.log(s, i, c)
    //     // c: currentslide = 0,1,2
    //     $('.mainVisualSlide figure').removeClass('on')
    //     $('.mainVisualSlide figure').eq(c + 1).addClass('on');
    // });

    $('.movieBtn i:first-child').on('click', function () {
        $('#adMovie').trigger('play');  /* hide:없애라 trigger:정지해라*/
    });
    $('.movieBtn i:last-child').on('click', function () {
        $('#adMovie').trigger('pause');  /* hide:없애라 trigger:정지해라*/
    });





});
