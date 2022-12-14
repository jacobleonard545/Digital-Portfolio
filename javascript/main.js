AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Change Theme Color
var themes = [
    {
        // Light Coral
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(240, 128, 128)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(255, 140, 0)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Purple
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(147, 112, 219)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Sea Green
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(60, 179, 113)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Teal
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(0, 128, 128)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Clear Chill
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(27, 156, 252)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // green Teal
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(5, 196, 107)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Auora Green
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(120, 224, 143)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Deep Rose
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(196, 69, 105)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Saturted Sky
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(83, 82, 237)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Watermelon
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(255, 71, 87)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Greenland Green
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(34, 166, 179)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange Tomato
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(255, 99, 72)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // pink rose
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(237, 76, 103)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // dark grey
        backgroundColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 255, 255)",
        navbarBackgroundColor: "rgba(255, 255, 255, 0.6)",
        primaryColor: "rgb(72, 85, 100)",
        secondaryColor: "rgb(0,0,0)",
        transparent: "rgb(255,255,255,0)"
    },
    // COLORED BACKGROUND THEMES
    {
        // Light Coral
        backgroundColor: "rgb(240, 128, 128)",
        footerColor: "rgb(240, 128, 128)",
        navbarBackgroundColor: "rgba(240, 128, 128, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange
        backgroundColor: "rgb(255, 140, 0)",
        footerColor: "rgb(255, 140, 0)",
        navbarBackgroundColor: "rgba(255, 140, 0, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Purple
        backgroundColor: "rgb(147, 112, 219)",
        footerColor: "rgb(147, 112, 219)",
        navbarBackgroundColor: "rgba(147, 112, 219, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Medium Sea Green
        backgroundColor: "rgb(60, 179, 113)",
        footerColor: "rgb(60, 179, 113)",
        navbarBackgroundColor: "rgba(60, 179, 113, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Teal
        backgroundColor: "rgb(0, 128, 128)",
        footerColor: "rgb(0, 128, 128)",
        navbarBackgroundColor: "rgba(0, 128, 128, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Clear Chill
        backgroundColor: "rgb(27, 156, 252)",
        footerColor: "rgb(27, 156, 252)",
        navbarBackgroundColor: "rgba(27, 156, 252, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // green Teal
        backgroundColor: "rgb(5, 196, 107)",
        footerColor: "rgb(5, 196, 107)",
        navbarBackgroundColor: "rgba(5, 196, 107, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Auora Green
        backgroundColor: "rgb(120, 224, 143)",
        footerColor: "rgb(120, 224, 143)",
        navbarBackgroundColor: "rgba(120, 224, 143, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Watermelon
        backgroundColor: "rgb(255, 71, 87)",
        footerColor: "rgb(255, 71, 87)",
        navbarBackgroundColor: "rgba(255, 71, 87, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Greenland Green
        backgroundColor: "rgb(34, 166, 179)",
        footerColor: "rgb(34, 166, 179)",
        navbarBackgroundColor: "rgba(34, 166, 179, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // Orange Tomato
        backgroundColor: "rgb(255, 99, 72)",
        footerColor: "rgb(255, 99, 72)",
        navbarBackgroundColor: "rgba(255, 99, 72, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        footerColor: "rgb(255, 99, 72)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // pink rose
        backgroundColor: "rgb(237, 76, 103)",
        footerColor: "rgb(237, 76, 103)",
        navbarBackgroundColor: "rgba(237, 76, 103, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
    {
        // dark grey
        backgroundColor: "rgb(72, 85, 100)",
        footerColor: "rgb(72, 85, 100)",
        navbarBackgroundColor: "rgba(72, 85, 100, 0.6)",
        primaryColor: "rgb(255, 255, 255)",
        secondaryColor: "rgb(255, 255, 255)",
        transparent: "rgb(255,255,255,0)"
    },
];

var themeArr = [];
var counter = 0;
const numOfThemes = 28;


function randomTheme() { // returns a random number
    // no duplicate themes 
    while (themeArr.length < numOfThemes) {
        var ran = Math.floor(Math.random() * numOfThemes);
        if (themeArr.indexOf(ran) === -1) themeArr.push(ran);
    }
    themeArr.splice(themeArr.indexOf(14), 1)
    themeArr.unshift(14)
}

function setTheme() {
    var num = themeArr[counter];
    var primaryColor = themes[num]["primaryColor"];
    var secondaryColor = themes[num]["secondaryColor"];
    var backgroundColor = themes[num]["backgroundColor"];
    var footerColor = themes[num]["footerColor"];
    var navbarBackgroundColor = themes[num]["navbarBackgroundColor"];
    var transparent = themes[num]["transparent"];
    $("html").css("background-color", backgroundColor);
    $("body").css("background-color", backgroundColor);
    $("nav").css("background-color", navbarBackgroundColor);
    $(".secondaryColor").css("color", secondaryColor);
    $(".primaryColor").css({ "color": primaryColor, "border-color": primaryColor });
    $("footer").css("background-color", footerColor);
    $("hr").css("border-color", primaryColor);
    $(".primaryButtonColor").css({ "color": backgroundColor, "background-color": primaryColor });
    $(".secondaryButtonColor").css({ "color": secondaryColor, "border-color": primaryColor });
    $(".primaryButtonColor").hover(function () {
        $(this).css({ "color": primaryColor, "background-color": backgroundColor, "border-color": primaryColor });
    }, function () {
        $(this).css({ "color": backgroundColor, "background-color": primaryColor });
    })
    $(".secondaryButtonColor").hover(function () {
        $(this).css({ "color": backgroundColor, "background-color": primaryColor });
    }, function () {
        $(this).css({ "color": secondaryColor, "background-color": transparent });
    })
    $(".form-control").css("background-color", backgroundColor);
    $(".marker").css("background-color", primaryColor);
    var style = document.querySelector('.container').style;
    style.setProperty('--color', primaryColor);
    setParticleColor(primaryColor);
}

function setParticleColor(rgb) {
    // convert rgb -> hex to change particle color
    var h = x => '#' + x.match(/\d+/g).map(y = z => ((+z < 16) ? '0' : '') + (+z).toString(16)).join('');
    var particleColor = h(rgb);
    $.each(pJSDom[0].pJS.particles.array, function (i, p) {
        pJSDom[0].pJS.particles.array[i].color.value = particleColor;
        pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(particleColor);
    });
}


$('#color-btn').click(function () {

    if (counter >= numOfThemes) {
        themeArr = [];
        counter = 0;
        randomTheme();
    }
    setTheme();
    counter++;

})

var options = {
    strings: ["software development.", "cybersecurity.", "open-source projects.", "fitness/nutrition.", "sports of all kinds.", "volunteering... Go Vols!"]
}

var typed = new Typed("#my-name", {
    strings: options.strings,
    startDelay: 300,
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
});


// Particles JS
$(document).ready(function () {

    randomTheme();

    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 7,
                    "density": {
                        "enable": true,
                        "value_area": 2000
                    }
                },
                "color": {
                    "value": "#000000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 2
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 15,
                        "size_min": 0.7,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "top-right",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 15,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 2
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    );
    setTheme();
    counter++;
});

