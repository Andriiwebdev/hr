// slick
$('.partners__slider').slick({
    autoplay: true,
    swipe: false,
    autoplaySpeed: 10,
    speed: 2000,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnFocus:false,
    pauseOnHover:false,
    responsive: [
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]

});

$(document).ready(function(){
    //video popUps


    var btnVideo = document.getElementById('see-wideo');
    var btnVideo2 = document.getElementById('see-video');
    var videoPopup = document.getElementById('video-popup');
    var yanovskiy = document.getElementById('yanovskiy');
    var hmelevskaya = document.getElementById('hmelevskaya');
    var gusovskiy = document.getElementById('gusovskiy');
    var bakhmatov = document.getElementById('bakhmatov');
    var gorbanovskaya = document.getElementById('gorbanovskaya');
    var sinegub = document.getElementById('sinegub');
    var ryzhkova = document.getElementById('ryzhkova');
    var klim = document.getElementById('klim');


    var videoPopupContent = document.getElementsByClassName('video-popup__content')[0];

    klim.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/OMnkwRHZcHE?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }

    bakhmatov.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/QpFUtbIGj5E?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }

    gusovskiy.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/Itc2gNzEtXA?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }

    gorbanovskaya.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/XzVgPrL2apc?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }

    sinegub.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/fAQzypMqL5s?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }
    ryzhkova.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/MdrI2DusSkU?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }





    yanovskiy.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/vIUZaEqZnDY?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }

    hmelevskaya.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/vIUZaEqZnDY?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }

    btnVideo.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/vIUZaEqZnDY?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';
    }
    btnVideo2.onclick = function () {
        videoPopup.style.display = "block";
        videoPopup.innerHTML  = '<iframe class="video-popup__content" src="https://www.youtube.com/embed/vIUZaEqZnDY?rel=0&border=0&showinfo=1&controls=1&autoplay=0&modestbranding=0" frameborder="0" allowfullscreen></iframe>';

    }

    videoPopup.onclick = function (evt) {
        console.log("hi");
        $('iframe').attr('src', $('iframe').attr('src'));
        videoPopup.style.display = 'none';
        // if (!evt.target.contains(videoPopupContent) || evt.target == videoPopupContent) {
        //     videoPopup.style.display = 'block';
        // }
        // else {
        //     $('iframe').attr('src', $('iframe').attr('src'));
        //     videoPopup.style.display = 'none';
        // }

    }
});


