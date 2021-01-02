;
(function($, window, document, undefined) {
    'use strict';
    var $winW = function() {
        return $(window).width();
    };
    var $winH = function() {
        return $(window).height();
    };
    var $screensize = function(element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function(mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };
    $(document).ready(function() {
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.animated-row').each(function() {
                var $this = $(this);
                $this.find('.animate').each(function(i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function(event, isInView) {
                        if (isInView) {
                            setTimeout(function() {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
        });
        if ($('.facts-list').length) {
            $('.facts-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.services-list').length) {
            $('.services-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                items: 3,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }
        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown();
        });
        $('.facts-row').on('inview', function(event, isInView) {
            $('.count-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function() {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function(event, isInView) {
            $(this).addClass('view');
            $('.skill-bar .filled-bar').each(function() {
                var val = $(this).attr("aria-valuenow");
              $(this).animate({width: val + '%'});
          }, {
            offset: '80%'
          });
        });
        $(document).on('click', '.menu-trigger', function() {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function() {
            $('body').removeClass('sidemenu-open');
        });
        
    });
})(jQuery, window, document);

// https://westzero.tistory.com/112
String.prototype.toKorChars = function() { 
    var cCho = [ 'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], 
    cJung = [ 'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ' ], 
    cJong = [ '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ' ], cho, jung, jong; 
    var str = this, 
    cnt = str.length, 
    chars = [], 
    cCode; 
    for (var i = 0; i < cnt; i++) { 
        cCode = str.charCodeAt(i); 
        if (cCode == 32) { 
          chars.push(" ");
          continue;
        } // 한글이 아닌 경우 
        if (cCode < 0xAC00 || cCode > 0xD7A3) { 
            chars.push(str.charAt(i)); continue; 
            } 
        cCode = str.charCodeAt(i) - 0xAC00; 

        jong = cCode % 28; 
        // 종성 
        jung = ((cCode - jong) / 28 ) % 21 

        // 중성 
        cho = (((cCode - jong) / 28 ) - jung ) / 21 
        // 초성 

        //기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨 
        // chars.push(cCho[cho], cJung[jung]); 
        // if (cJong[jong] !== '') { 
        //     chars.push(cJong[jong]); 
        //     } 


        //  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
        chars.push(cCho[cho]);
        chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28)));
        if (cJong[jong] !== '') { 
            chars.push(String.fromCharCode( 44032 + (cho * 588) + (jung  * 28) + jong ));
        }
       
    } 
    
    return chars; 
}


//타이핑할 문장
var word1  = "Hello, World!";
var word2  = "Back-End";
var word3 = "개발자 신현정입니다.";
var typeing1=[], typeing2=[], typeing3=[];;
word1 = word1.split(''); // 한글자씩자름
word2 = word2.split(''); // 한글자씩자름
word3 = word3.split('');

//각글자 초성,중성,종성으로 나눔
for(var i =0; i<word1.length; i++){
    typeing1[i]=word1[i].toKorChars();
}
for(var i =0; i<word2.length; i++){
    typeing2[i]=word2[i].toKorChars();
}
for(var i =0; i<word3.length; i++){
    typeing3[i]=word3[i].toKorChars();
}

//출력할 엘리먼트요소 가져옴 
var resultDiv1 = document.getElementsByClassName("welcome-first")[0];
var resultDiv2 = document.getElementsByClassName("welcome-title")[0];
var resultDiv3 = document.getElementsByClassName("welcome-text")[0];

//
var text = "";
var i=0; 
var j=0; 

//총글자수
var imax1 = typeing1.length;
var imax2 = typeing2.length;
var imax3 = typeing3.length;

//setInterval을 이용해 반복적으로 출력 
var inter = setInterval(typi,100);
var inter2;
var inter3;


function typi(){
    //글자수만큼 반복후 종료 
  resultDiv1.classList.add("cursor");
    if(i<=imax1-1){
        //각 글자가 초성 중성 종성 순서대로 추가되도록 
        var jmax1 = typeing1[i].length;
        resultDiv1.innerHTML = text + typeing1[i][j];
        j++;
        if(j==jmax1){
            text+=  typeing1[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
            i++;
            j=0;
        }
    } else{
        clearInterval(inter);
         text ="";
        i=0;
        j=0; 
   setTimeout(function(){    
      resultDiv1.classList.remove("cursor");
      setTimeout(function(){             
         resultDiv2.classList.add("cursor");
         setTimeout(function(){
            inter2 = setInterval(typi2,150);
         },400);
       },300);
     },400);
    }
}

function typi2(){
    //글자수만큼 반복후 종료 
  resultDiv2.classList.add("cursor");
    if(i<=imax2-1){
        //각 글자가 초성 중성 종성 순서대로 추가되도록 
        var jmax2 = typeing2[i].length;
        resultDiv2.innerHTML = text + typeing2[i][j];
        j++;
        if(j==jmax2){
            text+=  typeing2[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
            i++;
            j=0;
        }
    } else{
        clearInterval(inter2);
         text ="";
        i=0;
        j=0; 
   setTimeout(function(){    
      resultDiv2.classList.remove("cursor");
      setTimeout(function(){             
         resultDiv3.classList.add("cursor");
         setTimeout(function(){
            inter3 = setInterval(typi3,150);
         },400);
       },300);
     },400);
    }
}

function typi3(){
    //글자수만큼 반복후 종료 
    resultDiv3.classList.add("cursor");
    if(i<=imax3-1){
        //각 글자가 초성 중성 종성 순서대로 추가되도록 
        var jmax3 = typeing3[i].length;
        resultDiv3.innerHTML = text + typeing3[i][j];
        j++;
        if(j==jmax3){
            text+=  typeing3[i][j-1];//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
            i++;
            j=0;
        }
    } else{
        clearInterval(inter2);
    }
}
