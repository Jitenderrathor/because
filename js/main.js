//  dark and light mode 
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
});

// Accordin 
$(".sr-t+.th-p").slideUp()
$(".sr-t").click(function () {
    $(this).toggleClass("active");
    $(this).next().slideToggle();
})
//  Theme Change 
$(".th-mode").click(function(){
    $(this).toggleClass("active");
    $("body").toggleClass("dark");
})
// Nav Scroll Toggler
$(document).ready(function () {
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            $('header').addClass('hidden');
        } else {
            // Scrolling to the top
            $('header').removeClass('hidden');
        }

        lastScrollTop = scrollTop;
    });
});

//   Animate to top  
$('.foot-up .fal').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

/* Navbar Animation */
$(document).ready(function () {
    $(".nav-toggle-btn").on("click", function () {
        if (!$("#header .navbar").hasClass("active")) {
            $("#header .navbar").addClass("active");

            gsap.to("#header .nav-container", {
                y: "0vh",
                opacity: 1,
                stagger: 0.05,
                ease: "power4.out",
                duration: 1,
            });

            // Create a new timeline for the list items animation
            const listItemsAnimation = gsap.timeline();
            listItemsAnimation.from("#header .nav-container li", {
                xPercent: 150,
                opacity: 0,
                stagger: 0.05,
                delay: 0.5,
                ease: "back.out",
                duration: 0.5,
            });

        } else {
            $("#header .navbar").removeClass("active");

            // Clear the previous animations from the timeline
            const nav = gsap.timeline({ clearProps: "all" });

            // Add animation for hiding the list items with stagger
            nav.to("#header .nav-container li", {
                xPercent: 0, // Adjust this value to the desired end position
                opacity: 1,
                stagger: {
                    amount: 0.05,
                    ease: "back.out",
                },
                duration: 0.5,
            });

            // Add animation for hiding the container
            nav.to("#header .nav-container", {
                y: "-200vh",
                opacity: 1,
                ease: "power4.out",
                duration: 0.5,
            });
        }
    });
});



// Banner Text In
const bannerTl = gsap.timeline();
let bannerSplitText = new SplitType(".banner .h1", { type: "chars, words" });
let bannerChars = bannerSplitText.chars;
bannerTl.from(bannerChars, {
    yPercent: 130,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    duration: .5,
});
//   Mouse 
bannerTl.from(".mouse-icon", {
    scale: 2,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    duration: 1,
});

// Banner Text Out
gsap.to(".banner .h1-light", 2, {
    x: "-150vh",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".h1-light",
        start: "top 20%",
        scrub: true,
    }
});
gsap.to(".banner .h1-black", 2, {
    x: "150vh",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".h1-light",
        start: "top 20%",
        scrub: true,
    }
});

// specialize section
gsap.from(".specialize .h3", 1, {
    x: 100,
    opacity: 0,
    ease: "expo.out",
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".specialize",
        start: "top 80%", // Adjust as needed
        end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
gsap.from(".specialize .th-p", 1, {
    scale: .5,
    opacity: 0,
    ease: "expo.out",
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".specialize",
        start: "top 80%", // Adjust as needed
        end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
gsap.from(".sr-t", 1, {
    x: 100,
    opacity: 0,
    ease: "expo.out",
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".specialize",
        start: "top 80%", // Adjust as needed
        end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});


// Our work 
let mySplitText = new SplitType(".our-work .h1", { type: "chars,words" });
let chars = mySplitText.chars;
gsap.from(chars, {
    yPercent: 130,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    duration: .5,
    scrollTrigger: {
        trigger: ".our-work",
        start: "top 80%",
        end: "top 20%",
        // scrub:true,
        // markers: true
    }
});
let writeSplitText = new SplitType(".write-to-us .h1", { type: "chars,words" });
let writeChars = writeSplitText.chars;
gsap.from(writeChars, {
    yPercent: 130,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    duration: .5,
    scrollTrigger: {
        trigger: ".write-to-us",
        start: "top 80%",
        end: "top 20%",
        // scrub:true,
        // markers: true
    }
});

gsap.from(".ow-img", {
    opacity: 0,
    x: "-150%",
    delay: .5,

    stagger: 0.2, // Adjust as needed
    scrollTrigger: {
        trigger: ".our-work",
        start: "top 20%", // Adjust as needed
        // end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
gsap.from(".ow-text .h3-1", {
    y: 150,
    opacity: 0,
    stagger: 0.2, // Adjust as needed
    delay: .5,
    scrollTrigger: {
        trigger: ".our-work",
        start: "top 20%", // Adjust as needed
        // end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
gsap.from(".ow-text .h3-2", {
    y: 150,
    opacity: 0,
    stagger: 0.2, // Adjust as needed
    delay: 1,
    scrollTrigger: {
        trigger: ".our-work",
        start: "top 20%", // Adjust as needed
        // end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
gsap.from(".ow-btn", {
    x: 150,
    opacity: 0,
    stagger: 0.2, // Adjust as needed
    delay: 1,
    scrollTrigger: {
        trigger: ".our-work",
        start: "top 20%", // Adjust as needed
        // end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});



// More Project Section 

gsap.from(".our-project .row .col-6", {
    opacity: 0,
    x: "150%",
    stagger: 0.2, // Adjust as needed
    scrollTrigger: {
        trigger: ".our-project",
        start: "top 80%", // Adjust as needed
        // end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
let sections = gsap.utils.toArray(".op-container .row");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".our-project",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".our-project").offsetWidth
    }
});

// write to us
gsap.from(".write-to-us .th-p", {
    scale: 2,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".write-to-us",
        start: "top 30%", // Adjust as needed
        end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});
gsap.from(".f-input .col-12", 1, {
    x: 100,
    opacity: 0,
    ease: "expo.out",
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".write-to-us",
        start: "top 30%", // Adjust as needed
        end: "bottom 60%", // Adjust as needed
        // scrub: true,
    },
});

