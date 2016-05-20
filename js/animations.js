$(document).ready(function(){
  $('.tweet-compose').click(function(){
    $('#tweet-controls').css('display', 'inline');
    $(this).height('3em');
  })

  $("time.timeago").timeago();

  var charCount = 140;
  $('.tweet-compose').keydown(function(event){
    if(event.which === 8 && charCount < 140){
      charCount++
    }else{
      charCount--;
    }
    $('#char-count').text(charCount);
    if(charCount < 11){
      $('#char-count').css('color', 'red');
    }
    if(charCount < 0){
      $('#tweet-submit').prop("disabled", true);
    }else {
      $('#tweet-submit').prop("disabled", false);
    }
  });

  $(document.body).on('mouseenter', '.tweet', function(){
    $(this).find(".tweet-actions").toggle();
  })
  $(document.body).on('mouseleave', '.tweet', function(){
    $(this).find(".tweet-actions").toggle();
  })
  // $(".tweet").on('mouseenter', function(){
  //   $(this).find(".tweet-actions").toggle();
  // })
  // $(".tweet").on('mouseleave', function(){
  //   $(this).find(".tweet-actions").toggle();
  // })
  $(document.body).on('click', '.tweet-text', function(){
    $(this).parent().find(".stats").slideToggle();
    $(this).parent().find(".reply").slideToggle();
  })
  // $(".tweet-text").on('click', function(){
  //   $(this).parent().find(".stats").slideToggle();
  //   $(this).parent().find(".reply").slideToggle();
  // })

  $('#tweet-submit').click(function(){
    var newTweet = "<div class='tweet'>" +
    '<div class="content">' +
    '<img class="avatar" src="img/alagoon.jpg" />' +
    '<strong class="fullname">' + $('#profile-summary').find("p").text() + '</strong>' +
    '<span class="username">@devmountain</span>' +
    '<p class="tweet-text">' + $('.tweet-compose').val() + '</p>' +
    '<div class="tweet-actions">' +
    '<ul>'+
    '<li><span class="icon action-reply"></span> Reply</li>' +
    '<li><span class="icon action-retweet"></span> Retweet</li>' +
    '<li><span class="icon action-favorite"></span> Favorite</li>' +
    '<li><span class="icon action-more"></span> More</li>' +
    '</ul>' +
    '</div>' +
    '<div class="stats">' +
    '<div class="retweets">' +
    '<p class="num-retweets">0</p>' +
    '<p>RETWEETS</p>' +
    '</div>' +
    '	<div class="favorites">' +
    '<p class="num-favorites">0</p>' +
    '<p>FAVORITES</p>' +
    '</div>' +
    '<div class="users-interact">' +
    '<div>' +
    '<img src="img/alagoon.jpg" />' +
    '<img src="img/vklimenko.jpg" />' +
    '</div>' +
    '</div>' +
    '<div class="time">'+ $.timeago(new Date()) + '</div>' +
    '</div>' +
    '<div class="reply">' +
    '<img class="avatar" src="img/alagoon.jpg" />' +
    '	<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
    '</div>' +
    '</div>' +
    '</div>'

    $('#stream').prepend(newTweet);
  //  newTweet.find(".tweet-actions").css('display','none');
    $('.tweet-compose').val('')
    $('.tweet-compose').height("1em");
  })
})
