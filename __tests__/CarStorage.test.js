"use strict";

const CarStorage = require("../CarStorage");
const datastorage = require("../datastorage.json");

// Constructor

describe("Testing constructor", () => {
  test("object created", () => {
    const carStorage = new CarStorage(datastorage);
    expect(carStorage.carStorage).toEqual(datastorage);
  });
  test('missing parameter throws an exception "data storage missing"', () => {
    expect(() => new CarStorage()).toThrow("data storage missing");
  });
});

// getById()

describe("Testing getById", () => {
  const carStorage = new CarStorage(datastorage);

  test("get from default datastorage.json with parameter 2", () => {
    const expextedResults = 
      {
        id: 2,
        manufacturer: "Baas",
        type: "Coupe",
        accessories: ["clock", "speedometer"],
        price: 35000,
        extras: [
          {
            name: "manual",
            price: 10,
          },
          {
            name: "warranty",
            price: 200,
          },
        ],
      };
    expect(carStorage.getById(2)).toEqual(expextedResults);
  });
  test("parameter doesn't match any id", () => {
    expect(carStorage.getById(5)).toEqual(null);
  });
  test("missing parameter throws an exception", () => {
    expect(() => carStorage.getById()).toThrow("parameter missing");
  });
});

//getAllIdsByManufacturer()

describe("Testing getAllIdsByManufacturer", () => {
  const carStorage = new CarStorage(datastorage);
  const testValues = [
    ["WBM", [1]],
    ["Baas", [2]],
    ["FauV", [3, 4]],
  ];

  test.each(testValues)("Value %s returns %s", (value, expectedResult) => {
    expect(carStorage.getAllIdsByManufacturer(value)).toEqual(expectedResult);
  });

  test("if the parameter doesn't match any manufacturer, return an empty array", () => {
    expect(carStorage.getAllIdsByManufacturer("Kia")).toEqual([]);
  });

  test("if the parameter is missing, return an empty array", () => {
    expect(carStorage.getAllIdsByManufacturer()).toEqual([]);
  });
});

//getAllCarTypes()

describe("Testing getAllCarTypes", () => {
  test("get from default datastorage.json", () => {
    const carStorage = new CarStorage(datastorage);
    expect(carStorage.getAllCarTypes()).toEqual(["XGT", "Coupe", "solo"]);
  });

  test("if no types are found, return an empty array", () => {
    const testData = [
      {
        id: 2,
        manufacturer: "Baas",
        type: "",
        accessories: ["clock", "speedometer"],
        price: 35000,
        extras: [
          {
            name: "manual",
            price: 10,
          },
          {
            name: "warranty",
            price: 200,
          },
        ],
      },
      {
        id: 3,
        manufacturer: "FauV",
        type: "",
        accessories: [],
        price: 15000,
        extras: [],
      },
    ];
    const carStorage = new CarStorage(testData);
    expect(carStorage.getAllCarTypes()).toEqual([]);
  });
});

// getAllCarsByType

describe("Testing getAllCarsByType", () => {
  const carStorage = new CarStorage(datastorage);

  test("get from default datastorage.json with parameter solo", () => {
    expect(carStorage.getAllCarsByType("solo")).toEqual([
      {
        id: 3,
        manufacturer: "FauV",
        type: "solo",
        accessories: [],
        price: 15000,
        extras: [],
      },
      {
        id: 4,
        manufacturer: "FauV",
        type: "solo",
        accessories: [],
        price: 19000,
        extras: [],
      },
    ]);
  });

  test("if no car of given type is found, return an empty array", () => {
    expect(carStorage.getAllCarsByType("truck")).toEqual([]);
  });

  test("missing parameter throws an exception", () => {
    expect(() => carStorage.getAllCarsByType()).toThrow("missing parameter");
  });
});

// getCarAccessories

describe("Testing getCarAccessories", () => {
  const carStorage = new CarStorage(datastorage);

  const testValues = [
    [1, ["radar", "coffee warmer", "hook"]],
    [2, ["clock","speedometer"]],
  ];

  test.each(testValues)("Value %s returns %s", (value, expectedResult) => {
    expect(carStorage.getCarAccessories(value)).toEqual(expectedResult);
  });

  test("if the car has no accessories, return an empty array", () => {
    expect(carStorage.getCarAccessories(3)).toEqual([]);
  });
});

// getPriceWithoutExtras

describe("Testing getPriceWithoutExtras", () => {
  const carStorage = new CarStorage(datastorage);

  const testValues = [
    [1, 250000],
    [2, 35000],
    [3, 15000],
    [4, 19000],
  ];

  test.each(testValues)("Value %s returns %s", (value, expectedResult) => {
    expect(carStorage.getPriceWithoutExtras(value)).toEqual(expectedResult);
  });

  test("if no car with the given id is found throws an exception", () => {
    expect(() => carStorage.getPriceWithoutExtras(10)).toThrow(
      "nothing found with given id"
    );
  });
});

// getTotalPrice

describe("Testing getTotalPrice", () => {
  const carStorage = new CarStorage(datastorage);
  const testValues = [
    [1, 252500],
    [2, 35210],
    [3, 15000],
    [4, 19000],
  ];

  test.each(testValues)("Value %s returns %s", (value, expectedResult) => {
    expect(carStorage.getTotalPrice(value)).toEqual(expectedResult);
  });
  test("if no car with the given id is found throw an exception", () => {
    expect(() => carStorage.getTotalPrice(5)).toThrow(
      "nothing found with given id"
    );
  });
});

//getPriceOfTheExtras

describe("Testing getPriceOfTheExtras", () => {
  const carStorage = new CarStorage(datastorage);

  const testValues = [
    [1, 2500],
    [2, 210],
  ];

  test.each(testValues)("Value %s returns %s", (value, expectedResult) => {
    expect(carStorage.getPriceOfTheExtras(value)).toEqual(expectedResult);
  });
  test("if no extras is found, return 0", () => {
    expect(carStorage.getPriceOfTheExtras(3)).toEqual(0);
  });
  test("if no car with the given id is found throw an exception", () => {
    expect(() => carStorage.getPriceOfTheExtras(6)).toThrow(
      "nothing found with given id"
    );
  });
});

// hasAccessories

describe("Testing hasAccessories", () => {
  const carStorage = new CarStorage(datastorage);
  const testValues = [
    [1, true],
    [2, true],
    [3, false],
    [4, false]
];

  test.each(testValues)("Value %s returns %s", (value, expectedResult) => {
    expect(carStorage.hasAccessories(value)).toEqual(expectedResult);
  });
  test("if the parameter id is missing, return false", () => {
    expect(carStorage.hasAccessories()).toEqual(false);
  });
});
