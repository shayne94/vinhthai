var large_index = 1;
Box_Large(large_index);

function Menu_Large(n) {
  Box_Large(large_index = n);
}

function Box_Large(n) {
  var i;
  var box_large = document.getElementsByClassName("poster__inner");
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