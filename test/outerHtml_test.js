(function($) {

  var domInteractionTypeModules = [
    {
      name: 'Attached DOM',
      lifecycle: {}
    },
    {
      name: 'Detached DOM',
      lifecycle: {
        setup: function() {
          // Don't attach to the DOM
          this.$appendTo = $.fn.appendTo;
          $.fn.appendTo = function() {
            return this;
          };
        },
        teardown: function() {
          $.fn.appendTo = this.$appendTo;
        }
      }
    }
  ];
  
  var generateTests = function(moduleData) {
    /*jshint loopfunc:true */
    
    module('jQuery#outerHtml: get (' + moduleData.name + ')', moduleData.lifecycle);
    
    test('Should return a string', function() {
      expect(1);
      var expectedOuterHtml = '<div><strong>good</strong></div>';
      strictEqual((typeof $(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml()), 'string');
    });

    test('Can get outerHTML of a text node', function() {
      expect(1);
      var expectedOuterHtml = 'good';
      strictEqual($('<div></div>').appendTo('#qunit-fixture').text(expectedOuterHtml).contents().outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can get outerHTML of an element with no children', function() {
      expect(1);
      var expectedOuterHtml = '<div></div>';
      strictEqual($(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can get outerHTML of an element, including attributes', function() {
      expect(1);
      var expectedOuterHtml = '<div id="testing"></div>';
      strictEqual($(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can get outerHTML of an element with only a text node child', function() {
      expect(1);
      var expectedOuterHtml = '<div>good</div>';
      strictEqual($(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can get outerHTML of an element with only an element node child', function() {
      expect(1);
      var expectedOuterHtml = '<div><strong>good</strong></div>';
      strictEqual($(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can get outerHTML of an element with multiple element node children', function() {
      expect(1);
      var expectedOuterHtml = '<div><strong>good</strong><em>ness</em></div>';
      strictEqual($(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can get outerHTML of an element with both element and text node children', function() {
      expect(1);
      var expectedOuterHtml = '<div>blah<strong>good</strong>whatever</div>';
      strictEqual($(expectedOuterHtml).appendTo('#qunit-fixture').outerHtml().toLowerCase(), expectedOuterHtml);
    });
    
    test('Only gets the outerHTML of the first item in a collection', function() {
      expect(1);
      var expectedOuterHtml = '<div>good</div>',
          $coll = $([]).add($(expectedOuterHtml)).add($('<s>ugly</s>')).appendTo('#qunit-fixture');
      strictEqual($coll.outerHtml().toLowerCase(), expectedOuterHtml);
    });


    module('jQuery#outerHtml: set (' + moduleData.name + ')', moduleData.lifecycle);

    test('Should accept a string', function() {
      expect(1);
      var noThrow = true;
      try {
        $('<s></s>').appendTo('#qunit-fixture').outerHtml('<div>good</div>');
      }
      catch (e) {
        noThrow = false;
      }
      strictEqual(noThrow, true);
    });
    
    test('May accept a text node', function() {
      expect(1);
      var noThrow = true;
      try {
        $('<s></s>').appendTo('#qunit-fixture').outerHtml($('<div>good</div>').contents().get(0));
      }
      catch (e) {
        noThrow = false;
      }
      strictEqual(noThrow, true);
    });
    
    test('May accept an element node', function() {
      expect(1);
      var noThrow = true;
      try {
        $('<s></s>').appendTo('#qunit-fixture').outerHtml($('<div>good</div>').get(0));
      }
      catch (e) {
        noThrow = false;
      }
      strictEqual(noThrow, true);
    });

    test('May accept a jQuery collection', function() {
      expect(1);
      var noThrow = true;
      try {
        $('<s></s>').appendTo('#qunit-fixture').outerHtml($('<div>good</div>'));
      }
      catch (e) {
        noThrow = false;
      }
      strictEqual(noThrow, true);
    });
    
    test('Should be chainable with one item', function() {
      expect(3);
      var $coll = $('<s>bad</s>').appendTo('#qunit-fixture');
      strictEqual($coll.length, 1);
      var $updatedColl = $coll.outerHtml('<div>good</div>');
      strictEqual($updatedColl.length, 1);
      strictEqual(($updatedColl instanceof $), true);
    });
    
    test('Should be chainable with multiple items', function() {
      expect(3);
      var $coll = $('<s>bad</s>').add($('<s>ugly</s>')).appendTo('#qunit-fixture');
      strictEqual($coll.length, 2);    
      var $updatedColl = $coll.outerHtml('<div>good</div>');
      strictEqual($updatedColl.length, 2);
      strictEqual(($updatedColl instanceof $), true);
    });
    
    test('Should maintain the same parents', function() {
      expect(1);
      var $coll = $('<s>bad</s>').appendTo('#qunit-fixture'),
          collExpectedParentNodes = $coll.parent().get();
      deepEqual($coll.outerHtml('<div>good</div>').parent().get(), collExpectedParentNodes);
    });
    
    test('Can set outerHTML of a text node to another text node', function() {
      expect(1);
      var expectedOuterHtml = 'good';
      strictEqual($('<s>bad</s>').appendTo('#qunit-fixture').contents().outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can set outerHTML of an element to another element', function() {
      expect(1);
      var expectedOuterHtml = '<div>good</div>';
      strictEqual($('<s>bad</s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });
    
    test('Sets the outerHTML of every item in a collection', function() {
      expect(2);
      var expectedOuterHtml = '<div>good</div>',
          $coll = $([]).add($('<s>bad</s>')).add($('<s>ugly</s>')).appendTo('#qunit-fixture');
      $coll.outerHtml(expectedOuterHtml).each(function() {
        strictEqual($(this).outerHtml().toLowerCase(), expectedOuterHtml);
      });
    });

    test('Can set outerHTML of an element to another element, including attributes', function() {
      expect(1);
      var expectedOuterHtml = '<div id="good"></div>';
      strictEqual($('<s class="bad">ugly</s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can set outerHTML of an element with only a text node child to another element with only a text node child', function() {
      expect(1);
      var expectedOuterHtml = '<div>good</div>';
      strictEqual($('<s>bad</s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can set outerHTML of an element with only an element node child to another element with only an element node child', function() {
      expect(1);
      var expectedOuterHtml = '<div><strong>good</strong></div>';
      strictEqual($('<s><em>bad</em></s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can set outerHTML of an element with multiple element node children to another element with multiple element node children', function() {
      expect(1);
      var expectedOuterHtml = '<div><strong>good</strong><em>ness</em></div>';
      strictEqual($('<s><i>bad</i><b>ness</b><i>ugly</i></s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can set outerHTML of an element with both element and text node children to another element with both element and text node children', function() {
      expect(1);
      var expectedOuterHtml = '<div>blah<strong>good</strong>whatever</div>';
      strictEqual($('<s><b>bad</b>ness<i>ugly</i>ness</s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });

    test('Can set outerHTML of a text node to an element', function() {
      expect(2);
      var expectedOuterHtml = '<div>good</div>',
          $coll = $('<s>bad</s>').appendTo('#qunit-fixture');
      strictEqual($coll.contents().outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
      strictEqual($coll.outerHtml().toLowerCase(), '<s>' + expectedOuterHtml + '</s>');
    });

    test('Can set outerHTML of an element to a text node', function() {
      expect(1);
      var expectedOuterHtml = 'good';
      strictEqual($('<s>bad</s>').appendTo('#qunit-fixture').outerHtml(expectedOuterHtml).outerHtml().toLowerCase(), expectedOuterHtml);
    });
  
  };
  
  for (var i = 0, len = domInteractionTypeModules.length; i < len; i++) {
    // Function call used strictly to disable JSHint warnings for looped function creation
    generateTests(domInteractionTypeModules[i]);
  }

}(jQuery));
