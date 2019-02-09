// If class containts 'avatar', just rewrite.
// rewrite for each tag https://symfoware.blog.fc2.com/blog-entry-1515.html

//TODO : deal with newly loaded tweets

var randomColor0 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors
var randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors
var randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors
var randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors
var randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors
var randomColor5 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors
var randomColor6 = "#" + Math.floor(Math.random() * 16777215).toString(16);          // Rewrite image to random colors



function choose_at_random(arrayData) {
  var arrayIndex = Math.floor(Math.random() * arrayData.length);
  return arrayData[arrayIndex]; }

  //deal with newly loaded tweets
function DOMModificationHandler(){
  $(this).unbind('DOMSubtreeModified.event1');
  setTimeout(function(){

    modify();
    $('#timeline').bind('DOMSubtreeModified.event1',DOMModificationHandler);
  },1000);
}
$('#timeline').bind('DOMSubtreeModified.event1',DOMModificationHandler);

var coloardata= [randomColor0, randomColor1, randomColor2,randomColor3]
var randomColor = choose_at_random(coloardata)

function modify(){


  $("img").each(function(index){ // What is difference between .each and .map
      // https://stackoverflow.com/questions/3196613/jquery-determine-if-ul-has-class-or-another-one

        if ($('img').hasClass('Avatar Avatar--size32') ||
           $('img').hasClass('avatar size32') ||
           $('img').hasClass('DashboardProfileCard-avatarImage js-action-profile-avatar') ||
           $('img').hasClass('avatar js-action-profile-avatar ') ||
           $('img').hasClass('top-timeline-tweet-box-user-image avatar size32') ||
           $('img').hasClass('avatar js-action-profile-avatar ') ||
           $('img').hasClass('js-action-profile-avatar') ||
           $('img').hasClass('MomentUserByline-avatar') ||
           $('img').hasClass('ProfileAvatar-image') ||
           $('img').hasClass('ProfileCardMini-avatarImage')
        ){
          // https://peacepopo.net/blog-entry-161.html

          // http://shanabrian.com/web/jquery/image01.php


          var stylechar = "background-color:" + randomColor
           $("img").attr('style',stylechar);
           $("img").attr('src','skelton.png');
           $("img").attr('alt','');

           // https://medium.com/@aidobreen/fixing-twitter-with-a-chrome-extension-1f53320f5a01
           return true

      }
    });

  }
