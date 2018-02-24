import { Model } from 'redux-sideloader';
import Action from './action';

class Task extends Model {
  static className = 'Task'
  static relations = {
    'action': Action,
  }
}

export default Task;
