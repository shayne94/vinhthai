var large_index = 1;
Box_Large(large_index);

function Menu_Large(n) {
  Box_Large(large_index = n);
}

function Box_Large(n) {
  var i;
  var box_large = document.getElementsByClassName("webdesign__inner");
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

var icd_index = 1;
Box_ICD(icd_index);

function Menu_ICD(icd) {
  Box_ICD(icd_index = icd);
}

function Box_ICD(icd) {
  var a;
  var box_icd = document.getElementsByClassName("webdesign__icd");
  var menu_icd = document.getElementsByClassName("webdesign__menu--icd");
  if (icd > box_icd.length) {icd_index = 1}
  if (icd < 1) {icd_index = box_icd.length}
  for (a = 0; a < box_icd.length; a++) {
      box_icd[a].style.display = "none";
  }
  for (a = 0; a < menu_icd.length; a++) {
      menu_icd[a].className = menu_icd[a].className.replace(" active", "");
  }
  box_icd[icd_index-1].style.display = "flex";
  menu_icd[icd_index-1].className += " active";
}

var qbb_index = 1;
Box_QBB(qbb_index);

function Menu_QBB(qbb) {
  Box_QBB(qbb_index = qbb);
}

function Box_QBB(qbb) {
  var b;
  var box_qbb = document.getElementsByClassName("webdesign__qbb");
  var menu_qbb = document.getElementsByClassName("webdesign__menu--qbb");
  if (qbb > box_qbb.length) {qbb_index = 1}
  if (qbb < 1) {qbb_index = box_qbb.length}
  for (b = 0; b < box_qbb.length; b++) {
      box_qbb[b].style.display = "none";
  }
  for (b = 0; b < menu_qbb.length; b++) {
      menu_qbb[b].className = menu_qbb[b].className.replace(" active", "");
  }
  box_qbb[qbb_index-1].style.display = "flex";
  menu_qbb[qbb_index-1].className += " active";
}


var lol_index = 1;
Box_LOL(lol_index);

function Menu_LOL(lol) {
  Box_LOL(lol_index = lol);
}

function Box_LOL(lol) {
  var c;
  var box_lol = document.getElementsByClassName("webdesign__lol");
  var menu_lol = document.getElementsByClassName("webdesign__menu--lol");
  if (lol > box_lol.length) {lol_index = 1}
  if (lol < 1) {lol_index = box_lol.length}
  for (c = 0; c < box_lol.length; c++) {
      box_lol[c].style.display = "none";
  }
  for (c = 0; c < menu_lol.length; c++) {
      menu_lol[c].className = menu_lol[c].className.replace(" active", "");
  }
  box_lol[lol_index-1].style.display = "flex";
  menu_lol[lol_index-1].className += " active";
}