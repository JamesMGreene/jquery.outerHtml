[![Build Status](https://travis-ci.org/JamesMGreene/jquery.outerHtml.png?branch=master)](https://travis-ci.org/JamesMGreene/jquery.outerHtml)

# jquery.outerHtml

A simple jQuery plugin to get or set a node's outer HTML, a la IE's [formerly] proprietary `outerHTML` property on elements.
Get the outer HTML contents of the first node in the set of matched elements or set the outer HTML contents of every matched node.

## Getting Started
Check the [jQuery Plugins Registry](http://plugins.jquery.com/outerHtml/) for the latest published version of this plugin!

You can also download the [production version][min] or the [development version][max] from GitHub.

[min]: https://raw.github.com/JamesMGreene/jquery.outerHtml/master/dist/jquery.outerHtml.min.js
[max]: https://raw.github.com/JamesMGreene/jquery.outerHtml/master/dist/jquery.outerHtml.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.outerHtml.min.js"></script>
<script>
    jQuery("div").outerHtml();
</script>
```

## Examples
```js
// Get the outer HTML of the first item in the collection
jQuery("div").outerHtml();

// Change all divs containing the text "HEADING" into h1 elements containing [only] the text "HEADING"
jQuery("div:contains('HEADING')").outerHtml('<h1>HEADING</h1>');
```

## Warnings
**Beware, all ye who enter, for here be Dragons!**  
If you use this plugin to change the outer HTML of a given node, the new node will
_not_ maintain any of the old node's events, data, etc. Consider yourself warned.

## Compatibility
**Works 100% with jQuery versions:**  
 - 1.4.x
 - 1.5.x
 - 1.6.x
 - 1.7.x
 - 1.8.x
 - 1.9.1

**Has known issues with jQuery versions:**  
 - 1.9.0
     - Unit test fails for both attached and detached DOM: "Can set outerHTML of a text node to an element"
 - 2.0.0b1
     - Lots of issues in jQuery core, by the looks of it :confused:

## Documentation
_(Coming soon)_

## Release History
 - 1.0.10: Published to the jQuery Plugins Registry on 2013-02-14.
     - Changed the filenames to include the "jquery." prefix.
 - 1.0.9: Published to the jQuery Plugins Registry on 2013-02-08.
     - Added more keywords (tags) for the registry.
 - 1.0.8: Published to the jQuery Plugins Registry on 2013-02-07.
     - Updated the local libs for jQuery and QUnit. Added testing for "jquery-git.js" (the latest jQuery master branch code).
 - 1.0.7: Published to the jQuery Plugins Registry on 2013-02-07.
     - Fixed [Issue #1](https://github.com/JamesMGreene/jquery.outerHtml/issues/1), resolving all known issues with jQuery 1.8.x
 - 1.0.5: Published to the jQuery Plugins Registry on 2013-02-07.
     - Initial release, plus some minor fixes to "README.md", jQPR manifest, and Travis-CI config
