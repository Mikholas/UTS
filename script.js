$(document).ready(function() {
    // Validasi form
    $('#registerForm').on('submit', function(e) {
      const name = $('#name').val();
      const email = $('#email').val();
      const password = $('#password').val();
      const terms = $('#terms').is(':checked');
  
      if (!name || !email || !password || !terms) {
        e.preventDefault();
        alert('Harap lengkapi semua field dan setujui syarat & ketentuan.');
      }
    });
  
    // Tambah fitur dengan jQuery
    $('#addFeatureBtn').click(function() {
      $('#features ul').append('<li>Fitur Tambahan Eksklusif</li>');
    });
  
    // Efek Parallax dan Smooth Scroll saat scroll
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      $('.banner').css('background-position', 'center ' + (scroll / 2) + 'px');
    });
  
    // Smooth scroll untuk navigasi
    $('.nav-link').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
    });
  });
  