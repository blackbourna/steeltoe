# SteelToe

Don't shoot yourself in the foot traversing objects.

```javascript
  var human = { name: { first: 'Jonathan', last: 'Clem' } };

  human = SteelToe(human);

  human();                                  // { name: { first: 'Jonathan', last: 'Clem' } }
  human('name')();                          // { first: 'Jonathan', last: 'Clem' }
  human('name')('first')();                 // 'Jonathan'
  human('name')('first')('firstLetter')();  // undefined
  human('height')();                        // undefined
  human('name')('middle')();                // undefined
  human('name')('middle')('firstLetter')(); // undefined

  // You lazy?

  human.walk();                             // { name: { first: 'Jonathan', last: 'Clem' } }
  human.walk('name');                       // { first: 'Jonathan', last: 'Clem' }
  human.walk('name.firstName');             // 'Jonathan'
  human.walk('name.firstName.firstLetter'); // undefined
```
