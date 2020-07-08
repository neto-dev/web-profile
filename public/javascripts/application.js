(function() {
  changeMouse();
  changeNavBackground();
  detectTopBrowser();
  // Variable que almacena nuestro menu
  let curtain = document.getElementsByClassName("curtain-menu")[0];
  // Acciones al precionar el boton de abrir y cerrar menu
  let buttonMenu = document.getElementById("button-menu");
  buttonMenu.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Curtain", curtain);
    curtain.classList.remove("desactive-menu");
    curtain.className += " active-menu";
  });
  let closeMenu = document.getElementById("close-menu");
  closeMenu.addEventListener("click", function(event) {
    event.preventDefault();
    curtain.classList.remove("active-menu");
    curtain.className += " desactive-menu";
  });
}.call(this));

// Metodo para el manejo del custom pointer mouse
function changeMouse() {
  let follower, init, mouseX, mouseY, positionElement, printout, timer;
  let mouseover = document.getElementsByClassName("mouse-over");

  follower = document.getElementById("follower");

  printout = document.getElementById("printout");

  mouseX = event => {
    return event.clientX;
  };

  mouseY = event => {
    return event.clientY;
  };

  positionElement = event => {
    let mouse;
    let body = document.getElementsByTagName("body")[0];
    body.style = "cursor: none!important;";
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    follower.style.top = mouse.y + window.scrollY + "px";
    return (follower.style.left = mouse.x + "px");
  };

  timer = false;

  window.onmousemove = init = event => {
    let _event;
    _event = event;
    return (timer = setTimeout(() => {
      return positionElement(_event);
    }, 1));
  };

  // En caso de que el mouse se posisione encima del elemento cambia su diseño
  Array.from(mouseover).forEach(function(element, index, array) {
    element.onmouseover = function() {
      document.getElementById("circle1").setAttribute("id", "circle1Over");
    };
    element.onmouseleave = function() {
      document.getElementById("circle1Over").setAttribute("id", "circle1");
    };
  });
}

// Función que detecta si el top del navegador supero los pixeles señalados, y una vez los supere realice una accion especifica.
function changeNavBackground() {
  const changeNavBG = 100;
  let nav = document.getElementById("menu");

  function changeNavDark() {
    nav.classList.remove("is-transparent");
    nav.classList.add("is-dark");
  }

  function changeNavTransparent() {
    nav.classList.remove("is-dark");
    nav.classList.add("is-transparent");
  }

  if (window.scrollY >= changeNavBG) {
    changeNavDark();
  } else {
    changeNavTransparent();
  }
  window.onscroll = () => {
    if (window.scrollY >= changeNavBG) {
      changeNavDark();
    } else {
      changeNavTransparent();
    }
  };
}

function detectTopBrowser() {
  let about = document.getElementById("about");
  window.onscroll = () => {
    let topDivScroll = about.getBoundingClientRect().top;
    console.log(topDivScroll);
    if (topDivScroll <= -10) {
      alert("Hola");
    }
  };
}
