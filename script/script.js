var curWidth = $('.search-nav ul li a.active').width();
var curPos = $('.search-nav ul li a.active').offset().left;

$('.arrow').width(curWidth).offset({
  left: curPos
});

$('.search-nav ul li a').on('click', function() {
  $('.search-nav ul li a').removeClass('active');
  $(this).addClass('active');

  var findWidth = $(this).width();
  var offset = $(this).offset();
  var offLeft = offset.left;

  $('.arrow').width(findWidth).offset({
    left: offLeft
  });

  var getContents = $(this).text();

  if ($(this).hasClass('all')) {
    $('.searchbar').attr("placeholder", "I'm looking for...");
  } else {
    $('.searchbar').attr("placeholder", "I'm looking for " + getContents + "...");
  }
});

$('.searchbar').on('focus', function() {
  $('.icon').toggleClass('search-active');
});

$('.searchbar').on('blur', function() {
  $('.icon').toggleClass('search-active');
});



  // Obtenez l'URL de la page actuelle
var urlActuelle = window.location.href;

// Sélectionnez tous les liens dans la liste
var liens = document.querySelectorAll("ul li a");

// Parcourez tous les liens
for (var i = 0; i < liens.length; i++) {
    // Vérifiez si l'URL du lien correspond à l'URL actuelle
    if (liens[i].href === urlActuelle) {
        // Ajoutez la classe "active" au parent <li>
        liens[i].parentNode.classList.add("active");
        liens[i].parentNode.classList.add("all");
    }
}

