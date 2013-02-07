[![Build Status](https://travis-ci.org/JamesMGreene/jquery.outerHtml.png)](https://travis-ci.org/JamesMGreene/jquery.outerHtml)

# $.outerHtml

A simple jQuery plugin to get or set a node's outer HTML, a la IE's [formerly] proprietary `outerHTML` property on elements.
Get the outer HTML contents of the first node in the set of matched elements or set the outer HTML contents of every matched node.

## Getting Started
Check the [jQuery Plugins Registry](http://plugins.jquery.com/outerHtml/) for the latest published version of this plugin!

You can also download the [production version][min] or the [development version][max] from GitHub.

[min]: https://raw.github.com/JamesMGreene/jquery.outerHtml/master/dist/outerHtml.min.js
[max]: https://raw.github.com/JamesMGreene/jquery.outerHtml/master/dist/outerHtml.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/outerHtml.min.js"></script>
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
 - 1.4.4
 - 1.5.2
 - 1.6.4
 - 1.7.2
 - 1.9.1

**Has known issues with jQuery versions:**  
 - 1.8.x (all of them: 1.8.0, 1.8.1, 1.8.2, 1.8.3)
     - [`$(...).replaceWith`](http://api.jquery.com/replaceWith/) on a detached DOM element/node is unexpectedly adding a parent node
 - 2.0.0b1
     - Lots of issues in jQuery core, by the looks of it :confused:

## Documentation
_(Coming soon)_

## Release History
 - 1.0.2: Published to the jQuery Plugins Registry on 2013-02-07.
     - Initial release, plus two minor "README.md" updates
