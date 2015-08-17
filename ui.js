var changeTheme = function(wat) {
  if(!scrolling) {
    $("*").removeClass("home xinabox joanna word sqar bri");
    $("*").addClass(wat);
  }
}

var homeScroll, xinaboxScroll, joannaScroll, wordScroll, sqarScroll, briScroll;
var num = 0;

var lastScrollTop = 0;

var scrolling = false;


var getScrolls = function() {
  var height = window.innerHeight;
  var boxHeight = height*0.85;
  var hrHeight = height*0.25;
  homeScroll = -height*0.15;
  xinaboxScroll = (boxHeight + hrHeight)*2 - height*0.40;
  joannaScroll = (boxHeight + hrHeight)*3 - height*0.40;
  wordScroll = (boxHeight + hrHeight)*4 - height*0.40;
  sqarScroll = (boxHeight + hrHeight)*5 - height*0.40;
  briScroll = (boxHeight + hrHeight)*6 - height*0.40;
}

getScrolls();

scrollioTo = function(dist) {
  num = dist/window.innerHeight - 1;
  scrolling = true;
  $("body, html").animate({
    scrollTop: dist + window.innerHeight*0.15
  }, 0.1)
  setTimeout(function() {
    scrolling = false;
  }, 50);
}

var scrollio = function(where) {
  setDropdown(false);
  switch(where) {
    case 'home':
      scrollioTo(homeScroll);
      break;
    case 'xinabox':
      scrollioTo(xinaboxScroll);
      break;
    case 'joanna':
      scrollioTo(joannaScroll);
      break;
    case 'word':
      scrollioTo(wordScroll);
      break;
    case 'sqar':
      scrollioTo(sqarScroll);
      break;
    case 'bri':
      scrollioTo(briScroll);
      break;
  }
}

$(window).on('scroll', function(e) {
  var st = $(this).scrollTop();
  if(st < xinaboxScroll) {
    $("#bg-img-home").css("background-position-y", (st/1.25)+"px")
  }
  if(!scrolling) {
    if(st < xinaboxScroll) {
      changeTheme('home');
      return;
    }
    else if(st < joannaScroll) {
      changeTheme('xinabox');
      return;
    }
    else if(st < wordScroll) {
      changeTheme('joanna');
      return;
    }
    else if(st < sqarScroll) {
      changeTheme('word');
      return;
    }
    else if(st < briScroll) {
      changeTheme('sqar');
      return;
    }
    else {
      changeTheme('bri');
    }
  }
});

var dropdown = false;

var setDropdown = function(what) {
  if(what) {
    $("#dropdown, #dropdown-icon").addClass("active");
  }
  else {
    $("#dropdown, #dropdown-icon").removeClass("active");
  }
}

$(document).ready(function() {
  $(window).resize(function() {
    getScrolls();
  })


  $("#dropdown-icon").click(function() {
    if(dropdown) {
      setDropdown(false);
      dropdown = false;
    }
    else {
      setDropdown(true);
      dropdown = true;
    }
  })
  $(".header-link").click(function() {
    var id = $(this).attr("id");
    changeTheme(id);
    scrolling = true;
    setTimeout(function() {scrolling = false}, 500);
    scrollio(id+"");
  });
  $("#logo-inner").click(function() {
    changeTheme('home');
    scrolling = true;
    setTimeout(function() {scrolling = false}, 500);
    scrollio("home");
  })
})
