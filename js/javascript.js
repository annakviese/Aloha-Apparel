// email validation function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

// carousel function
  $('.carousel').flickity({
  	// options
	  cellAlign: 'left',
	  contain: true,
    freeScroll: true,
    prevNextButtons: false
    // wrapAround: true
	});

//email validation function for the signup 
  $('#subscribe').click(function(event){
          event.preventDefault();
          var email = $('#email').val();
          var email_validator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (email_validator.test(email)) {
              alert('Thanks for subscribing');
          } else {
              alert('Please enter valid email address!');             
          }
      
  });

//shadow on focus for the email input 
   $('#email').click(function(event){
          event.preventDefault();
          $('.signup_form').css("box-shadow", "1px 0px 13px 0px rgba(50, 50, 49, 0.97)")
      
  });

 //count bubble for shopping cart items
    var cartItemsCounter = 0;
    $('.count-bubble').hide();

    $('input[type="button"]').on('click', function(e) {
        e.preventDefault();

        cartItemsCounter++;

        if (cartItemsCounter === 0 ) {
            $('.count-bubble').hide();
        } else {
            $('.count-bubble').show();
            $('.count-bubble').text(cartItemsCounter);
        }

    });
});




 








