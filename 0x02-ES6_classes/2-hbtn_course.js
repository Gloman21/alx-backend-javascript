#!/usr/bin/node
/**
 * A class representing a course at Holberton School.
 *
 * @class HolbertonCourse
 * @param {string} name - The name of the course.
 * @param {number} length - The duration of the course.
 * @param {Array.<string>} [students=[]] - An array of students enrolled in the course.
 */
export default class HolbertonCourse {
    /**
     * Creates an instance of HolbertonCourse.
     *
     * @constructor
     * @param {string} name - The name of the course.
     * @param {number} length - The duration of the course.
     * @param {Array.<string>} [students=[]] - An array of students enrolled in the course.
     */
    constructor(name, length, students = []) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    /**
     * Gets the name of the course.
     *
     * @returns {string} The name of the course.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Sets the name of the course.
     *
     * @param {string} newName - The new name of the course.
     * @throws {TypeError} If the new name is not a string.
     */
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = newName;
    }
  
    /**
     * Gets the duration of the course.
     *
     * @returns {number} The duration of the course.
     */
    get length() {
      return this._length;
    }
  
    /**
     * Sets the duration of the course.
     *
     * @param {number} newLength - The new duration of the course.
     * @throws {TypeError} If the new duration is not a number.
     */
    set length(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = newLength;
    }
  
    /**
     * Gets the array of students enrolled in the course.
     *
     * @returns {Array.<string>} The array of students.
     */
    get students() {
      return this._students;
    }
  
    /**
     * Sets the array of students enrolled in the course.
     *
     * @param {Array.<string>} newStudents - The new array of students.
     * @throws {TypeError} If the new array is not an array of strings.
     */
    set students(newStudents) {
      if (!Array.isArray(newStudents)) {
        throw new TypeError('Students must be an array of strings');
      }
      if (!newStudents.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = newStudents;
    }
  }
  