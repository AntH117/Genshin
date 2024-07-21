
function hover_news(y) {
  var x = document.getElementById("navigation");
  x.style.left = "105px"
}

function hover_characters(y) {
  var x = document.getElementById("navigation");
  x.style.left = "170px"
  x.style.width  = "90px"
}

function hover_explore(y) {
  var x = document.getElementById("navigation");
  x.style.left = "280px"
  x.style.width  = "65px"
}

function hover_more (y) {
  var x = document.getElementById("navigation");
  x.style.left = "380px"
  x.style.width  = "50px"
}


function Default(y) {
  var x = document.getElementById("navigation");
  var y = document.getElementById("explore-menu");
  if (y.matches(':hover')) {
    x.style.left = "280px"
    x.style.width  = "65px"
  }
  else {
    x.style.left = "40px"
    x.style.width = "38px"
  }
}

function hover_explore_menu() {
  var x = document.getElementById("explore-menu");
  x.style.opacity = "0.95"
  x.style.pointerEvents = "auto"
}

function hover_explore_menu_off() {
  var x = document.getElementById("explore-menu");
  var y = document.getElementById("navigation");
  if (x.matches(':hover')) {
    x.style.opacity = "0.95"
  }
  else {
    x.style.opacity = "0"
    x.style.pointerEvents ="none"
    y.style.left = "40px"
    y.style.width = "38px"
  }
}

function hover_more_menu() {
  var x = document.getElementById("more-menu");
  x.style.opacity = "0.95"
  x.style.pointerEvents = "auto"
}

function hover_more_menu_off() {
  var x = document.getElementById("more-menu");
  var y = document.getElementById("navigation");
  if (x.matches(':hover')) {
    x.style.opacity = "0.95"
  }
  else {
    x.style.opacity = "0"
    x.style.pointerEvents ="none"
    y.style.left = "40px"
    y.style.width = "38px"
  }
}


function hover_socials(y, x) {
  z = document.getElementById(x)
  y.style.background = "#333333"
  z.style.color = "#ffd49f"
}

function socials_default(y, x, g) {
  z = document.getElementById(x)
  y.style.background = "rgb(238, 231, 231)"
  z.style.color = "black"
}

function hover_socials_icon(y, b) {
  z = document.getElementById(y)
  z.style.content = `url(${b})`
}

function hover_socials_icon_off(y, b) {
  z = document.getElementById(y)
  z.style.content = `url(${b})`
}

function social_tab_toggle(b) {
  x = document.getElementById(b)
  y = document.getElementById('social-button')
  if (x.style.right == "0px") {
    x.style.right = "-180px"
    y.style.transform= "rotate(0.5turn)"
  } else {
    x.style.right = "0px"
    y.style.transform= "rotate(1turn)"
  }
}

function social_tab_view() {
  x = document.getElementById('social-tab')
  if (document.documentElement.scrollTop > 400) {
    x.style.opacity = "0.95"
    x.style.pointerEvents = "auto"
  } else {
    x.style.opacity = "0"
    x.style.pointerEvents = "none"
  }
}

window.onscroll = function() {social_tab_view()};

let slider_index = 0;

function news_photos() {
  x = document.getElementsByClassName('news-slides');
  x1 = document.getElementsByClassName('news-button1');
  x2 = document.getElementsByClassName('news-button2');
  x3 = document.getElementsByClassName('news-button3');
  x4 = document.getElementsByClassName('news-button4');
  for (const a of Array(4).keys()) {
    x[a].style.left = `${-600 * slider_index}px`;
  }
  if (slider_index == 0) {
    x1[0].style.background = "rgba(255, 255, 255, 1)"
    x2[0].style.background = "rgba(255, 255, 255, 0)"
    x3[0].style.background = "rgba(255, 255, 255, 0)"
    x4[0].style.background = "rgba(255, 255, 255, 0)"
  }
  if (slider_index == 1) {
    x1[0].style.background = "rgba(255, 255, 255, 0)"
    x2[0].style.background = "rgba(255, 255, 255, 1)"
    x3[0].style.background = "rgba(255, 255, 255, 0)"
    x4[0].style.background = "rgba(255, 255, 255, 0)"
  }
  if (slider_index == 2) {
    x1[0].style.background = "rgba(255, 255, 255, 0)"
    x2[0].style.background = "rgba(255, 255, 255, 0)"
    x3[0].style.background = "rgba(255, 255, 255, 1)"
    x4[0].style.background = "rgba(255, 255, 255, 0)"
  }
  if (slider_index == 3) {
    x1[0].style.background = "rgba(255, 255, 255, 0)"
    x2[0].style.background = "rgba(255, 255, 255, 0)"
    x3[0].style.background = "rgba(255, 255, 255, 0)"
    x4[0].style.background = "rgba(255, 255, 255, 1)"
  }
  slider_index++
  if (slider_index > 3) {
    slider_index = 0;
  }
  setTimeout(news_photos, 4000);
}