$(document).ready(function(){
  $('.spikers__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
    //   autoplay: true,
      pauseOnFocus: false,
      autoplaySpeed: 2000,
      dotsClass: 'slide-dots',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});
// slick
$(document).ready(function(){
  $('.photo__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      dotsClass: 'slide-dots',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});



// all ready
$( document ).ready(function() {

    // slick
    $('.comment').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
        asNavFor: '.nav-comment'
        });

        $('.nav-comment').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.comment',
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
        });

        //  min navigation
            var i;
            var addClass = document.getElementsByClassName("min-btn")[0];
            var nav = document.getElementsByClassName("navbar")[0];
            i = setInterval(function () {}, 1500);
            addClass.onclick = function() {
                clearInterval(i);
                var classes = addClass.className.split(" ");
                var classesNav = nav.className.split(" ");
                    var i = classes.indexOf("cross");
                    var j = classesNav.indexOf("active_nav");
                    if (i >= 0) {classes.splice(i, 1);}
                    else {classes.push("cross");}
                    if (j >= 0) {classesNav.splice(j, 1);}
                    else {classesNav.push("active_nav");}
                        addClass.className = classes.join(" ");
                        nav.className = classesNav.join(" ");
            };

                function disable() {
                    var classes = addClass.className.split(" ");
                    var classesNav = nav.className.split(" ");
                        var i = classes.indexOf("cross");
                        var j = classesNav.indexOf("active_nav");
                        if (i >= 0) {classes.splice(i, 1);}
                        else {classes.push("cross");}
                        if (j >= 0) {classesNav.splice(j, 1);}
                        else {classesNav.push("active_nav");}
                            addClass.className = classes.join(" ");
                            nav.className = classesNav.join(" ");
                }


            //select
            $('select').each(function(){
                var $this = $(this), numberOfOptions = $(this).children('option').length;

                $this.addClass('select-hidden');
                $this.wrap('<div class="select"></div>');
                $this.after('<div class="select-styled"></div>');

                var $styledSelect = $this.next('div.select-styled');
                $styledSelect.text($this.children('option').eq(0).text());

                var $list = $('<ul />', {
                    'class': 'select-options'
                }).insertAfter($styledSelect);

                for (var i = 0; i < numberOfOptions; i++) {
                    $('<li />', {
                        text: $this.children('option').eq(i).text(),
                        rel: $this.children('option').eq(i).val()
                    }).appendTo($list);
                }

                var $listItems = $list.children('li');

                $styledSelect.click(function(e) {
                    e.stopPropagation();
                    $('div.select-styled.active').not(this).each(function(){
                        $(this).removeClass('active').next('ul.select-options').hide();
                    });
                    $(this).toggleClass('active').next('ul.select-options').toggle();
                });

                $listItems.click(function(e) {
                    e.stopPropagation();
                    $styledSelect.text($(this).text()).removeClass('active');
                    $this.val($(this).attr('rel'));
                    $list.hide();

                });

                $(document).click(function() {
                    $styledSelect.removeClass('active');
                    $list.hide();
                });

            });


         // inputs

         $('.occupation_select').focus(function() {
             $(this).parent().find('.work').hide()

             }).blur(function() {
             if ($(this).val() == '') {
                 $(this).parent().find('.work').show()
             }
         })

         $('.first_name').focus(function() {
             $(this).parent().find('.first__name').hide()

             }).blur(function() {
             if ($(this).val() == '') {
                 $(this).parent().find('.first__name').show()
             }
         })
         $('.last_name').focus(function() {
             $(this).parent().find('.last__name').hide()

             }).blur(function() {
             if ($(this).val() == '') {
                 $(this).parent().find('.last__name').show()
             }
         })
         $('.phone').focus(function() {
             $(this).parent().find('.phone_m').hide()

             }).blur(function() {
             if ($(this).val() == '') {
                 $(this).parent().find('.phone_m').show()
             }
         })
         $('.mail').focus(function() {
             $(this).parent().find('.mail_m').hide()

             }).blur(function() {
             if ($(this).val() == '') {
                 $(this).parent().find('.mail_m').show()
             }
         })
         $('.promo').focus(function() {
             $(this).parent().find('.cod').hide()

             }).blur(function() {
             if ($(this).val() == '') {
                 $(this).parent().find('.cod').show()
             }
         })

         // gallary
         $(document).ready(function() {
     	$('.zoom-gallery').magnificPopup({
     		delegate: 'a',
     		type: 'image',
     		closeOnContentClick: false,
     		closeBtnInside: false,
     		mainClass: 'mfp-with-zoom mfp-img-mobile',
     		image: {
     			verticalFit: true,
     			titleSrc: function(item) {
     				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
     			}
     		},
     		gallery: {
     			enabled: true
     		},
     		zoom: {
     			enabled: true,
     			duration: 300, // don't foget to change the duration also in CSS
     			opener: function(element) {
     				return element.find('img');
     			}
     		}

     	});
     });

    //  unslick

    var spikers = document.getElementById('spikers__more');
    var photo = document.getElementById('photo__more');
    spikers.onclick = function () {
        $('.spikers__slider').slick('unslick');
        this.innerText = "";
    }
    photo.onclick = function () {
        $('.photo__slider').slick('unslick');
        this.innerText = "";
    }


    // view modal

    var viewModal = document.getElementsByClassName('view-modal');
    var modalWindow = document.getElementById("modal-registration");
    var wrapModal = document.getElementsByClassName("modal_wrapper")[0];
    var mobBtn = document.getElementsByClassName("mobile_btn")[0];
    for (var i = 0; i < viewModal.length; i++) {
        viewModal[i].onclick = function () {
            modalWindow.style.display = "block";
            // disable();
        }
    }
    modalWindow.onclick = function (evt) {
        if (!evt.target.contains(wrapModal) || evt.target == wrapModal) {
            modalWindow.style.display = 'block';
        }
        else {
            modalWindow.style.display = 'none';
        }
    }
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            $('iframe').attr('src', $('iframe').attr('src'));
            modalWindow.style.display = 'none';
            videoPopup.style.display = 'none';
        }
    };
    mobBtn.onclick = function () {
        modalWindow.style.display = "block";
        disable();
    }
});


// anchorScroller
function anchorScroller(el, duration) {
    if (this.criticalSection) {
    return false;
    }
    if ((typeof el != 'object') || (typeof el.href != 'string'))
    return true;
    var address = el.href.split('#');
    if (address.length < 2)
    return true;
    address = address[address.length-1];
    el = 0;
    for (var i=0; i<document.anchors.length; i++) {
    if (document.anchors[i].name == address) {
    el = document.anchors[i];
    break;
        }
    }
    if (el === 0)
    return true;
    this.stopX = 0;
    this.stopY = 0;
    do {
    this.stopX += el.offsetLeft;
    this.stopY += el.offsetTop;
    } while (el = el.offsetParent);
    this.startX = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    this.startY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    this. stopX = this.stopX - this.startX;
    this.stopY = this.stopY - this.startY;
    if ( (this.stopX == 0) && (this.stopY == 0) )
    return false;
    this.criticalSection = true;
    if (typeof duration == 'undefined')
    this.duration = 500;
    else
    this.duration = duration;
    var date = new Date();
    this.start = date.getTime();
    this.timer = setInterval(function () {
    var date = new Date();
    var X = (date.getTime() - this.start) / this.duration;
    if (X > 1)
    X = 1;
    var Y = ((-Math.cos(X*Math.PI)/2) + 0.5);
    cX = Math.round(this.startX + this.stopX*Y);
    cY = Math.round(this.startY + this.stopY*Y);
    document.documentElement.scrollLeft = cX;
    document.documentElement.scrollTop = cY;
    document.body.scrollLeft = cX;
    document.body.scrollTop = cY;
    if (X == 1) {
    clearInterval( this.timer);
    this.criticalSection = false;
        }
    }, 10);

    var i;
    var addClass = document.getElementsByClassName("min-btn")[0];
    var nav = document.getElementsByClassName("navbar")[0];
    var classes = addClass.className.split(" ");
    var classesNav = nav.className.split(" ");
        var i = classes.indexOf("cross");
        var j = classesNav.indexOf("active_nav");
        if (i >= 0) {classes.splice(i, 1);}
        else {classes.push("cross");}
        if (j >= 0) {classesNav.splice(j, 1);}
        else {classesNav.push("active_nav");}
            addClass.className = classes.join(" ");
            nav.className = classesNav.join(" ");


    return false;
}
