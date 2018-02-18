import { api } from '../../services/http';

export const MODEL_REQUEST = '@@MODEL_REQUEST';

export default store => next => action => {
  if (action.type !== MODEL_REQUEST) {
    return next(action);
  }

  const {
    model,
    fetchType,
    responseTypeKey,
    errorType,
    context: {
      primaryKey = null,
      include = [],
    } = {},
  } = action;

  const endpoint = primaryKey
    ? `${model.modelNamePlural}/${primaryKey}`
    : `${model.modelNamePlural}`;

  const includedModels = [].concat(include);

  const params = {
    include: includedModels.map(Model => Model.modelNamePlural),
  };

  const fetchedModels = [...includedModels, model];

  next({
    type: fetchType,
    primaryKey,
  });

  return api.get(endpoint, { params })
    .then(({ data }) => fetchedModels.map(Model => next({
      type: Model[responseTypeKey],
      data: data[Model.modelNamePlural],
      receivedAt: Date.now(),
      isStale: Boolean(primaryKey),
    })))
    .catch(err => {
      if (err.stack) {
        throw err;
      }
      const { response: { data } } = err;
      return next({
        type: errorType,
        errors: data.errors,
        receivedAt: Date.now(),
      });
    });
};
