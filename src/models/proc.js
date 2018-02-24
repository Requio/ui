import { Model } from 'redux-sideloader';
import Task from './task';

class Proc extends Model {
  static className = 'Proc'
  static relations = {
    tasks: Task,
  }
}

export default Proc;
