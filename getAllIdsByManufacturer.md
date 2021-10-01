# Test cases

## **getAllIdsByManufacturer(value)**

Returns all ids of the cars matching the value of manufacturer

- Parameters: value of the property to be searched
- Return: Returns an array of car id where the cars manufacturer matches the given value. If there is no match or parameter is missing, an empty array is returned.

### Test 1: get an array of id where manufacturer matches the given value

Test values:
```
[
    ["WBM", [1]],
    ["Baas", [2]],
    ["FauV", [3, 4]],
  ];
```

### Test 2: if the parameter doesn't match any manufacturer, return an empty array

```js
carStorage.getAllIdsByManufacturer("Kia");
```

returns an empty array []

### Test 3: if the parameter is missing, return an empty array

```js
carStorage.getAllIdsByManufacturer();
```

returns an empty array []
