(function() {
   var ROOT = 'http://codebase.vitaminlabs.co.uk/footer';
   var FOOTER_ID = 'vitaminlondon-footer-loaded-from-codebase';
   var TILE_OUTER_WIDTH = 180;
   var TILE_OUTER_HEIGHT = 183;
   var TILE_CONTAINER_TOP_BOTTOM_PADDING = 15;
   var DEFAULT_CSS = ' #vitaminlondon-footer-loaded-from-codebase,'
                   + ' #vitaminlondon-footer-loaded-from-codebase * {'
                   + '   position: relative;'
                   + '   box-sizing: border-box;'
                   + '   -webkit-box-sizing: border-box;'
                   + '   -moz-box-sizing: border-box;'
                   + '   -ms-box-sizing: border-box;'
                   + '   -o-box-sizing: border-box;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase {'
                   + '   float: left;'
                   + '   width: 100%;'
                   + '   height: auto;'
                   + '   overflow: hidden;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top {'
                   + '   float: left;'
                   + '   height: 37px;'
                   + '   width: 100%;'
                   + '   background-color: #595959;'
                   + '   overflow: hidden;'
                   + '   cursor: pointer;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top:before {'
                   + '   content: "";'
                   + '   position: absolute;'
                   + '   left: 0;'
                   + '   top: 0;'
                   + '   background: #B5D136;'
                   + '   height: 4px;'
                   + '   width: 100%;'
                   + '   transform: translateY(-4px);'
                   + '   -webkit-transform: translateY(-4px);'
                   + '   -moz-transform: translateY(-4px);'
                   + '   -ms-transform: translateY(-4px);'
                   + '   -o-transform: translateY(-4px);'
                   + '   transition: transform 0.3s ease-out;'
                   + '   -webkit-transition: transform 0.3s ease-out;'
                   + '   -moz-transition: transform 0.3s ease-out;'
                   + '   -ms-transition: transform 0.3s ease-out;'
                   + '   -o-transition: transform 0.3s ease-out;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top:hover:before, '
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top:focus:before, '
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top:active:before,'
                   + ' #vitaminlondon-footer-loaded-from-codebase.open>.top:before {'
                   + '   transform: translateY(0);'
                   + '   -webkit-transform: translateY(0);'
                   + '   -moz-transform: translateY(0);'
                   + '   -ms-transform: translateY(0);'
                   + '   -o-transform: translateY(0);'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top>.logo{'
                   + '   height: 100%;'
                   + '   width: 30px;'
                   + '   position: absolute;'
                   + '   top: 0;'
                   + '   left: 20px;'
                   + '   background-size: contain;'
                   + '   background-repeat: no-repeat;'
                   + '   background-position: center;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top>.link {'
                   + '   float: right;'
                   + '   height: 100%;'
                   + '   width: auto;'
                   + '   border-left: 70px solid transparent;'
                   + '   margin-right: 20px;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.top>.link a {'
                   + '   float: left;'
                   + '   width: auto;'
                   + '   height: 100%;'
                   + '   font-size: 12px;'
                   + '   overflow: hidden;'
                   + '   text-overflow: ellipsis;'
                   + '   white-space: nowrap;'
                   + '   color: white;'
                   + '   line-height: 37px;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase.open>.top{'
                   + '   background-color: #515151;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.bottom{'
                   + '   float: left;'
                   + '   width: 100%;'
                   + '   height: 0;'
                   + '   background-color: #212121;'
                   + '   text-align: center;'
                   + '   font-size: 0;'
                   + '   line-height: normal;'
                   + '   overflow: hidden;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.bottom>.bloc{'
                   + '   display: inline-block;'
                   + '   height: auto;'
                   + '   width: 120px;'
                   + '   margin: 30px;'
                   + '   text-decoration: none;'
                   + '   float: none !important;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.bottom>.bloc>.img{'
                   + '   background-size: contain;'
                   + '   background-repeat: no-repeat;'
                   + '   background-position: center;'
                   + '   float: left;'
                   + '   width: 120px;'
                   + '   height: 120px;'
                   + '  }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.bottom>.bloc>.text {'
                   + '   float: left;'
                   + '   width: 100%;'
                   + '   height: auto;'
                   + '   text-align: center;'
                   + '   overflow: hidden;'
                   + '   text-overflow: ellipsis;'
                   + '   white-space: nowrap;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.bottom>.bloc>.name{'
                   + '   font-size:14px;'
                   + '   color: #BDBDBD;'
                   + '   height: 18px;'
                   + '   line-height: 18px;'
                   + ' }'
                   + ' #vitaminlondon-footer-loaded-from-codebase>.bottom>.bloc>.title{'
                   + '   font-size:10px;'
                   + '   margin-top: 2px;'
                   + '   color: #595959;'
                   + '   height: 13px;'
                   + '   line-height: 13px;'
                   + ' }';

   var wait = function(cb, interval) {
      interval = interval || 10;
      if (window.vitaminFooter && window.jQuery) {
         cb(window.jQuery, window.vitaminFooter);
      } else {
         setTimeout(function() {
            wait(cb, interval + 10);
         }, interval);
      }
   };

   wait(function($, options) {
      if (!options.data || !options.data.length) {
         console.log('[VITAMIN FOOTER] : window.vitaminFooter.data not found or empty');
         return false;
      }

      $(function() {
         //load default style
         $('head').append('<style>'+DEFAULT_CSS+'</style>');

         //load override style
         if (options.colors) {
            var cssOverride = '';
            if (options.colors.top) cssOverride += '#' + FOOTER_ID + '>.top{background-color:' + options.colors.top + ' !important;}';
            if (options.colors.bottom) cssOverride += '#' + FOOTER_ID + '>.bottom{background-color:' + options.colors.bottom + ' !important;}';
            if (options.colors.line) cssOverride += '#' + FOOTER_ID + '>.top:before{background-color:' + options.colors.line + ' !important;}';
            $('head').append('<style>' + cssOverride + '</style>');
         }

         //add footer
         options.tagline = options.tagline || "Handcrafted by Vitamin London";
         var html = '<div id="' + FOOTER_ID + '">' +
            '  <div class="top">' +
            '    <div class="logo" style="background-image:url(' + ROOT + '/assets/logo.png);"></div>' +
            '    <div class="link"><a href="http://vitaminlondon.com/" target="_blank">' + options.tagline + '</a></div>' +
            '  </div>' +
            '  <div class="bottom"></div>' +
            '</div>';
         $('#' + options.id).html(html);
         var $footer = $('#' + FOOTER_ID);

         //add people
         for (var i = 0; i < options.data.length; i++) {
            var file = ROOT + '/assets/' + options.data[i].file;
            var html = '';
            if (options.data[i].link && options.data[i].link.length) {
               html = '<a href="' + options.data[i].link + '" class="bloc">' +
                  '  <div class="img" file="' + file + '" style="background-image:url(' + file + '.jpg);"></div>' +
                  '  <div class="name text">' + options.data[i].name + '</div>' +
                  '  <div class="title text">' + options.data[i].title + '</div>' +
                  '</a>';
            } else {
               html = '<div class="bloc">' +
                  '  <div class="img" file="' + file + '" style="background-image:url(' + file + '.jpg);"></div>' +
                  '  <div class="name text">' + options.data[i].name + '</div>' +
                  '  <div class="title text">' + options.data[i].title + '</div>' +
                  '</div>';
            }
            $(html).appendTo($footer.find('>.bottom'));
         }

         //activate
         $footer.mouseenter(function() {
            $(this).addClass('hovered');
         }).mouseleave(function() {
            $(this).removeClass('hovered');
         }).click(function(e) {
            e.stopPropagation();
            $(this).toggleClass("open");
            if ($(this).hasClass('open')) {
               var newHeight = Number($footer.find('>.bottom').attr('height'));
               $footer.find('>.bottom').animate({
                  height: newHeight
               }, function() {
                  $('html,body').animate({
                     scrollTop: $footer.find('>.bottom').offset().top
                  });
               });
            } else $footer.find('>.bottom').animate({
               height: 0
            });
         });
         $footer.find('.bloc .img').mouseenter(function() {
            var $this = $(this);
            var jpg = $this.attr('file') + '.jpg';
            var gif = $this.attr('file') + '.gif?' + new Date().getTime();
            $this.css('background-image', 'url(' + jpg + ')');
            setTimeout(function() {
               $this.css('background-image', 'url(' + gif + ')');
            }, 100);
         });
         $(document).click(function() {
            if (!$footer.hasClass('hovered') && $footer.hasClass('open')) $footer.click();
         });

         //define height
         $(window).resize(function() {
            var availableWidth = $(window).width();
            var perLine = Math.floor(availableWidth / TILE_OUTER_WIDTH);
            var lines = Math.ceil(options.data.length / perLine);
            var newHeight = (lines * TILE_OUTER_HEIGHT)+(TILE_CONTAINER_TOP_BOTTOM_PADDING*2);
            $footer.find('>.bottom').attr('height', newHeight);
            if ($footer.hasClass('open')) $footer.find('>.bottom').css({
               height: newHeight
            });
         }).resize();
      });
   });
})();