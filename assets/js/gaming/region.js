$("[class*='region__inner--']").hide();
$("[class*='region__box--']").on('click', function () {
  let regionbox = $(this).attr('class').split('--')[1];
  $("[class*='region__inner--']").each(function () {
    let regioninner = $(this).attr('class').split('--')[1];
    if (regionbox === regioninner) {
      $(".region__box").hide();
      $(this).fadeIn(500);
      $(".undo").fadeIn(500);
    } else {
      $(this).hide();
    }
  })
});
$(".undo").on('click', function () {
  $("[class*='region__inner--'], .undo").hide();
  $(".region__box").fadeIn(500);
});