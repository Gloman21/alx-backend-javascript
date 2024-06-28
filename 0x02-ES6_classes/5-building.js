#!/usr/bin/node
export default class Building {
    constructor(sqft) {
      this.sqft = sqft;
  
      // Prevent direct instantiation of the abstract class
      if (new.target === Building) {
        throw new TypeError('Cannot instantiate an abstract class');
      }
  
      // Check if the subclass implements the evacuationWarningMessage method
      this._checkEvacuationWarningMessage();
    }
  
    // Separate method to check for the abstract method
    _checkEvacuationWarningMessage() {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      } }
  }