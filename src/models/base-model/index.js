import { cacheModel } from './base';
import ModelSelectors from './selectors';
import modelMiddleware from './middleware';

export class Model extends ModelSelectors {

}

export const combineModelReducers = (...models) => {
  models.forEach(cacheModel);
  return models.reduce((rootReducer, model) => ({
    ...rootReducer,
    [model.modelNamePlural]: model.reducer.bind(model),
  }), {});
};

export const mergeModelProps = ({ loadModel = () => {}, isModelLoaded = () => {} }) => (stateProps, dispatchProps, ownProps) => {
  const mergedProps = {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
  };
  return {
    ...mergedProps,
    loadModel: () => loadModel(mergedProps),
    isModelLoaded: () => isModelLoaded(mergedProps),
  };
};

export { modelMiddleware };
