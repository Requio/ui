import { InheritedFields } from './utils';

class ModelActions extends InheritedFields {
  static get TYPE() {
    return this.className.toUpperCase();
  }
  static get FETCH() {
    return `FETCH_${this.TYPE}`;
  }
  static get RECEIVE() {
    return `RECEIVE_${this.TYPE}`;
  }
  static get ERROR() {
    return `ERROR_${this.TYPE}`;
  }
  static get INVALIDATE() {
    return `INVALIDATE_${this.TYPE}`;
  }
  static get FETCH_ONE() {
    return `FETCH_ONE_${this.TYPE}`;
  }
  static get RECEIVE_ONE() {
    return `RECEIVE_ONE_${this.TYPE}`;
  }
  static get CREATE_ONE() {
    return `CREATE_ONE_${this.TYPE}`;
  }
  static get UPDATE_ONE() {
    return `UPDATE_ONE_${this.TYPE}`;
  }
  static get SAVE_ONE() {
    return `SAVE_ONE_${this.TYPE}`;
  }
  static get DELETE_ONE() {
    return `DELETE_ONE_${this.TYPE}`;
  }
  static get ERROR_ONE() {
    return `ERROR_ONE_${this.TYPE}`;
  }
}

export default ModelActions;