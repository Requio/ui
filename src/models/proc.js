import { Model } from './base-model';
import Task from './task';

class Proc extends Model {
  static className = 'Proc'
  static relations = {
    tasks: Task,
  }
}

export default Proc;
