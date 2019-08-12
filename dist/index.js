"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.regexp.to-string");

class Party {
  constructor() {
    // when a new Party() happens,
    // this happens first
    this.people = new Array();
    this.snacks = new Array();
    this.beverages = new Array();
    this.activities = new Array();
  }
  /**
   * invite someone to the party
   * @param {*} name
   */


  invitePerson(name) {
    this.people.push(name);
  }
  /**
   * show who is at the party
   */


  getPeople() {
    return this.people;
  }
  /**
   * bring drinks to the party
   * @param {*} drink
   */


  bringDrink(drink) {
    this.beverages.push(drink);
  }
  /**
   * show what drinks are available
   */


  listDrinks() {
    return this.beverages;
  }
  /**
   * bring stuff
   * @param {*} snack
   */


  bringSnacks(snack) {
    this.snacks.push(snack);
  }
  /**
   * list the snacks
   */


  listSnacks() {
    return this.snacks;
  }

  makeActivity(thingToDo) {
    this.activities.push(thingToDo);
  }

  listActivities() {
    return this.activities;
  }

  toString() {
    // report the contents of the party
    return `This Party contains: 
    People: ${this.people.toString()} 
    Snacks: ${this.snacks.toString()} 
    Beverages: ${this.beverages.toString()} 
    Activities: ${this.activities.toString()} 
    `;
  }

}

var _default = Party;
exports.default = _default;
//# sourceMappingURL=index.js.map