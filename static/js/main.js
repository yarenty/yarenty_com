$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Add active class to navigation items on scroll
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.nav-links a.active').removeClass('active');
                $('.nav-links a').eq(i).addClass('active');
            }
        });
    });

    // Add animation on scroll
    $(window).scroll(function() {
        $('.timeline-item').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate');
            }
        });
    });
}); 