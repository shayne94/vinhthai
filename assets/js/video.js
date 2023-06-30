var large_index = 1;
Box_Large(large_index);

function Menu_Large(n) {
  Box_Large(large_index = n);
}

function Box_Large(n) {
  var i;
  var box_large = document.getElementsByClassName("video__inner");
  var menu_large = document.getElementsByClassName("header__sub--item");
  if (n > box_large.length) {large_index = 1}
  if (n < 1) {large_index = box_large.length}
  for (i = 0; i < box_large.length; i++) {
      box_large[i].style.display = "none";
  }
  for (i = 0; i < menu_large.length; i++) {
      menu_large[i].className = menu_large[i].className.replace(" active", "");
  }
  box_large[large_index-1].style.display = "flex";
  menu_large[large_index-1].className += " active";
}

var softbank_index = 1;
Box_SoftBank(softbank_index);

function Menu_SoftBank(softbank) {
  Box_SoftBank(softbank_index = softbank);
}

function Box_SoftBank(softbank) {
  var a;
  var box_softbank = document.getElementsByClassName("video__softbank");
  var menu_softbank = document.getElementsByClassName("video__menu--softbank");
  if (softbank > box_softbank.length) {softbank_index = 1}
  if (softbank < 1) {softbank_index = box_softbank.length}
  for (a = 0; a < box_softbank.length; a++) {
      box_softbank[a].style.display = "none";
  }
  for (a = 0; a < menu_softbank.length; a++) {
      menu_softbank[a].className = menu_softbank[a].className.replace(" active", "");
  }
  box_softbank[softbank_index-1].style.display = "flex";
  menu_softbank[softbank_index-1].className += " active";
}