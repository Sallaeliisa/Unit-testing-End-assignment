# Test cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the car
  - Return: returns the car object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

### Test 1: get from default datastorage.json with parameter 2

```js
carStorage.getById(2);
```

returns
```json
{
    "id": 2,
    "manufacturer": "Baas",
    "type": "Coupe",
    "accessories": ["clock","speedometer"],
    "price": 35000,
    "extras": [{
        "name": "manual",
        "price": 10
      },
      {
        "name": "warranty",
        "price": 200
      }
    ]
  }
```

### Test 2: if the parameter doesn't match any id, returns null

```js
carStorage.getById(5);
```
returns null

### Test 3: missing parameter throws an exception

```js
carStorage.getById();
```
throws an exception `'parameter missing'`