"use strict";

module.exports = class CarStorage {
  constructor(jsonData) {
    if (jsonData) {
      this.carStorage = jsonData;
    } else {
      throw new Error("data storage missing");
    }
  }

  getById(id) {
    if (!id) throw new Error("parameter missing");
    for (let car of this.carStorage) {
      if (car.id === id) {
        return car;
      }
    }  
    return null;
  }


  getAllIdsByManufacturer(value) {
    const found = [];

    for (let car of this.carStorage) {
      if (car.manufacturer == value) {
        found.push(car.id);
      }
    }
    return found;
  }

  getAllCarTypes() {
    const found = [];

    for (let car of this.carStorage) {
      if (!found.includes(car.type) && !car.type == "") {
        found.push(car.type);
      }
    }
    return found;
  }

  getAllCarsByType(type) {
    const found = [];

    if (!type) {
      throw new Error("missing parameter");
    } else {
      for (let car of this.carStorage) {
        if (car.type == type) {
          if (!found.includes(car)) {
            found.push(car);
          }
        }
      }
    }
    return found;
  }

  getCarAccessories(id) {
    for (let car of this.carStorage) {
      if (car.id === id) {
        return car.accessories;
      }
    }
  }

  getPriceWithoutExtras(id) {
    let found = false;

    for (let car of this.carStorage) {
      if (car.id === id) {
        found = true;
        return car.price;
      }
    }
    if (!found) {
      throw new Error("nothing found with given id");
    }
  }

  getTotalPrice(id) {
    let found = false;

    for (let car of this.carStorage) {
      if (car.id === id) {
        found = true;
        let price = car.price;
        for (let extra of car.extras) {
          price += extra.price;
        }
        return price;
      }
    }
    if (!found) {
      throw new Error("nothing found with given id");
    }
  }

  getPriceOfTheExtras(id) {
    let found = false;

    for (let car of this.carStorage) {
      if (car.id === id) {
        found = true;
        let price = 0;
        for (let extra of car.extras) {
          price += extra.price;
        }
        return price;
      }
    }
    if (!found) {
      throw new Error("nothing found with given id");
    }
  }

  hasAccessories(id) {
    if (id) {
      for (let car of this.carStorage) {
        if (car.id === id) {
          if (car.accessories.length > 0) {
            return true;
          } else {
            return false;
          }
        }
      }
    } else {
      return false;
    }
  }
};
