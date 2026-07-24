/*
* Greedy Navigation
*
* https://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {
    // Keep the site title and the current page visible so mobile visitors
    // always know where they are.
    var $movableItem = $vlinks.children().not(':first').not('.is-current').last();

    if(!$movableItem.length) {
      $btn.removeClass('hidden');
      return;
    }

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $movableItem.prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
      $btn.removeClass('close').attr('aria-expanded', 'false');
    }
  }

  // Keep counter updated
  $btn.attr("count", $hlinks.children().length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  $(this).attr('aria-expanded', $(this).hasClass('close'));
});

$(document).on('keydown', function(event) {
  if(event.key === 'Escape' && !$hlinks.hasClass('hidden')) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close').attr('aria-expanded', 'false').focus();
  }
});

$(document).on('click', function(event) {
  if(!$(event.target).closest('#site-nav').length && !$hlinks.hasClass('hidden')) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close').attr('aria-expanded', 'false');
  }
});

updateNav();
