
/* window.addEventListener('DOMContentLoaded', ()=> {         ---> 구조가 만들어진다음에 실행해라
    document.querySelector('h1').style.color='#f00';
 document.querySelector('h1').style.fontsize = 100 + "px";
}) */

/* 위에꺼 줄여서쓰기 */

/*$(function(){
    $('h1').hide(); css({color:'#f00',fontSize:'100px',display:'none'})
}) */
$(function(){
     function popupClose() {
        $(this).parent().hide();/*  $('.popup'부모선택this와같음).hide(); */
    }
    $('.btn').on('click',popupClose);
})