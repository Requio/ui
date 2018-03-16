import { Model, field } from 'redux-sideloader';

class Proc extends Model {
  static className = 'Proc'
  static fields = {
    title: field.string(),
    description: field.string(),
    // account: relation('Account'),
  }
}

export default Proc;
