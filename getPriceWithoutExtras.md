# Test cases

## **getPriceWithoutExtras(id)**

Returns the price without extras

  - Parameters: id of the car
  - Return: The price of the car not including the price of the extras
  - if no car with the given number is found throws an exception `nothing found with given id`

### Test 1: return price without extras

Test values:
```
[
  [1, 250000],
  [2, 35000],
  [3, 15000],
  [4, 19000],
];
```

### Test 2: if no car with the given id is found throws an exception `nothing found with given id`

```js
carStorage.getPriceWithoutExtras(10);
```
throws an exception `'nothing found with given id'`