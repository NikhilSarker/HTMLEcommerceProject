// Preloader part Start
$(window).on('load', function(){
  $(".preloader").delay(100).fadeOut(500)
})
// Preloader part End
// Wow in Banner part start
// new WOW().init();
// Wow in Banner part start

// Back2top Part Start
$(".back2top").click(function(){
  $("html, body").animate({
    scrollTop:0
  },1000)
})

$(window).scroll(function(){
  var scrolling = $(window).scrollTop() 
  if (scrolling > 20){ $(".back2top").fadeIn()}
  else { $(".back2top").fadeOut()}
})

// Back2top Part End
// Menubar Part start
$(window).scroll(function(){
  var scrolling = $(window).scrollTop();
  if (scrolling > 20){
    $(".header-main").addClass("bg")
  }
  else{
    $(".header-main").removeClass("bg")
  }
})
// Menubar Part End

// Serach Part start
$('.search').click(function(){
  $('.close-input').toggleClass('adinput')
})
// Serach Part end
// Slick banner part start
$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  Arrows:true,
  prevArrow:(".prev"),
  nextArrow:(".next"),
  dots:false,

});
// Slick banner part end

// Mixitup
$(document).ready(function(){
  var mixer = mixitup('.box-list');

})

// Mixitup 


// Timer in Microdost part

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML = days +  "Days " ;
  document.getElementById("demo2").innerHTML =  hours + "Hours " ;
  document.getElementById("demo3").innerHTML =  minutes + "Mins " ;
  document.getElementById("demo4").innerHTML = seconds + "Sec ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
  

// Timer part End


// Slick Latest part start
$('.latest-slick').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  Arrows:true,
  prevArrow:(".prev"),
  nextArrow:(".next"),
  dots:false,

});
// Slick Latest part end
// Slick Testimonial  part start
$('.test-slick').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  Arrows:true,
  prevArrow:(".prev"),
  nextArrow:(".next"),
  dots:false,

});
// Slick testmonial part end



// Side-menu Part Start
// $(".close").click(function(){
//   $(".side-menu").toggleClass("bg")
// })
// Side-menu Part End

// Typed js in Banner part

//  new Typed(".typed",{
//   stringsElement: $('.typed-strings'),
//   typeSpeed: 150,
//   delaySpeed: 90,
//   loop: true,
  
// });

  
// $('.benefit-slick').slick({
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows:false,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
        
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
        
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });


// About Me page Start

// $(window).on("load", function(){
//   win.loopFun($('.percent1')[0],95,'#ccc','#53cdda','#53cdda','20px',20,60,1000,'bounce');
//   win.loopFun($('.percent2')[0],90,'#ccc','#53cdda','#53cdda','20px',20,60,1000,'bounce');
//   win.loopFun($('.percent3')[0],85,'#ccc','#53cdda','#53cdda','20px',20,60,1000,'bounce');
 
// })

// About Me page End