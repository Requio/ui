import { Model } from './base-model';
import Action from './action';

class Task extends Model {
  static className = 'Task'
  static relations = {
    'action': Action,
  }
}

export default Task;
