const pk = model => model[model._primaryKey];

const defaultRecordState = {
  models: {},
  isLoading: false,
  isStale: false,
  receivedAt: null,
  errors: null,
};

class Model {
  constructor() {
    this.TYPE = this.constructor.name.toUpperCase();
    this.reducer = this.reducer.bind(this);
  }
  get FETCH() {
    return `FETCH_${this.TYPE}`;
  }
  get RECEIVE() {
    return `RECEIVE_${this.TYPE}`;
  }
  get ERROR() {
    return `ERROR_${this.TYPE}`;
  }
  get INVALIDATE() {
    return `INVALIDATE_${this.TYPE}`;
  }
  get RECEIVE_ONE() {
    return `RECEIVE_ONE_${this.TYPE}`;
  }
  get CREATE_ONE() {
    return `CREATE_ONE_${this.TYPE}`;
  }
  get UPDATE_ONE() {
    return `UPDATE_ONE_${this.TYPE}`;
  }
  get SAVE_ONE() {
    return `SAVE_ONE_${this.TYPE}`;
  }
  get DELETE_ONE() {
    return `DELETE_ONE_${this.TYPE}`;
  }
  get ERROR_ONE() {
    return `ERROR_ONE_${this.TYPE}`;
  }
  keyByPrimaryKey(modelSet) {
    const modelSetArray = [].concat(modelSet);
    if (modelSetArray.length) {
      if (!pk(modelSetArray[0])) {
        throw new Error('modelSet is missing `_primaryKey` property');
      }
      modelSetArray.reduce((memo, model) => ({
        ...memo,
        [pk(model)]: {
          ...model,
          _isFetching: false,
        },
      }), {})
    }
    return {};
  }
  reducer(state = defaultRecordState, action) {
    switch (action.type) {
      case this.FETCH:
        return {
          ...state,
          isLoading: true,
          isStale: false,
          errors: null,
        };
      case this.RECEIVE:
        return {
          ...state,
          models: this.modelSetReducer(state.models, action),
          isLoading: false,
          isStale: false,
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
      case this.FETCH_ONE:
      case this.RECEIVE_ONE:
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
  modelSetReducer(state = {}, action) {
    switch (action.type) {
      case this.RECEIVE:
        return this.keyByPrimaryKey(action.models);
      case this.RECEIVE_ONE:
      case this.FETCH_ONE:
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
  modelInstanceReducer(state = {}, action) {
    switch (action.type) {
      case this.RECEIVE_ONE:
        return {
          ...action.model,
          _isFetching: false,
        };
      case this.UPDATE_ONE:
        return {
          ...state,
          [action.field]: action.value,
          _isSaved: false,
        };
      case this.SAVE_ONE:
        return {
          ...state,
          [action.field]: action.value,
          _isSaved: true,
        };
      case this.ERROR_ONE:
        return {
          ...state,
          _errors: action.errors,
        };
      default:
        return state;
    }
  }
}

export default Model;
