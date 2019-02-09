// If class containts 'avatar', just rewrite.

// rewrite for each tag https://symfoware.blog.fc2.com/blog-entry-1515.html

$(function(){
    $("img").each(function(){

      // https://stackoverflow.com/questions/3196613/jquery-determine-if-ul-has-class-or-another-one

        if ($('img').hasClass('Avatar Avatar--size32') ||
           $('img').hasClass('avatar size32') ||
           $('img').hasClass('DashboardProfileCard-avatarImage js-action-profile-avatar') ||
           $('img').hasClass('avatar js-action-profile-avatar ') ||
           $('img').hasClass('top-timeline-tweet-box-user-image avatar size32') ||
           $('img').hasClass('avatar js-action-profile-avatar ') ||
           $('img').hasClass('avatar js-action-profile-avatar') ||
           $('img').hasClass('MomentUserByline-avatar') ||
           $('img').hasClass('ProfileAvatar-image') ||
           $('img').hasClass('ProfileCardMini-avatarImage')
        ) {
          // https://peacepopo.net/blog-entry-161.html
          var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
          // Rewrite image to random colors
          // http://shanabrian.com/web/jquery/image01.php

          var stylechar = "background-color:" + hue
           $("img").removeAttr('src');
           $("img").attr('style',stylechar);
      }
    });
});
