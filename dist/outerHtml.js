/*! $.outerHtml - v1.0.0 - 2013-02-07
* https://github.com/JamesMGreene/jquery.outerHtml
* Copyright (c) 2013 James M. Greene; Licensed MIT */
(function($) {
  'use strict';
  
  
  var hasNativeOuterHTML = !!('outerHTML' in $('<div></div>').get(0));
  
  var getterFn = function() {
    var target = this.get(0);

    // If the browser supports the `outerHTML` property on elements AND if `target` is an element node
    if (hasNativeOuterHTML && target.nodeType === 1) {
      return target.outerHTML;
    }
    else {
      return $('<div></div>').append(this.eq(0).clone()).html();
    }
  };
  
  $.fn.outerHtml = function(value) {
    if (arguments.length) {
      // Do not attempt to replace anything using the native `outerHTML` property setter
      // even if it exists: it is riddled with bugs!
      return $('<div></div>').append(value).contents().replaceAll(this);
    }
    else {
      return getterFn.call(this);
    }
  };

}(jQuery));
