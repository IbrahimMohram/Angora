window.addEventListener('scroll',function(){
    let header = document.querySelector('header');
    header.classList.toggle('scrolling-active' , window.scrollY >0);
    })
    $(function () { 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) { 
                $('.navbar-brand img').attr('src','images/logo-red.png');
    
            }
            if ($(this).scrollTop() < 20){ 
                $('.navbar-brand img').attr('src','images/logo-white.png');
    
            }
        })
    });

    var swiper = new Swiper('.swiper-container', {
        centeredSlides: false,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      var banner_swiper = new Swiper('.banner-swiper', {
        loop: true,
        autoplay: {
          delay: 3000,
        },
      });
    


      banner_swiper.on('slideChange', function () {
        bannerWow=new WOW(
          {
            animateClass:'animatedSlide'
          }
        );
        bannerWow.init()});
        
        
       $(".banner-swiper .swiper-button-prev,.banner-swiper .swiper-button-next").on("click",function(){
        bannerWow=new WOW();
        bannerWow.init()
       })

       $(window).scroll(function(){
        if ($(this).scrollTop() > 700) {
           $('.progress-anmati').addClass('progress-anmation');
        } else {
           $('.progress-anmati').removeClass('progress-anmation');
        }
    });
    var swiper = new Swiper('.client-feed-back', {
      spaceBetween: 10,
      slidesPerView: 5,
      centeredSlides: false,
      loop:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    $(".icon-setting  i").click(function(){

      $(".options").toggle();
    })

    var lis = $(".options ul li");
lis.eq(0).css("backgroundColor","#000")
lis.eq(1).css("backgroundColor","#09c")
lis.eq(2).css("backgroundColor","#587")
lis.eq(3).css("backgroundColor","tomato")
lis.click(function(){
	var hover_color = $(this).css("backgroundColor");
	$("h1,h2,h5,h6").css("color",hover_color),

  $('a , i').mouseover(function(){
    $(this).css('color', hover_color)

  })  
  $('a , i').mouseout(function(){
    $(this).attr('style',"");
})
});


