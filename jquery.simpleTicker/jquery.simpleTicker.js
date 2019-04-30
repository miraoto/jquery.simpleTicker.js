/**
 * jQuery simple Ticker plugin
 *
 * Copyright (c) 2012 miraoto
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * ticker plugin
 *
 * @name $.simpleTiecker();
 * @cat Plugins/Preload
 * @author miraoto
 *
 * @example $.simpleTiecker();
 * @desc default setting
 */
(function($) {
  $.simpleTicker =function(elem, options) {
    var defaults = {
      speed : 1000,
      delay : 3000,
      easing : 'swing',
      effectType : 'slide'
    };

    var param = {
      'ul' : '',
      'li' : '',
      'initList' : '',
      'ulWidth'  : '',
      'liHeight' : '',
      'tickerHook' : 'tickerHook',
      'effect' : {}
    };

    var plugin = this;
        plugin.settings = {};

    var $element = $(elem),
        element = elem;

    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);
      param.ul = element.children('ul');
      param.li = element.find('li');
      param.initList = element.find('li:first');
      param.ulWidth  = param.ul.width();
      param.liHeight = param.li.height();

      element.css({height:(param.liHeight)});
      param.li.css({top:'0',left:'0',position:'absolute'});

      //dispatch
      switch (plugin.settings.effectType) {
        case 'fade':
          plugin.effect.fade();
          break;
        case 'roll':
          plugin.effect.roll();
          break;
        case 'slide':
          plugin.effect.slide();
          break;
      }
      plugin.effect.exec();
    };

    plugin.effect = {};

    plugin.effect.exec = function() {
      param.initList.css(param.effect.init.css)
                    .animate(param.effect.init.animate,plugin.settings.speed,plugin.settings.easing)
                    .addClass(param.tickerHook);
      if (element.find(param.li).length > 1) {
        setInterval(function(){
          element.find('.' + param.tickerHook)
                 .animate(param.effect.start.animate,plugin.settings.speed,plugin.settings.easing)
                 .next()
                 .css(param.effect.next.css)
                 .animate(param.effect.next.animate,plugin.settings.speed,plugin.settings.easing)
                 .addClass(param.tickerHook)
                 .end()
                 .appendTo(param.ul)
                 .css(param.effect.end.css)
                 .removeClass(param.tickerHook);
        },plugin.settings.delay);
      }
    };

    plugin.effect.fade = function() {
      param.effect = {
        'init' : {
          'css' : {display:'block',opacity:'0'},
          'animate' : {opacity:'1',zIndex:'98'}
        },
        'start' : {
          'animate' : {opacity:'0'}
        },
        'next' : {
          'css' : {display:'block',opacity:'0',zIndex:'99'},
          'animate' : {opacity:'1'}
        },
        'end' : {
          'css' : {display:'none',zIndex:'98'}
        }
      };
    };

    plugin.effect.roll = function() {
      param.effect = {
        'init' : {
          'css' : {top:'3em',display:'block',opacity:'0'},
          'animate' : {top:'0',opacity:'1',zIndex:'98'}
        },
        'start' : {
          'animate' : {top:'-3em',opacity:'0'}
        },
        'next' : {
          'css' : {top:'3em',display:'block',opacity:'0',zIndex:'99'},
          'animate' : {top:'0',opacity:'1'}
        },
        'end' : {
          'css' : {zIndex:'98'}
        }
      };
    };


    plugin.effect.slide = function() {
      param.effect = {
        'init' : {
          'css' : {left:(200),display:'block',opacity:'0'},
          'animate' : {left:'0',opacity:'1',zIndex:'98'}
        },
        'start' : {
          'animate' : {left:(-(200)),opacity:'0'}
        },
        'next' : {
          'css' : {left:(param.ulWidth),display:'block',opacity:'0',zIndex:'99'},
          'animate' : {left:'0',opacity:'1'}
        },
        'end' : {
          'css' : {zIndex:'98'}
        }
      };
    };

    plugin.init();
  };

  $.fn.simpleTicker = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('simpleTicker')) {
        var plugin = new $.simpleTiecker(this, options);
        $(this).data('simpleTicker', plugin);
      }
    });
  };
})(jQuery);

