function pluckRandom(list) {
  list[Math.floor(Math.random() * list.length)];
}

particlesJS('particles-js',

  {
  "particles": {
      "number": {
        "value": 30,
        "density":{
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#EA967A"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#EA967A"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 8,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 300,
          "color": "#EA967A",
          "opacity": 1,
          "width": 2.25
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": pluckRandom(["bounce", "out"]),
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          },
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
            "distance": 100,
            "line_linked": {
              "opacity": 1
            }
          },
          "repulse": {
            "distance": 100,
            "duration": 0.3
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
    "retina_detect": true
});