window.onload = function() {
  news_photos()
}

function news_click_1() {
  slider_index = 0
  x1 = document.getElementsByClassName('news-button1');
  x2 = document.getElementsByClassName('news-button2');
  x3 = document.getElementsByClassName('news-button3');
  x4 = document.getElementsByClassName('news-button4');
  x = document.getElementsByClassName('news-slides');
  for (const a of Array(4).keys()) {
    x[a].style.left = "0px"
  }
  x1[0].style.background = "rgba(255, 255, 255, 1)"
  x2[0].style.background = "rgba(255, 255, 255, 0)"
  x3[0].style.background = "rgba(255, 255, 255, 0)"
  x4[0].style.background = "rgba(255, 255, 255, 0)"
}

function news_click_2() {
  slider_index = 1
  x1 = document.getElementsByClassName('news-button1');
  x2 = document.getElementsByClassName('news-button2');
  x3 = document.getElementsByClassName('news-button3');
  x4 = document.getElementsByClassName('news-button4');
  x = document.getElementsByClassName('news-slides');
  for (const a of Array(4).keys()) {
    x[a].style.left = "-600px"
  }
  x1[0].style.background = "rgba(255, 255, 255, 0)"
  x2[0].style.background = "rgba(255, 255, 255, 1)"
  x3[0].style.background = "rgba(255, 255, 255, 0)"
  x4[0].style.background = "rgba(255, 255, 255, 0)"
}

function news_click_3() {
  slider_index = 2
  x1 = document.getElementsByClassName('news-button1');
  x2 = document.getElementsByClassName('news-button2');
  x3 = document.getElementsByClassName('news-button3');
  x4 = document.getElementsByClassName('news-button4');
  x = document.getElementsByClassName('news-slides');
  for (const a of Array(4).keys()) {
    x[a].style.left = "-1200px"
  }
  x1[0].style.background = "rgba(255, 255, 255, 0)"
  x2[0].style.background = "rgba(255, 255, 255, 0)"
  x3[0].style.background = "rgba(255, 255, 255, 1)"
  x4[0].style.background = "rgba(255, 255, 255, 0)"
}

function news_click_4() {
  slider_index = 3
  x1 = document.getElementsByClassName('news-button1');
  x2 = document.getElementsByClassName('news-button2');
  x3 = document.getElementsByClassName('news-button3');
  x4 = document.getElementsByClassName('news-button4');
  x = document.getElementsByClassName('news-slides');
  for (const a of Array(4).keys()) {
    x[a].style.left = "-1800px"
  }
  x1[0].style.background = "rgba(255, 255, 255, 0)"
  x2[0].style.background = "rgba(255, 255, 255, 0)"
  x3[0].style.background = "rgba(255, 255, 255, 0)"
  x4[0].style.background = "rgba(255, 255, 255, 1)"
}

function city_hover(a, b, c) {
  x = document.getElementById(b)
  y = document.getElementById(a)
  z = document.getElementsByClassName(c)
  if (x.matches(':hover')) {
    y.style.borderWidth = "8px"
    z[0].style.opacity = "1"
  }

}
function city_hover_off(a, c) {
  y = document.getElementById(a)
  z = document.getElementsByClassName(c)
  y.style.borderWidth = "0px"
  z[0].style.opacity = "0"
}

function language_click(a, b) {
  y = document.getElementById(b)
  if (y.style.height != "190px") {
    y.style.height = "190px"
    a.style.width = "170px"
  } else if (y.style.height == "190px") {
    y.style.height = "0px"
  }
}

function language_click_off(a, b) {
  y = document.getElementById(b)
  y.style.height = "0px"
}