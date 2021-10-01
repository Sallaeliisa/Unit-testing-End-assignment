# Test cases

## **hasAccessories(id)**

- Parameters: id of the car
- Return: returns true if the car has accessories else returns false. If parameter id is missing false is returned

### Test 1: if the car has accessories, return true. Else return false

Test values:
```
[
    [1, true],
    [2, true],
    [3, false],
    [4, false],
];
```

### Test 2: if the parameter id is missing, return false

```js
carStorage.hasAccessories();
```
returns `false`;
