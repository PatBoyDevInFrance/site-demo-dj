






//menu burger

const toggleButton = document.getElementById('toggle-btn');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show(){
  sideBar.classList.toggle('active');
}

// autre projet //
gsap.to(".pContent", {
  delay: 1,
  scale: 1.2,
  //y: 400,
  autoAlpha: 0.5,
  stagger: 0.15,
  overwrite: true,
  yPercent: -20,
  ease: "flip",
  scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      //end: "bottom top",
      scrub: false
  },
});

gsap.to(".pImage", {

  ease: "none",
  scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
  },
});


/////////----------CAROUSEL--------------/////////////

// $('input').an('change'), function () {
//   $('body').toggleClass('blue');
// }

////////    carousel 2  de l'accueil   /////////////////
////////////////////////--------------/////////////////

// var radius = 340; // how big of the radius
// var autoRotate = true; // auto rotate or not
// var rotateSpeed = -40; // unit: seconds/360 degrees
// var imgWidth = 130; // width of images (unit: px)
// var imgHeight = 170; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
//var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
//var bgMusicControls = true; // Show UI music control



// // ===================== start =======================
// // animation start after 1000 miliseconds
// // import { gsap, ScrollTrigger } from "gsap/all";
// setTimeout(init, 1000);

// var odrag = document.getElementById('drag-container');
// var ospin = document.getElementById('spin-container');
// var aImg = ospin.getElementsByTagName('img');
// var aVid = ospin.getElementsByTagName('video');
// var aEle = [...aImg, ...aVid]; // combine 2 arrays

// // Size of images
// ospin.style.width = imgWidth + "px";
// ospin.style.height = imgHeight + "px";

// // Size of ground - depend on radius
// var ground = document.getElementById('ground');
// ground.style.width = radius * 4 + "px";
// ground.style.height = `${radius * 3}px`;

// function init(delayTime) {
//   for (var i = 0; i < aEle.length; i++) {
//     aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
//     aEle[i].style.transition = "transform 2s";
//     aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
//   }
// }

// function applyTranform(obj) {
//   // Constrain the angle of camera (between 0 and 180)
//   if(tY > 180) tY = 180;
//   if(tY < 0) tY = 0;

//   // Apply the angle
//   obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
// }

// function playSpin(yes) {
//   ospin.style.animationPlayState = (yes?'running':'paused');
// }

// var sX, sY, nX, nY, desX = 0,
//     desY = 0,
//     tX = 0,
//     tY = 10;

// // auto spin
// if (autoRotate) {
//   var animationName = (rotateSpeed > 10 ? 'spin' : 'spinRevert');
//   ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
// }

// // add background music
// /*
// if (bgMusicURL) {
//   document.getElementById('music-container').innerHTML += `
// <audio src="${bgMusicURL}" ${bgMusicControls? 'controls': ''} autoplay loop>    
// <p>If you are reading this, it is because your browser does not support the audio element.</p>
// </audio>
// `;
// }
// */
// //------------------
// // setup events
// // document.onpointerdown = function (e) {
// //   clearInterval(odrag.timer);
// //   e = e || window.event;
// //   var sX = e.clientX,
// //       sY = e.clientY;

// //   this.onpointermove = function (e) {
// //     e = e || window.event;
// //     var nX = e.clientX,
// //         nY = e.clientY;
// //     desX = nX - sX;
// //     desY = nY - sY;
// //     tX += desX * 0.1;
// //     tY += desY * 0.1;
// //     applyTranform(odrag);
// //     sX = nX;
// //     sY = nY;
// //   };

// //   this.onpointerup = function (e) {
// //     odrag.timer = setInterval(function () {
// //       desX *= 0.95;
// //       desY *= 0.95;
// //       tX += desX * 0.1;
// //       tY += desY * 0.1;
// //       applyTranform(odrag);
// //       playSpin(false);
// //       if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
// //         clearInterval(odrag.timer);
// //         playSpin(true);
// //       }
// //     }, 17);
// //     this.onpointermove = this.onpointerup = null;
// //   };

// //   return false;
// // };
// // code rectifié
// document.addEventListener('pointerdown', function (e) {
//   clearInterval(odrag.timer);
//   var sX = e.clientX,
//       sY = e.clientY;

