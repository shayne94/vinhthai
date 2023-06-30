
		var cinematic_index = 1;
    Box_Cinematic(cinematic_index);
    
    function Menu_Cinematic(cinematic) {
      Box_Cinematic(cinematic_index = cinematic);
    }
    
    function Box_Cinematic(cinematic) {
      var a;
      var box_cinematic = document.getElementsByClassName("cinematic__inner");
      var menu_cinematic = document.getElementsByClassName("cinematic__menu--item");
      if (cinematic > box_cinematic.length) {cinematic_index = 1}
      if (cinematic < 1) {cinematic_index = box_cinematic.length}
      for (a = 0; a < box_cinematic.length; a++) {
          box_cinematic[a].style.display = "none";
      }
      for (a = 0; a < menu_cinematic.length; a++) {
          menu_cinematic[a].className = menu_cinematic[a].className.replace(" active", "");
      }
      box_cinematic[cinematic_index-1].style.display = "flex";
      menu_cinematic[cinematic_index-1].className += " active";
    }