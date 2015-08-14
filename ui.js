var changeTheme = function(wat) {
  $("*").removeClass("home xinabox joanna word sqar bri");
  $("*").addClass(wat);
}



$(document).ready(function() {
  $(".header-link").click(function() {
    var id = $(this).attr("id");
    changeTheme(id);
  })
})