//   var pointerMoveHandler = function (e) {
//     var nX = e.clientX,
//         nY = e.clientY;
//     var desX = nX - sX,
//         desY = nY - sY;
//     tX += desX * 0.1;
//     tY += desY * 0.1;
//     applyTranform(odrag);
//     sX = nX;
//     sY = nY;
//   };

//   var pointerUpHandler = function () {
//     odrag.timer = setInterval(function () {
//       desX *= 0.95;
//       desY *= 0.95;
//       tX += desX * 0.1;
//       tY += desY * 0.1;
//       applyTranform(odrag);
//       playSpin(false);
//       if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//         clearInterval(odrag.timer);
//         playSpin(true);
//       }
//     }, 17);
//     document.removeEventListener('pointermove', pointerMoveHandler);
//     document.removeEventListener('pointerup', pointerUpHandler);
//   };

//   document.addEventListener('pointermove', pointerMoveHandler);
//   document.addEventListener('pointerup', pointerUpHandler);
// });


// document.addEventListener('wheel', function(e) {
//   e = e || window.event;
//   var d = e.deltaY / 20 || -e.detail;
//   radius += d;
//   init(1);
// });

//---------------
// document.onmousewheel = function(e) {
//   e = e || window.event;
//   var d = e.wheelDelta / 20 || -e.detail;
//   radius += d;
//   init(1);
// };
//---------------------------code GPT
// var radius = 440; // how big of the radius
// var autoRotate = true; // auto rotate or not
// var rotateSpeed = -40; // unit: seconds/360 degrees
// var imgWidth = 130; // width of images (unit: px)
// var imgHeight = 170; // height of images (unit: px)
// var odrag = document.getElementById('drag-container');
// var ospin = document.getElementById('spin-container');
// var aImg = ospin.getElementsByTagName('img');
// var aVid = ospin.getElementsByTagName('video');
// var aEle = [...aImg, ...aVid]; // combine 2 arrays

// // animation start after 1000 milliseconds
// setTimeout(init, 1000);

// // Size of images
// ospin.style.width = imgWidth + "px";
// ospin.style.height = imgHeight + "px";

// // Size of ground - depend on radius
// var ground = document.getElementById('ground');
// ground.style.width = radius * 4 + "px";
// ground.style.height = `${radius * 3}px`;

// function init(delayTime) {
//   for (var i = 0; i < aEle.length; i++) {
//     aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
//     aEle[i].style.transition = "transform 7s";
//     aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
//   }
// }

// function applyTranform(obj) {
//   // Constrain the angle of camera (between 0 and 180)
//   if(tY > 180) tY = 180;
//   if(tY < 0) tY = 0;

//   // Apply the angle
//   obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
// }

// function playSpin(yes) {
//   ospin.style.animationPlayState = (yes?'running':'paused');
// }

// var sX, sY, nX, nY, desX = 0,
//     desY = 0,
//     tX = 0,
//     tY = 10;

// // auto spin
// if (autoRotate) {
//   var animationName = (rotateSpeed > 10 ? 'spin' : 'spinRevert');
//   ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
// }

// document.addEventListener('pointerdown', function (e) {
//   clearInterval(odrag.timer);
//   sX = e.clientX;
//   sY = e.clientY;

//   function pointerMoveHandler(e) {
//     nX = e.clientX;
//     nY = e.clientY;
//     desX = nX - sX;
//     desY = nY - sY;
//     tX += desX * 0.1;
//     tY += desY * 0.1;
//     applyTranform(odrag);
//     sX = nX;
//     sY = nY;
//   }

//   function pointerUpHandler() {
//     odrag.timer = setInterval(function () {
//       desX *= 0.95;
//       desY *= 0.95;
//       tX += desX * 0.1;
//       tY += desY * 0.1;
//       applyTranform(odrag);
//       playSpin(false);
//       if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
//         clearInterval(odrag.timer);
//         playSpin(true);
//       }
//     }, 17);
//     document.removeEventListener('pointermove', pointerMoveHandler);
//     document.removeEventListener('pointerup', pointerUpHandler);
//   }

//   document.addEventListener('pointermove', pointerMoveHandler);
//   document.addEventListener('pointerup', pointerUpHandler);
// });

// document.addEventListener('wheel', function(e) {
//   e = e || window.event;
//   var d = e.deltaY / 20 || -e.detail;
//   radius += d;
//   init(1);
// });

