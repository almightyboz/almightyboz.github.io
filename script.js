function pluckRandom(list) {
  list[Math.floor(Math.random() * list.length)];
}

particlesJS('particles-js',

  {
  "particles": {
      "number": {
        "value": 5,
        "density":{
          "enable": false,
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
          "nb_sides": 7
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
          "speed": 1,
          "direction": "none",
          "random": pluckRandom([true, false]),
          "straight": false,
          "out_mode": pluckRandom(["bounce", "out"]),
          "bounce": pluckRandom([true, false]),
          "attract": {
            "enable": pluckRandom([true, false]),
            "rotateX": 1200,
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
            "distance": 50,
            "duration": 0.3
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
});
