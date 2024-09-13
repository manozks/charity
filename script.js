$(document).ready(function () {

    // Open Nav Menu
    $('.handlemenu').click(function (){
        $('#nav-dialog').removeClass('hidden');        
    });
    $('.menu-mobile').click(function () {
        $('#nav-dialog').addClass('hidden');

    });
   

     // Close Nav Menu
     $('.handleclose').click(function (){
        $('#nav-dialog').addClass('hidden');
    });

    // Open Modal
    $('#openModal').click(function () {
        $('#modal').removeClass('hidden');
    });

    // Close Modal
    $('#closeModal').click(function () {
        $('#modal').addClass('hidden');
    });

    // Close Modal by Clicking Outside
    $('#modal').click(function (event) {
        if (event.target == this) {
            $(this).addClass('hidden');
        }
    });


    // Scroll to Top Icon
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('#scrollToTop').fadeIn(); // Show button
        } else {
          $('#scrollToTop').fadeOut(); // Hide button
        }
      });
      
      $('#scrollToTop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // Smooth scroll to top
      });

      // Loading Spinner
      $('#loading').fadeOut('slow');
        

        // Function to add the animated class when the element is in view
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }

    // Options for the observer (optional)
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe elements with the fade-left and fade-right classes
    document.querySelectorAll('.fade-left, .fade-right').forEach(element => {
        observer.observe(element);
    });

    // scroll fadeInUp
    function isElementInView(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
      }

      function handleScroll() {
        $('.fade-in-section').each(function () {
          if (isElementInView(this)) {
            $(this).removeClass('opacity-0').addClass('animate-fadeInUp');
          }
        });
      }

      $(window).on('scroll resize', handleScroll);
      handleScroll();

      

      
     
});



  