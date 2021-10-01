# Test cases

## **getTotalPrice(id)**

Returns the total price of the car including the total price of the extras

  - Parameters: id of the car
  - Return: The price of the car including the total price of the extras
  - if no car with the given id is found throws an exception `nothing found with given id`

### Test 1: return total price including extras

Test values:
```
[
  [1, 252500],
  [2, 35210],
  [3, 15000],
  [4, 19000],
];
```

### Test 2: if no car with the given id is found throw an exception `nothing found with given id`

```js
carStorage.getTotalPrice(5);
```
throws an exception `'nothing found with given id'`