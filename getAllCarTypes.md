# Test cases

## **getAllCarTypes()**

Returns an array of different car types. 

  - Parameters: none
  - Return: Returns an array of different car types. If no types are found, returns an empty array. The type is added to the result array only once.

  ### Test 1: get from default datastorage.json

  ```js
  carStorage.getAllCarTypes();
  ```

  returns

  ```json
  ["XGT", "Coupe", "solo"]
  ```

  ### Test 2: if no types are found, return an empty array

  Test data: 

  ```json
  [
    {
      "id": 2,
      "manufacturer": "Baas",
      "type": "",
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
    },
    {
      "id": 3,
      "manufacturer": "FauV",
      "type": "",
      "accessories": [],
      "price": 15000,
      "extras": []
    }
  ]
  ```
  
  returns an empty array []

