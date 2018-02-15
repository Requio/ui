import Model from './base-model';

describe('constructor', () => {
  test('TYPE', () => {
    const model = new Model();
    expect(model.TYPE).toBe('MODEL');
  });

  test('TYPE with inheritance', () => {
    class Toy extends Model {}
    const model = new Toy();
    expect(model.TYPE).toBe('TOY');
  });
});

describe('actions', () => {
  test('base actions', () => {
    const model = new Model();
    expect(model.FETCH).toBe('FETCH_MODEL');
    expect(model.RECEIVE).toBe('RECEIVE_MODEL');
    expect(model.ERROR).toBe('ERROR_MODEL');
  });
});

describe('reducers', () => {
  test('base reducer', () => {
    const model = new Model();
    const state = {
      models: {
        1: {
          name: 'test',
        }
      },
    };
    const action = {
      type: model.UPDATE_ONE,
      primaryKey: 1,
      field: 'name',
      value: 'new_test',
    };
    expect(model.reducer(state, action)).toEqual({
      models: {
        1: {
          name: 'new_test',
          _isSaved: false,
        }
      },
    });
  });
});
