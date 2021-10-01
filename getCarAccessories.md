# Test cases

## **GetCarAccessories(id)**

Returns an array of car accessories. If none found, return an empty array.

  - Parameters: id of the car 
  - Return: returns accessories as an array

### Test 1: get an array of accessories

Test values:
```
[
    [1, ["radar", "coffee warmer", "hook"]],
    [2, ["clock","speedometer"]],
  ];
```

### Test 2: if the car has no accessories, return an empty array

```js
carStorage.getCarAccessories(3);
```
returns an empty array []