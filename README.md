# SteelToe

Don't shoot yourself in the foot traversing objects.

```javascript
  var human = { name: { first: 'Jonathan', last: 'Clem' } };

  human = new SteelToe(human);

  human();                                  // { name: { first: 'Jonathan', last: 'Clem' } }
  human('name')();                          // { first: 'Jonathan', last: 'Clem' }
  human('name')('first')();                 // 'Jonathan'
  human('name')('last')('firstLetter')();   // undefined
  human('height')();                        // undefined
  human('name')('middle')();                // undefined
  human('name')('middle')('firstLetter')(); // undefined
```
