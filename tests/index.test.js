console.log('Hello there, General Kenobi');
console.assert(42, true);

import Party from '../src/index';
import chai from 'chai';

const expect = chai.expect;
const should = chai.should();

// a suite of tests
describe('a party', () => {
  it('can be instantiated', () => {
    let myParty = new Party();
    expect(typeof myParty).to.equal('object');
    should.exist(myParty);
  });

  it('toString method returns a string', () => {
    let myParty = new Party();
    expect(typeof myParty.toString()).to.equal('string');
  });
});

describe('a suite of tests in TDD methodology', () => {
  // write tests first
  // then make the tests pass
  // repeat
  // usually during pairing one writes test
  // the other makes it pass
  // rinse/repeat
  it('can add people to the party', () => {
    // 1. instantiate (Create) a new Party();
    let myParty = new Party();
    // we add something
    myParty.invitePerson('Ryan');
    // list what we added
    let attendees = myParty.getPeople();
    // confirm what we added was actually added
    expect(attendees).to.deep.equal(['Ryan']);
  });

  it('can bring beverages to the party', () => {
    // 1. instantiate (Create) a new Party();
    let myParty = new Party();
    // we add something
    myParty.bringDrink('cherry coke');
    // list what we added
    let drinks = myParty.listDrinks();
    // confirm what we added was actually added
    expect(drinks).to.deep.equal(['cherry coke']);
  });

  it('can bring snacks to the party', () => {
    // 1. instantiate (Create) a new Party();
    let myParty = new Party();
    // we add something
    myParty.bringSnacks('cheetohs');
    // list what we added
    let snacks = myParty.listSnacks();
    // confirm what we added was actually added
    expect(snacks).to.deep.equal(['cheetohs']);
  });

  it('can have things to do at the party', () => {
    // 1. instantiate (Create) a new Party();
    let myParty = new Party();
    // we add something
    myParty.makeActivity('ticket to ride');
    // list what we added
    let activities = myParty.listActivities();
    // confirm what we added was actually added
    expect(activities).to.deep.equal(['ticket to ride']);
  });
});
