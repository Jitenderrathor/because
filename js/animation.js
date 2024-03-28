// Main Heading Animation 
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
// Banner Text Out
gsap.to(".banner .h1-light", 2, {
    x: "-150vh",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".banner .h1-light",
        start: "top 10%",
        scrub: true,
    }
});
gsap.to(".banner .h1-black", 2, {
    x: "150vh",
    stagger: 0.05,
    scrollTrigger: {
        trigger: ".banner .h1-light",
        start: "top 20%",
        scrub: true,
    }
});





// Mouse Up and down animation
bannerTl.from(".mouse-icon", {
    scale: 2,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    duration: 1,
});


// Specialize Animation on hold
// specialize section
// gsap.from(".specialize .h3", 1, {
//     x: 100,
//     opacity: 0,
//     ease: "expo.out",
//     delay: 0.5,
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".specialize",
//         start: "top 80%", // Adjust as needed
//         end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });
// gsap.from(".specialize .th-p", 1, {
//     scale: .5,
//     opacity: 0,
//     ease: "expo.out",
//     delay: 0.5,
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".specialize",
//         start: "top 80%", // Adjust as needed
//         end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });
// gsap.from(".sr-t", 1, {
//     x: 100,
//     opacity: 0,
//     ease: "expo.out",
//     delay: 0.5,
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".specialize",
//         start: "top 80%", // Adjust as needed
//         end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });

// Our Work on Hold Animation 

// gsap.from(".ow-img", {
//     opacity: 0,
//     x: "-150%",
//     delay: .5,
//     stagger: 0.2, // Adjust as needed
//     scrollTrigger: {
//         trigger: ".our-work",
//         start: "top 50%", // Adjust as needed
//         // end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });
// gsap.from(".ow-text .h3-1", {
//     y: 150,
//     opacity: 0,
//     stagger: 0.2, // Adjust as needed
//     delay: .5,
//     scrollTrigger: {
//         trigger: ".our-work",
//         start: "top 20%", // Adjust as needed
//         // end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });
// gsap.from(".ow-text .h3-2", {
//     y: 150,
//     opacity: 0,
//     stagger: 0.2, // Adjust as needed
//     delay: 1,
//     scrollTrigger: {
//         trigger: ".our-work",
//         start: "top 20%", // Adjust as needed
//         // end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });
// gsap.from(".ow-btn", {
//     x: 150,
//     opacity: 0,
//     stagger: 0.2, // Adjust as needed
//     delay: 1,
//     scrollTrigger: {
//         trigger: ".our-work",
//         start: "top 20%", // Adjust as needed
//         // end: "bottom 60%", // Adjust as needed
//         // scrub: true,
//     },
// });








// Contact Section Animation 
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


/* Old Navbar Animation 
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
});*/

/*
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
*/