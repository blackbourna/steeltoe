# SteelToe

Don't shoot yourself in the foot traversing objects.

```javascript
  var human = { name: { firstName: 'Jonathan', lastName: 'Clem' } };

  human = new SteelToe(human);

  human('name')();                                // { firstName: 'Jonathan', lastName: 'Clem' }
  human('name')('firstName')();                   // 'Jonathan'
  human('height')();                              // undefined
  human('name')('middleName')();                  // undefined
  human('name')('middleName')('firstLetter')();   // undefined
```
