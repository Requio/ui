import store from '../../services/store';
import { pk } from './utils';

export class ModelHydrationSet {
  constructor(Model, models) {
    const state = store.getState();
    const hydratedRelationsByField = Object.entries(Model.relations).reduce((memo, [field, Relation]) => ({
      ...memo,
      [field]: Relation.hydrate(Relation.stateAddress(state).models),
    }), {});
    this.Model = Model;
    this.hydratedModels = Object.entries(models).reduce((modelSet, [, model]) => ({
      ...modelSet,
      [pk(model)]: new this.Model(model, hydratedRelationsByField),
    }), {});
  }
  get(primaryKey) {
    return this.hydratedModels[primaryKey];
  }
  getAll(primaryKeys) {
    return primaryKeys.map(this.get.bind(this));
  }
  get all() {
    return Object.entries(this.hydratedModels).map(([, model]) => model);
  }
}
