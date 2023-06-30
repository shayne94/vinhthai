var champion_index = 1;
Box_Champion(champion_index);

function Menu_Champion(champion) {
  Box_Champion(champion_index = champion);
}

function Box_Champion(champion) {
  var a;
  var box_champion = document.getElementsByClassName("champion__inner");
  var menu_champion = document.getElementsByClassName("champion__menu--item");
  if (champion > box_champion.length) { champion_index = 1 }
  if (champion < 1) { champion_index = box_champion.length }
  for (a = 0; a < box_champion.length; a++) {
    box_champion[a].style.display = "none";
  }
  for (a = 0; a < menu_champion.length; a++) {
    menu_champion[a].className = menu_champion[a].className.replace(" active", "");
  }
  box_champion[champion_index - 1].style.display = "flex";
  menu_champion[champion_index - 1].className += " active";

  $("[class*='champion__cont--']").hide();
  $("[class*='champion__inner--']").on('click', function () {
    let champinner = $(this).attr('class').split('--')[1];
    $("[class*='champion__cont--']").each(function () {
      let champcont = $(this).attr('class').split('--')[1];
      if (champinner === champcont) {
        $(".champion__inner, .champion__menu").hide();
        box_champion[champion_index - 1].className += " marked";
        $(this).fadeIn(500);
        $(".undo").fadeIn(500);
      } else {
        $(this).hide();
      }
    })
  });
  $(".undo").on('click', function () {
    $("[class*='champion__cont--'], .undo").hide();
    $(".marked, .champion__menu").fadeIn(500);
    $(".champion__inner").removeClass(" marked");
  });
}

var skill_index = 1;
Box_Skill(skill_index);

function Menu_Skill(skill) {
  Box_Skill(skill_index = skill);
}

function Box_Skill(skill) {
  var b;
  var box_skill = document.getElementsByClassName("champion__skill-detail");
  var menu_skill = document.getElementsByClassName("champion__skill-list--item");
  if (skill > box_skill.length) {skill_index = 1}
  if (skill < 1) {skill_index = box_skill.length}
  for (b = 0; b < box_skill.length; b++) {
      box_skill[b].style.display = "none";
  }
  for (b = 0; b < menu_skill.length; b++) {
      menu_skill[b].className = menu_skill[b].className.replace(" active", "");
  }
  box_skill[skill_index-1].style.display = "flex";
  menu_skill[skill_index-1].className += " active";
}

