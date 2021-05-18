var dbQuiz = "";
var dbUser = "";



$(document).ready(function () {
  Connect_DB();
  GetQuestion();
  //document.getElementById('Game').style.display='block';
  //document.getElementById('Game-1').style.display='none';
  //document.getElementById('Game-2').style.display='none';
});
 

function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbQuiz = firebase.firestore().collection("QuizoftheDay");
}


var OpenQuiz = "1";
var Eid = "";
var EQuizDate = "";
var EQuizForm = "";
var cleararray = "";
//var today = moment().format('DD MMM, YYYY');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var EQuizQuizTimer = 0;
var now = new Date();
var timeup = "";
var counter = "";


function GetQuestion() {
  $("#DisplayQuiz").val(cleararray);
  //dbQuiz.where('QuizStatus','==',OpenQuiz).get().then((snapshot)=> {
  dbQuiz.where('QuizDate','==',today).get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      Eid = doc.id;
      EQuizDate = doc.data().QuizDate;
      EQuizQuizTimer = Number(doc.data().QuizTimer);
  now = new Date();
  timeup = now.setSeconds(now.getSeconds() + Number(doc.data().QuizTimer));
  counter = setInterval(timer, 1000);
      timer();
      console.log(doc.data().QuizDate+"==="+doc.data().QuizQuestion);
      //document.getElementById("aQuizDate").value = "ประจำวันที่ " + doc.data().QuizDate;
      ///document.getElementById("aQuizQuestion").value = doc.data().QuizQuestion;
      if(doc.data().QuizTypeQuestion=="1") {
        EQuizForm += "<div>ประจำวันที่ : "+ doc.data().QuizDate +"</div>";
        EQuizForm += "<div>"+ doc.data().QuizQuestion +"</div>";
        EQuizForm += "<div><input id='answer1' type='radio' name='group1' value='1'> ตัวเลือกที่ 1</div>";
        EQuizForm += "<div><input id='answer2' type='radio' name='group1' value='2'> ตัวเลือกที่ 2</div>";
        EQuizForm += "<div><input id='answer3' type='radio' name='group1' value='3'> ตัวเลือกที่ 3</div>";
        EQuizForm += "<div><input id='answer4' type='radio' name='group1' value='4'> ตัวเลือกที่ 4</div>";
        EQuizForm += "";
        EQuizForm += "";
        EQuizForm += "";
      } else if(doc.data().QuizTypeQuestion=="2") {
        EQuizForm += "<center><div>ประจำวันที่ : "+ doc.data().QuizDate +"</div>";
        EQuizForm += "<div style='margin-top:15px;'><img src='./game/Q-1.jpg' class='imggame' style='width:90%;'></div>";
        EQuizForm += "<div class='QuizQ'>"+ doc.data().QuizQuestion +"</div>";
        //EQuizForm += "<input id='myinput' onkeyup='ChkText()'><span id='chars'>0</span>";
        EQuizForm += "<div><input type='text' id='SendQuestion' placeholder='กรอกคำตอบของคุณ ..' style='width:250px !important;text-align: center;' onkeyup='ChkText()'></div>";
        //EQuizForm += "<div  class='btn-t2' onclick='gohome()'>ส่งคำตอบ</div></center><span id='chars'>0</span>";
        EQuizForm += "<div id='SubmitAns' class='btn-t0' onclick='gohome()'>ส่งคำตอบ </div>";
      }
      EQuizForm += "<div id='timer' class='timer'></div><div id='chars' style='color:#0056ff;'>0<div>";
    });
    $("#DisplayQuiz").html(EQuizForm);
  });
}



function timer() {
  now = new Date();
  count = Math.round((timeup - now)/1000);
  if (now > timeup) {
      window.location = "#"; //or somethin'
      alert("หมดเวลา");
      clearInterval(counter);
      return;
  }
  var seconds = Math.floor((count%60));
  var minutes = Math.floor((count/60) % 60);
  if(seconds<10) { seconds="0"+seconds }
  $("#timer").html("เหลือเวลาอีก <font color='#ffff00'>" + minutes + " นาที " + seconds  + " วินาที</font>");
  //document.getElementById("timer").innerHTML = minutes + ":" + seconds;
}


function ChkText() {
  var inp = document.getElementById('SendQuestion');
  var chars = document.getElementById('chars');
  //$("#SubmitAns").addClass("disabled");
  //$('#SubmitAns').prop("disabled", true);
  inp.onkeyup = function() {
    chars.innerHTML = inp.value.length;
  if(inp.value.length>0) {
    $('#SubmitAns').removeClass('btn-t0');
    $('#SubmitAns').addClass('btn-t2');
  } else {
    $('#SubmitAns').removeClass('btn-t2');
    $('#SubmitAns').addClass('btn-t0');
  }
  } 
}




/*

function gohome() {
  window.location = "activity.html";
}
 
function CheckGame(n) {
  document.getElementById('Game').style.display='none';
  if(n==1) {
    document.getElementById('Game-1').style.display='block';
    document.getElementById('Game-2').style.display='none';
  } else if(n==2) {
    var i = 0;
    var text = "";
    document.getElementById('Game-1').style.display='none';
    document.getElementById('Game-2').style.display='block';
    for (i = 0; i < 100; i++) {
      if(i<10) { 
        text += "<a href='#aaa'><button class='boxnumber' onclick='CheckNum("+i+")'>0" + i + "</button></a>";
      } else {
        text += "<a href='#aaa'><button class='boxnumber' onclick='CheckNum("+i+")'>" + i + "</button></a>";
      }
    }
    $("#BoxSelect").html(text);
 
  }
}
 
function CheckNum(n) {
  var txt = '<div class="txtShowNum">'+ n +'</div>';
  $("#SelectNum").html(txt);
  txt = "";
  //alert("คุณเลือกหมายเลข : "+n+ "คลิกเพื่อยืนยันการเลือกหมายเลขนี้");
}
*/

/*
!(function($) {
  "use strict";
 
  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();
 
        var scrollto = target.offset().top - scrolltoOffset;
 
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }
 
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
 
        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }
 
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });
 
  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });
 
  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');
 
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });
 
    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
 
    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }
  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });
 
  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }
 
  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });
 
  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });
 
  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('.carousel-content ').addClass('animate__animated animate__fadeInDown');
  });
 
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
 
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
 
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
 
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
 
      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });
 
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });
 
  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });
 
  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
 
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
 
})(jQuery);
 
*/
