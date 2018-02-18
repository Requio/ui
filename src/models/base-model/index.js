import { values, isArray } from 'lodash';
import { createSelector } from 'reselect';
import { ModelHydrationSet } from './hydrator';
import ModelReducers from './reducers';
import modelMiddleware, { MODEL_REQUEST } from './middleware';

export class Model extends ModelReducers {
  static relations = {}
  static fetch(options = {}) {
    return {
      type: MODEL_REQUEST,
      model: this,
      fetchType: this.FETCH,
      responseTypeKey: 'RECEIVE',
      errorType: this.ERROR,
      context: {
        primaryKey: options.id,
        include: options.include,
      },
    };
  }
  static getRelationModels() {
    return Object.entries(this.relations);
  }
  static get hydratingSelector() {
    if (!this.memoizedHydratingSelector) {
      this.memoizedHydratingSelector = createSelector(
        this.stateAddress.bind(this),
        ...values(this.relations).map(Model => Model.stateAddress.bind(Model)),
        (modelState) => this.hydrate(modelState.models),
      );
    }
    return this.memoizedHydratingSelector;
  }
  static hydrate(models) {
    return new ModelHydrationSet(this, models);
  }
  constructor(modelHydration, hydratedRelationsByField) {
    super(modelHydration);
    Object.keys(this.class.relations)
      .filter(field => this[field] && hydratedRelationsByField[field])
      .forEach(field => {
        if (isArray(this[field])) {
          this[field] = hydratedRelationsByField[field].getAll(this[field]);
        } else {
          this[field] = hydratedRelationsByField[field].get(this[field]);
        }
      });
  }
}

export const combineModelReducers = (...models) => models.reduce((rootReducer, model) => ({
  ...rootReducer,
  [model.modelNamePlural]: model.reducer.bind(model),
}), {});

export { modelMiddleware };
