import { camelCase } from 'lodash';
import pluralize from 'pluralize';

import { pk } from './utils';
import ModelActions from './actions';

const keyByPrimaryKey = modelSet => {
  const modelSetArray = [].concat(modelSet);
  if (modelSetArray.length) {
    if (!pk(modelSetArray[0])) {
      throw new Error('modelSet is missing `primaryKey` property');
    }
    return modelSetArray.reduce((memo, model) => ({
      ...memo,
      [pk(model)]: {
        ...model,
        isFetching: false,
      },
    }), {})
  }
  return {};
};

const defaultRecordState = {
  models: {},
  isLoading: false,
  isStale: true,
  receivedAt: null,
  errors: null,
};

class StaticModel extends ModelActions {
  static get modelName() {
    return camelCase(this.className);
  }
  static get modelNamePlural() {
    return pluralize(this.modelName);
  }
  static stateAddress(state) {
    return state.entities[this.modelNamePlural];
  }
  static reducer(state = defaultRecordState, action) {
    switch (action.type) {
      case this.FETCH:
        return {
          ...state,
          isLoading: true,
          errors: null,
        };
      case this.RECEIVE:
        return {
          ...state,
          models: this.modelSetReducer(state.models, action),
          isLoading: false,
          isStale: action.isStale,
          receivedAt: action.receivedAt,
          errors: null,
        };
      case this.ERROR:
        return {
          ...state,
          receivedAt: action.receivedAt,
          errors: action.errors,
        };
      case this.INVALIDATE:
        return {
          ...state,
          isStale: true,
        };
      case this.UPDATE_ONE:
      case this.SAVE_ONE:
      case this.DELETE_ONE:
      case this.ERROR_ONE:
        return {
          ...state,
          models: this.modelSetReducer(state.models, action),
        };
      default:
        return state;
    }
  }
  static modelSetReducer(state = {}, action) {
    switch (action.type) {
      case this.RECEIVE:
        return keyByPrimaryKey(action.data);
      case this.UPDATE_ONE:
      case this.SAVE_ONE:
      case this.ERROR_ONE:
        return {
          ...state,
          [action.primaryKey]: this.modelInstanceReducer(state[action.primaryKey], action),
        };
      default:
        return state;
    }
  }
  static modelInstanceReducer(state = {}, action) {
    switch (action.type) {
      case this.UPDATE_ONE:
        return {
          ...state,
          [action.field]: action.value,
          isSaved: false,
        };
      // case this.SAVE_ONE:
      //   return {
      //     ...state,
      //     [action.field]: action.value,
      //     isSaved: true,
      //   };
      case this.ERROR_ONE:
        return {
          ...state,
          errors: action.errors,
        };
      default:
        return state;
    }
  }
}

export default StaticModel;
