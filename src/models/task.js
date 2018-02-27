import { Model, field } from 'redux-sideloader';

const { relation, string, shape } = field;

class Task extends Model {
  static className = 'Task'
  static fields = {
    'action': relation('Action', { hasOne: true }),
    'title': string(),
    'proc': relation('Proc', { inverse: 'tasks', hasOne: true }),
    'config': shape(),
  }
}

export default Task;
