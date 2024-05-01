// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");
$("#all-project-slider").load("project-slider.html");
// $(".write-to-us").load("con-form.html");


// AOS Js (Reveal Animation)
AOS.init();

// Active Navbar Animation 
$(window).on('load', function () {
    // Get the body's ID
    var bodyId = $('body').attr('id');
    if(bodyId == "case-study-page"){
        bodyId = "project-page"
    }
    // Add active class to data-nav-item with matching value
    $('[data-nav-item="' + bodyId + '"]').addClass('active');

    // Remove active class from .header-bottom
    $('.header-bottom').removeClass('active');
})

/* //  Dark and light mode 
// Listen for the change event on the checkbox
$('#checkbox').change(function () {
    // Check if the checkbox is checked
    if ($(this).is(':checked')) {
        // If checked, add classes for dark mode and remove classes for light mode
        $('body').removeClass('light').addClass('dark');
        $('.mode-text').removeClass('light').addClass('dark').text('Dark');
    } else {
        // If not checked, add classes for light mode and remove classes for dark mode
        $('body').removeClass('dark').addClass('light');
        $('.mode-text').removeClass('dark').addClass('light').text('Light');
    }
}); */

/* // Specialize Accordin 
$(".sr-t+.th-p").slideUp()
$(".sr-t").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
})
//  Theme Change 
$(".th-mode").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("dark");
}) */
// Nav Scroll On Up Toggler
$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function (event) {
       /*  var st = $(this).scrollTop();
        if (st > 0) {
            $(".ht-left img").addClass("d-none");
        } else {
            $(".ht-left img").removeClass("d-none");
        } */
        /* if (st > lastScrollTop) {
            // Downscroll code
            $('.header-bottom').addClass('active');
        } else {
            // Upscroll code
            $('.header-bottom').removeClass('active');
        }
        lastScrollTop = st; */
    });

    /* // Handle stop scrolling
    var timeout;
    $(window).scroll(function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            $('.header-bottom').removeClass('active');
        }, 2000);
    }); */
});



//   Animate to top  
$('.foot-up .fal').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});



const h2Split = document.querySelectorAll('.h2')

h2Split.forEach((char, i) => {

    const text = new SplitType(char, { type: "chars, words" })

    gsap.from(text.words, {
        yPercent: 130,
        opacity: 0,
        stagger: 0.02,
        ease: "back.out",
        duration: 1,
    });
})

        