//----------------- début du code
const radius = 340; // Taille du rayon
const autoRotate = true; // Rotation automatique ou non
const rotateSpeed = -40; // Unité : secondes/360 degrés
const imgWidth = 130; // Largeur des images (en pixels)
const imgHeight = 170; // Hauteur des images (en pixels)
const odrag = document.getElementById('drag-container');
const ospin = document.getElementById('spin-container');
const aImg = Array.from(ospin.getElementsByTagName('img')); // Convertit en tableau
const aVid = Array.from(ospin.getElementsByTagName('video')); // Convertit en tableau
const aEle = [...aImg, ...aVid]; // Combine les deux tableaux

// Démarre l'animation après 1000 millisecondes
setTimeout(init, 1000);

// Taille des images
ospin.style.width = `${imgWidth}px`;
ospin.style.height = `${imgHeight}px`;

// Taille du sol - dépend du rayon
const ground = document.getElementById('ground');
ground.style.width = `${radius * 4}px`;
ground.style.height = `${radius * 3}px`;

function init(delayTime = 0) {
  const totalElements = aEle.length;
  const angleIncrement = (2 * Math.PI) / totalElements;

  aEle.forEach((elem, i) => {
    const angle = i * angleIncrement;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const rotationY = (angle * 180) / Math.PI;

    elem.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${rotationY}deg)`;
    elem.style.transition = `transform 2s ${delayTime || (totalElements - i) / 4}s`;
  });
}

function applyTranform(obj) {
  // Limite l'angle de la caméra (entre 0 et 180)
  tY = Math.min(Math.max(0, tY), 180);

  // Applique l'angle
  obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
}

function playSpin(yes) {
  ospin.style.animationPlayState = yes ? 'running' : 'paused';
}

let sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// Rotation automatique
if (autoRotate) {
  const animationName = rotateSpeed > 10 ? 'spin' : 'spinRevert';
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

document.addEventListener('pointerdown', function(e) {
  clearInterval(odrag.timer);
  sX = e.clientX;
  sY = e.clientY;

  function pointerMoveHandler(e) {
    nX = e.clientX;
    nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  }

  function pointerUpHandler() {
    odrag.timer = setInterval(function() {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    document.removeEventListener('pointermove', pointerMoveHandler);
    document.removeEventListener('pointerup', pointerUpHandler);
  }

  document.addEventListener('pointermove', pointerMoveHandler);
  document.addEventListener('pointerup', pointerUpHandler);
});

document.addEventListener('wheel', function(e) {
  e = e || window.event;
  const d = e.deltaY / 20 || -e.detail;
  radius += d;
  init(1);
});

////////////////////////------Fin du code--------/////////////////
// $(document).ready(function() {
// 	$('.carousel2').carousel();
// });

$('input').on('change', function () {
  $('body').toggleClass('blue');
});


// code js zoom //
window.visualViewport.addEventListener("zoom", viewportHandler);
function viewportHandler(event) {
  // NOTE: This doesn't actually work at time of writing
  if (event.target.scale > 3) {
    document.body.classList.remove("hide-text");
  } else {
    document.body.classList.add("hide-text");
  }
}


// nav bar

// const nav = document.querySelector('.nav')
// window.addEventListener('scroll', fixNav)

// function fixNav() {
//   if (window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add('active')

//   } else {
//     nav.classList.remove('active')
//   }
// }



// mp3
var timeString = (secs) => {
  // (A1) HOURS, MINUTES, SECONDS
  let ss = Math.floor(secs),
    hh = Math.floor(ss / 3600),
    mm = Math.floor((ss - hh * 3600) / 60);
  ss = ss - hh * 3600 - mm * 60;

  // (A2) RETURN FORMATTED TIME
  if (hh > 0) {
    mm = mm < 10 ? "0" + mm : mm;
  }
  ss = ss < 10 ? "0" + ss : ss;
  return hh > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
};

function setProgress(elTarget) {
  let divisionNumber = elTarget.getAttribute("max") / 100;
  let rangeNewWidth = Math.floor(elTarget.value / divisionNumber);
  if (rangeNewWidth > 95) {
    elTarget.nextSibling.style.width = "95%";
  } else {
    elTarget.nextSibling.style.width = rangeNewWidth + "%";
  }
}

for (let i of document.querySelectorAll(".aWrap")) {
  // (B) AUDIO + HTML SETUP + FLAGS
  i.audio = new Audio(encodeURI(i.dataset.src));
  (i.aPlay = i.querySelector(".aPlay")),
    (i.aPlayIco = i.querySelector(".aPlayIco")),
    (i.aNow = i.querySelector(".aNow")),
    (i.aTime = i.querySelector(".aTime")),
    (i.aSeek = i.querySelector(".aSeek")),
    (i.aVolume = i.querySelector(".aVolume")),
    (i.aVolIco = i.querySelector(".aVolIco"));
  i.seeking = false; // user is dragging the seek bar

  // (C) PLAY & PAUSE
  // (C1) CLICK TO PLAY/PAUSE
  i.aPlay.onclick = () => {
    if (i.audio.paused) {
      i.audio.play();
    } else {
      i.audio.pause();
    }
  };

  // (C2) SET PLAY/PAUSE ICON
  i.audio.onplay = () => (i.aPlayIco.innerHTML = '<i class="fa fa-pause"></i>');
  i.audio.onpause = () => (i.aPlayIco.innerHTML = '<i class="fa fa-play"></i>');

  // (D) TRACK PROGRESS & SEEK TIME
  // (D1) TRACK LOADING
  i.audio.onloadstart = () => {
    i.aNow.innerHTML = "Loading";
    i.aTime.innerHTML = "";
  };

  // (D2) ON META LOADED
  i.audio.onloadedmetadata = () => {
    // (D2-1) INIT SET TRACK TIME
    i.aNow.innerHTML = timeString(0);
    i.aTime.innerHTML = timeString(i.audio.duration);

    // (D2-2) SET SEEK BAR MAX TIME
    i.aSeek.max = Math.floor(i.audio.duration);

    // (D2-3) USER CHANGE SEEK BAR TIME
    i.aSeek.oninput = () => (i.seeking = true); // prevents clash with (d2-4)
    i.aSeek.onchange = () => {
      i.audio.currentTime = i.aSeek.value;
      if (!i.audio.paused) {
        i.audio.play();
      }
      i.seeking = false;
    };

    // (D2-4) UPDATE SEEK BAR ON PLAYING
    i.audio.ontimeupdate = () => {
      if (!i.seeking) {
        i.aSeek.value = Math.floor(i.audio.currentTime);
      }
      i.aNow.innerHTML = timeString(i.audio.currentTime);
      let divisionNumber = i.aSeek.getAttribute("max") / 100;
      let rangeNewWidth = Math.floor(i.aSeek.value / divisionNumber);
      if (rangeNewWidth > 95) {
        i.aSeek.nextSibling.style.width = "95%";
      } else {
        i.aSeek.nextSibling.style.width = rangeNewWidth + "%";
      }
    };
  };

  // (E) VOLUME
  i.aVolIco.onclick = () => {
    i.audio.volume = i.audio.volume == 0 ? 1 : 0;
    i.aVolume.value = i.audio.volume;
    i.aVolIco.innerHTML =
      i.aVolume.value == 0
        ? '<i class="fa fa-volume-off"></i>'
        : '<i class="fa fa-volume-up"></i>';
    if (i.aVolume.value == 0) {
      i.aVolume.nextSibling.style.width = "0%";
    } else {
      i.aVolume.nextSibling.style.width = "95%";
    }
  };
  i.aVolume.onchange = () => {
    i.audio.volume = i.aVolume.value;
    i.aVolIco.innerHTML =
      i.aVolume.value == 0
        ? '<i class="fa fa-volume-off"></i>'
        : '<i class="fa fa-volume-up"></i>';
  };

  // (F) ENABLE/DISABLE CONTROLS
  i.audio.oncanplaythrough = () => {
    i.aPlay.disabled = false;
    i.aVolume.disabled = false;
    i.aSeek.disabled = false;
  };
  i.audio.onwaiting = () => {
    i.aPlay.disabled = true;
    i.aVolume.disabled = true;
    i.aSeek.disabled = true;
  };

  i.aSeek.addEventListener("input", function () {
    setProgress(this);
  });

  i.aVolume.addEventListener("input", function () {
    setProgress(this);
  });
}

