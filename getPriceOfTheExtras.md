# Test cases

## **getPriceOfTheExtras(id)**

Returns the total price of extras bundled with the car
 
  - Parameters: id of the car to be searched
  - Return: the total price of extras. If no extras is found returns 0
  - if no car with the given number is found throws an exeption `nothing found with given id`

### Test 1: return total price of extras

Test values:
```
[
    [1, 2500],
    [2, 210],
  ];
```

### Test 2: if no extras is found, return 0

```js
carStorage.getPriceOfTheExtras(3);
```
returns `0`;

### Test 3: if no car with the given id is found throw an exception `nothing found with given id`

```js
carStorage.getTotalPrice(6);
```
throws an exception `'nothing found with given id'`