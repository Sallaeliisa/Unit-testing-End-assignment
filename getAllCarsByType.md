# Test cases

## **getAllCarsByType(type)**

Returns an array of car objects of given type

- Parameters: type of the car to be searched
- Returns an array of car objects of given type. If no car of given type is found, returns an empty array.
- If a parameter type is missing, an exception **'missing parameter'** is thrown.

### Test 1: get from default datastorage.json with parameter 'solo'

```js
carStorage.getAllCarsByType('solo');
```

returns

```json
[
  {
    "id": 3,
    "manufacturer": "FauV",
    "type": "solo",
    "accessories": [],
    "price": 15000,
    "extras": []
  },
  {
    "id": 4,
    "manufacturer": "FauV",
    "type": "solo",
    "accessories": [],
    "price": 19000,
    "extras": []
  }
]
```

### Test 2: if no car of given type is found, return an empty array

```js
carStorage.getAllCarsByType('truck');
```

return an empty array []

### Test 3: if a parameter type is missing, an exception **'missing parameter'** is thrown

```js
carStorage.getAllCarsByType();
```

throws an exception `'missing parameter'`
