
var swiper = new Swiper(".hero-right", {
  effect: "cards",
  grabCursor: true,
  navigation: {
    nextEl: '.hero .next-arrow',
    prevEl: '.hero .prev-arrow'
  },

});

$('.menu-slider .slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '.menu-slider .next-arrow',
  prevArrow: '.menu-slider .prev-arrow',
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
$('.comment-slider .slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.comment-slider .prev-arrow',
  nextArrow: '.comment-slider .next-arrow',
});

$('header a.toggle-icon').click(function () {
  $('header .start').toggleClass('active');
});




$('.story .slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  prevArrow: '.story .prev-arrow',
  nextArrow: '.story .next-arrow',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

$('.food-slider .slider').slick({
  dots: false,
  infinite: false,
  fade: true,
  speed: 700,
  infinite: true,
  cssEase: 'ease-in-out',
  prevArrow: '.food-slider .prev-arrow',
  nextArrow: '.food-slider .next-arrow',
  slidesToShow: 1,
  slidesToScroll: 1,
});

var swiper = new Swiper(".left-col", {
  effect: "cards",
  grabCursor: true,
  navigation: {
    nextEl: '.match-menu .next-arrow',
    prevEl: '.match-menu .prev-arrow'

  },

});

$('.comments .slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  prevArrow: '.comments .prev-arrow',
  nextArrow: '.comments .next-arrow',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function () {
  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $('.slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 120;

    $progressBar
      .css('background-size', calc + '% 120%')
      .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
  });
});
$(document).ready(function () {
  // $('.animsition').animsition();

  $('.open-form').click(function () {
    $('.form-popup').fadeIn(0);
  });
  $('.close-form').click(function () {
    $('.form-popup').fadeOut(300);
  });
  $(document).mouseup(function (e) {
    var container = $(".form-wrapper");
    var form = $(".form-popup");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      form.hide();
    }
  });

});
$(function () {
  $(".heart").on("click", function () {
    $(this).toggleClass("is-active");
  });
});



$('#lang').on('change', function () {
  if ($(this).val() === 'En') {
    source = 'de';
    target = 'en';
  }
  else {
    target = 'de';
    source = 'en';
  }
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "c7cf0c7ad4mshf245ac19afac43ep1309a3jsnc36c65e7f70b",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
    },
    "data": {
      "q": "English is hard, but detectably so",
      "target": target,
      "source": source,
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  alert($(this).val())
})
// NEW CODE HERE

var html = $('html');

// Iterate over each select element
$('select').each(function () {

  // Cache the number of options
  var $this = $(this);
  numberOfOptions = $(this).children('option').length;
  count = 0;

  // Hides the select tag
  $this.addClass('s-hidden');

  // Wrap the select tag in a div with 
  $this.wrap('<div class="select"></div>');

  // Add a styled div placed on top of the hidden select element
  $this.after('<div class="styledSelect"></div>');

  // Cache the styled div
  var $styledSelect = $this.next('div.styledSelect');

  // Show the first select option in the styled div
  $styledSelect.text($this.children('option').eq(0).text());

  // Insert an unordered list after the styled div and also cache the list
  var $list = $('<ul />', {
    'class': 'options'
  }).insertAfter($styledSelect);

  // Insert a list item into the unordered list for each select option
  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  // Cache the list items
  var $listItems = $list.children('li');

  // Remove first child 
  $listItems.first().addClass('selection-zero');
  $('.options').addClass('no-selected');


  // Remove first child if no items are selected and add it if item is selected
  $listItems.click(function() {
    if ($('.options').hasClass('no-selected')) {
      $('.options').removeClass('no-selected');
      $('.options').addClass('selected');

      setTimeout(function() {
        $listItems.first().removeClass('selection-zero');
      }, 399);

    } 
  });

  $listItems.first().click(function() {
    if ($('.options').hasClass('selected')) {
      $('.options').addClass('no-selected');
      $('.options').removeClass('selected');

      setTimeout(function() {
        $listItems.first().addClass('selection-zero');
      }, 399);

    }
  });

  // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.styledSelect.active').each(function () {
      $(this).removeClass('active');
      $('ul.options').removeClass('display-list');
    });
    $(this).toggleClass('active');

    // Drop list controller
    $(this).toggleClass('list-on');

    if ($(this).hasClass('list-on')) {
      $('ul.options').addClass('display-list');;
    } else if ($(this).hasClass('list-on')) {
      $('ul.options').removeClass('display-list');
    }
  });

  // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
  // Updates the select element to have the value of the equivalent option
  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $('ul.options').removeClass('display-list');
    $styledSelect.removeClass('list-on');
  });

  // Hides the unordered list when clicking outside of it
  $(document).click(function () {
    $styledSelect.removeClass('active');
    $('ul.options').removeClass('display-list');
    $styledSelect.removeClass('list-on');

  });
});


