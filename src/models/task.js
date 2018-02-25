import { Model, field } from 'redux-sideloader';

const { relation, text, shape } = field;

class Task extends Model {
  static className = 'Task'
  static fields = {
    'action': relation('Action'),
    'title': text(),
    'proc': relation('Proc', { inverse: 'tasks' }),
    'config': shape(),
  }
}

export default Task;
