$(document).ready(function(){
var height = $(window).width()*0.96;
var top = height*0.9;

var cattle1 = $('.cattle1');
var cattle2 = $('.cattle2');
var cattletop = $(window).width()*470/746;
$('.logo').css('top',cattletop+10);
$('.cattle1').css('left',-$(window).height()*129/169);
$('.cattle2').css('left',-$(window).height()*155/121);
setTimeout(function() {
  $('.logo').show();
  $('.logo').animate({
    'width' : '23%',
    'left' : '52%'
  },'linear',function() {
    cattle1.show();
    cattle1.animate({
      'left' : '-50%'
    },500,function() {
      cattle1.animate({
        'left' : -$(window).height()*129/169
      },500,function() {
        cattle1.css({
                'transform' : 'rotateY(360deg)',
                '-o-transform' : 'rotateY(360deg)',
                '-moz-transform' : 'rotateY(360deg)',
                '-ms-transform' : 'rotateY(360deg)',
                '-webkit-transform' : 'rotateY(360deg)'
        })
        cattle1.animate({
          'left' : '19%',
          'width' : '20%',
          'top' : cattletop,
          'height' : $(window).width()*0.2*169/129
        },'linear',function() {
          cattle2.show();
          cattle2.animate({
            'left' : '-100%'
          },500,function() {
            cattle2.animate({
              'left' : $(window).width()
            },200,function() {
              cattle2.css({
                      'transform' : 'rotateY(360deg)',
                      '-o-transform' : 'rotateY(360deg)',
                      '-moz-transform' : 'rotateY(360deg)',
                      '-ms-transform' : 'rotateY(360deg)',
                      '-webkit-transform' : 'rotateY(360deg)'
              })
              cattle2.animate({
                'width' : '23%',
                'left' : '62%',
                'top' : cattletop,
                'height' : $(window).width()*0.25*121/155
              },'linear',function() {
                $('.container').prepend('<img src="http://obw4uacee.bkt.clouddn.com/figure1.gif" alt="" class="pointer">');
                $('.pointer').css({
                  'z-index' : '3'
                })
              })
            })
          });
        })
      })
    });
  })
},560)
setTimeout(function() {
  $('.pointer').css('z-index','0');
},5000)
$('.message').click(function() {
  $('.messagediv').show();
})



$('#lotteryContainer').css('top',$(window).width()-5);
var lottery = new Lottery('lotteryContainer', 'http://events.yiyuz.com/brightdairy/cmssys/msks/img/homepage/gua.png', 'image', Percent);

lottery.init('http://events.yiyuz.com/brightdairy/cmssys/msks/img/homepage/guaback.png', 'image');
var canvas = document.getElementsByTagName('canvas');
var chance = 1;
function Percent(percent) {
  console.log(percent);
    if(percent >= 5 && chance == 1) {
      // do something
    }
}

   
});
